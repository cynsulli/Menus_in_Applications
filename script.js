var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About",
    me:"Cynthia" 
  },
  {
    name:"Interact",
    content:"none"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name, pg.me);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Interact"){
    display.innerHTML=wd;
    
  }else{
    interactPage()
  }
  
  
  
}

function interactPage(number){
  
   var numcount = 1;
  var ele = document.createElement("div");
   ele.innerHTML = numcount;
   display.appendChild(ele);
  document.body.querySelector(".counter").addEventListener("click", function(){
  interactPage(num)}
);
}

contentWrite(pages[0].content, "Home");