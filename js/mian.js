// Start Up To Top
let UPTOTOP = document.querySelector(".UP-TO-TOP");

window.onscroll = function (){
  if(scrollY>=1100){
    UPTOTOP.style.display = "block";
  }else{
    UPTOTOP.style.display = "none";
  }
  UPTOTOP.onclick = function (){
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
}
// End Up To Top

// Start language
document.getElementById("language").onclick = myFunction;
document.getElementById("language").innerHTML = "En";
document.getElementById("logo").innerHTML = "نصيحة مبرمج";
document.getElementById("body");
document.getElementById("body").style.fontFamily = "BoutrosMBC";
document.getElementById("p").innerHTML =
  " مرحبآ بك في موقع مقالات برمجية باللغة العربية";
document.title = "نصحية مبرمج";
document.getElementById("h1").innerHTML = "موقع نصيحة <span>مبرمج</span> عربى";
document.getElementById("sora").src =
  "./img/240573981_2728310637461655_526059359962308206_n.jpg";
document.getElementById("btn").innerHTML = "صفحة مبرمج الموقع";
document.getElementById("btn1").innerHTML = "قناة مبرمج الموقع";
document.getElementById("tips").src = "./img/ArabicTips.png";
document.getElementById("section3H1").innerHTML =
  "نصيحة <span>مبرمج</span>  عربى للدخول لمجال البرمجة";
document.getElementById("section3P");
document.getElementById("title1").innerHTML = "نصائح هامة";

function myFunction() {
  body.classList.toggle("rtl-lft");

  if (body.classList.contains("rtl-lft")) {
    logo.innerHTML = "Programmer Advice  ";
    p.innerHTML = "Welcome to the site of programming articles in Arabic";
    h1.innerHTML = "Arabic <span>Programmer</span>  advice site";
    sora.src = "./img/roshdy.jpg";
    document.title = "Programmer Advice";
    body.style.fontFamily = "Lexend";
    btn.innerHTML = "Facebook Page";
    language.innerHTML = "Ar";
    tips.src = "./img/EnglishTips.png";
    btn1.innerHTML = "Site Channel";
    section3H1.innerHTML =
      "Advice for an Arab <span>Programmer</span> to enter the programming field";
    section3P.innerHTML =
      "At the beginning of your learning in the field of programming, you must get to know the computer and its mechanism, how it works, how to receive commands and how to implement them in order to enter the field while you are familiar with the computer. An idea of ​​how the computer works in a simple, smooth and sound way and we direct you to listen to the course";
    title1.innerHTML = "Important Tips";
  } else {
    logo.innerHTML = "نصيحة مبرمج";
    p.innerHTML = " مرحبآ بك في موقع مقالات برمجية باللغة العربية";
    h1.innerHTML = "موقع نصيحة <span>مبرمج</span> عربى";
    sora.src = "./img/240573981_2728310637461655_526059359962308206_n.jpg";
    document.title = "نصحية مبرمج";
    body.style.fontFamily = "BoutrosMBC";
    btn.innerHTML = "صفحة مبرمج الموقع";
    btn1.innerHTML = "قناة مبرمج الموقع";
    language.innerHTML = "En";
    tips.src = "./img/ArabicTips.png";
    section3H1.innerHTML =
      "نصيحة <span>مبرمج</span>  عربى للدخول لمجال البرمجة";
    section3P.innerHTML =
      "فى بداية تعلمك لمجال البرمجة يجب عليك أن تتعرف على الحاسب الالى و ألية عمله وطريقة تشغيلة وازاي بياخد الأوامر و ازاى بينفذها لكي تدخل المجال وانت ملم بفكر كيفية عمل الحاسب الالى وبطريقة مبسطة وسلسة وسليمة ونرشدك على أن تستمع إللى كورس";
    title1.innerHTML = "نصائح هامة";
  }
}
// End language


/* Start chat */

var imgBoxChat = document.getElementById("imgBoxChat");
var fullchat = document.querySelector(".fullchat");
imgBoxChat.onclick = function () {
  // fullchat.classList.toggle("ssssss");
  fullchat.style.display = "block";
  imgBoxChat.style.display = "none";
}

var MiniMaze = document.getElementById("MiniMaze");
MiniMaze.onclick = function () {
  fullchat.style.display = "none";
  imgBoxChat.style.display = "block";
}

var imgSend = document.getElementById("img-send");
var textarea = document.getElementById("textarea").value;
var pLeft = document.getElementById("left").value = "dghoshgiohsiug";

imgSend.onclick = function () {
  if(textarea == "yes"){
    // pLeft.value = "true";
    console.log("ssssssss")
  }
}
console.log(textarea);
console.log(pLeft);
/* End chat */

// Start date

let date = document.getElementById("date");
let date1 = new Date()
let theYear = date1.getFullYear()
date.innerHTML = theYear.innerHTML =
'Made With &#x2764; By <span>Mohamed Roshdy </span>2021-' +theYear + ' &copy;';

// End date
