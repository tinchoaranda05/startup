class EventEmitter {

      constructor() {
        this.listeners = {

        }
      }
      on(event, listener) {
          if ('event' in this.listeners) {
            this.listeners[event].push(listener);
          }
          this.listeners[event] = [];
          
      }
      emit(event) { // don't sure what to do here
          
          console.log(this.listeners[event]);
          /*this.listeners[event].forEach(function(fn){
              console.log("executing a listener");
              fn.call(window.event);
          })*/
      }
      off(event, listener) {
          if ('event' in this.listeners){
            var del = this.listeners[event].pop();
            console.log("Deleted", del);
          }
          else {
            console.log("empty");
          }
      }
}


class movie extends EventEmitter {
      constructor(title, year, duration) {
          super();
          this.title = title;
          this.year = year;
          this.duration = duration;
      }

      play() {
          console.log("playing ", this.title);
          super.emit('play');
      }
      pause() {
          super.emit('pause');
      }

      resume() {
          super.emit('resume');
      }

}

// functions for play pause and resume

function playVideo(data){
  var video = document.getElementById(data);
  video.play();
  if(data.value=="Resume")
  {
  data.value="Play";
  }
 }

function pauseVideo(data) {
      var myVideo = document.getElementById(data);
      myVideo.pause(data);
}

function resumeVideo(data) {
      var myVideo = document.getElementById(data);
      console.log(myVideo);
      myVideo.resume(data);
}

var myEventEmitter = new EventEmitter();
 myEventEmitter.on('Play Event', playVideo);

var firstEventButton = document.getElementById("firstEvent");
 firstEventButton.addEventListener('click', function(){
  myEventEmitter.emit('Play Event');
 },false);
 console.log(myEventEmitter);



// instances

 var StarWars = new movie("Star Wars - A new hope", "1977", "2h 5m");
 var Interstellar = new movie("Interstellar", "2014", "2h 49m");
 var TheGodfather = new movie("The Godfather", "1972", "2h 58m");
 console.log(StarWars);
 console.log(Interstellar);
 console.log(TheGodfather);

