
var list = document.getElementsByClassName("g-li");
var skip = document.getElementById("skip");
var arr = document.getElementsByClassName("arr");
var jump = document.getElementsByClassName("jump")[0];
var Gnav = document.getElementsByClassName("g-nav")[0]
for(var i=0;i<list.length;i++){
    list[i].index=i;
   list[i].onclick=function(){
    jump.style="display:none";
    Gnav.innerHTML="首页" + '<span class="g-guide1">'+ ">" +'</span>'  +'<span>' + this.parentNode.previousElementSibling.children[0].innerHTML+'</span>'  + '<span class="g-guide1">'+ ">" +'</span>' +'<span class="g-guide">' + this.innerHTML+'</span>'
  //  this.style="background:#7cb899";
    x=this.index;
        for(var j = 0; j < arr.length; j++) {
            arr[j].style="display:none";
            arr[x].style="display:block";

            // this.parentNode.previousElementSibling.children[0].innerHTML.style="background:#fff";
          }
        }
    } 

  
  console.log(Gnav);
    
    