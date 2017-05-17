    //获得开始界面
var homePage=document.getElementById("homePage");
//获得结束页面
var endPage=document.getElementById("endPage");
//获得商店页面
var shopPage=document.getElementById("shopPage");
	//获得画布
var g_can=document.getElementById("canFly");

var sounds=document.getElementById("sounds");
//声音
var soundValue=document.getElementById("soundValue");
	//分数
var moneyScore=document.getElementById("moneyScore");
var thisScore=document.getElementById("thisScore");
var maxScore=document.getElementById("maxScore");
var maxScore2=document.getElementById("maxScore2");
var moneyS=parseInt(moneyScore.innerText);
//初始设置
canFly.style.display="none";
homePage.style.display="block";
endPage.style.display="none";
shopPage.style.display="none";
sounds.style.visibility="hidden";

