var tOrT = 0;

function dayToggle() {
	select.play();
	if (tOrT == 0) {
		document.getElementById("dayToggle").style.backgroundImage = "url('img/tomorrow.png')";
		document.getElementById("results").style.border = "2px solid #b33bc2;";
		document.getElementById("menu").style.backgroundImage = "url('img/curve2.png')";
		document.body.style.backgroundImage = "url('img/bg2.png')";
		tOrT = 1;
	} else if (tOrT == 1) {
		document.getElementById("dayToggle").style.backgroundImage = "url('img/today.png')";
		document.getElementById("results").style.border = "2px solid #c23b98;";
		document.getElementById("menu").style.backgroundImage = "url('img/curve.png')";
		document.body.style.backgroundImage = "url('img/bg.png')";
		tOrT = 0;
	} else if (tOrT > 1) {
		document.getElementById("dayToggle").style.backgroundImage = "url('img/today.png')";
		document.getElementById("results").style.border = "2px solid #c23b98;";
		document.getElementById("menu").style.backgroundImage = "url('img/curve.png')";
		document.body.style.backgroundImage = "url('img/bg.png')";
		tOrT = 0;
	}
	
}

function fortuneCalc() {
    var date = new Date();
	var nameStartingPoint = document.getElementById("nameInput").value.toUpperCase()
	var name = nameStartingPoint.charCodeAt(0);
	var nameValue = nameStartingPoint.length;
	var lastChar = nameStartingPoint.charCodeAt(nameValue - 1);
	var calculatedValue = ((name * (date.getDate() + tOrT)) + (lastChar * date.getMonth()) * nameValue) % 101;
	if (tOrT == 0) {
	    document.getElementById("luckValue").innerHTML = "Your luck for today is: " + calculatedValue + " points!";
	} else if (tOrT == 1) {
	    document.getElementById("luckValue").innerHTML = "Your luck for tomorrow is: " + calculatedValue + " points!";
	} else if (tOrT > 1) {
	    document.getElementById("luckValue").innerHTML = "Your luck for today is: " + calculatedValue + " points!";
	}
	var fortuneDeterminer = ((calculatedValue * calculatedValue) % 25 )+ 1
	var colorDeterminer = ((calculatedValue / fortuneDeterminer | 0) % 16 )+ 1
	
// begin giant table of fortunes
	if (fortuneDeterminer == 1 ) {
        document.getElementById("fortunetext").innerHTML = "A golden opportunity to show off your professional skills could be on the cards today.";
}	else if (fortuneDeterminer == 2 ) {
        document.getElementById("fortunetext").innerHTML = "The preparation phase is over and it's time for the real thing. Take a deep breath and then give it your all!";
}	else if (fortuneDeterminer == 3 ) {
        document.getElementById("fortunetext").innerHTML = "This could prove to be a tough day and you may even exchange harsh words with someone you care about deeply.";
}	else if (fortuneDeterminer == 4 ) {
        document.getElementById("fortunetext").innerHTML = "You'll get a glimpse of the bigger picture today and see the connections between the different areas you're studying.";
}	else if (fortuneDeterminer == 5 ) {
        document.getElementById("fortunetext").innerHTML = "Don't show off your knowledge today or you'll risk the ire of those around you. No one likes a know-it-all.";
}	else if (fortuneDeterminer == 6 ) {
        document.getElementById("fortunetext").innerHTML = "Express your feelings and your own	opinion today. Be brave and say what you think. You'll be pleased by other people's response.";
}	else if (fortuneDeterminer == 7 ) {
        document.getElementById("fortunetext").innerHTML = "Today could prove expensive, so you may need some money in reserve. Good planning and organisation are key.";
}	else if (fortuneDeterminer == 8 ) {
        document.getElementById("fortunetext").innerHTML = "A day to have fun with good friends. Playing a game or sport will release you from all your stress and worries.";
}	else if (fortuneDeterminer == 9 ) {
        document.getElementById("fortunetext").innerHTML = "Don't leave those around you in doubt about where you stand today. If you don't speak up, they'll never know.";
}	else if (fortuneDeterminer == 10 ) {
        document.getElementById("fortunetext").innerHTML = "You'll feel a real sense of achievement today. Enjoy it your efforts have paid off at long last!";
}	else if (fortuneDeterminer == 11 ) {
        document.getElementById("fortunetext").innerHTML = "It's normal to feel a little nervous when close to that certain someone, but do your best today not to let it show.";
}	else if (fortuneDeterminer == 12 ) {
        document.getElementById("fortunetext").innerHTML = "Don't be afraid to talk to your friends today if you're having romantic troubles. They may have valuable advice for you.";
}	else if (fortuneDeterminer == 13 ) {
        document.getElementById("fortunetext").innerHTML = "Don't let disappointment or heartbreak occupy your mind today. A bright future is waiting just around the corner.";
}	else if (fortuneDeterminer == 14 ) {
        document.getElementById("fortunetext").innerHTML = "A task you've been working on in secret will become more widely-known today. Do some fine-tuning to ensure it's ready.";
}	else if (fortuneDeterminer == 15 ) {
        document.getElementById("fortunetext").innerHTML = "You may need to ask for advice today. Before you do, try to make sure you've clarified the precise problems you're facing.";
}	else if (fortuneDeterminer == 16 ) {
        document.getElementById("fortunetext").innerHTML = "Once you've made up your mind today about how to tackle a task, don't let yourself be diverted or swayed by other arguments.";
}	else if (fortuneDeterminer == 17 ) {
        document.getElementById("fortunetext").innerHTML = "A perfect day for a clear-out.  Make a firm decision to get rid of all those things you no longer need.";
}	else if (fortuneDeterminer == 18 ) {
        document.getElementById("fortunetext").innerHTML = "Your grades may slip a little today, but don't be demotivated. You can make up the lost ground next time.";
}	else if (fortuneDeterminer == 19 ) {
        document.getElementById("fortunetext").innerHTML = "A day to take stock and check whether or not you've really grasped what you've been studying.";
}	else if (fortuneDeterminer == 20 ) {
        document.getElementById("fortunetext").innerHTML = "Your specialist skills and knowledge are likely to be put to the test today. This can only be good for your reputation.";
}	else if (fortuneDeterminer == 21 ) {
        document.getElementById("fortunetext").innerHTML = "Today will be filled with opportunities to meet new people. Be open and friendly and people will respond well to you.";
}	else if (fortuneDeterminer == 22 ) {
        document.getElementById("fortunetext").innerHTML = "You may get a little money to play with today. Think about how to invest it in order to maximise your returns.";
}	else if (fortuneDeterminer == 23 ) {
        document.getElementById("fortunetext").innerHTML = "If you've got financial worries weighing you down, you should share them with someone you can really trust.";
}	else if (fortuneDeterminer == 24 ) {
        document.getElementById("fortunetext").innerHTML = "Set yourself long-term goals for your saving. If you only think short-term, you'll end up making a loss.";
}	else if (fortuneDeterminer == 25 ) {
        document.getElementById("fortunetext").innerHTML = "There's no better way to spend money today than on boosting your own skills. Think about taking a course.";
} else if (isNaN(fortuneDeterminer) ) {
		colorDeterminer = 17;
        document.getElementById("fortunetext").innerHTML = "I'm not even sure what you did to get NaN points, but I guess it means that you're impossibly unlucky.";
}

//begin table of colors
	if (colorDeterminer == 1 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is red."
     document.getElementById("luckycolor").style.color = "#ff0000";
}	else if (colorDeterminer == 2 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is lime."
     document.getElementById("luckycolor").style.color = "#ABCD26";
}	else if (colorDeterminer == 3 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is yellow."
     document.getElementById("luckycolor").style.color = "#ffea05";
}	else if (colorDeterminer == 4 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is green."
     document.getElementById("luckycolor").style.color = "#52DE15";
}	else if (colorDeterminer == 5 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is orange."
     document.getElementById("luckycolor").style.color = "#ff8a00";
}	else if (colorDeterminer == 6 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is white."
     document.getElementById("luckycolor").style.color = "#fff";
}	else if (colorDeterminer == 7 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is blurple."
     document.getElementById("luckycolor").style.color = "#7289DA";
}	else if (colorDeterminer == 8 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is purple."
     document.getElementById("luckycolor").style.color = "#9a1ce3";
}	else if (colorDeterminer == 9 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is teal."
     document.getElementById("luckycolor").style.color = "#16cd8a";
}	else if (colorDeterminer == 10 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is hot pink."
     document.getElementById("luckycolor").style.color = "#e122a4";
}	else if (colorDeterminer == 11 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is olive."
     document.getElementById("luckycolor").style.color = "#4b8723";
}	else if (colorDeterminer == 12 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is silver."
     document.getElementById("luckycolor").style.color = "#949494";
}	else if (colorDeterminer == 13 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is sky blue."
     document.getElementById("luckycolor").style.color = "#74a4d1";
}	else if (colorDeterminer == 14 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is black."
     document.getElementById("luckycolor").style.color = "#181818";
}	else if (colorDeterminer == 15 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is dark green."
     document.getElementById("luckycolor").style.color = "#084600";
}	else if (colorDeterminer == 16 ) {
	 document.getElementById("luckycolor").innerHTML = "Your lucky color is gold."
     document.getElementById("luckycolor").style.color = "#ffac2a";
}	else if (colorDeterminer == 17 ) {
		document.getElementById("luckycolor").style.color = "rgba(0,0,0,0)";
        document.getElementById("luckycolor").innerHTML = "Impossibility has no color.";
}
}