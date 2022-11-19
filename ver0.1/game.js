// JavaScript Document
var level=0;
var warm=0;
var wood=0;var x_wood=1;
var cheche=0;
var w;
var fire_word="熊熊燃烧着的 火堆";
var warm_word[];
warm_word[0]="寒冷的 小屋";
warm_word[1]="有了温度的 小屋";
warm_word[2]="温度刚好的 小屋";
warm_word[3]="温暖的 小屋";
warm_word[4]="热的 小屋";
var words[10];
words[0]="风雨交加的 夜晚";
words[1]="漆黑的 小屋";
words[2]="一个陌生人跌跌撞撞冲进了小屋";
words[4]="陌生人浑身湿透蜷缩在地上 瑟瑟发抖并满口不知所云";
words[5]="陌生人不再发抖 神色逐渐缓和";
words[6]="陌生人神志逐渐清醒 开始打量四周";
words[7]="陌生人表示自己是工匠 能够制造一些简单的东西";
words[8]="工匠希望能够定居下来 她可以帮忙做一些力所能及的事";
words[9]="工匠制作了一个小推车 这样可以收集更多的木头";
var trap_word="更多的陷阱可以捕捉更多的猎物";
var wood_collect="枯枝败叶把庭园弄得一团糟";
var trap_collect[];
trap_collect[0]="陷阱里发现了猎物、破碎的牙齿";
trap_collect[1]="陷阱里发现了猎物、破碎的牙齿和少量的鳞片";
trap_collect[2]="陷阱里发现了猎物、破碎的牙齿，少量的鳞片和奇怪的护身符";
function start(){
	w=new Worker('dome.js');
	w.onmessage = function (event) {
  	var x=event.data;
    wood=wood+x*x_wood;
    document.getElementById("wood").innerHTML=wood;
    };
}
function stop(){
	w.terminate();
	w=undefined;
}
function wood_collect(){
	if(cheche=1){
		wood+=40;
	}else{
		wood+=10;
	}
	document.getElementById("wood").innerHTML=wood;
}
