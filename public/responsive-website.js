let side = document.getElementsByClassName("side-menu")

let body = document.body
let multi = document.getElementsByClassName("hamburger-icon");
// multi[0].addEventListener("click",function(){
   
// })

function openNav(){
  multi[0].innerHTML = `<a href="javascript:void(0)"  onclick="closeNav()"><i class="fas fa-times cross"></i></a>`
  side[0].style.display = "flex"
}
let closeNav = () => {
  side[0].style.display = "none"     
  multi[0].innerHTML = `<a href="javascript:void(0)" class="hamburger-style" onclick="openNav()" ><i class="fas fa-bars hamburger-style hide"></i></a>`   
}

body.addEventListener("click", (e) => {
  if(e.target.getAttribute("class") !== null) {
    if(e.target.getAttribute("class").includes("hide") === false){
      closeNav()
    }
  }
  if(e.target.getAttribute("class") === null){
     closeNav()
  };
})


