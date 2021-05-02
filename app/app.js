import * as MODEL from "../model/model.js";

function init(){
    // initial test that the function is working properly
    // console.log("pog");

    // removes black logo upon inital loading
    $(".logo-black").css("display","none");

    $("nav a").click(function(e){
        let navID = this.id;
        console.log(navID);

        let pageID = navID + "Content";

        // this will change the nav depending on whether user is on the home page or not
        if(navID == "home") {

            // this adds the hero and the text heading back in
            $(".top").addClass("hero");
            $(".header").css("display","block");

            // removes the classes that makes the nav black
            $("nav").removeClass("black-nav");
            $(".links a").removeClass("black-text");

            // this changes the logo from black to white, as this is the only page to have white logo
            $(".logo-black").css("display","none");
            $(".logo-white").css("display","block");

        }else{

            // removes hero and heading
            $(".top").removeClass("hero");
            $(".header").css("display","none");

            // makes the nav black
            $("nav").addClass("black-nav");
            $(".links a").addClass("black-text");

            // this changes the logo from white to black 
            $(".logo-black").css("display","block");
            $(".logo-white").css("display","none");
        };

        MODEL.getPageContent(pageID);
    });
};

$(document).ready(function(){
    init();
    // MODEL.getPageContent("homeContent");
});