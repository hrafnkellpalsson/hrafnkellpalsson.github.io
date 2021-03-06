"use strict"

var cat = document.querySelector("img");
var angle = 0;
var lasttime = null;
function animate(time) {
	if (lasttime != null)
		angle += (time - lasttime) * 0.001;
	lasttime = time;
	cat.style.top = 250 + (Math.sin(angle) * 200) + "px";
	cat.style.left = (Math.cos(angle) * 300) - 250 + "px";
	requestAnimationFrame(animate);
}
requestAnimationFrame(animate);