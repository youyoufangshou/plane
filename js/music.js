function musicCheck1(){
	if(bgmFlag==1){

	sounds.style.visibility="visible";
	
	 music = new Audio();
	music.src="audio/bgm.ogg";
	music.loop="loop";
	music.muted=false;
	music.play();
}
}
function musicCheck2(){
if(boFlag==1){
//	sound.style.display="block";
	 dieMusic = new Audio();
	dieMusic.src="audio/die.ogg";
	dieMusic.muted=false;
	sounds.style.visibility="visible";
	 enemyMusic = new Audio();
	enemyMusic.src="audio/enemyDie.ogg";
	
	enemyMusic.muted=false;
}
}
function musicCheck3(){
if(shbFlag==1){
sounds.style.visibility="visible";
	 shotMusic = new Audio();
	shotMusic.src="audio/bullet.mp3";
	shotMusic.muted=false;
}
}

	
	
	
