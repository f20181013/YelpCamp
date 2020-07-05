var express = require("express");
var app =express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");

//requiring routes
var commentRoutes = require("./routes/comments"),
	camgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB(); //seed the database


//PASPORT configuration
app.use(require("express-session")({
	secret: "This is a secret statement",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.message = req.flash("error");
	next();
})


mongoose.connect("mongodb://localhost:27017/yelp_camp_v8_2",{useNewUrlParser:true});
mongoose.set('useUnifiedTopology', true);
	
app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",camgroundRoutes);


app.listen(3000,function(){
	console.log("listening on port 3000");
})