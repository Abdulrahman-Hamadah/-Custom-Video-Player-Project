
# Custom Video Player Project

the project was created using 3 files: HTML, CSS, and JavaScript file.

<br />
<br />

 # HTML file ![#FFA500](https://via.placeholder.com/15/FFA500/FFA500.png) 

 the HTML file basically contains many < div > tags, each tag has a class name so we can refer to each class in the CSS and JavaScript file.
  
  
  
  
```bash
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

# CSS file ![#0000FF](https://via.placeholder.com/15/0000FF/0000FF.png) 
