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

console.log('im alive')