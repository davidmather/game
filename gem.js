function setCookie(cname, cvalue, exdays) {
    "use strict";
    var d = new Date(), expires = "";
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    "use strict";
    var name = cname + "=", ca = document.cookie.split(';'), c = "", i = "";
    for (i = 0; i < ca.length; i = i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    "use strict";
    var id = getCookie("id");
    if (id !== "") {
        return (id);
    }
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

function checklink(temp) {
    "use strict";
	var array = ["crystal.png", "greencrystal.png", "bluecrystal.svg", "orangecrystal.png", "redcrystal.png"],
	    images = document.getElementsByTagName("img"),
	    rootimage = images[temp].src,
        i = "";
    if (images[temp - 10].src === rootimage && images[temp - 20].src === rootimage) {
		for (i = temp; i > 0; i = i - 10) {
			if (i > 30) {
				images[i].src = images[i - 30].src;
			} else {
				images[i].src = shuffle(array)[0];
			}
		}
	}
}

function myFunction(a, b) {
    "use strict";
    var cookieint = parseInt(checkCookie(), 10), images = "", temp = "";
	if (checkCookie() === "") {setCookie("id", b, 30); } else if (cookieint === b + 10 || cookieint === b - 10 || cookieint === b - 1 || cookieint === b + 1) {
		images = document.getElementsByTagName("img");
		temp = document.getElementsByTagName("img")[checkCookie()].src;
		images[checkCookie()].src = a;
		images[b].src = temp;
		checklink(checkCookie());
		checklink(b);
		setCookie("id", "", 30);
	} else {setCookie("id", b, 30); }
}

function tableCreate() {
    "use strict";
    var body = document.getElementsByTagName('body')[0],
        tbl = document.createElement('table'),
        tbdy = document.createElement('tbody'),
        array = ["crystal.png", "greencrystal.png", "bluecrystal.svg", "orangecrystal.png", "redcrystal.png"],
        tr = "",
        td = "",
        image = "",
        i = 0,
        j = 0,
        y = 0;
    
    tbl.setAttribute('border', '1');
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
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}


function creategame() {
    "use strict";
    tableCreate();
    var i = 0;

    for (i = 0; i < document.getElementsByTagName("img").length; i = i + 1) {
        document.getElementsByTagName("img")[i].addEventListener('click', function () {myFunction(this.src, this.id); }, false);
    }
}