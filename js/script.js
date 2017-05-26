$(document).ready(function(){      
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $('.navbar').css('background-color', 'rgba(0,0,0,1)');
       
 
 
       } else {
          $('.navbar').css('background-color', 'transparent');
          $('.navbar').css('border', 'none');
          $('.navbar').css('margin-top', '0px');
           $('.navbar').css('transition', 'background-color 1s');
 
 
       }
   });
    var carouselPhoto = moveCarousel("CarouselDivClass");
  // var carouselDetails = moveCarousel("associateDetails");
 
    $(".leftCarouselButton").click(function() {
        carouselPhoto.movePrevious();
       
     });
    $(".rightCarouselButton").click(function() {
        carouselPhoto.moveNext() ;
     });
 
  //   $(document).click(function (event) {
  //       var openedNav = $(".navbar-collapse").hasClass("collapse in");
  //       if (openedNav === true ){
  //       $('.navbar-collapse').collapse('hide');
  //       }
  //   });
$(".firstButton").click(function() {
    //var page1= ".page1";
    $(".page3").hide();
    $(".page2").hide();
    $(".page1").show();
    $(".firstButton").css("opacity", "1");
   $(".secondButton").css("opacity", "0.5");
    $(".thirdButton").css("opacity", "0.5");
});
 
$(".secondButton").click(function() {
    //var page1= ".page1";
    $(".page1").hide();
    $(".page3").hide();
    $(".page2").show();
    $(".secondButton").css("opacity", "1");
    $(".firstButton").css("opacity", "0.5");
    $(".thirdButton").css("opacity", "0.5");
});
 
$(".thirdButton").click(function() {
    //var page1= ".page1";
    $(".page1").hide();
    $(".page2").hide();
    $(".page3").show();
    $(".thirdButton").css("opacity", "1");
    $(".secondButton").css("opacity", "0.5");
    $(".firstButton").css("opacity", "0.5");  
});
 
});


var moveCarousel = function(CarouselDivClass) {
        var CarouselDiv = "." + CarouselDivClass;
        var currentPage = 0; //remainder values-->for 5 images, 0-3   ...which page to go to
        var newPage = 0; //which page we were on
        var moveNext = function() {
            changePage("n");
            moveComplCarousel();
        };
        var movePrevious = function() {
            changePage("p");
            moveComplCarousel();
        };
        var changePage = function(str) {
            prevPage = currentPage;
            switch (str) {
                case "n":
                    currentPage = (currentPage + 1) % 3;
                    break;
                case "p":
                   currentPage = (currentPage === 0) ? 2 : (currentPage - 1) % 3;
                    break;
           }
        }
        var moveComplCarousel = function() {
            if (CarouselDivClass !== null) {
                var hideDiv = CarouselDiv + " ul li:nth-child(" + (prevPage + 1) + ")";
                var showDiv = CarouselDiv + " ul li:nth-child(" + (currentPage + 1) + ")";
                $(hideDiv).hide();
                $(showDiv).fadeIn(500);
            }
        }
        return {
            moveNext: moveNext,
            movePrevious: movePrevious
        }
    };
function initMap() {
        var uluru = {lat: 22.715778, lng: 75.875604};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          zoom: 20
        });
};