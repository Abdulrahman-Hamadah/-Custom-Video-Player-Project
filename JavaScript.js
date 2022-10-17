const container = document.querySelector(".container")            // to select the 'container' class

mainVideo = container.querySelector("video")                      // to select the video inside the container class

playPauseBtn = container.querySelector(".play-pause i")           // to select the play/pause button inside the 'video' class.

skipForward = container.querySelector(".skip-forward i")          // to select the skip forward button

skipBackward = container.querySelector(".skip-backward i")        // to select the skip backward button

volumeBtn = container.querySelector(".volume i")                  // to select the volume button

volumeSlider = container.querySelector(".left input")             // to select the volume slider

speedBtn = container.querySelector(".playback-speed span")        // to select the speed button

speedOptions = container.querySelector(".speed-options")          // to select the speed options inside the speed button.

picInPicBtn = container.querySelector(".pic-in-pic span")         // to select the picture in picture button.

fullScreenBtn = container.querySelector(".fullscreen i");         // to select the fullscreen button

progressBar = container.querySelector(".progress-bar")            // to select the "progress-bar" class inside the "progress-area" class

currentVidTime = container.querySelector(".current-time")         // to select the <p> tag that has the 00:00 (that shows the current time of the video)

videoDuration = container.querySelector(".video-duration")        // to select the <p> tag that has the 00:00 (that shows the duration time of the video)

videoTimeline = container.querySelector(".video-timeline")        // select the "video-timeline" class.

let timer;                                                        // we will use it in the hide control function.





playPauseBtn.addEventListener("click", () => {                    // this is a function to make the play/pause button work. the "click" is an event that related to the "addEventListener" to make something happen when the user click the button. and the "click" is also added to the function to make the function work when the user click the play/pause button

    (mainVideo.paused) ? mainVideo.play() : mainVideo.pause();    // this is a condition that use the "play()" and "pause()" methods to make the video play and pause. condition explain: if the video is paused then it will play it. otherwise it will pause it

});

mainVideo.addEventListener("play", () => {                        // this is a function to make the play/pause button change it's icon when the video is playing. the "play" is an event that related to the "addEventListener" to make something happen when the video is playing.

    playPauseBtn.classList.replace("fa-play", "fa-pause");        // using the "classList" to be able to return one of the "DOMTokenList" methods which is "replace" method.

});

mainVideo.addEventListener("pause", () => {                       // this is a function to make the play/pause button change it's icon when the video is paused. the "pause" is an event that related to the "addEventListener" to make something happen when the video is paused.

    playPauseBtn.classList.replace("fa-pause", "fa-play");        // using the "classList" to be able to return one of the "DOMTokenList" methods which is "replace" method.

});

skipForward.addEventListener("click", () => {                       

    mainVideo.currentTime += 5;                                    // to add 5 seconds from the current video time.

});

skipBackward.addEventListener("click", () => {                       

    mainVideo.currentTime -= 5;                                    // to subract 5 seconds from the current video time.

});

volumeBtn.addEventListener("click", () => {                       

    if ( ! volumeBtn.classList.contains( "fa-volume-high" ) ) {                     // if you click the icon and the volume icon is not high volume icon then...

        mainVideo.volume = 0.5;                                                     // pass 0.5 volume value to the video

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        // replace the xmark volume icon to the high volume icon
    }
    
    else {                                                                          // if you click the icon and the volume icon is the high volume icon then...

        mainVideo.volume = 0.0;                                                     // pass 0.0 volume value to the video

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        // replace the high mark volume icon to the xmark volume icon
    }

    volumeSlider.value = mainVideo.volume;                                          // update the slider value according to the "mainVideo.volume" value.                                          

});

volumeSlider.addEventListener("input", event => {                                   // the "input" event will make the function work when there is a chnage to the input value (the slider).               

    mainVideo.volume = event.target.value;                                          // passing the video volume value into the slider value

    if ( event.target.value == 0 ) {                                                // if the slider volume value is 0 then...

        volumeBtn.classList.replace( "fa-volume-high" , "fa-volume-xmark" );        // change the icon from high icon to low icon.

    }

    else {                                                                          // else than that...

        volumeBtn.classList.replace( "fa-volume-xmark" , "fa-volume-high" );        // change it fron low icon to high icon

    }

});

speedBtn.addEventListener("click", () => {                       

    speedOptions.classList.toggle("show");                                                              // to add extra word which is the word "show" to the speedOptions class name when the user click, and if the suer click again, the word "show" will be removed. this is to make changes in line 173 in the CSS file to make the speed options show or not to show when we click instead of mouse hoover over the button.

});

document.addEventListener("click", e => {

    if ( e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded" ) {           // if the user click on something that does not has a "span" tag or does not has "material-symbols-rounded" class, then...

        speedOptions.classList.remove("show");                                                          // remove the word "show" from "speed option" class. because of this, when the user open the video speed options and click outside it anywhere, it will close.

    }

});

speedOptions.querySelectorAll( "li" ).forEach(option => {                           // selecting all the "li" tag inside the "speed-options" class

    option.addEventListener("click", () => {                                        // add event "click" to all the "li" tag

        mainVideo.playbackRate = option.dataset.speed;                              // pass the "option" value dataset value as video playback value.

        speedOptions.querySelector( ".active" ).classList.remove( "active" );       // remove the "active" word from the "normal" option class

        option.classList.add( "active" );                                           // add the "active" word to the selected option class that the user choose.

    });

});

picInPicBtn.addEventListener("click", () => {                       

    mainVideo.requestPictureInPicture();                                            // to make video in picture in picture mode.

});

fullScreenBtn.addEventListener("click", () => {

    container.classList.toggle( "fullscreen" );                                 // add the word "fullscreen" to the container class, this will add new properties to in the CSS file

    if(document.fullscreenElement) {                                            // if video in Full screen mode, then

        fullScreenBtn.classList.replace( "fa-compress", "fa-expand" );          // replace the button icon

        return document.exitFullscreen();                                       // and return to the normal mode.

    }

    else {                                                                      // else than that... (if it is in normal mode)

        fullScreenBtn.classList.replace("fa-expand", "fa-compress");            // replace the button icon

        container.requestFullscreen();                                          // go to full screen mode.                           

    }
  
});

// we will create a function called "formatTime" to format the current time and make it display only seconds and not millie seconds in the 00:00 (the one shows the current time of the video) and then we will use this function in the function below

const formatTime = time => {

    // getting seconds, minutes, hours.

    let seconds = Math.floor(time % 60),

    minutes = Math.floor(time / 60) % 60,

    hours = Math.floor(time / 3600);

    // adding 0 at the beginning if the particular value is less than 10. so it will be like this: 00:01 then 00:02 then 00:03 and so on.. the same thing apply for the minutes and hours.

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    minutes = minutes < 10 ? `0${minutes}` : minutes;

    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0) {                // if hours is 0 show minutes and seconds only, else, show hours, minutes, and seconds.

        return `${minutes}:${seconds}`

    }

    return `${hours}:${minutes}:${seconds}`;
    
}



mainVideo.addEventListener("timeupdate", event => {               // this is a function to make the progress bar work and move. the "timeupdate" is an event that related to the "addEventListener" to make something happen while the video position is changing. and the "timeupdate" is also added to the function to make the function work while the video is playing.

    let { currentTime, duration }  = event.target;                // the "currentTime" is a property that can return the current position (in seconds) of the video. the "duration" is a property that can return the total duration (in seconds) of the video.

    let percent = ( currentTime / duration ) * 100;               // getting a percent value everythime the video position change.

    progressBar.style.width = ` ${percent}% `;                    // passing the percent value to the progressBar width in the CSS file.

    currentVidTime.innerText = formatTime(currentTime);           /// this will make the 00:00 (the one shows the current time of the video) work
});


mainVideo.addEventListener("loadeddata", () => {                                // the loadeddata event happen when the data for the current frame is loaded but not enough data to play next frame of the specified

    videoDuration.innerText = formatTime(mainVideo.duration);                   // we also formated it using our "formatTime" function

});


videoTimeline.addEventListener("click", e => {

    let timelineWidth = videoTimeline.clientWidth;                // using the "clientWidth" to get the width in the CSS file.

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;       // using a calculation to update the time position of the video to the point exactly where the user clicks on the timer bar. the "e.offsetX" is the mouse X position

});


// the "draggableProgressBar" is a function that we will use in the next function to make the progress bar draggable

const draggableProgressBar = e => { 

    let timelineWidth = videoTimeline.clientWidth;              // using the "clientWidth" to get the width in the CSS file.

    progressBar.style.width = `${e.offsetX}px`;                 // passing the "e.offsetX" vale as the progress bar width.

    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;

    currentVidTime.innerText = formatTime(mainVideo.currentTime);           ////// to update the 00:00 while we are moving the bar.
}

// both of these 2 functions used to make the draggable bar work

videoTimeline.addEventListener("mousedown", () => {                              // The mousedown event occurs when a user presses a mouse button over an element.

 videoTimeline.addEventListener("mousemove", draggableProgressBar)               // calling "draggableProgressBar" function on the "mousemove" event. the "mousemove" event occurs when the mouse is moving while it is over an element.
 
});

document.addEventListener("mouseup", () => {                                    // the "mouseup" event occurs when a user releases a mouse button over an element.

    videoTimeline.removeEventListener("mousemove", draggableProgressBar)
    
});

// function to make the 00:00 show you the minutes and seconds when you point anywhere at the bar without clicking. and to make it also follow the mouse while it is pointing to the bar without clicking.

videoTimeline.addEventListener("mousemove", e => {

    const progressTime = videoTimeline.querySelector("span");

    let offsetX = e.offsetX;                                // getting the mouse x position.

    progressTime.style.left = `${offsetX}px`;               // passing the mouse X position to the "span" tag (that has the "00:00") as a left value to make it follow the mouse


    let timelineWidth = videoTimeline.clientWidth;          // using the "clientWidth" to get the width in the CSS file.

    let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration); // getting percent

    progressTime.innerText = formatTime(percent);                               // putting the percent in the span tag that has the "00:00" with formating the percent also

    offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;

});

const hideControls = () => {

    if(mainVideo.paused) return;                      //it will return here and keep showing the controls when the video is paused, so it will not remove the "show-controls" class.

    timer = setTimeout(() => {

        container.classList.remove("show-controls");  // remove "show-controls" class after 3 seconds

    }, 3000);

}

hideControls();

container.addEventListener("mousemove", () => {     

    container.classList.add("show-controls");       // add "show controls" class when the mouse move on the video.

    clearTimeout(timer);

    hideControls();   
    
});