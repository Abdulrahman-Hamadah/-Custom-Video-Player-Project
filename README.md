
# Custom Video Player Project

the project was created using 3 files: HTML, CSS, and JavaScript file.

<br />
<br />

 # HTML file ![#FFA500](https://via.placeholder.com/15/FFA500/FFA500.png) 

 the HTML file basically contains many < div > tags, each tag has a class name so we can refer to each class in the CSS and JavaScript file.
  
  
  
  
```html
  <html>

  <head>

    <title> Video Player Project </title>

    <link rel="stylesheet" href="CSS_FILE.css">

    <!-- These 3 links are only for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  </head>

  <body>

    <div class="container show-controls">               <!-- Conatin Everything with the video -->

        <div class="wrapper">                           <!-- Conatin Everything but without the video -->

            <div class="video-timeline">                <!-- Conatin things related to the video timeline and progress bar -->

                <div class="progress-area">
                    
                    <span> 00:00 </span>

                    <div class="progress-bar"></div>

                </div>

            </div>

            <ul class="video-controls">                 <!-- Conatin things Everything related to the video controls -->

                <li class="options left">               <!-- Conatin the controls on the left side of the video -->      

                    <button class="volume">

                        <i class="fa-solid fa-volume-high"></i>

                    </button>

                    <input type="range" min="0" max="1" step="any">

                    <div class="video-timer">

                        <p class="current-time"> 00:00 </p>

                        <p class="separator"> / </p>

                        <p class="video-duration"> 00:00 </p>

                    </div>

                </li>

                <li class="options center">             <!-- Conatin the controls on the center of the video -->

                    <button class="skip-backward">

                        <i class="fas fa-backward"></i>

                    </button>

                    <button class="play-pause">

                        <i class="fas fa-play"></i>

                    </button>

                    <button class="skip-forward">

                        <i class="fas fa-forward"></i>

                    </button>

                </li>

                <li class="options right">              <!-- Conatin the controls on the right side of the video --> 

                    <div class="playback-content">      <!-- Conatin things related to the video speed button -->
                        
                        <button class="playback-speed">

                            <span class="material-symbols-rounded"> slow_motion_video </span>

                        </button>

                        <ul class="speed-options">      <!-- Conatin the speed options and each option has a unique data value that we can use in JavaScript -->

                            <li data-speed="2"> 2x </li>

                            <li data-speed="1.5"> 1.5x </li>

                            <li data-speed="1" class="active"> Normal </li>

                            <li data-speed="0.75"> 0.75x </li>

                            <li data-speed="0.5"> 0.5x </li>

                        </ul>

                    </div>

                    <button class="pic-in-pic">

                        <span class="material-icons"> picture_in_picture_alt </span>

                    </button>

                    <button class="fullscreen">

                        <i class="fa-solid fa-expand"></i>

                    </button>

                </li>

            </ul>

        </div>

        <video src="video.mp4"></video>

    </div>

    <script src="JS_FILE.js"></script>

  </body>

</html>
```
</br>
</br>

# CSS file ![#0000FF](https://via.placeholder.com/15/0000FF/0000FF.png) 
the CSS file contains all the designs we need. for example to design our icons of the video and to put them inisde the video and so on..

```css
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  min-height: 100vh;
  background: #E3F2FD;
}
body, .container, .video-controls, .video-timer, .options{
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  width: 98%;
  user-select: none;
  overflow: hidden;
  max-width: 900px;
  border-radius: 5px;
  background: #000;
  aspect-ratio: 16 / 9;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.container.fullscreen{
  max-width: 100%;
  width: 100%;
  height: 100vh;
  border-radius: 0px;
}
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  bottom: -15px;
  transition: all 0.08s ease;
}
.container.show-controls .wrapper{
  opacity: 1;
  bottom: 0;
  transition: all 0.13s ease;
}
.wrapper::before{
  content: "";
  bottom: 0;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: calc(100% + 35px);
  pointer-events: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
.video-timeline{
  height: 7px;
  width: 100%;
  cursor: pointer;
}
.video-timeline .progress-area{
  height: 3px;
  position: relative;
  background: rgba(255, 255, 255, 0.6);
}
.progress-area span{
  position: absolute;
  left: 50%;
  top: -25px;
  font-size: 13px;
  color: #fff;
  pointer-events: none;
  transform: translateX(-50%);
}
.progress-area .progress-bar{
  width: 0%;
  height: 100%;
  position: relative;
  background: #2289ff;
}
.progress-bar::before{
  content: "";
  right: 0;
  top: 50%;
  height: 13px;
  width: 13px;
  position: absolute;
  border-radius: 50%;
  background: #2289ff;
  transform: translateY(-50%);
}
.progress-bar::before, .progress-area span{
  display: none;
}
.video-timeline:hover .progress-bar::before,
.video-timeline:hover .progress-area span{
  display: block;
}
.wrapper .video-controls{
  padding: 5px 20px 10px;
}
.video-controls .options{
  width: 100%;
}
.video-controls .options:first-child{
  justify-content: flex-start;
}
.video-controls .options:last-child{
  justify-content: flex-end;
}
.options button{
  height: 40px;
  width: 40px;
  font-size: 19px;
  border: none;
  cursor: pointer;
  background: none;
  color: #efefef;
  border-radius: 3px;
  transition: all 0.3s ease;
}
.options button :where(i, span) {
  height: 100%;
  width: 100%;
  line-height: 40px;
}
.options button:hover :where(i, span){
  color: #fff;
}
.options button:active :where(i, span){
  transform: scale(0.9);
}
.options button span{
  font-size: 23px;
}
.options input{
  height: 4px;
  margin-left: 3px;
  max-width: 75px;
  accent-color: #0078FF;
}
.options .video-timer{
  color: #efefef;
  margin-left: 15px;
  font-size: 14px;
}
.video-timer .separator{
  margin: 0 5px;
  font-size: 16px;
  font-family: "Open sans";
}
.playback-content{
  display: flex;
  position: relative;
}
.playback-content .speed-options{
  position: absolute;
  list-style: none;
  left: -40px;
  bottom: 40px;
  width: 95px;
  overflow: hidden;
  opacity: 0;
  border-radius: 4px;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.13s ease;
}
.playback-content .speed-options.show{
  opacity: 1;
  pointer-events: auto;
}
.speed-options li{
  cursor: pointer;
  color: #000;
  font-size: 14px;
  margin: 2px 0;
  padding: 5px 0 5px 15px;
  transition: all 0.1s ease;
}
.speed-options li:where(:first-child, :last-child){
  margin: 0px;
}
.speed-options li:hover{
  background: #dfdfdf;
}
.speed-options li.active{
  color: #fff;
  background: #3e97fd;
}
.container video{
  width: 100%;
}

@media screen and (max-width: 540px) {
  .wrapper .video-controls{
    padding: 3px 10px 7px;
  }
  .options input, .progress-area span{
    display: none!important;
  }
  .options button{
    height: 30px;
    width: 30px;
    font-size: 17px;
  }
  .options .video-timer{
    margin-left: 5px;
  }
  .video-timer .separator{
    font-size: 14px;
    margin: 0 2px;
  }
  .options button :where(i, span) {
    line-height: 30px;
  }
  .options button span{
    font-size: 21px;
  }
  .options .video-timer, .progress-area span, .speed-options li{
    font-size: 12px;
  }
  .playback-content .speed-options{
    width: 75px;
    left: -30px;
    bottom: 30px;
  }
  .speed-options li{
    margin: 1px 0;
    padding: 3px 0 3px 10px;
  }
  .right .pic-in-pic{
    display: none;
  }
}
```
</br>
</br>

# JavaScript file ![#FFFF00](https://via.placeholder.com/15/FFFF00/FFFF00.png) 
The JavaScript file will be used to make all the video controls functions work.

```javascript
const container = document.querySelector(".container")            

mainVideo = container.querySelector("video")                      

playPauseBtn = container.querySelector(".play-pause i")           

skipForward = container.querySelector(".skip-forward i")          

skipBackward = container.querySelector(".skip-backward i")        

volumeBtn = container.querySelector(".volume i")                  

volumeSlider = container.querySelector(".left input")             

speedBtn = container.querySelector(".playback-speed span")        

speedOptions = container.querySelector(".speed-options")          

picInPicBtn = container.querySelector(".pic-in-pic span")         

fullScreenBtn = container.querySelector(".fullscreen i");         

progressBar = container.querySelector(".progress-bar")            

videoTimeline = container.querySelector(".video-timeline")        

currentVidTime = container.querySelector(".current-time")         

videoDuration = container.querySelector(".video-duration")        

let timer;                                                        





playPauseBtn.addEventListener("click", () => {                    

    (mainVideo.paused) ? mainVideo.play() : mainVideo.pause();    

});

mainVideo.addEventListener("play", () => {                        

    playPauseBtn.classList.replace("fa-play", "fa-pause");        

});

mainVideo.addEventListener("pause", () => {                       

    playPauseBtn.classList.replace("fa-pause", "fa-play");        

});

skipForward.addEventListener("click", () => {                       

    mainVideo.currentTime += 5;                                    

});

skipBackward.addEventListener("click", () => {                       

    mainVideo.currentTime -= 5;                                    

});

volumeBtn.addEventListener("click", () => {                       

    if ( ! volumeBtn.classList.contains( "fa-volume-high" ) ) {                     

        mainVideo.volume = 0.5;                                                     

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        
    }
    
    else {                                                                          

        mainVideo.volume = 0.0;                                                     

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        
    }

    volumeSlider.value = mainVideo.volume;                                          

});

volumeSlider.addEventListener("input", event => {                                   

    mainVideo.volume = event.target.value;                                          

    if ( event.target.value == 0 ) {                                                

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        

    }

    else {                                                                          

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        

    }

});

speedBtn.addEventListener("click", () => {                       

    speedOptions.classList.toggle("show");                                                              

});

document.addEventListener("click", e => {

    if ( e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded" ) {           

        speedOptions.classList.remove("show");                                                          

    }

});

speedOptions.querySelectorAll( "li" ).forEach(option => {                           

    option.addEventListener("click", () => {                                        

        mainVideo.playbackRate = option.dataset.speed;                              

        speedOptions.querySelector( ".active" ).classList.remove( "active" );       

        option.classList.add( "active" );                                           

    });

});

picInPicBtn.addEventListener("click", () => {                       

    mainVideo.requestPictureInPicture();                                            

});

fullScreenBtn.addEventListener("click", () => {

    container.classList.toggle( "fullscreen" );                                 

    if(document.fullscreenElement) {                                            

        fullScreenBtn.classList.replace( "fa-compress", "fa-expand" );          

        return document.exitFullscreen();                                       

    }

    else {                                                                      

        fullScreenBtn.classList.replace("fa-expand", "fa-compress");            

        container.requestFullscreen();                                          

    }
  
});



const formatTime = time => {

    

    let seconds = Math.floor(time % 60),

    minutes = Math.floor(time / 60) % 60,

    hours = Math.floor(time / 3600);

    

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0) {                

        return `${minutes}:${seconds}`

    }

    return `${hours}:${minutes}:${seconds}`;
    
}



mainVideo.addEventListener("timeupdate", event => {               

    let { currentTime, duration }  = event.target;                

    let percent = ( currentTime / duration ) * 100;               

    progressBar.style.width = ` ${percent}% `;                    

    currentVidTime.innerText = formatTime(currentTime);           
});


mainVideo.addEventListener("loadeddata", () => {                                

    videoDuration.innerText = formatTime(mainVideo.duration);                   

});


videoTimeline.addEventListener("click", e => {

    let timelineWidth = videoTimeline.clientWidth;                

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;       

});




const draggableProgressBar = e => { 

    let timelineWidth = videoTimeline.clientWidth;              

    progressBar.style.width = `${e.offsetX}px`;                 

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;

    currentVidTime.innerText = formatTime(mainVideo.currentTime);           
}



videoTimeline.addEventListener("mousedown", () => {                              

 videoTimeline.addEventListener("mousemove", draggableProgressBar)               
 
});

document.addEventListener("mouseup", () => {                                    

    videoTimeline.removeEventListener("mousemove", draggableProgressBar)
    
});



videoTimeline.addEventListener("mousemove", e => {

    const progressTime = videoTimeline.querySelector("span");

    let offsetX = e.offsetX;                                

    progressTime.style.left = `${offsetX}px`;               


    let timelineWidth = videoTimeline.clientWidth;          

    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration); 

    progressTime.innerText = formatTime(percent);                               

    offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;

});

const hideControls = () => {

    if(mainVideo.paused) return;                      

    timer = setTimeout(() => {

        container.classList.remove("show-controls");  

    }, 3000);

}

hideControls();

container.addEventListener("mousemove", () => {     

    container.classList.add("show-controls");       

    clearTimeout(timer);

    hideControls();   
    
});
```

</br>
</br>

# JavaScript file step by step explanation ![#FFFF00](https://via.placeholder.com/15/FFFF00/FFFF00.png) 

</br>

# Step 1:
create a variable that refer to the 'container' class in the HTML file.

```javascript
const container = document.querySelector(".container") 
```

# Step 2:
create a variable that refer to the video itself in the HTML file.

```javascript
mainVideo = container.querySelector("video")
```

# Step 3:
create a variable that refer to the play/pause button inside the 'video' class.

```javascript
playPauseBtn = container.querySelector(".play-pause i")
```

# Step 4:
we will create a function to make the play/pause button work. the "click" is an event that related to the "addEventListener" to make something happen when the user click the button. and the "click" is also added to the function to make the function work when the user click the play/pause button

```javascript
playPauseBtn.addEventListener("click", () => {                    

    (mainVideo.paused) ? mainVideo.play() : mainVideo.pause();    

});
```

# Step 5:
we will create a function to make the play/pause button work. the "click" is an event that related to the "addEventListener" to make something happen when the user click the button. and the "click" is also added to the function to make the function work when the user click the play/pause button. inside this function there is a condition that use the "play()" and "pause()" methods to make the video play and pause. So if the video is paused then it will play it. otherwise it will pause it

```javascript
playPauseBtn.addEventListener("click", () => {                    

    (mainVideo.paused) ? mainVideo.play() : mainVideo.pause();    

});
```

# Step 6:
we will create a function to make the play/pause button change it's icon when the video is playing. the "play" is an event that related to the "addEventListener" to make something happen when the video is playing. inside this function we are using the "classList" to be able to return one of the "DOMTokenList" methods which is "replace" method.

```javascript
mainVideo.addEventListener("play", () => {                        

    playPauseBtn.classList.replace("fa-play", "fa-pause");        

});
```

# Step 7:
we will create a function to make the play/pause button change it's icon when the video is paused. the "pause" is an event that related to the "addEventListener" to make something happen when the video is paused.

```javascript
mainVideo.addEventListener("pause", () => {                       

    playPauseBtn.classList.replace("fa-pause", "fa-play");        

});
```
# Step 8:
we will create a new variable to access the skip forward button

```javascript
skipForward = container.querySelector(".skip-forward i")     
```

# Step 9:
we will create a new variable to access the skip backward button

```javascript
skipBackward = container.querySelector(".skip-backward i")     
```


# Step 10:
create a new function to add 5 seconds from the current video time when we click the skip forward nutton.

```javascript
skipForward.addEventListener("click", () => {                       

    mainVideo.currentTime += 5;                                    

});    
```


# Step 11:
create a new function to sub 5 seconds from the current video time when we click the skip backward nutton.

```javascript
skipBackward.addEventListener("click", () => {                       

    mainVideo.currentTime -= 5;                                    

});  
```
# Step 12:
we will create a new variable to access the volume button

```javascript
volumeBtn = container.querySelector(".volume i")      
```

# Step 13:
we will create a new variable to access the volume slider

```javascript
volumeSlider = container.querySelector(".left input")     
```

# Step 14:
we will create a new variable to access the volume slider

```javascript
volumeSlider = container.querySelector(".left input")     
```
# Step 15:
we will create a new function to make the volume button work and change it's icon when we click it. So if you click the icon and the volume icon is not high volume icon then it will pass 0.5 volume value to the video and it will replace the xmark volume icon to the high volume icon. other than that, it will pass 0.0 volume value to the video and it will replace the high mark volume icon to the xmark volume icon.

```javascript
volumeBtn.addEventListener("click", () => {                       

    if ( ! volumeBtn.classList.contains( "fa-volume-high" ) ) {                     

        mainVideo.volume = 0.5;                                                     

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        
    }
    
    else {                                                                          

        mainVideo.volume = 0.0;                                                     

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        
    }                                       

});     
```
# Step 16:
we will create a function to make the volume slider work. the "input" event will make the function work when there is a chnage to the input value (the slider). and in line number 2 we will pass the video volume value into the slider value. then we will change the icon if the slider volume value is 0 and we will change it again if it is not 0.

```javascript
volumeSlider.addEventListener("input", event => {                                   

    mainVideo.volume = event.target.value;                                          

    if ( event.target.value == 0 ) {                                                

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        

    }

    else {                                                                          

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        

    }

});   
```
# Step 17:
in step number 15, we will add a new line to update the slider value according to the "mainVideo.volume" value. so when the user click the volume button when it is muted, the slider will increase to the middle beacuse the volume value will be 0.5.
```javascript
volumeSlider.value = mainVideo.volume; 
```
so the function with the new line will look like this:
```javascript
volumeBtn.addEventListener("click", () => {                       

    if ( ! volumeBtn.classList.contains( "fa-volume-high" ) ) {                     

        mainVideo.volume = 0.5;                                                     

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        
    }
    
    else {                                                                          

        mainVideo.volume = 0.0;                                                     

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        
    }

    volumeSlider.value = mainVideo.volume;                                          

});
```

# Step 18:
we will make a new variable to access the speed button
```javascript
speedBtn = container.querySelector(".playback-speed span")
```

# Step 19:
we will make a new variable to access the speed options inside the speed button.
```javascript
speedOptions = container.querySelector(".speed-options")
```

# Step 20:
we will make a function to add extra word which is the word "show" to the speedOptions class name when the user click, and if the suer click again, the word "show" will be removed. this is to make changes in line 173 in the CSS file to make the speed options show or not to show when we click instead of mouse hoover over the button.
```javascript
speedBtn.addEventListener("click", () => {                       

    speedOptions.classList.toggle("show");                                                              

});
```
# Step 21:
we will make a function to make the user close the speed options when the user click anywhere outside it. So if the user click on something that does not has a "span" tag or does not has "material-symbols-rounded" class, then it will remove the word "show" from "speed option" class. because of this, when the user open the video speed options and click outside it anywhere, it will close.
```javascript
document.addEventListener("click", e => {

    if ( e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded" ) {           

        speedOptions.classList.remove("show");                                                          

    }

});
```

# Step 22:
now we want to make the speed opttions work. we will create a new function, fiest we will select all the "li" tag inside the "speed-options" class, then we will pass the "option" value dataset value as video playback value (if you see in the HTML file each li tag has a data value). then we will remove the "active" word from the "normal" option class and then add the "active" word to the selected option class that the user choose (this will make the option selected background in blue color)
```javascript
speedOptions.querySelectorAll( "li" ).forEach(option => {                           

    option.addEventListener("click", () => {                                        

        mainVideo.playbackRate = option.dataset.speed;                              

        speedOptions.querySelector( ".active" ).classList.remove( "active" );       

        option.classList.add( "active" );                                           

    });

});
```


# Step 23:
we will make a new variable to access the picture in picture button.
```javascript
picInPicBtn = container.querySelector(".pic-in-pic span")
```

# Step 24:
we will make a new variable to access the fullscreen button
```javascript
picInPicBtn = container.querySelector(".pic-in-pic span")
```

# Step 25:
we will make a new function to make video in picture in picture mode.
```javascript
picInPicBtn.addEventListener("click", () => {                       

    mainVideo.requestPictureInPicture();                                            

});
```

# Step 26:
we will make a new function to make video in full screen mode. First we will add the word "fullscreen" to the container class, this will add new properties to in the CSS file, then if video in Full screen mode, then replace the button icon and return to the normal mode. other than that (if it is in normal mode), replace the button icon and go to full screen mode.  
```javascript
fullScreenBtn.addEventListener("click", () => {

    container.classList.toggle( "fullscreen" );                                 

    if(document.fullscreenElement) {                                            

        fullScreenBtn.classList.replace( "fa-compress", "fa-expand" );          

        return document.exitFullscreen();                                       

    }

    else {                                                                      

        fullScreenBtn.classList.replace("fa-expand", "fa-compress");            

        container.requestFullscreen();                                          

    }
  
});
```
# Step 27:
we will create a variable to access the "progress-bar" class inside the "progress-area" class
```javascript
progressBar = container.querySelector(".progress-bar")
```

# Step 28:
now we want to make a function to make the progress bar work and move. SO the "timeupdate" is an event that related to the "addEventListener" to make something happen while the video position is changing. and the "timeupdate" is also added to the function to make the function work while the video is playing. in the line 2 the "currentTime" is a property that can return the current position (in seconds) of the video. the "duration" is a property that can return the total duration (in seconds) of the video. then in line 3 we are getting a percent value everythime the video position change, then in line 4 we will pass the percent value to the progressBar width in the CSS file.
```javascript
mainVideo.addEventListener("timeupdate", event => {               

    let { currentTime, duration }  = event.target;                

    let percent = ( currentTime / duration ) * 100;               

    progressBar.style.width = ` ${percent}% `;
    
});
```

# Step 29:
now we will create a new variable to access the < p > tag that has the 00:00 (that shows the current time of the video)
```javascript
currentVidTime = container.querySelector(".current-time")
```

# Step 30:
now we will create a new variable to access the  <p > tag that has the 00:00 (that shows the duration time of the video)
```javascript
videoDuration = container.querySelector(".video-duration")
```

# Step 31:
now we want to make the video show us what is the current video time and what is the total video duration (same as youtube). let's make it show us the current video time first. all what we need to do is to add a new line in the function in the step 28 function, the new line is this:
```javascript
currentVidTime.innerText = (currentTime);
```
 # Step 32:
if you see how it is working now you will see that it is not the result we want because it is only displaying the cuurent time with seconds and milliseconds only, so to fix that and make it display only seconds and minutes and hours we need to make a function that is able to format it. we will create this function before step 31 function. in line 2 - 4 we are formatting and getting the seconds, minutes, hours. in line 5 - 7  we are adding 0 at the beginning if the particular value is less than 10. so it will be like this: 00:01 then 00:02 then 00:03 and so on.. the same thing apply for the minutes and hours. in line 8 until last line we make it to see if hours is 0 then it will show minutes and seconds only, else, show hours, minutes, and seconds.
```javascript
const formatTime = time => {

    let seconds = Math.floor(time % 60),

    minutes = Math.floor(time / 60) % 60,

    hours = Math.floor(time / 3600);

    

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0) {                

        return `${minutes}:${seconds}`

    }

    return `${hours}:${minutes}:${seconds}`;
    
}
```
 # Step 33:
now we can go back to step 31 and update the line and fornat it. the line will be like this:
```javascript
    currentVidTime.innerText = formatTime(currentTime); 
```
                      
 # Step 34:
now we want to make it show the total video duration, so we will make a new function.the loadeddata event happen when the data for the current frame is loaded but not enough data to play next frame of the specified. we also formatted the duration time
```javascript
    mainVideo.addEventListener("loadeddata", () => {                                

    videoDuration.innerText = formatTime(mainVideo.duration);                   

}); 
```
 # Step 35:
now we want to make it show the total video duration, so we will make a new function.the loadeddata event happen when the data for the current frame is loaded but not enough data to play next frame of the specified. we also formatted the duration time
```javascript
    mainVideo.addEventListener("loadeddata", () => {                                

    videoDuration.innerText = formatTime(mainVideo.duration);                   

}); 
```

  # Step 36:
we will create a new variable to access the "video-timeline" class.
```javascript
videoTimeline = container.querySelector(".video-timeline")
```
 
 
  # Step 37:
we will create a new variable to access the "video-timeline" class.
```javascript
videoTimeline = container.querySelector(".video-timeline")
```
 
   # Step 38:
now we want to make the prgress bar move to where the user click on the progress bar exactly. in line 2, we are using the "clientWidth" to get the width in the CSS file. then we will use a calculation to update the time position of the video to the point exactly where the user clicks on the timer bar. the "e.offsetX" is the mouse X position
```javascript
videoTimeline.addEventListener("click", e => {

    let timelineWidth = videoTimeline.clientWidth;                

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;       

});
```
 
# Step 39:
we want to make the progress bar draggable by the mouse. to do that we will make a function to make it work and we will use it in step 40 and 41 to make it work. So in line 2 we are using the "clientWidth" to get the width in the CSS file, thenm in line 3 we are passing the "e.offsetX" vale as the progress bar width. then in line 4 we are using a calculation to update the time position of the video. the "e.offsetX" is the mouse X position

```javascript
const draggableProgressBar = e => { 

    let timelineWidth = videoTimeline.clientWidth;              

    progressBar.style.width = `${e.offsetX}px`;                 

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
 }
```
 
# Step 40:
to make the function (in step 39) work we will make a new function that work when there is a "mousedown" event. this event occurs when a user presses a mouse button over an element. then in line 3 we are calling "draggableProgressBar" function on the "mousemove" event. the "mousemove" event occurs when the mouse is moving while it is over an element.

```javascript
videoTimeline.addEventListener("mousedown", () => {                              

 videoTimeline.addEventListener("mousemove", draggableProgressBar)               
 
});
 }
 ```
 
# Step 41:
 if you try to drag the progress bar it will work, but when you release it it will still follow the mouse because the "mousemove" event is still working. to fix that we need to make a new function to remove the "mousemove" event when the user release the left click button of the mouse. So the in line 1 the "mouseup" event occurs when a user releases a mouse button over an element. then, in line 2 it will remove the "mousemove" event.
```javascript
document.addEventListener("mouseup", () => {                                    

    videoTimeline.removeEventListener("mousemove", draggableProgressBar)
    
});
 }
```
 
# Step 42:
now we want to update the 00:00 (that show us the current video time) smoothly while we are dragging the bar. to do that we will add a new line in the "draggableProgressBar" function in step 39. the new line is this:
```javascript
currentVidTime.innerText = formatTime(mainVideo.currentTime);
 
```
 
 so the "draggableProgressBar" function will look like this after adding the new line:
 ```javascript
const draggableProgressBar = e => { 

    let timelineWidth = videoTimeline.clientWidth;              

    progressBar.style.width = `${e.offsetX}px`;                 

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;

    currentVidTime.innerText = formatTime(mainVideo.currentTime);           
}
 
```
 
  # Step 43:
now we want when the user point at the progress bar to show above the mouse the 00:00 that shows the current time posiiton at that point exactly. so first in line 2 we will access the 00:00 (that will show above the mouse). then, in line 3 we will access the mouse X position. then, on line 4 we will pass the mouse X position to the "span" tag (that has the "00:00") as a left value(something related in the CSS file) to make it follow the mouse. then from line 5 - 7 are codes to format it.
```javascript
videoTimeline.addEventListener("mousemove", e => {

    const progressTime = videoTimeline.querySelector("span");

    let offsetX = e.offsetX;                                

    progressTime.style.left = `${offsetX}px`;               


    let timelineWidth = videoTimeline.clientWidth;          

    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration); 

    progressTime.innerText = formatTime(percent);                               

});
 
```
 
 
# Step 44:
now we want to hide the controls when the mouse is outside the video frame and the video is not paused. so we will make a new variable first.
 
```javascript
 
 let timer; 
 
```
 
# Step 45:
then we will make a new function, line 3 - 5 is a timer that is set for 3 seconds to remove the "show-controls" to change some property in the CSS file. and line 2 is to put back the "show-controls" word if the video is paused. and then the last line to call the function.
```javascript
const hideControls = () => {

    if(mainVideo.paused) return;                      

    timer = setTimeout(() => {

        container.classList.remove("show-controls");  

    }, 3000);

}
 
 hideControls();
 
```
 
 
 
# Step 46:
this function to make add the word "show-controls" while the mouse is moving inside the video frame. it will also remove the timer while doing that, and also we need to call the hideControls(); to make it keep working work 
```javascript
container.addEventListener("mousemove", () => {     

    container.classList.add("show-controls");       

    clearTimeout(timer);

    hideControls();   
    
});
 
```
 
 # The End:
you made it to the end! :)


