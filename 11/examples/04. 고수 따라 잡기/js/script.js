window.addEventListener("load", lightBar, false);


function lightBar () {
	var box = document.getElementsByTagName("div");
	var button = document.getElementsByClassName("button");
	var intervalID;
	var classArray = ["yellow", "blue", "orange"];
	var loopNum = 0;
	
	button[0].addEventListener("click", startAction, false);
	button[1].addEventListener("click", stopAction, );
	
	function startAction () {
		if (!intervalID) {
			intervalID = window.setInterval(setStyle, 500);
		}
	}
	
	function stopAction () {
		if (intervalID) {
			window.clearInterval(intervalID);
			for (var i=1; i <=3; i++) {
				box[i].removeAttribute("class");
			}
			intervalID = null;
			loopNum = 0;
		}
	}
	
	function setStyle () {
		box[1].setAttribute("class", classArray[loopNum%3]);
		box[2].setAttribute("class", classArray[(loopNum+1)%3]);
		box[3].setAttribute("class", classArray[(loopNum+2)%3]);
		loopNum = (loopNum+1)%3;
	}
}