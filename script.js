//Website Font
//https://fonts.google.com/specimen/VT323


//Music File Variables



//let mainMenuTheme = new Audio('Immobile.mp3');
let mainMenuTheme = new Audio('thing.mp4');

//Sound Effect File Variables
let buttonSoundEffect = new Audio('Click.mp4');



function gid(el) {
  return document.getElementById(el);
}

function lore(){
  gid('hiddenLore').style.visibility = "visible";
  gid('buttonsBox').style.visibility = "hidden";
}

//Hides the Fullscreen Notice
function gotIt() {
  //Show the Main Menu
  gid('buttonsBox').style.visibility = "visible";
  //Hide the Fullscreen Notice
  gid('notice').style.visibility = "hidden";

  gid('gameName').style.visibility = "hidden";
}

function loreReturn(){
  gid('hiddenLore').style.visibility = "hidden";
  gid('buttonsBox').style.visibility = "visible";
}

function plot(){
  gid('buttonsBox').style.visibility = "hidden";
  //Hide the Fullscreen Notice
  gid('notice').style.visibility = "visible";

  gid('gameName').style.visibility = "visible";
}


//Starts the game
function startGame() {
  //Save the player music setting to local storage
  localStorage.setItem('musicChoice',musicSetting);
  //Save the player sound effect setting to local storage
  localStorage.setItem('soundChoice',soundEffectSetting);
  //Bring the player to the loading screen
  window.location.href = "loading.html"
};

//Brings you to the settings menu
function settingsMenu() {
  //Show the Settings Menu
  gid('settingsMenu').style.visibility = "visible";
  //Hide the Main Menu
  gid('buttonsBox').style.visibility = "hidden";
};

//Plays main menu music when the page loads, unless music is set to off
let musicSetting = 0;
musicSetting = parseInt(musicSetting);
//Save musicSetting to local storage
function mainMenuMusic() {
  if (musicSetting == 0) {
    //If musicSetting = 0, play the main menu music
    mainMenuTheme.play();
    mainMenuTheme.addEventListener('ended', function() {
      mainMenuTheme.play();
    })
  }
  if (musicSetting == 1) {
    //If musicSetting = 1, stop the music and restart it
    mainMenuTheme.pause();
    mainMenuTheme.currentTime = 0;
  }
}

//Turns music on/off in the game
function musicChange() {
  if (musicSetting == 0) {
    //Change musicSetting to 1, which means OFF
    musicSetting = 1;
    gid('music').innerHTML = "MUSIC OFF";
    //Run the function that controls the main menu music
    mainMenuMusic();
  }
  else {
    //Change musicSetting to 0, which means ON
    musicSetting = 0;
    gid('music').innerHTML = "MUSIC ON";
    //Run the function that controls the main menu music
    mainMenuMusic();
  }
};

let soundEffectSetting = 0;
soundEffectSetting = parseInt(soundEffectSetting);
function buttonSound() {
  if (soundEffectSetting == 0) {
    buttonSoundEffect.play();
  }
  if (soundEffectSetting == 1) {
    buttonSoundEffect.currentTime = 0;
    buttonSoundEffect.pause();
  }
}

function soundEffectChange() {
  if (soundEffectSetting == 0) {
    soundEffectSetting = 1;
    console.log(soundEffectSetting);
    gid('soundEffect').innerHTML = "EFFECTS OFF";
    console.log("No");
    buttonSound();
  }
  else {
    soundEffectSetting = 0;
    console.log(soundEffectSetting);
    gid('soundEffect').innerHTML = "EFFECTS ON";
    console.log("Yes")
    buttonSound();
  }
  console.log("It works")
}

//Leave the Settings Menu
function exitSettings() {
  gid('buttonsBox').style.visibility = "visible";
  gid('settingsMenu').style.visibility = "hidden";
}

//Loading screen function
function loading() {
  
  console.log('Start');
  setTimeout(function(){
    
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('One');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('Two');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('Three');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('Four');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('Five');

  setTimeout(function(){
  gid('loadingText').innerHTML = "I HAVE TO FIND MY FRIEND";
  console.log('Six');

  setTimeout(function(){
  gid('loadingText').innerHTML = "OR WHATEVER IS LEFT OF HIM";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "OR WHATEVER IS LEFT OF HIM";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "OR WHATEVER IS LEFT OF HIM";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "OR WHATEVER IS LEFT OF HIM";
  console.log('Seven');
    
  setTimeout(function(){
  window.location.href = "game.html";
  console.log('played');
                      },200)
                     },200)
                   },200)
                },200)
              },200)
            },200)
          },200);
        },200);
      },200);
    },200);
  },200);
};

function loadingCave() {
  
  console.log('Start');
  setTimeout(function(){
    
  gid('loadingText').innerHTML = "Loading.";
  console.log('One');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading..";
  console.log('Two');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading...";
  console.log('Three');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading....";
  console.log('Four');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading.";
  console.log('Five');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading..";
  console.log('Six');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading...";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading....";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "Loading Complete";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "Loading Complete";
  console.log('Seven');
    
  setTimeout(function(){
  window.location.href = "caveGame.html";
  console.log('played');
                      },200)
                     },200)
                   },200)
                },200)
              },200)
            },200)
          },200);
        },200);
      },200);
    },200);
  },200);
};


function loadingEscape() {
  
  console.log('Start');
  setTimeout(function(){
    
  gid('loadingText').innerHTML = "Loading.";
  console.log('One');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading..";
  console.log('Two');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading...";
  console.log('Three');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading....";
  console.log('Four');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading.";
  console.log('Five');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading..";
  console.log('Six');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading...";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading....";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "Loading Complete";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML =  "Loading Complete";
  console.log('Seven');
    
  setTimeout(function(){
  window.location.href = "escapeGame.html";
  console.log('played');
                      },200)
                     },200)
                   },200)
                },200)
              },200)
            },200)
          },200);
        },200);
      },200);
    },200);
  },200);
};

function menu() {
  
  console.log('Start');
  setTimeout(function(){
    
  gid('loadingText').innerHTML = "Loading Features.";
  console.log('One');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features..";
  console.log('Two');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features...";
  console.log('Three');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features....";
  console.log('Three');

  
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features.";
  console.log('Two');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features..";
  console.log('Three');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features...";
  console.log('Three');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Features....";
  console.log('Three');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects.";
  console.log('Four');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects..";
  console.log('Five');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects...";
  console.log('Six');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects....";
  console.log('Six');

      
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects.";
  console.log('Four');
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects..";
  console.log('Five');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects...";
  console.log('Six');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Effects....";
  console.log('Six');




    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay.";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay..";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay...";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay....";
  console.log('Seven');

  
    
  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay.";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay..";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay...";
  console.log('Seven');

  setTimeout(function(){
  gid('loadingText').innerHTML = "Loading Gameplay....";
  console.log('Seven');


    
  setTimeout(function(){
  gid('loadingText').innerHTML =  "Loading Complete";
  console.log('Seven');
    
  setTimeout(function(){
  window.location.href = "menu.html";
  console.log('played');

  
  },200);
  },200);
  },200);
  },200);  
  },200);
  },200);
  },200);
  },200);  
  },200);
  },200);
  },200);
  },200);  
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);

};