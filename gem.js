


window.onload = function () {
   
   var count=0;
   function ImagePreloader(array) {
        
        function LoadImage(url, index) {
         
                var img = new Image();
                img.onload = function () {
                   count=count+1;
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
                i = "";
            
            if (temp > 30) {
                if (images[temp - 10].src === rootimage && images[temp - 20].src === rootimage && images[temp - 30].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 40) {
                            images[i].src = images[i - 40].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                        }
                    }
                }
            }

            if (temp > 20) {
                if (images[temp - 10].src === rootimage && images[temp - 20].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 30) {
                            images[i].src = images[i - 30].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                        }
                    }
                }
            }

            if (temp < 70) {
                if (images[temp + 10].src === rootimage && images[temp + 20].src === rootimage && images[temp + 30].src === rootimage) {
                    match = true;
                    for (i = temp + 30; i > 0; i = i - 10) {
                        if (i > 40) {
                            images[i].src = images[i - 40].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                        }
                    }
                }
            }
            
            if (temp < 80) {
                if (images[temp + 10].src === rootimage && images[temp + 20].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp + 20; i > 0; i = i - 10) {
                        if (i > 30) {
                            images[i].src = images[i - 30].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                        }
                    }
                }
            }
            
            if (temp > 10 && temp < 90) {
                if (images[temp - 10].src === rootimage && images[temp + 10].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp + 10; i > 0; i = i - 10) {
                        if (i > 30) {
                            images[i].src = images[i - 30].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                        }
                    }
                }
            }

            if (temp.toString().slice(-1).indexOf(7) === -1 && temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (images[temp + 1].src === rootimage && images[temp + 2].src === rootimage && images[temp + 3].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            images[i].src = images[i - 10].src;
                            images[i + 1].src = images[i - 11].src;
                            images[i + 2].src = images[i - 12].src;
                            images[i + 3].src = images[i - 13].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                            images[i + 1].src = shuffle(array)[0];
                            images[i + 2].src = shuffle(array)[0];
                            images[i + 3].src = shuffle(array)[0];
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (images[temp + 1].src === rootimage && images[temp + 2].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;                    
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            images[i].src = images[i - 10].src;
                            images[i + 1].src = images[i - 11].src;
                            images[i + 2].src = images[i - 12].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                            images[i + 1].src = shuffle(array)[0];
                            images[i + 2].src = shuffle(array)[0];
                        }
                    }
                }
            }

            if (temp.toString().slice(-1).indexOf(2) === -1 && temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1) {
                if (images[temp - 1].src === rootimage && images[temp - 2].src === rootimage && images[temp - 3].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            images[i].src = images[i - 10].src;
                            images[i - 1].src = images[i - 11].src;
                            images[i - 2].src = images[i - 12].src;
                            images[i - 3].src = images[i - 13].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                            images[i - 1].src = shuffle(array)[0];
                            images[i - 2].src = shuffle(array)[0];
                            images[i - 3].src = shuffle(array)[0];
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1) {
                if (images[temp - 1].src === rootimage && images[temp - 2].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            images[i].src = images[i - 10].src;
                            images[i - 1].src = images[i - 11].src;
                            images[i - 2].src = images[i - 12].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                            images[i - 1].src = shuffle(array)[0];
                            images[i - 2].src = shuffle(array)[0];
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (images[temp - 1].src === rootimage && images[temp + 1].src === rootimage) {
                    match = true;
                    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML, 10)+100;
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            images[i].src = images[i - 10].src;
                            images[i - 1].src = images[i - 11].src;
                            images[i + 1].src = images[i + 11].src;
                        } else {
                            images[i].src = shuffle(array)[0];
                            images[i - 1].src = shuffle(array)[0];
                            images[i + 1].src = shuffle(array)[0];
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