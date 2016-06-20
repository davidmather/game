window.onload = function () {
    "use strict";
    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d'),
        boundingrect = canvas.getBoundingClientRect(),
        count = 0,
        imageObj = new Image(),
        t,
        canvas_img = [],
        offscreenCanvas = document.createElement("canvas"),
        offscreenContext = offscreenCanvas.getContext("2d"),
        j,
        i,
        index,
        mousePos,
        match,
        canvasdata,
        array = ["crystal.png", "greencrystal.png", "bluecrystal.png", "orangecrystal.png", "redcrystal.png"],
        lastselected,
        selectedid,
        loadimages,
        loadImage,
        ImagePreloaderCall,
        shufflearray = [];
	  
    function getMousePos(e) {
        return {
            x: e.clientX - boundingrect.left,
            y: e.clientY - boundingrect.top
        };
    }
    
    
    
    function game() {
        
        function canvas_draw_image(fillStyle, index) {
            context.fillStyle = fillStyle;
            context.fillRect(canvas_img[index].x, canvas_img[index].y, canvas_img[index].width, canvas_img[index].height);
            imageObj.src = canvas_img[index].src;
            context.drawImage(imageObj, canvas_img[index].x, canvas_img[index].y);
        }
        
        function array_index_random_shuffle_swap(i) {
            var randomindex = Math.floor((Math.random() * 5)).toString();
            canvas_img[i].data = shufflearray[randomindex].data;
            canvas_img[i].imagedata = shufflearray[randomindex].imagedata;
            canvas_img[i].src = shufflearray[randomindex].src;
            canvas_img[i].width = shufflearray[randomindex].width;
            canvas_img[i].height = shufflearray[randomindex].height;
            canvas_draw_image("black", i);
            return canvas_img;
        }
    
        function array_index_swap(array, selectedid, lastselected) {
            var temp =  [array[selectedid].src, array[selectedid].data, array[selectedid].imagedata];
            array[selectedid].src = array[lastselected].src;
            array[selectedid].data = array[lastselected].data;
            array[selectedid].imagedata = array[lastselected].imagedata;
            array[lastselected].src = temp[0];
            array[lastselected].data = temp[1];
            array[lastselected].imagedata = temp[2];
            canvas_draw_image("black", lastselected);
            canvas_draw_image("black", selectedid);
            return array;
        }
    
        
	   
        function checklink(temp, match) {
          
            var rootimage = canvas_img[temp].src,
                i = "";
            
            if (temp > 30) {
                if (canvas_img[temp - 10].src === rootimage && canvas_img[temp - 20].src === rootimage && canvas_img[temp - 30].src === rootimage) {
                    match = true;
                    
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 40) {
                            canvas_img = array_index_swap(canvas_img, i, i - 40);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                        }
                    }
                }
            }
            
            
            if (temp > 20) {
                if (canvas_img[temp - 10].src === rootimage && canvas_img[temp - 20].src === rootimage) {
                    match = true;
                   
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 30) {
                            canvas_img = array_index_swap(canvas_img, i, i - 30);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                        }
                    }
                }
            }

            if (temp < 70) {
                if (canvas_img[temp + 10].src === rootimage && canvas_img[temp + 20].src === rootimage && canvas_img[temp + 30].src === rootimage) {
                    match = true;
                    for (i = temp + 30; i > 0; i = i - 10) {
                        if (i > 40) {
                            canvas_img = array_index_swap(canvas_img, i, i - 40);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                        }
                    }
                }
            }
            
            if (temp < 80) {
                if (canvas_img[temp + 10].src === rootimage && canvas_img[temp + 20].src === rootimage) {
                    match = true;
                    
                    for (i = temp + 20; i > 0; i = i - 10) {
                        if (i > 30) {
                            canvas_img = array_index_swap(canvas_img, i, i - 30);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                        }
                    }
                }
            }
            
            if (temp > 10 && temp < 90) {
                if (canvas_img[temp - 10].src === rootimage && canvas_img[temp + 10].src === rootimage) {
                    match = true;
                    
                    for (i = temp + 10; i > 0; i = i - 10) {
                        if (i > 30) {
                            canvas_img = array_index_swap(canvas_img, i, i - 30);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                        }
                    }
                }
            }

            if (temp.toString().slice(-1).indexOf(7) === -1 && temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (canvas_img[temp + 1].src === rootimage && canvas_img[temp + 2].src === rootimage && canvas_img[temp + 3].src === rootimage) {
                    match = true;
                    
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            canvas_img = array_index_swap(canvas_img, i, i - 10);
                            canvas_img = array_index_swap(canvas_img, i + 1, i - 11);
                            canvas_img = array_index_swap(canvas_img, i + 2, i - 12);
                            canvas_img = array_index_swap(canvas_img, i + 3, i - 13);

                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                            canvas_img = array_index_random_shuffle_swap(i + 1);
                            canvas_img = array_index_random_shuffle_swap(i + 2);
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (canvas_img[temp + 1].src === rootimage && canvas_img[temp + 2].src === rootimage) {
                    match = true;
                                   
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            canvas_img = array_index_swap(canvas_img, i, i - 10);
                            canvas_img = array_index_swap(canvas_img, i + 1, i - 11);
                            canvas_img = array_index_swap(canvas_img, i + 2, i - 12);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                            canvas_img = array_index_random_shuffle_swap(i + 1);
                            canvas_img = array_index_random_shuffle_swap(i + 2);
                        }
                    }
                }
            }

            if (temp.toString().slice(-1).indexOf(2) === -1 && temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1) {
                if (canvas_img[temp - 1].src === rootimage && canvas_img[temp - 2].src === rootimage && canvas_img[temp - 3].src === rootimage) {
                    match = true;
                  
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            canvas_img = array_index_swap(canvas_img, i, i - 10);
                            canvas_img = array_index_swap(canvas_img, i - 1, i - 11);
                            canvas_img = array_index_swap(canvas_img, i - 2, i - 12);
                            canvas_img = array_index_swap(canvas_img, i - 3, i - 13);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                            canvas_img = array_index_random_shuffle_swap(i - 1);
                            canvas_img = array_index_random_shuffle_swap(i - 2);
                            canvas_img = array_index_random_shuffle_swap(i - 3);
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(1) === -1 && temp.toString().slice(-1).indexOf(0) === -1) {
                if (canvas_img[temp - 1].src === rootimage && canvas_img[temp - 2].src === rootimage) {
                    match = true;
                   
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            canvas_img = array_index_swap(canvas_img, i, i - 10);
                            canvas_img = array_index_swap(canvas_img, i - 1, i - 11);
                            canvas_img = array_index_swap(canvas_img, i - 2, i - 12);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                            canvas_img = array_index_random_shuffle_swap(i - 1);
                            canvas_img = array_index_random_shuffle_swap(i - 2);
                        }
                    }
                }
            }
            
            if (temp.toString().slice(-1).indexOf(8) === -1 && temp.toString().slice(-1).indexOf(9) === -1) {
                if (canvas_img[temp - 1].src === rootimage && canvas_img[temp + 1].src === rootimage) {
                    match = true;
                   
                    for (i = temp; i > 0; i = i - 10) {
                        if (i > 10) {
                            canvas_img = array_index_swap(canvas_img, i, i - 10);
                            canvas_img = array_index_swap(canvas_img, i - 1, i - 11);
                            canvas_img = array_index_swap(canvas_img, i + 1, i + 11);
                        } else {
                            canvas_img = array_index_random_shuffle_swap(i);
                            canvas_img = array_index_random_shuffle_swap(i - 1);
                            canvas_img = array_index_random_shuffle_swap(i + 1);
                        }
                    }
                }
            }
            
            
            return match;
        }
        
        function select(selectedid) {

            if (parseInt(selectedid, 10) !== lastselected) {
                if (lastselected === undefined) {
                    lastselected = selectedid;
                    canvas_draw_image("gold", lastselected);
                } else if (lastselected === selectedid + 10 || lastselected === selectedid - 10 || lastselected === selectedid - 1 || lastselected === selectedid + 1) {
                    canvas_img = array_index_swap(canvas_img, selectedid, lastselected);
                    match = false;
                    match = checklink(lastselected, match);
                    match = checklink(selectedid, match);
                    if (match === false) {
                        canvas_img = array_index_swap(canvas_img, selectedid, lastselected);
                    }
                    
                    
                    lastselected = undefined;
                } else {
                    canvas_draw_image("black", lastselected);
                    lastselected = parseInt(selectedid, 10);
                    canvas_draw_image("gold", lastselected);
                }
                
            }
        }
        
       

        for (i = 0; i < array.length; i = i + 1) {
            offscreenCanvas[i] = document.createElement("canvas");
            offscreenCanvas[i].width = 90;
            offscreenCanvas[i].height = 116;
            offscreenContext[i] = offscreenCanvas[i].getContext("2d");
            imageObj.src = array[i];
            offscreenContext[i].drawImage(imageObj, 0, 0, 90, 116);
            canvasdata = offscreenContext[i].getImageData(0, 0, offscreenCanvas[i].width, offscreenCanvas[i].height);
            shufflearray[i] = {
                data      : imageObj,
                imagedata : canvasdata,
                src       : imageObj.src,
                width     : imageObj.naturalWidth,
                height    : imageObj.naturalHeight
            };
        }
            
        t = canvas_img.length;
		for (j = 10; j < (canvas.height - imageObj.naturalHeight); j = j + 10 + imageObj.naturalHeight) {
            for (i = 20; i < (canvas.width - imageObj.naturalWidth); i = i + 10 + imageObj.naturalWidth) {
                index = Math.floor((Math.random() * 5)).toString();
                imageObj.src = array[index];
                canvasdata = offscreenContext[index].getImageData(0, 0, offscreenCanvas[index].width, offscreenCanvas[index].height);
                canvas_img[t] = {
                    x             : i,
                    y             : j,
                    data          : imageObj,
                    imagedata     : canvasdata,
                    src	          : imageObj.src,
                    width         : imageObj.naturalWidth,
                    height        : imageObj.naturalHeight,
                    click         : true,
                    clickfunction : select
                };
                context.fillRect(i, j, imageObj.naturalWidth + 10, imageObj.naturalHeight + 10);
                context.drawImage(imageObj, i, j);
                t = t + 1;
            }
        }
            

	    canvas.addEventListener('click', function (e) {
		    mousePos = getMousePos(e);
          
		    for (i = 0; i < canvas_img.length; i = i + 1) {
                if (canvas_img[i].click === true) {
                    if (mousePos.x > canvas_img[i].x && mousePos.y > canvas_img[i].y) {
                        if (mousePos.x < (canvas_img[i].x + canvas_img[i].width) && mousePos.y < (canvas_img[i].y + canvas_img[i].height)) {
                            if (canvas_img[i].imagedata.data[((mousePos.y - canvas_img[i].y) * canvas_img[i].width + (mousePos.x - canvas_img[i].x)) * 4 + 3] !== 0) {
                                canvas_img[i].clickfunction(i);

                            }

                        }
                    }
                }
		    }
        });

    }
    
    function ImagePreloader(array) {
        
        function LoadImage(url, index) {
            
            var img = new Image();
            img.onload = function () {
                count = count + 1;
                if (count === array.length) {game(); }
            };
            img.onerror = function () {};
            img.src = url;
           
        }

        function LoadImages(array) {
           
            var index;
            for (index = 0; index < array.length; index = index + 1) {
                loadImage = new LoadImage(array[index], index);
            }
           
        }
        loadimages = new LoadImages(array);
        
    }

    array = array.reverse().filter(function (e, i, array) {
        return array.indexOf(e, i + 1) === -1;
    }).reverse();
    
    ImagePreloaderCall = new ImagePreloader(array);
    
};