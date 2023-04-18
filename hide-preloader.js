
var loader = document.getElementById("page-preloader")

var LoadingScreenOut = function( ){
    loader.style.display = 'none'
};

var wait5seconds = function( ) {
    var result = setTimeout( LoadingScreenOut, 2000);
};

window.addEventListener("load", wait5seconds);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){   
        tablink.classList.remove( "active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove( "active-tab");
    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}

// var sidemenu = document.getElementById("sidemenu");
// function openmenu( ){
//     document.getElementById("sidemenu").style.display = "block";
   
    
// }
// function closemenu( ){
//     sidemenu.style.display = "none";
// }  

// animation home page
function ani() {
    document.getElementById('img').className = 'anim';
  }

  // reload page
  function reload() {
    reload = location.reload();
}








