var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.get("/", function(req, res)
{
//   res.send("this page will start soon");
res.render("landing");
});
var campgrounds=[
      {name:"Windsor",image:"https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false"},
      {name:"Bangalore",image:"https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false"},
      {name:"Seattle",image:"https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false"}
  ];
app.get("/campgrounds",function(req,res)
{
  
  res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds", function(req, res){
    var name=req.body.name;
    var image=req.body.image;
     var newCampgrounds={name:name, image:image};
    campgrounds.push(newCampgrounds);
    // res.send("you hit the post route");
    res.redirect("/campgrounds");
})
app.get("/campgrounds/new", function(req,res)
{
    res.render("new")
});
app.listen(process.env.PORT, process.env.IP,function()
{
    console.log("server started");
})