
function painter(){
			var canvas = document.getElementById("canFly");//获取canvas元素
			//创建画布对象
			var context = canvas.getContext("2d");
			timesum=1;
			setInterval("timesum++",10000);
			
			//游戏的基本数据
			var gameData = {
				state : this.STARTING,
				//游戏状态
				STARTING : 1,
				RUNNING : 2,
				PAUSED : 3,
				GAMEOVER : 4,
				//英雄机生命
				heroLife : 1,
				//得分
				score : 0,
				//画布宽高
				WIDTH : canvas.width,
				HEIGHT : canvas.height
			}
			
			/*-- 加载游戏图片 -------------------------------------------------------------------*/
			//背景图片
			var bgImg = new Image();
			if(bgFlag==0){
				bgImg.src="images0/start.png";
			}else if(bgFlag==1){
				bgImg.src="images/start.png";
			}else{
				bgImg.src="images3/start.png";
			}
		
			//加载飞机入场动画
			var loadings = [];
			loadings[0] = new Image();			
			loadings[1] = new Image();			
			loadings[2] = new Image();			
			loadings[3] = new Image();
			if(plFlag==0){
				
			}else if(bgFlag==1){
				loadings[0].src="Images/game_loading1.png";
				loadings[1].src="Images/game_loading2.png";
				loadings[2].src="Images/game_loading3.png";
				loadings[3].src="Images/game_loading4.png";
			}else{
				loadings[0].src="Images3/game_loading1.png";
				loadings[1].src="Images3/game_loading2.png";
				loadings[2].src="Images3/game_loading3.png";
				loadings[3].src="Images3/game_loading4.png";
			}
			//加载英雄机图片
			var heros = [];
			heros[0] = new Image();			
			heros[1] = new Image();						
			//英雄机爆破动画图片
			heros[2] = new Image();			
			heros[3] = new Image();			
			heros[4] = new Image();			
			heros[5] = new Image();
			if(plFlag==0){
				heros[0].src="images0/hero1.png";
				heros[1].src="images0/hero1.png";
				heros[2].src="images0/hero1.png";
				heros[3].src="images0/hero1.png";
				heros[4].src="images0/hero1.png";
				heros[5].src="images0/hero1.png";
			}else if(plFlag==1){
				heros[0].src="images/hero1.png";
				heros[1].src="images/hero2.png";
				heros[2].src="images/hero_blowup_n1.png";
				heros[3].src="images/hero_blowup_n2.png";
				heros[4].src="images/hero_blowup_n3.png";
				heros[5].src="images/hero_blowup_n4.png";
			}else{
				heros[0].src="images3/hero1.png";
				heros[1].src="images3/hero2.png";
				heros[2].src="images3/hero_blowup_n1.png";
				heros[3].src="images3/hero_blowup_n2.png";
				heros[4].src="images3/hero_blowup_n3.png";
				heros[5].src="images3/hero_blowup_n4.png";
			}
			
			//加载子弹的图片
			var bullet = [];
			bullet[0] = new Image();
			if(shFlag==0){
				bullet[0].src = "images/bullet1.png";
			}else if(shFlag==1){
				bullet[0].src = "images3/bullet1.png";
			}
			
			//加载敌方飞机
			//加载小飞机图片
			var enemies1 = [];//小飞机
			enemies1[0] = new Image();			
			enemies1[1] = new Image();			
			enemies1[2] = new Image();			
			enemies1[3] = new Image();			
			enemies1[4] = new Image();
			var enemies2 = [];//中飞机
			enemies2[0] = new Image();			
			enemies2[1] = new Image();			
			enemies2[2] = new Image();
			enemies2[3] = new Image();			
			enemies2[4] = new Image();			
			var enemies3 = [];//大飞机
			enemies3[0] = new Image();			
			enemies3[1] = new Image();			
			enemies3[2] = new Image();			
			enemies3[3] = new Image();			
			enemies3[4] = new Image();			
			enemies3[5] = new Image();			
			enemies3[6] = new Image();			
			enemies3[7] = new Image();
			if(enFlag==0){
				enemies3[0].src = "images0/enemy3.png";
				enemies3[1].src = "images0/enemy3.png";
				
				enemies1[0].src = "images0/enemy1.png";
				enemies1[1].src = "images0/enemy1.png";
				
				enemies2[0].src = "images0/enemy2.png";
				enemies2[1].src = "images0/enemy2.png";
				
			}else if(enFlag==1){
				enemies3[0].src = "images/enemy3_n1.png";
				enemies3[1].src = "images/enemy3_n2.png";
				enemies3[2].src = "images/enemy3_down1.png";
				enemies3[3].src = "images/enemy3_down2.png";
				enemies3[4].src = "images/enemy3_down3.png";
				enemies3[5].src = "images/enemy3_down4.png";
				enemies3[6].src = "images/enemy3_down5.png";
				enemies3[7].src = "images/enemy3_down6.png";
				enemies1[0].src = "images/enemy1.png";
				enemies1[1].src = "images/enemy1_down1.png";
				enemies1[2].src = "images/enemy1_down2.png";
				enemies1[3].src = "images/enemy1_down3.png";			
				enemies1[4].src = "images/enemy1_down4.png";
				enemies2[0].src = "images/enemy2.png";
				enemies2[1].src = "images/enemy2_down1.png";
				enemies2[2].src = "images/enemy2_down2.png";			
				enemies2[3].src = "images/enemy2_down3.png";
				enemies2[4].src = "images/enemy2_down4.png";
			}else{
				enemies3[0].src = "images3/enemy3_n1.png";
				enemies3[1].src = "images3/enemy3_n2.png";
				enemies3[2].src = "images3/enemy3_down1.png";
				enemies3[3].src = "images3/enemy3_down2.png";
				enemies3[4].src = "images3/enemy3_down3.png";
				enemies3[5].src = "images3/enemy3_down4.png";
				enemies3[6].src = "images3/enemy3_down5.png";
				enemies3[7].src = "images3/enemy3_down6.png";
				enemies1[0].src = "images3/enemy1.png";
				enemies1[1].src = "images3/enemy1_down1.png";
				enemies1[2].src = "images3/enemy1_down2.png";
				enemies1[3].src = "images3/enemy1_down3.png";			
				enemies1[4].src = "images3/enemy1_down4.png";
				enemies2[0].src = "images3/enemy2.png";
				enemies2[1].src = "images3/enemy2_down1.png";
				enemies2[2].src = "images3/enemy2_down2.png";			
				enemies2[3].src = "images3/enemy2_down3.png";
				enemies2[4].src = "images3/enemy2_down4.png";
			}
			
			//加载暂停图片
			var paused = new Image();
			if(plFlag==0){
				paused.src="images/game_pause_nor.png";
			}else if(bgFlag==1){
				paused.src="images/game_pause_nor.png";
			}else{
				paused.src="images3/game_pause_nor.png";
			}
			

			/*-- 初始化游戏内容相关数据 --*/
			//初始化游戏背景图片数据
			var SKY = {
				imgs : bgImg,//背景图片
				width : 320,//图片宽度
				height : 568 //图片高度
			}
			//初始化英雄机入场动画图片数据
			var LOADING = {
				imgs : loadings,
				width : 186,//图片宽度
				height : 38,//图片高度
				sum : loadings.length //图片个数
			}
			//初始化英雄机的数据
			var HERO = {
				imgs : heros,
				width : 99,
				height : 124,
				sum : heros.length,
				length : 2//我方飞机正常图片个数
			}
			//初始化子弹的数据
			var BULLET = {//默认子弹
				imgs : bullet,
				width : 9,
				height : 21,
				sum : bullet.length
			}
			//初始化敌方飞机的数据内容
			var ENEMY1 = {
				imgs : enemies1,
				width : 57,
				height : 51,
				type : 0,//敌方飞机类型
				sum : enemies1.length,
				length: 1,//正常图片的个数
				reviseH:12,//碰撞宽度修正
				reviseW:6,//碰撞高度修正
				life : 1, //飞机生命值
				score : 100 //得分
			}
			var ENEMY2 = {//中飞机
				imgs : enemies2,
				width : 69,
				height : 95,
				type : 1,
				sum : enemies2.length,
				length: 1,
				reviseH:8,//碰撞宽度修正
				reviseW:2,//碰撞高度修正
				life : 3,
				score : 300 
			}
			var ENEMY3 = {//大飞机
				imgs : enemies3,
				width : 169,
				height : 258,
				type : 2,
				sum : enemies3.length,
				length: 2,
				reviseH:8,//碰撞宽度修正
				reviseW:2,//碰撞高度修正
				life : 10,
				score : 1000 
			}
			/*-- 通用构造器对象 前端代码尽量地使用通用代码 -------------------------------------------------------------------------------------------------------*/
			function Compant(config){
				//加载图片
				this.imgs = config.imgs;
				//图片的宽度和高度
				this.width = config.width;
				this.height = config.height;
				this.sum = config.sum;
				this.length = config.length;
				// 敌方飞机具有以下属性
				this.type = config.type;//敌机类型
				this.life = config.life;//敌机声明值
				this.score = config.score;//敌机分数
				// 设置相对速度
				this.time = 0;
				// 设置图片的索引值
				this.index = 0;
				// 是否执行爆破动画的标识
				this.down = false;
				// 是否删除标识
				this.canDelete = false;
				//绘图坐标
				this.x = 0;
				this.y = 0;
				// 绘制方法
				this.paint = function(){
					context.drawImage(this.imgs[this.index],this.x,this.y);
				}
				// 移动方法
				this.step = function(){}
				// 执行撞击后的逻辑方法
				this.bang = function(){}
			}
			/*-- 游戏各个内容构造器 ------------------------------------------------------------------------------------*/
			//---背景
			//创建背景图片的构造器
			function BgSky(config){
				//调用通用构造器初始化
				Compant.call(this,config);
				//图片绘制高度变量
				this.y1 = -this.height;
				this.y2 = 0;
				//定义绘制方法
				this.paint = function(){			
					context.drawImage(this.imgs,0,this.y1);//第一张图片
					context.drawImage(this.imgs,0,this.y2);//第二张图片
				}
				//背景heigth运动方法
				this.step = function(){
					this.time++;
					if (this.time%3==0)
					{//控制背景图片height值的增加
						this.y1++;//图片运动下一帧
						this.y2++;
						//图片移动处画布后将y坐标重置为-height 实现图片衔接滚动
						this.y1>this.height&&(this.y1 = -this.height);
						this.y2>this.height&&(this.y2 = -this.height);
						this.time=1;//重置移动时间
					}
				}
			}
			//创建图片对象
			var sky = new BgSky(SKY);
			
			//---英雄机入场动画构造器
			function Loading(config){
				Compant.call(this,config);
				//定义绘制
				this.paint = function(){
					//绘制飞机入场动画图片
					context.drawImage(this.imgs[this.index],0,gameData.HEIGHT-this.height);
				}
				//定义入场动画
				this.step = function(){
					this.time++;
					if (this.time%20==0)
					{//实现动画的播放速度
						this.index++;//下一帧动画
						if (this.index==this.sum)
						{//判断动画结束后，更改游戏的状态，进入第三阶段游戏阶段
							gameData.state=gameData.RUNNING;	
							this.time=0;//重置动画时间
						}
					}
				}
			}
			//创建飞机入场动画的对象
			var loading = new Loading(LOADING);
			
			//---定义我方飞机的构造函数
			function Hero(config){
				Compant.call(this,config);
				//定义子弹速度
				this.btTime = 0;
				//定义我方飞机的坐标
				this.x = (gameData.WIDTH-this.width)/2;
				this.y = gameData.HEIGHT-this.height-10; 
				//定义绘制方法
				this.paint = function(){
					context.drawImage(this.imgs[this.index],this.x,this.y);
				}
				//定义飞机动画
				this.step = function() {
					this.time++;
					if (this.down)
					{
						if (this.time%15 == 0)
						{
							this.index++;
							//爆破动画执行完毕
							if (this.index >= this.sum)
							{
								if (gameData.heroLife>0)
								{//我方飞机生命值大于零
									hero = new Hero(HERO);
									this.down = false;
								}else {//生命值为零
									gameData.state = gameData.GAMEOVER;
								}
								this.index = this.length;
							}
						}
					}
					else {
						if (this.time%15 == 0)
						{
							this.index++;
							//控制this.index的值 - 0和1之间切换
							//this.index==this.sum&&(this.index=0);
							this.index = this.index%this.length;//飞机图片两张 可以
							this.time = 0;//重置动画间隔时间
						}			
					}
				}
				//增加飞机的射击方法
				this.shoot = function(){
					//
					this.btTime++;
					if (this.btTime%25 == 0)
					{
						bullets[bullets.length] = new Bullet(BULLET);;//向子弹数组中添加子弹
						this.btTime = 0;
					}
				}
				//我方飞机撞机后
				this.bang = function() {
					if (!this.down)
					{
						//减生命值
						gameData.heroLife--;
						if(boFlag==1){
							dieMusic.pause();
							dieMusic.currentTime = 0.0;
							dieMusic.play();
						}
						
						//进入爆破动画
						this.down = true;
						this.index = this.length;
					}
				}
			}
			//创建我方飞机对象
			var hero = new Hero(HERO);
			
			//---创建子弹的构造器
			function Bullet(config){
				Compant.call(this,config);
				//子弹的坐标
				this.x = hero.x + hero.width/3 ;
				this.y = hero.y - this.height ;
				//定义绘制子弹的方法
				this.paint = function(){
					context.drawImage(this.imgs[this.index],this.x,this.y);
				}
				//定义移动子弹的方法
				this.step = function(){
					if(shvFlag==0){
						this.y -= 1;//子弹移动的速度
					}else if(shvFlag==1){
						this.y -= 3;//子弹移动的速度
					}else if(shvFlag==2){
						this.y -= 5;//子弹移动的速度
					}else if(shvFlag==3){
						this.y -= 10;//子弹移动的速度
					}else if(shvFlag==4){
						this.y -= 15;//子弹移动的速度
					}
					
				}
				//设置删除子弹
				this.bang = function(){
					this.canDelete = true;
				}
			}
			//定义子弹存储数组
			var bullets = [];
			//定义绘制所有子弹的函数
			function paintBullets(){
				for (var i=0, length=bullets.length;  i<length; i++)
				{
					bullets[i].paint();//绘制当前子弹
					if(shbFlag==1){
						shotMusic.play();
					}
					
					if (gameData.state==gameData.RUNNING)
					{//游戏运行中时移动子弹
						bullets[i].step();//移动子弹
					}
				}
			}
			//清除超出屏幕的子弹
			function clearStep(){
				for (var i = bullets.length-1; i>=0 ; i--)
				{
					if (bullets[i].y<=-bullets[i].height || (bullets[i].canDelete))
					{
						bullets.splice(i,1);//删除当前超出屏幕的子弹和撞机的子弹
					}
				}
			}			
			//---
			//敌方飞机构造器
			function Enemy(config){
				Compant.call(this,config);
				//撞机修正
				this.reviseH = config.reviseH;
				this.reviseW = config.reviseW;
				//敌方飞机的坐标
				this.x = Math.floor(Math.random()*(gameData.WIDTH-this.width));
				this.y = -this.height;
				//大飞机动画
				this.bigTime = 0;
				//定义绘制方法
				this.paint = function(){
					context.drawImage(this.imgs[this.index],this.x,this.y);
				}
				//移动方法
				this.step = function(){
					//判断this.down的值
					if (this.down)
					{	
						
						//切换爆破动画
						this.time++;
						if(this.time%15==0){
							this.index++;
						}
						//判断爆破动画是否执行完毕
						if (this.index >= this.sum)
						{
							gameData.score += this.score;//得分
							moneyS+=this.score/100 ;
							moneyScore.innerText=moneyS+"";
							thisScore.innerText=gameData.score;
							if(parseInt(thisScore.innerText)>parseInt(maxScore.innerText)){
								maxScore.innerText=thisScore.innerText;
								maxScore2.innerText=thisScore.innerText;
							}
							this.canDelete = true;//删除敌机
						}

					}else{			
						//敌方飞机自上而下运动
						this.time++;
						switch (this.type)
						{
							//小飞机
							case 0: this.y=this.y+timesum;
							console.log(timesum)
								break;
							//中飞机
							case 1: this.time%2==0&&(this.y=this.y+timesum);
								break;
							//大飞机
							case 2: this.time%3==0&&(this.y=this.y+timesum);
								break;			
						}
						//大飞机动画设置
						this.bigTime++;
						if (this.type == 2&&(this.bigTime%10==0))
						{
							this.index= this.index==0?1:0;//大飞机动画
							this.bigTime = 0;//重置
						}
					}
				}
				//敌机是否被撞机判断
				this.hit =  function(bh){
					return (bh.x+bh.width>this.x-this.reviseW )&& (bh.y < this.y+this.height-this.reviseH) && (bh.x < this.x+this.width+this.reviseW )&& (bh.y + bh.height > this.y+this.reviseH);
				}
				//敌方飞机被撞
				this.bang = function(){
					if (!this.down&&!this.canDelete)
					{
						//生命值减一
						this.life--;
						
						//生命值为0
						if (this.life<=0)
						{
							
						if(boFlag==1){
							enemyMusic.pause();
						enemyMusic.currentTime = 0.0;
							enemyMusic.play();
						}
						
							this.down = true;//执行爆破
							this.index = this.length;//开始执行爆破动画
						}
					}
				}
			}
			//创建存储敌方飞机的数组
			var enemies = [];
			//定义敌方飞机出现速度
			var enemyTime = 0;
			//创建用于创建敌方飞机的函数
			function createEnemies(){
				/*创建敌方飞机 - 小,中,大*/
				var num = Math.floor(Math.random()*10);
				if (num < 8)
				{//小飞机
					enemies[enemies.length] = new Enemy(ENEMY1);
				}else if (num < 9)
				{//中飞机
					enemies[enemies.length] = new Enemy(ENEMY2);
				}else {
					//大飞机只能存在一个
					if (enemies.length > 0 && enemies[0].type != 2)
					{
						enemies.unshift(new Enemy(ENEMY3));//将大飞机添加到数组开头
					}
				}
			}
			/*--- 绘制敌方所有的飞机 及 删除超出屏幕和打掉的飞机和判断敌方飞机是否被撞机 ---------------------------------------------------------------------------------------------*/
			function paintEnemiesAndCheckHit(){
				for (var i=0; i<enemies.length; i++)
				{//遍历敌机
					//
					var enemy = enemies[i];//敌机
					//检测敌机和英雄机是否碰撞
					if ((enemy.y > gameData.HEIGHT)||(enemy.canDelete))
					{
						enemies.splice(i,1);//删除当前超出屏幕的飞机
						continue;
					}
					enemy.paint();//绘制飞机
					if (gameData.state == gameData.RUNNING)
					{//游戏运行中时才移动飞机
						enemy.step();//移动飞机
					}
					//判断是否和我方飞机碰撞
					if (enemy&&enemy.hit(hero))
					{//敌机和我方飞机相撞
							enemy.bang();
							hero.bang();//飞机销毁
					}
					//判断子弹
					for (var j=0; j<bullets.length; j++)
					{//子弹遍历
						var bullet = bullets[j];//子弹
						if (enemy.hit(bullet))
						{//子弹撞机敌方飞机
							enemy.bang();//删除敌机
							bullet.bang();//删除子弹
						}
					}
				}
			}
			/*--- 绘制游戏得分 ----------------------------------------------------------------------------------------------*/
			function painText(){
				context.font = "bold 15px 微软雅黑";
				context.fillStyle = "#0000ff";
				context.fillText("SCORE: " + gameData.score,10,30);
				context.fillText("LIFE: " + gameData.heroLife,250,30);
			}
			/*-- 绘制暂停图标 ----------------------------------------------------------------------------------------------*/
			function paintPaused(){
				context.drawImage(paused,gameData.WIDTH/2-30,gameData.HEIGHT/2-22.5);
			}
			/*-- 游戏结束 ----------------------------------------------------------------------------------------------*/
			function gameover(){
//				context.font = "bold 45px 微软雅黑";
//				context.fillText("GAME  OVER",gameData.WIDTH/2-150,gameData.HEIGHT/2);
//				break;

			}			
			/*-- 事件绑定 ------------------------------------------------------------------------------------------------*/

			//为<canvas>绑定mousemove事件 - 控制我方飞机跟随鼠标移动
			canvas.onmousemove = function(event){
				//获取鼠标当前相对于canvas画布的坐标
				var x = event.offsetX;
				var y = event.offsetY;
				//我方飞机坐标设置
				hero.x=x-hero.width/2;// x坐标
				hero.y=y-hero.height/2;//y坐标
				if (gameData.state == gameData.PAUSED)
				{	if(shbFlag==1){
					shotMusic.muted=false;
				}
					
					gameData.state = gameData.RUNNING;
				}
			}
			// 鼠标离开画布事件
			canvas.onmouseout = function(){
				if (gameData.state == gameData.RUNNING)
				{
					if(shbFlag==1){
					shotMusic.muted=true;
					}
					gameData.state = gameData.PAUSED;
				}
			}			
			/*---------------------------------------------------------------------------------------*/
			//游戏初始化
			function init(){
				//设置游戏的初始状态
				gameData.state = gameData.STARTING;
				gameData.score = 0;
				gameData.heroLife = 1;
				
				if(liFlag==1){
					gameData.heroLife=2;
				}else if(liFlag==2){
					gameData.heroLife=3;
				}else if(liFlag==3){
					gameData.heroLife=4;
				}else if(liFlag==4){
					gameData.heroLife=5;
				}
				//游戏运行
				gameExec();
			}
			
			var enemyTime = 0;
			//游戏执行函数
			function gameExec(){
				
				//背景
				sky.paint();
				sky.step();
				enemyTime ++;//敌机的创建速度控制

				//根据游戏状态执行相应操作
				switch (gameData.state)
				{
					
					case gameData.STARTING: //英雄机进场过渡状态
						loading.paint();//绘制飞机入场动画
						loading.step();//入场动画
						break;
					case gameData.RUNNING: //游戏进行状态
						hero.paint();
						hero.step();
						hero.shoot();//飞机射击
						paintBullets();//绘制所有子弹
						clearStep();//清除超出的子弹

						if (enemyTime%100 == 0)
						{
							createEnemies();//创建敌方飞机
						}
						paintEnemiesAndCheckHit();//绘制所有敌方飞机和碰撞检测
						break;
					case gameData.PAUSED: //游戏暂停状态
						hero.paint();
						paintBullets();//绘制所有子弹
						paintEnemiesAndCheckHit();//绘制所有敌方飞机和碰撞检测
						paintPaused();
						break;
					case gameData.GAMEOVER: //游戏结束状态
						gameover();						
						break;
				}
				painText();//绘制得分
				
				//定时器,画布刷新
				if(gameData.state!=4){
					setTimeout(function(){
					gameExec();
				},10);				
				}else{
					gameEnd()
				}
				
			}

			init();//初始化执行
}		

		function begin(){
			homePage.style.display="none";
			canFly.style.display="block";
			endPage.style.display="none";
			shopPage.style.display="none";
			painter();

//			init();//初始化执行
		}
		function gameEnd(){
			homePage.style.display="none";
			canFly.style.display="none";
			endPage.style.display="block";
			shopPage.style.display="none";
		}
		function re(){
			endPage.style.display="none";
			canFly.style.display="none";
			homePage.style.display="block";
			shopPage.style.display="none";
			
		}
		function sound(){
			if(soundValue.innerText=="声音：开"){
				soundValue.innerText="声音：关";
				music.muted=true;
				dieMusic.muted=true;
				shotMusic.muted=true;
				enemyMusic.muted=true;

			}else{
				soundValue.innerText="声音：开";
				music.muted=false;
				dieMusic.muted=false;
				shotMusic.muted=false;
				enemyMusic.muted=false;
			}
		}
		function shop(){
			homePage.style.display="none";
			canFly.style.display="none";
			endPage.style.display="none";
			shopPage.style.display="block";
		}
