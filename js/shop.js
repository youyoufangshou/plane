var bgFlag=0;
var plFlag=0;
var enFlag=0;
var shFlag=0;
var shvFlag=0;
var liFlag=0;
var bgmFlag=0;
var boFlag=0;
var shbFlag=0;
var bg=document.getElementById("bgShop");
var pl=document.getElementById("plShop");
var en=document.getElementById("enShop");
var sh=document.getElementById("shShop");
var shv=document.getElementById("shvShop");
var li=document.getElementById("liShop");
var bgm=document.getElementById("bgmShop");
var bo=document.getElementById("boShop");
var shb=document.getElementById("shbShop");


function bgShop(){
	if(bg.innerText=="背景贴图:初级(10$)"&&moneyS>=10){
		moneyS=moneyS-10;
		moneyScore.innerText=moneyS;
		bg.innerText="背景贴图:中级(100$)";
		bgFlag=1;
		homePage.style.backgroundImage="url(images/bg.png)";
		shopPage.style.backgroundImage="url(images/start.png)";
		endPage.style.backgroundImage="url(images/start.png)";
	}else if(bg.innerText=="背景贴图:中级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		bg.innerText="背景贴图:终级";
		bgFlag=2;
		homePage.style.backgroundImage="url(images3/bg.png)";
		shopPage.style.backgroundImage="url(images3/start.png)";
		endPage.style.backgroundImage="url(images3/start.png)";
	}
}
function plShop(){
	if(pl.innerText=="飞机贴图:初级(10$)"&&moneyS>=10){
		moneyS=moneyS-10;
		moneyScore.innerText=moneyS;
		pl.innerText="飞机贴图:中级(100$)";
		plFlag=1;
	}else if(pl.innerText=="飞机贴图:中级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		pl.innerText="飞机贴图:终极";
		plFlag=2;
	}
}
function enShop(){
	if(en.innerText=="敌机贴图:初级(10$)"&&moneyS>=10){
		moneyS=moneyS-10;
		moneyScore.innerText=moneyS;
		en.innerText="敌机贴图:中级(100$)";
		enFlag=1;
	}else if(en.innerText=="敌机贴图:中级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		en.innerText="敌机贴图:终级";
		enFlag=2;
	}
}
function shShop(){
	if(sh.innerText=="子弹贴图:下级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		sh.innerText="子弹贴图:上级";
		shFlag=1;
	}
}
function shvShop(){
	if(shv.innerText=="子弹速度:一级(10$)"&&moneyS>=10){
		moneyS=moneyS-10;
		moneyScore.innerText=moneyS;
		shv.innerText="子弹速度:二级(30$)";
		shvFlag=1;
	}else if(shv.innerText=="子弹速度:二级(30$)"&&moneyS>=30){
		moneyS=moneyS-30;
		moneyScore.innerText=moneyS;
		shv.innerText="子弹速度:三级(60$)";
		shvFlag=2;
	}else if(shv.innerText=="子弹速度:三级(60$)"&&moneyS>=60){
		moneyS=moneyS-60;
		moneyScore.innerText=moneyS;
		shv.innerText="子弹速度:四级(100$)";
		shvFlag=3;
	}else if(shv.innerText=="子弹速度:四级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		shv.innerText="子弹速度:五级";
		shvFlag=4;
	}
}
function liShop(){
	if(li.innerText=="生命值:一级(10$)"&&moneyS>=10){
		moneyS=moneyS-10;
		moneyScore.innerText=moneyS;
		li.innerText="生命值:二级(30$)";
		liFlag=1;
	}else if(li.innerText=="生命值:二级(30$)"&&moneyS>=30){
		moneyS=moneyS-30;
		moneyScore.innerText=moneyS;
		li.innerText="生命值:三级(60$)";
		liFlag=2;
	}else if(li.innerText=="生命值:三级(60$)"&&moneyS>=60){
		moneyS=moneyS-60;
		moneyScore.innerText=moneyS;
		li.innerText="生命值:四级(100$)";
		liFlag=3;
	}else if(li.innerText=="生命值:四级(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		li.innerText="生命值:五级";
		liFlag=4;
	}
}
function bgmShop(){
		if(bgm.innerText=="背景音乐:无(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		bgm.innerText="背景音乐:有";
		bgmFlag=1;
	}
		musicCheck1();
		
}
function boShop(){
		if(bo.innerText=="boom声:无(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		bo.innerText="boom声:有";
		boFlag=1;
	}
		musicCheck2()
}
function shbShop(){
		if(shb.innerText=="子弹声:无(100$)"&&moneyS>=100){
		moneyS=moneyS-100;
		moneyScore.innerText=moneyS;
		shb.innerText="子弹声:有";
		shbFlag=1;
	}
		musicCheck3()
}

