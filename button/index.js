
// Get the modal
var modal = document.getElementById("myModal");
      
// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");
console.log("btns[0]", btns[0]);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// btns.onclick = function(){
//   console.log('btns')
//   // modal.style.display 
// }
// //When the user clicks the button, open the modal 
// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//   // console.log("btns[i]", btns[i]);
//   modal.style.display = "block";
//   }
// }



// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   // console.log("SKJL")
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // console.log("fkdsjlf")
  // console.log("btns[0]", btns[0]);
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





var width = 100;
var comeBack = document.getElementById("comeBack");
var thankYou = document.getElementById("thankYou");



function cancelFunc(){

  console.log("aikol");
}

function acceptFunc(){
  console.log("h")
  // let div = document.getElementById("myId");
  div.style.width = "300px"
  thankYou.style.display="block";
  thankYou.style.marginLeft=width;
  comeBack.style.display="block";
  comeBack.style.marginLeft=width;

  comeBack.style.marginLeft=`${width-50}%`;
  thankYou.style.marginLeft=`${width-50}%`;

  // var id= setInterval(frame, 10);
  // function frame(){
  //   width-=2;
  //   thankYou.style.marginLeft=`${width}%`;
  //   comeBack.style.marginLeft=`${width}%`;
  //   console.log(thankYou.style.marginLeft);
  //   if(thankYou.style.marginLeft === "0%"){
  //     clearInterval(id);
  //   }
  // }



  // function thankFunc(){
  //   var thankyou= document.getElementsByClassName("thankyou");
  //   thankyou[0].style.width = "200px"
//   setTimeout(()=>{
//     thankYou.style.display="none";
//     comeBack.style.display="none";
//   }, 8000);
}
