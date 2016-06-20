


window.onload = function () {
    
    previous = undefined;
	function pagereloader() {        
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			current = escape(xhttp.responseText.toString());
			if(previous){
				if(previous!==current){location.reload();}
			}
			previous=current;
		}
	  };
	  xhttp.open("GET", window.location.href, true);
	  xhttp.send();

	} 
	setInterval(pagereloader, 1000);
    
    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '10pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }
    
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
    
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);
    
   var count = 0;
   function ImagePreloader(array) {
        
        function LoadImage(url, index) {
            
                var img = new Image();
                img.onload = function () {
                   count = count + 1;
                     if(count === array.length){game();}
                };
                img.onerror = function () {
                   
                };
                img.src = url;
           
        }

        function LoadImages(array) {
           
                var index;
                for (index = 0; index < array.length; index = index + 1) {
                    LoadImage(array[index], index);                    
                }
 
        }
       
       
        LoadImages(array);       
    }

    var array = ["crystal.png", "greencrystal.png", "bluecrystal.png", "orangecrystal.png", "redcrystal.png"];

    array = array.reverse().filter(function (e, i, array) {
        return array.indexOf(e, i + 1) === -1;
    }).reverse();

   ImagePreloader(array);
    function game(){
       
        var lastselected;

        function stylesheet() {
            var headContent = document.getElementsByTagName('head')[0], style = document.createElement('style'), css = "body{margin:0px;}#gamecontainer td{border:0px solid black;}#gamecontainer img{width:50px;height:50px;cursor:pointer;}#gamecontainer img:hover{ transform: rotate(90deg);-ms-transform: rotate(90deg); /* IE 9 */-moz-transform: rotate(90deg); /* Firefox */-webkit-transform: rotate(90deg); /* Safari and Chrome */-o-transform: rotate(90deg);}tr:nth-child(even) td:nth-child(even), tr:nth-child(odd) td:nth-child(odd){background:#98DAD8}tr:nth-child(even) td:nth-child(odd), tr:nth-child(odd) td:nth-child(even){background:#E2FFE1}#gamecontainer table{border: 5px solid orange;border-collapse:collapse; user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-o-user-select: none;}#gamecontainer #score::before{content: \"Score: \"}#gamecontainer #score{user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-o-user-select: none;cursor:default;}";
            css = document.createTextNode(css);
            style.appendChild(css);
            headContent.appendChild(style);
        }
        
        function shuffle(array) {
            "use strict";
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        function checklink(temp, match) {
          
            var images = document.getElementsByTagName("img"),
                rootimage = images[temp].src,
                i = "",
                array = [
                    {
                        "firstif": "temp > 30",
                        "secondif": "images[temp - 10].src === rootimage && images[temp - 20].src === rootimage && images[temp - 30].src === rootimage",
                        "g": 40, "h": 0, "score": 100
                    },
                    {
                        "firstif": "temp > 20",
                        "secondif": "images[temp - 10].src === rootimage && images[temp - 20].src === rootimage",
                        "g": 30, "h": 0, "score": 100
                    },
                    {
                        "firstif": "temp < 70",
                        "secondif": "images[temp + 10].src === rootimage && images[temp + 20].src === rootimage && images[temp + 30].src === rootimage",
                        "g": 40, "h": 30, "score": 100
                    },
                     {
                        "firstif": "temp < 80",
                        "secondif": "images[temp + 10].src === rootimage && images[temp + 20].src === rootimage",
                        "g": 30, "h": 20, "score": 100
                    },
                    {
                        "firstif": "temp > 10 && temp < 90",
                        "secondif": "images[temp - 10].src === rootimage && images[temp + 10].src === rootimage",
                        "g": 30, "h": 10, "score": 100
                    },
                    {
                        "firstif": "temp.toString().slice(-1).indexOf(7) === -1 && temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1",
                        "secondif": "images[temp + 1].src === rootimage && images[temp + 2].src === rootimage && images[temp + 3].src === rootimage",
                        "a": 1, "b": 2, "c": 11, "d": 12, "e": 3, "f": 12, "g": 10, "h": 0, "score": 100
                    },
                    {
                        "firstif": "temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1",
                        "secondif": "images[temp + 1].src === rootimage && images[temp + 2].src === rootimage",
                        "a": 1,"b": 2,"c": 11,"d": 12,"g": 10,"h": 0,"score": 100
                    },
                    {
                        "firstif": "temp.toString().slice(-1).indexOf(2) === -1 && temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1",
                        "secondif": "images[temp - 1].src === rootimage && images[temp - 2].src === rootimage && images[temp - 3].src === rootimage",
                        "a": -1,"b": -2,"c": 11,"d": 12,"e": -3,"f": 13,"g": 10,"h": 0,"score": 100
                    },
                    {
                        "firstif": "temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1",
                        "secondif": "images[temp - 1].src === rootimage && images[temp - 2].src === rootimage",
                        "a": -1, "b": -2, "c": 11, "d": 12, "g": 10, "h": 0, "score": 100
                    },
                     {
                        "firstif": "temp.toString().slice(-1).indexOf(9) === -1 && temp.toString().slice(-1).indexOf(0) === -1",
                        "secondif": "images[temp - 1].src === rootimage && images[temp + 1].src === rootimage",
                        "a": -1, "b": 1, "c": 11, "d": -11, "g": 10, "h": 0, "score": 100
                    }
                    
                ];
            
            for(i=0; i<array.length; i=i+1){
               a=array[i];
	           match = link(a.firstif,a.secondif,temp,images,a.a,a.b,a.c,a.d,a.e,a.f,a.g,a.h,match,rootimage,a.score);
            }         
            
            return match;
        }
        
        function link(firstif,secondif,temp,images,a,b,c,d,e,f,g,h,match,rootimage,score){
            firstif = window.eval.call(window,'(function (images,temp,rootimage) {return '+firstif+';})')(images,temp,rootimage);
            if (Boolean(firstif)) {
                secondif = window.eval.call(window,'(function (images,temp,rootimage) {return '+secondif+';})')(images,temp,rootimage);
                if (Boolean(secondif)) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+score;
                    for (i = temp + h; i > 0; i = i - 10) {
                        if (i > g) {
                            images[i].src = images[i - g].src;
                            if(a){images[i + a].src = images[i - c].src;}
                            if(b){images[i + b].src = images[i - d].src;}
                            if(e){images[i + e].src = images[i - f].src;}
                        } else {
                            images[i].src = shuffle(array)[0];
                            if(a){images[i + a].src = shuffle(array)[0];}
                            if(b){images[i + b].src = shuffle(array)[0];}
                            if(e){images[i + e].src = shuffle(array)[0];}
                        }
                    }
                }
            }
            
            return match;
            
        }

        function myFunction(selectedsrc, selectedid) {
            
            
            var images = "", temp = "", match, tempselected;
            
            if (parseInt(selectedid, 10) !== lastselected) {
                if (lastselected === "") {
                    tempselected = lastselected;
                    lastselected = parseInt(selectedid, 10);
                } else if (lastselected === selectedid + 10 || lastselected === selectedid - 10 || lastselected === selectedid - 1 || lastselected === selectedid + 1) {
                    selectedid = parseInt(selectedid, 10);
                    images = document.getElementsByTagName("img");
                    temp = document.getElementsByTagName("img")[lastselected].src;
                    images[lastselected].src = selectedsrc;
                    images[selectedid].src = temp;
                    match = false;
                    match = checklink(lastselected, match);
                    match = checklink(selectedid, match);
                    if (match === false) {
                        images[lastselected].src = temp;
                        images[selectedid].src = selectedsrc;
                    }
                    tempselected = lastselected;
                    lastselected = selectedid;

                } else {
                    tempselected = lastselected;
                    lastselected = parseInt(selectedid, 10);
                }
                
                
                document.getElementById(selectedid).parentElement.style.background = "yellow";
               
                if(tempselected !== undefined)
                {
                    if (tempselected % 2 === 0) {
                            document.getElementById(tempselected).parentElement.style.background = "#E2FFE1";
                    } else {
                         document.getElementById(tempselected).parentElement.style.background = "#98DAD8";
                    }
                }
                tempselected = null;
                
            }

            
        }

        function tableCreate() {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var img = new Image();
            img.src = "crystal.png";
            
            ctx.drawImage(img, 10, 10);
            var gamecontainer = document.getElementById('gamecontainer'),
                tbl = document.createElement('table'),
                tbdy = document.createElement('tbody'),
                tr = "",
                td = "",
                image = "",
                i = 0,
                j = 0,
                y = 0;

            
            for (i = 0; i < 10; i = i + 1) {
                tr = document.createElement('tr');
                for (j = 0; j < 10; j = j + 1) {
                    td = document.createElement('td');
                    image = document.createElement("img");
                    image.setAttribute("src", array[Math.floor((Math.random() * 5)).toString()]);
                    image.setAttribute("id", y);
                    y = y + 1;
                    td.appendChild(image);
                    tr.appendChild(td);
                    if(j===9 && i===0){
                        td = document.createElement('td');
                        td.setAttribute("rowspan","10");
                        td.setAttribute("colspan","1");
                        td.style.borderLeft="5px solid orange";
                        div = document.createElement("div");
                        score = document.createElement("div");
                        score.setAttribute("id","score");
                        score.innerHTML = "0";
                        div.appendChild(score);
                        td.appendChild(div);                        
                        tr.appendChild(td);
                    }
                }
                tbdy.appendChild(tr);
            }
            tbl.appendChild(tbdy);
            gamecontainer.appendChild(tbl);
            
        }

        ///self executing function similar to php's __Constuct
        (function creategame() {
            
            tableCreate();
            stylesheet();
            var i = 0;

            for (i = 0; i < document.getElementsByTagName("img").length; i = i + 1) {
                document.getElementsByTagName("img")[i].addEventListener('click', function () {
                    myFunction(this.src, this.id); 
                }, false);
            }
        })();

    }
   
};