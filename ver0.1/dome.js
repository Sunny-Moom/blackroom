var i = 1;

function timedCount() {
    postMessage(i);
    setTimeout("timedCount()",5000);
}

timedCount();