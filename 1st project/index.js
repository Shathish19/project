

var button = document.getElementById("btn")
button.addEventListener("click",function work()
{
   var show = document.getElementById("details");
   if(show.style.display === "none")
   {
       show.style.display ="inline-flex";
   }
   else{
       show.style.display = "none";
   }
})
