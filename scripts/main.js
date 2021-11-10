var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


<!-- Ein html-Kommentar--> 
// noch ein Kommentar
// hier wird die alert(); funktion zur Textausgaben verwendet, das erzeugt einen Infobox, 
// die man bestätigen muss der Text steht dabei in 'text' hochkommata
/* Dies ist ein Javascript Mehrzeilen-Kommentar:
   Alles was im Body steht, wird vom Browser angezeigt */



// Toggle Source Image
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'pics/kunert.png') {
      myImage.setAttribute ('src','pics/bernd.png');
    } else {
      myImage.setAttribute ('src','pics/kunert.png');
    }
}

//alert( 'Hello, world-1!' );

// Beschreibung:  https://developer.mozilla.org/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics
function setUserName() {
    // Namen vom Benutzer abfragegen und abspeichern
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla ist cool, ' + myName;
  }
 
  // Aufruf der Funktion zur Abfrage des Benuternamens, wenn der Name noch nicht gesetzt ist.
  // anschließend Neuausgabe der Überschrift h1 mit dem abgefragten Namen
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ist cool, ' + storedName;
  }

  // bei jedem Klicken auf den Button wird die Funktion zum Abfragen des Usernamesn ernert aufgerufen
  myButton.onclick = function() {
    setUserName();
  }

  // Seite veröffentlichen mit der Google App Engine: https://cloud.google.com/appengine/