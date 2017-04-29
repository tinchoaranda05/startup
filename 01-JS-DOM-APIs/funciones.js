
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



//  Exercise 7. I think it's pretty accurate of what you spect.

const makeRequest = config => {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (xhttp.status == 200) {
        resolve(xhttp.responseText)
      } else {
        reject()
      }
    };
    xhttp.onerror = function() { 
      reject()
    }
    xhttp.open("GET", config.url, true);
    xhttp.send();
  });
  
  return promise;
};

const configCorrect = {
  url: "http://api.icndb.com/jokes/random"
};

const getDataAndPrint = (configObject) => {

  makeRequest(configObject)  // promise function here.
  .then(result => {
    const data = JSON.parse(result);
    document.getElementById('exercise7bis').innerHTML = data.value.joke;
  })
  .catch(() => {
    document.getElementById('excercise8').style.backgroundcolor= '#ff33ff';
    /* With this line I tried to change the section color 
    but I'm not sure it's ok. */
  });  
}

 // Main function of exercise 7.
const getJoke = () => {
  getDataAndPrint(configCorrect)
}


// exercise 9.
/*  I already got the full name as response. Still working on
    the code to make it more easy to read and I'm trying to make
    the list of names as exercise require. Stand by... */
function loadXMLDoc2() { 
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    const data = JSON.parse(this.response);
                    console.log(data);

                    var output = '';
                    for(i=0; i<data.items.length; i++) {
                      console.log(output += "Full Name: " + data.items[i].full_name);
                      output += "\n-----------------------------------------\n";
                    }
                    
                  }
                };
                xhttp.open("GET", " https://api.github.com/search/repositories?q='javascript'", true);
                xhttp.send();
}
