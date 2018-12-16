var hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector(".navip").classList.toggle("c");
	document.querySelector(".hamburger").classList.toggle("o");
},false);

function mouseOver(arg){
      var arg=arg;
      var square=document.getElementsByClassName("square");
        square[arg].style.border="1px solid #e84c3c";
        square[arg].style.transform="rotate(-45deg)";
        var images=document.getElementsByClassName("images");
        images[arg].style.transform="rotate(45deg)";
        var h3Text=document.getElementsByClassName("h3Text");
        h3Text[arg].style.color="#e84c3c";
    }
    function mouseOut(arg){
      var arg=arg;
      var square=document.getElementsByClassName("square");
        square[arg].style.border="1px solid #CCCCCC";
        square[arg].style.transform="rotate(0deg)";
        var images=document.getElementsByClassName("images");
        images[arg].style.transform="rotate(0deg)";
        var h3Text=document.getElementsByClassName("h3Text");
        h3Text[arg].style.color="#333333";
    }


