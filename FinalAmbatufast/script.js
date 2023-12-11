
var imageIndex = 0;
var imageSources = [ "images/alquin.png", "images/geo.jpg", "images/brendo.jpg", "images/unnamed (1).png ","images/IDK.png"];


function changeImage() {
    var imageElement = document.getElementById("image");

    imageElement.style.opacity = 0;

    setTimeout(function () {
      imageElement.src = imageSources[imageIndex];

      imageElement.style.opacity = 1;

      imageIndex = (imageIndex + 1) % imageSources.length;
    }, 500); 
  }

  setInterval(changeImage, 2000);


let cbox = document.getElementById('check');
let side = document.getElementById('sd');

let nli = document.querySelectorAll('nav ul li');  

function handleCheckboxChange() {
  if (cbox.checked) {
    nli.forEach(function(unli, index) {
      setTimeout(function() {
        unli.classList.add('navli');
      }, 200 * index); 
    });
  } else {
    nli.forEach(function(unli, index) {
      setTimeout(function() {
        unli.classList.remove('navli');
      }, 200 * index);  
    });
  }
}

cbox.addEventListener('change', handleCheckboxChange);

     

