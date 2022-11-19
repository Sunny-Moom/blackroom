
Spry.Utils.addLoadListener(function() {
	Spry.$$("#button1").addEventListener('click', function(e){ startWorker() }, false);
	Spry.$$("#button2").addEventListener('click', function(e){ stopWorker() }, false);
	Spry.$$("#button3").addEventListener('click', function(e){ jia() }, false);
	Spry.$$("#button4").addEventListener('click', function(e){ jian() }, false);

var w;var z=0;
var q=1;
function startWorker()
{
if(typeof(Worker)!=="undefined")
  {
  if(typeof(w)=="undefined")
  {
  w=new Worker('dome.js');
  }
  w.onmessage = function (event) {
  	var x=event.data;
    z=z+x;
    document.getElementById("result").innerHTML=z;
    };
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker(){ 
w.terminate();
}
function jia(){
document.getElementById("result").innerHTML=z;
}
function jian(){
z=z-10;
document.getElementById("result").innerHTML=z;
}


});
