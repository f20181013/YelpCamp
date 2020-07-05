var Campground = require("../models/campgrounds");
var Comment = require("../models/comment");
//middleware goes here
var middlewareObj={}

middlewareObj.checkCampgroundOwnership= function(req,res,next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id,function(err,foundCampground){
			if(err){
				console.log(err);
				res.redirect("back");
			}else{
				//does the user own the campground?
				if(foundCampground.author.id.equals(req.user._id)){ //since one is object and other is string
					next();
				} else{
					res.redirect("back");
				}
			}
		})
	}else{
		res.redirect("back");
	}
}

middlewareObj.checkCommentOwnership = function(req,res,next){
	if(req.isAuthenticated()){
			Comment.findById(req.params.comment_id,function(err,foundComment){
				if(err){
					console.log(err);
					res.redirect("back");
				}else{
					//does the user own the comment?
					if(foundComment.author.id.equals(req.user._id)){ //since one is object and other is string
						next();
					} else{
						res.redirect("back");
					}
				}
			})
		}else{
			res.redirect("back");
		}
	}

middlewareObj.isLoggedIn = function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!");
	res.redirect("/login");
}

module.exports = middlewareObj;