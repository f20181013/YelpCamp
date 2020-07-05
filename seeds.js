var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");

function seedDB(){
	Campground.remove({},function(err){
		if(err){
			console.log(err);
		}
		console.log("removed");
	})
}
// var Comment = require("./models/comment");

// var data = [
// 	{name:"Cloud's Rest",
// 	 image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/ee/c7/9e/pitched-tent-on-campgrounds.jpg",
// 	 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// 	},
// 	{name:"Martin's corner",
// 	 image: "https://media.mnn.com/assets/images/2012/12/picturedrock.jpg.560x0_q80_crop-smart.jpg",
// 	 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// 	},
// 	{name:"Rohan's campground",
// 	 image: "https://wordpress.accuweather.com/wp-content/uploads/2019/03/camping-thumbnail.11.4920AM-1.png?w=632",
// 	 description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// 	}
// ]

 // function seedDB(){
 // 	Campground .remove({}, function(err){
 // 	if(err){
 // 		console.log(err);
 // 	}
 // 	console.log("removed campgrounds");})
// 	//Add a few campgrounds
// 	data.forEach(function(seed){
// 		Campground.create(seed, function(err,campground){
// 			if(err){
// 				console.log(err);
// 			}else{
// 				console.log("added a new campground");
// 				//create a comment
// 				Comment.create(
// 						{
// 							text:"This place ia amazing",
// 							author:"Rohan Kumar"
// 						},function(err,comment){
// 							if(err){
// 								console.log(err);
// 							}else{
// 								campground.comments.push(comment);
// 								campground.save();
// 								console.log("created new comment");
// 							}
							
// 						})
// 			}
// 		})
// 	})
// 	});	
	
 //}

module.exports = seedDB;
