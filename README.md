
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




