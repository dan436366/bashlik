//button  to top

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


//button to top end

//phones

const phones = document.querySelector(".phone-for-popup");


  var m = window.setTimeout(forPhone,2500); 


  function forPhone() {
    phones.classList.add("active");
  }


//phones-end

//popup-phones

var x = document.getElementById("phone-popup");
function phonePopup() {
    
    document.querySelector(".phone-for-popup").style.animationIterationCount  = 0;
    if (x.style.display !== "block") {
      x.style.display = "block";
      document.querySelector(".phone-for-popup").innerHTML = '<ion-icon name="close"></ion-icon>';
      document.querySelector(".to-top").style.display = "none";
       
      

    //   document.querySelector(".phones-popup").style.animation = "popupTransitionReverse 0.7s ease;"; 
      
    //   document.querySelector(".to-top").display = "none";
    //   document.querySelector(".phone-for-popup ion-icon:hover").animationIterationCount = "0";
    } else {
      x.style.display = "none";
      
      document.querySelector(".phone-for-popup").innerHTML = '<ion-icon name="call-outline"></ion-icon>';
      
      document.querySelector(".to-top").style.display = "flex";
      
    }
  }


  //popup-phones end


  function selectPhone(){
    var selectph = document.querySelector(".num-of-ph");
    var selectph2 = document.querySelector(".num-of-ph2");

    if (selectph.style.display !== "block") {
        document.querySelector(".select-phone").innerHTML = '<ion-icon name="chevron-up-circle"></ion-icon>';
        selectph.style.display = "block";
        selectph2.style.display = "block";
        
    }
    else{
        document.querySelector(".select-phone").innerHTML = '<ion-icon name="chevron-down-circle"></ion-icon>';
        selectph.style.display = "none";
        selectph2.style.display = "none";
        
        // document.querySelector(".select-phone").style.transform = "rotate(0deg)";
        
    }
  }





  //leave-request


    function leaveRequest() {
        document.querySelector('body').style.overflow = "hidden";
        document.querySelector('.popup-leave-request').style.display = "flex";
        document.querySelector('.popup-leave-request').style.overflow = "auto";
        document.querySelector('header').style.filter = "blur(6px)";
        document.querySelector('main').style.filter = "blur(6px)";
        document.querySelector('footer').style.filter = "blur(6px)";
        document.querySelector('.phones-popup').style.filter = "blur(6px)";
        document.querySelector('.phone-for-popup').style.filter = "blur(6px)";
        document.querySelector('.to-top').style.filter = "blur(6px)";
        
        document.querySelector('body').style.background = "rgba(0,0,0,0.7)";

        document.querySelector('header').style.opacity = "0.8";
        document.querySelector('main').style.opacity = "0.8";
        document.querySelector('footer').style.opacity = "0.8";
        document.querySelector('.phones-popup').style.opacity = "0.8";
        document.querySelector('.phone-for-popup').style.opacity = "0.8";

        x.style.display = "none";

        document.querySelector(".phone-for-popup").innerHTML = '<ion-icon name="call-outline"></ion-icon>';
      
        

      
        // document.querySelector('.wrapper').style.position = "absolute";

    }


  document.querySelector('.close-request').addEventListener('click',
  function() {
      document.querySelector('.popup-leave-request').style.display = "none";
      document.querySelector('header').style.filter = "none";
      document.querySelector('main').style.filter = "none";
      document.querySelector('footer').style.filter = "none";
      document.querySelector('.phones-popup').style.filter = "none";
      document.querySelector('.phone-for-popup').style.filter = "none";
      document.querySelector('.to-top').style.filter = "none";

      document.querySelector('body').style.background = "none";

      document.querySelector('header').style.opacity = "1";
        document.querySelector('main').style.opacity = "1";
        document.querySelector('footer').style.opacity = "1";
        document.querySelector('.phones-popup').style.opacity = "1";
        document.querySelector('.phone-for-popup').style.opacity = "1";

        document.querySelector('body').style.overflow = "auto";
        document.querySelector(".to-top").style.display = "flex";
        // document.querySelector('.wrapper').style.position = "relative";
  }
);


$(document).mouseup(function (e) {
    var container = $(".popup-leave-request");
    if (container.has(e.target).length === 0){
        container.hide();
        document.querySelector('header').style.filter = "none";
        document.querySelector('main').style.filter = "none";
        document.querySelector('footer').style.filter = "none";
        document.querySelector('.phones-popup').style.filter = "none";
        document.querySelector('.phone-for-popup').style.filter = "none";
        document.querySelector('.to-top').style.filter = "none";

        document.querySelector('body').style.background = "none";

        document.querySelector('header').style.opacity = "1";
        document.querySelector('main').style.opacity = "1";
        document.querySelector('footer').style.opacity = "1";
        document.querySelector('.phones-popup').style.opacity = "1";
        document.querySelector('.phone-for-popup').style.opacity = "1";

        document.querySelector('body').style.overflow = "auto";
        document.querySelector(".to-top").style.display = "flex";
        // document.querySelector('.wrapper').style.position = "relative";
    }
});

  //end leave-request
  
  

//   function scrolledPixels(){
//     // window.onscroll = function () {
//     //     const scrolled = window.scrollY;
        
//     //     document.querySelector('.popup-leave-request').style.top = scrolled + "px";
//     //     // Value of scroll Y in px
//     // };
//     var scrolled = document.querySelector('body').scroll;
//     console.log(scrolled);
//   }


//   scrolledPixels();



//phone +38


var element = document.getElementById('user_phone');
var maskOptions = {
    mask:'+38(000)000-00-00',
    lazy:false
}
var mask = new IMask(element,maskOptions);
  





function closeEmailMessage(){
    document.querySelector('.alert-message-thanks').style.display = "none";
    document.querySelector('.alert-message-thanks-only-phone').style.display = "none";
    
}

function closeEmailMessageSecond(){
    document.querySelector('.alert-message').style.display = "none";
    document.querySelector('.alert-message-only-phone').style.display = "none";
}






var element = document.getElementById('referral-phone');
var maskOptions = {
    mask:'+38(000)000-00-00',
    lazy:false
}
var mask = new IMask(element,maskOptions);
