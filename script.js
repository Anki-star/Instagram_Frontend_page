var post=document.querySelector(".picpost");
var dil=document.querySelector("#heart i");
var like=document.querySelector(".likes")

post.addEventListener("dblclick",()=>{
    console.log("dblclick")
dil.style.opacity=1;
dil.style.scale=1;
// like.style.backgroundColor="pink";
fade();
})
function fade(){
    setTimeout(function fadeout(){
    var dil=document.querySelector("#heart i");
    // post.style.scale=2;
    console.log("fade")
    dil.style.scale=0;
},2000)}


