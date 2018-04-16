vowelsHangul=["ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ"];
vowelsEnglish=["a","ya","eo","yeo","o","yo","u","yu","eu","i"];
consonantsHangul=["ㄱ","ㅋ","ㄴ","ㄷ","ㅌ","ㄹ","ㅁ","ㅂ","ㅍ","ㅅ","ㅈ","ㅎ","ㅊ","ㅇ"];
consonantsEnglish=["g","k","n","d","t","l","m","b","p","s","j","h","ch","ng"];
basicHangul=["ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ","ㄱ","ㅋ","ㄴ","ㄷ","ㅌ","ㄹ","ㅁ","ㅂ","ㅍ","ㅅ","ㅈ","ㅎ","ㅊ","ㅇ"];
basicEnglish=["a","ya","eo","yeo","o","yo","u","yu","eu","i","g","k","n","d","t","l","m","b","p","s","j","h","ch","ng"];
fullHangul=["ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ","ㄱ","ㅋ","ㄴ","ㄷ","ㅌ","ㄹ","ㅁ","ㅂ","ㅍ","ㅅ","ㅈ","ㅎ","ㅊ","ㅇ","ㄲ","ㄸ","ㅃ","ㅆ","ㅉ","ㅐ","ㅒ","ㅔ","ㅖ","ㅢ","ㅘ","ㅙ","ㅚ","ㅝ","ㅞ","ㅟ","ㄳ","ㄵ","ㄶ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅄ"];
fullEnglish=["a","ya","eo","yeo","o","yo","u","yu","eu","i","g","k","n","d","t","l","m","b","p","s","j","h","ch","ng","kk","tt","pp","ss","jj","ae","yae","e","ye","ui","wa","wae","oe","wo","we","wi","gs","nj","nh","lg","lm","lb","ls","lt","lp","lh","bs"];

geras = random2();
mygtukai = [];
procentai = 100;
atspeta = 0;
visoBandyta = 0;
rezimas = 10;

function pasirinkau(x) {
	
    if (x == geras)
	{
		document.getElementById("1").onclick = "";
		document.getElementById("2").onclick = "";
		document.getElementById("3").onclick = "";
		document.getElementById("4").onclick = "";
		document.getElementById("5").onclick = "";
		document.getElementById(x).style.background = "#034c12";
		
		atsakymoLaikas(1);
		atspeta += 1;
		visoBandyta += 1;
		procentai = 100/visoBandyta*atspeta;
		document.getElementById("virsusKaire").innerHTML = "<p>" + procentai.toFixed() + "%" + "&nbsp;&nbsp;&nbsp;" + atspeta + "/" + visoBandyta + "</p>";
		document.getElementById("atsakymas").innerHTML = "Correct!";
		document.getElementById("atsakymas").style.color = "green";
		
		
	}
	else
	{
		atsakymoLaikas(0);
		visoBandyta += 1;
		procentai = 100/visoBandyta*atspeta;
		document.getElementById("virsusKaire").innerHTML = "<p>" + procentai.toFixed() + "%" + "&nbsp;&nbsp;&nbsp;" + atspeta + "/" + visoBandyta + "</p>";
		document.getElementById("atsakymas").innerHTML = "Incorrect!";
		document.getElementById("atsakymas").style.color = "red";
		document.getElementById(x).style.background = "#660000";
		document.getElementById(x).onclick = "";
	}
}

function sugeneruojamListus()
{
	
	geras = random2();
	for(i=0;i<5;i++)
	{
		mygtukai[i] = random(rezimas);
	}
	while(mygtukai[1] == mygtukai[0])
	{
		mygtukai[1] = random(rezimas);
	}
	while(mygtukai[2] == mygtukai[0] || mygtukai[2] == mygtukai[1])
	{
		mygtukai[2] = random(rezimas);
	}
	while(mygtukai[3] == mygtukai[0] || mygtukai[3] == mygtukai[1] || mygtukai[3] == mygtukai[2])
	{
		mygtukai[3] = random(rezimas);
	}
	while(mygtukai[4] == mygtukai[0] || mygtukai[4] == mygtukai[1] || mygtukai[4] == mygtukai[2] || mygtukai[4] == mygtukai[3])
	{
		mygtukai[4] = random(rezimas);
	}
	
	if (rezimas == 10)
	{
		document.getElementById("rodinys").innerHTML = vowelsHangul[mygtukai[geras-1]-1];
		document.getElementById("1").innerHTML = vowelsEnglish[mygtukai[0]-1];
		document.getElementById("2").innerHTML = vowelsEnglish[mygtukai[1]-1];
		document.getElementById("3").innerHTML = vowelsEnglish[mygtukai[2]-1];
		document.getElementById("4").innerHTML = vowelsEnglish[mygtukai[3]-1];
		document.getElementById("5").innerHTML = vowelsEnglish[mygtukai[4]-1];
	}
	if (rezimas == 14)
	{
		document.getElementById("rodinys").innerHTML = consonantsHangul[mygtukai[geras-1]-1];
		document.getElementById("1").innerHTML = consonantsEnglish[mygtukai[0]-1];
		document.getElementById("2").innerHTML = consonantsEnglish[mygtukai[1]-1];
		document.getElementById("3").innerHTML = consonantsEnglish[mygtukai[2]-1];
		document.getElementById("4").innerHTML = consonantsEnglish[mygtukai[3]-1];
		document.getElementById("5").innerHTML = consonantsEnglish[mygtukai[4]-1];
	}
	if (rezimas == 24)
	{
		document.getElementById("rodinys").innerHTML = basicHangul[mygtukai[geras-1]-1];
		document.getElementById("1").innerHTML = basicEnglish[mygtukai[0]-1];
		document.getElementById("2").innerHTML = basicEnglish[mygtukai[1]-1];
		document.getElementById("3").innerHTML = basicEnglish[mygtukai[2]-1];
		document.getElementById("4").innerHTML = basicEnglish[mygtukai[3]-1];
		document.getElementById("5").innerHTML = basicEnglish[mygtukai[4]-1];
	}
	if (rezimas == 51)
	{
		document.getElementById("rodinys").innerHTML = fullHangul[mygtukai[geras-1]-1];
		document.getElementById("1").innerHTML = fullEnglish[mygtukai[0]-1];
		document.getElementById("2").innerHTML = fullEnglish[mygtukai[1]-1];
		document.getElementById("3").innerHTML = fullEnglish[mygtukai[2]-1];
		document.getElementById("4").innerHTML = fullEnglish[mygtukai[3]-1];
		document.getElementById("5").innerHTML = fullEnglish[mygtukai[4]-1];
	}
}

function random(y) {
    var x = Math.floor((Math.random() * y) + 1);
    return x;
}

function random2() {
    var x = Math.floor((Math.random() * 5) + 1);
    return x;
}

function reset() {
	sugeneruojamListus();
	atstatomMygtukuPaspaudimo();
	procentai = 100;
	atspeta = 0;
	visoBandyta = 0;
	document.getElementById("virsusKaire").innerHTML = "<p>" + procentai + "%" + "&nbsp;&nbsp;&nbsp;" + atspeta + "/" + visoBandyta + "</p>";
	for(i=1; i<=5; i++)
		{
			document.getElementById(i).style.background = "#333333";
		}
}

function atsakymoLaikas(x) {  
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 150) {
      clearInterval(id);
	  document.getElementById("atsakymas").innerHTML = "";
	  if (x == 1)
	  {
			for(i=1; i<=5; i++)
		{
			document.getElementById(i).style.background = "#333333";
		}
			sugeneruojamListus();
			atstatomMygtukuPaspaudimo();
	  }
    } else {
      pos++; 
    }
  }
}

function atstatomMygtukuPaspaudimo() {
	document.getElementById('1').style.cursor = 'pointer';
	document.getElementById('1').onclick = function() {
   pasirinkau(1);
};
	document.getElementById('2').style.cursor = 'pointer';
	document.getElementById('2').onclick = function() {
	pasirinkau(2);
};
	document.getElementById('3').style.cursor = 'pointer';
	document.getElementById('3').onclick = function() {
	pasirinkau(3);
};
	document.getElementById('4').style.cursor = 'pointer';
	document.getElementById('4').onclick = function() {
	pasirinkau(4);
};
	document.getElementById('5').style.cursor = 'pointer';
	document.getElementById('5').onclick = function() {
	pasirinkau(5);
};
}