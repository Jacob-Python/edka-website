let i = 1;
function showdiv(id){
	if (document.getElementById(id).hidden){
		document.getElementById(id).hidden = false;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("+","-")
	}else{
		document.getElementById(id).hidden = true;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("-","+")
	}
}
function next_img(){
	i ++;
	if (i > 2){
		i = 1;
		document.getElementById('1').setAttribute("fill", "grey");
		document.getElementById('2').setAttribute("fill", "black");
	} else {
		document.getElementById('2').setAttribute("fill", "grey");
		document.getElementById('1').setAttribute("fill", "black");
	}
	document.getElementById("slide").src = i+".jpg"
}
function last_img(){
	i --;
	if (i < 1){
		i = 2;
		document.getElementById('2').setAttribute("fill", "grey");
		document.getElementById('1').setAttribute("fill", "black");
	} else {
		document.getElementById('1').setAttribute("fill", "grey");
		document.getElementById('2').setAttribute("fill", "black");
	}
	document.getElementById("slide").src = i+".jpg"
	document.getElementById(i).fill = "grey"
	document.getElementById(i+1).fill = "black"
}