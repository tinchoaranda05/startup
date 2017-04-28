

function fadein() {
        let elem = document.getElementById('excercise4');
        elem.style.opacity = "1";
}

function loadXMLDoc() { // exercise 6.
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("excercise6").innerHTML =
                    this.responseText;
                  }
                };
                xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
                xhttp.send();
}


function llamadoAjax(){

              const data= document.getElementById('excercise7');
              const url= 'http://api.icndb.com/jokes/random';

              fetch( url )
              .then(function(responsetext) {
                  return responsetext.json();
              }).then(function(json){
                console.log(json);
                return data.innerHTML = json.value.joke;
              }).catch(function() {
                console.log("error");
  
              });





}