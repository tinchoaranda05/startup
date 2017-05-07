class movie { // Making class movie

	constructor(title, year, duration){
		this.title = title;
		this.year = year;
		this.duration = duration;
	}

	

	play(title){
	   var playVideo = document.getElementById(title);
	   playVideo.reset();
	   playVideo.play();
  	}
  	pause(title){
	   var pauseVideo = document.getElementById(title);
	   pauseVideo.pause();
	}
  	resume(title){
	   var resumeVideo = document.getElementById(title);
	   resumeVideo.play();
	}
 }

function playVideo(data) {
			var myVideo = document.getElementById(data);
            myVideo.play(data);
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


// instance of objects movie.
// Not sure what do you mean when you say "play with them in the console."

 let StarWars = new movie("Star Wars - A new hope", "1977", "2h 5m");
 let Interstellar = new movie("Interstellar", "2014", "2h 49m");
 let TheGodfather = new movie("The Godfather", "1972", "2h 58m");
 console.log(StarWars);
 console.log(Interstellar);
 console.log(TheGodfather);

