//Javascript


// function myFunction() {
//     var nav = document.getElementById("topNav");
//     var bars = document.getElementById("hamBurger")
    
//     if (nav.className === "navBar") {
//         // nav.className += " responsive";
//         bars.classList.remove("fa-bars")
//         bars.classList.add("fa-times")

//     } else {
//       nav.className = "topnav";
//       bars.classList.remove("fa-times")
//     bars.classList.add("fa-bars")
//     }
//   }


//   document.getElementById("hamBurger").onclick = function() {
//     //   alert("Hey")
//       document.getElementById("topNav").style.display = "block"
//       document.getElementById("topNav").add("navBar")

//   }
  hamBurger.addEventListener('click',()=>topNav.classList.toggle('show') )
  


  //   function reveal() {
//       let x = document.getElementById("topNav")
//       if(x.className === navBar){
//           x.className += responsiveness
//       }
//       else{
//           x.className == navBar
//       }
//   }