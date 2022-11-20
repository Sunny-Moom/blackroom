// JavaScript Document
var cid = [[],[],[],[]];
var fire_word="熊熊燃烧着的 火堆";//火堆触发剧情
var warm_word=["寒冷的 小屋",
			   "有了温度的 小屋",
			   "温度刚好的 小屋",
			   "温暖的 小屋",
			   "热的 小屋"];//小屋温度剧情
var words=["风雨交加的 夜晚",
		   "漆黑的 小屋",
		   "一个陌生人跌跌撞撞冲进了小屋",
		   "陌生人浑身湿透蜷缩在地上 瑟瑟发抖并满口不知所云",
		   "陌生人不再发抖 神色逐渐缓和",
		   "陌生人神志逐渐清醒 开始打量四周",
		   "陌生人表示自己是工匠 能够制造一些简单的东西",
		   "工匠希望能够定居下来 她可以帮忙做一些力所能及的事",
		   "工匠制作了一个小推车 这样可以收集更多的木头"];//起始剧情
var trap_word="更多的陷阱可以捕捉更多的猎物";//制作陷阱触发
var wood_collect="枯枝败叶把庭园弄得一团糟";//收集木头触发
var trap_collect=["陷阱里发现了猎物、破碎的牙齿",
				  "陷阱里发现了猎物、破碎的牙齿和少量的鳞片",
				  "陷阱里发现了猎物、破碎的牙齿，少量的鳞片和奇怪的护身符"];//陷阱普通事件
var warm=0;
var level=0;
cid[0][0]=5;
function dispaly(a,b){
	if(b==true) document.getElementById("a").style.display='inline';
	else document.getElementById("a").style.display='none';
}//a为组件id，b为布尔值
function wordout(a){
	document.getElementById("words").value+='\n'+a;
	textgb();
}//a为输出的剧情
function newgame(){
	if(level==0){
		setTimeout("wordout("+words[1]+")",2000);
	}
}