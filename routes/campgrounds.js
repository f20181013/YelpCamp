var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");
var middleware = require("../middleware");

router.get("/",function(req,res){
	//Get all campgrounds from db
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/index", {campgrounds:allCampgrounds});
		}
	})
	
})

router.post("/",middleware.isLoggedIn,function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name:name, image:image, description:desc, author:author};
	//Create new Campground and add to db
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			console.log(err);
		}else{
			console.log(newlyCreated);
			res.redirect("/campgrounds");
		}
	})
	//redirect to get page 
})

router.get("/new",middleware.isLoggedIn,function(req,res){
	res.render("campgrounds/new");
})

//shows more information about each campground
router.get("/:id",function(req,res){
	//find the campground with given id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err)
		}else{
			console.log(foundCampground);
			res.render("campgrounds/show",{campground:foundCampground});
		}
	});	
});

//EDIT CAMPGROUND ROUTES
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findById(req.params.id,function(err,foundCampground){
		res.render("campgrounds/edit", {campground: foundCampground});
	});
}); 

//UPDATE CAMPGROUND ROUTES
router.put("/:id",middleware.checkCampgroundOwnership, function(req,res){
	//find and update the correct campground
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds")
		}else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	})
});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id",middleware.checkCampgroundOwnership, function(req,res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	})
})


module.exports = router;