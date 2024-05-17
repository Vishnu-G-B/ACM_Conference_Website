// function changeImage(e) {
//     image = document.getElementById("imgDisp"),
//     image.src = e
// }
// function changeImageDownload() {
//     img2.src = "./assets/img/profile.png",
//     img1.src = "./assets/img/download.png",
//     img3.src = "./assets/img/buy_sell.png"
// }
// function changeImageSignup() {
//     img2.src = "./assets/img/buy_sell.png",
//     img1.src = "./assets/img/profile.png",
//     img3.src = "./assets/img/download.png"
// }
// function changeImageEnjoy() {
//     img2.src = "./assets/img/download.png",
//     img1.src = "./assets/img/buy_sell.png",
//     img3.src = "./assets/img/profile.png"
// }
$(window).scroll(function() {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50)
}),

// $(".home").css({ height: $(window).height() + "px" });

// $(window).on("resize", function() {
//   $(".home").css({ height: $(window).height() + "px" });
// });

// $(document).ready(function() {
//     $("#nav-icon4").click(function() {
//         $(this).toggleClass("open")
//     }),
//     $("#navbarNav a").on("click", function() {
//         if ($("#navbarNav").removeClass("show"),
//         $("#nav-icon4").toggleClass("open"),
//         "" !== this.hash) {
//             event.preventDefault();
//             var e = this.hash;
//             $("html, body").animate({
//                 scrollTop: $(e).offset().top - 55
//             }, 750)
//         }
//     }),
//     $("#logo").on("click", function() {
//         if ("" !== this.hash) {
//             event.preventDefault();
//             var e = this.hash;
//             $("html, body").animate({
//                 scrollTop: $(e).offset().top - 55
//             }, 750)
//         }
//     })
// }),
// img1 = document.getElementById("imgDisp1"),
// img2 = document.getElementById("imgDisp2"),
// img3 = document.getElementById("imgDisp3"),
// $(".step").on("click", function() {
//     $(".step").removeClass("selected"),
//     $(this).addClass("selected")
// }),
// $(".carousel").carousel({
//     interval: 7e3,
//     ride: "carousel"
// }),

console.log('im alive');

function toggleClassOnClick() {
  try {
    const element = document.getElementById("toggle");
    const screenWidth = window.innerWidth;
    if (screenWidth>992){
      element.classList.remove('align-offcanvas');
      element.classList.add('align');
    } else {
      element.classList.add('align-offcanvas');
      element.classList.remove('align');
    }
  } catch (error) {
    console.error("FKIT", error.message);
  }
}

function setFontSize() {
    const screenWidth = window.innerWidth;
    const baseFontSize = screenWidth / 100; 
    const textElements = document.querySelectorAll('.text');
    
    if (screenWidth >789 ){
      textElements.forEach(element => {
        element.style.fontSize = baseFontSize * 1.3 + 'px'; 
      });
    }

    if (screenWidth <768) {
      textElements.forEach(element => {
        element.style.fontSize = baseFontSize * 4 + 'px'; 
      });
    }
  }

function updateSVGViewBox() {

  try{
    const svg = document.getElementById('visual');
    const svgWidth = svg.getAttribute('width');
    const svgHeight = svg.getAttribute('height');

  
    const viewBoxValue = `0 0 ${svgWidth} ${svgHeight*5.5}`;
    svg.setAttribute('viewBox', viewBoxValue);
  } catch(error) {
    console.error("NO SVG", error.message);
  }
}

function removeElement() {

  try{
    const screenWidth = window.innerWidth;
    const elementToRemove = document.getElementById('removable');
  
    if (screenWidth < 768) { 
      if (elementToRemove) {
        elementToRemove.remove(); 
      }
    }
  } catch (error){
    console.error("ERR",error.message);
  }

}

// function changeNavListOnScroll() {

//   try{
//     const nav = document.getElementById('navbar')
//     const navElements = document.querySelectorAll('.nav-options');
//     const viewportWidth = window.innerWidth;
//     const className = "scrolled";
//     const lightLink = "nav-link-white";
//     const darkLink = "nav-link-blue"


//     if (nav.classList.contains(className)){
//       if(viewportWidth>992) {
//         navElements.forEach(element => {
//           if(element.classList.contains(lightLink)){
//             element.classList.remove(lightLink);
//             element.classList.add(darkLink);
//           }
//         });
//       }
//     }else {
//       navElements.forEach(element => {
//         if(element.classList.contains(darkLink)){
//           element.classList.remove(darkLink);
//           element.classList.add(lightLink);
//         }
//       });
//     }
//   } 
//   catch (error){
//     console.error("NO NAV",error.message);
//   }
// }

function changeLogoOnScroll() {
  const nav = document.getElementById('navbar');
  const imgLogo = document.getElementById('changingImg');
  try {
    if (document.title === "CODE-AI:Call" || document.title == "CODE-AI:Registration" ){
      if(nav.classList.contains('scrolled')){
        imgLogo.src = "assets/img/dark-logo-new.png";
      } else {
        imgLogo.src = "assets/img/light-logo-new.png";
      }
      
    }
  } catch (error) {
    console.error("Not on CFP page", error.message);
  }
}

function checkViewportWidth(){
  try{
    const viewportWidth = window.innerWidth;
    const breakpoint = 576;
    const element1 = document.getElementById('timeline__event__title1');
    const element2 = document.getElementById('timeline__event__title2');
    const element3 = document.getElementById('timeline__event__title3');
    const element4 = document.getElementById('timeline__event__title4');

    if (viewportWidth < breakpoint) {
      element1.classList.add('align'); 
      element2.classList.add('align');
      element3.classList.add('align');
      element4.classList.add('align');
    } else {
      element1.classList.remove('align');
      element2.classList.remove('align');
      element3.classList.remove('align');
      element4.classList.remove('align');
    }
    console.log("ITs coming");
  } catch (error) {
    console.error("NO timeline",error.message);
  }
}

function changeSVGOnMobile() {
  try {
    const elements = document.querySelectorAll('.var-svg');
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 576) {
      elements.forEach(element => {
        element.classList.remove('spacer', 'layer1');
        element.classList.add('spacer-mobile', 'layer3');
      });
    } else {
      elements.forEach(element => {
        element.classList.add('spacer', 'layer1');
        element.classList.remove('spacer-mobile', 'layer3');
      });
    }
  } catch (error) {
    console.error("NO WAVE SVG",error.message);
  }
}

// window.onload = changeSVGOnMobile
window.onload = toggleClassOnClick;
window.onload = setFontSize;
changeSVGOnMobile();
toggleClassOnClick();
removeElement();
updateSVGViewBox();
checkViewportWidth();
// changeNavListOnScroll();
changeLogoOnScroll();

window.addEventListener('resize',changeSVGOnMobile);
window.addEventListener('resize',toggleClassOnClick)
window.addEventListener('resize', removeElement);
window.addEventListener('resize', setFontSize);
window.addEventListener('resize', updateSVGViewBox);
window.addEventListener('resize',checkViewportWidth)
// window.addEventListener('scroll', changeNavListOnScroll);
window.addEventListener('scroll', changeLogoOnScroll);


// document.querySelectorAll(".nav-link").forEach(function(link) {
//   link.addEventListener("click", function(event) {
//     event.preventDefault();
//     var linkHref = link.getAttribute("href");
//     triggerButtonAction(linkHref);
//   });
// });

// document.querySelector(".btn-close").addEventListener("click", function() {
//   console.log("Close button clicked!");
// });

// document.getElementById("myButton").addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// function triggerButtonAction(linkHref) {
//   document.getElementById("myButton").click();

//   setTimeout(function() {
//     window.location.href = linkHref;
//   }, 100); 
// }


function changeIcon() {//REWRITE THIS FUNCTION ITS KINDA A**
  try {
    const buttons = document.querySelectorAll('.button-background-move');
    console.log(buttons)
    let expanded;
    
    buttons.forEach(element => {
      expanded = element.getAttribute('aria-expanded');
      let icon = document.getElementById(element.getAttribute('data-info'));
      console.log(element.getAttribute('data-info'));
      if (expanded === "true"){
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });

  } catch (error) {
    console.error("not on committees page",error.message);
  }

}

const buttonElements = document.querySelectorAll('.button-background-move');
buttonElements.forEach(element => {
  element.addEventListener("click",changeIcon);
});

// INTERSECTION OBSERVER CODE

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});
