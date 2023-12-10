// document.addEventListener("DOMContentLoaded", function() {
//     var loadingContainer = document.getElementById("loading-container");
//     var mainContent = document.getElementById("main-content");

//     // Simulate an asynchronous action (e.g., fetching data) with a setTimeout
//     setTimeout(function() {
//         loadingContainer.style.display = "none";
//         mainContent.style.display = "block";
//     }, 2000); // Adjust the duration based on your needs
// });



let logotop = document.getElementById('logotop');
let exterlin = document.querySelectorAll('img#sped');
let sm = document.querySelectorAll('#sidemenu li a');
let serbisList = document.querySelectorAll('.srv');
let howto = document.querySelectorAll('.hu');
var checkbox = document.querySelector('.ui-switch input[type="checkbox"]');
let lebl = document.querySelectorAll('.labil');
let serbpic = document.querySelectorAll('.sermab');
let rtm = document.querySelectorAll('.ourtm');
let abul = document.querySelectorAll('.about ul');
let arpic = document.querySelector('.im');
let port = document.querySelectorAll('.in');
let bd = document.body;




function change() {
    if (checkbox.checked) {
        logotop.src = 'portpic/whitelogo.png';
        bd.classList.add('porbadi');
        arpic.classList.add('arpic');

        lebl.forEach(function(label) {
            label.style.color = 'white';
        });

        sm.forEach(function(ne) {
            ne.style.color = 'white';
        });

        serbisList.forEach(function(sb) {
            sb.classList.add('maniserb');
        });

        i = 0;
        serbpic.forEach(function(srvc){
            switch(i){
                case 0:
                    
                    srvc.src = 'portpic/ui-ux-design-3324033-2769302.png';

                case 1:
                    
                        srvc.src = 'portpic/supp.png';

                case 2:
                    
                        srvc.src = 'portpic/graphi.png';

            }
            i++;

    });

    abul.forEach(function(ab) {
        ab.classList.add('abol');
    });


    rtm.forEach(function(rt){
        rt.classList.add('ort');
    });

    port.forEach(function(pt) {
        pt.classList.add('in2');
    });
    exterlin.forEach(function(ex){
        ex.src = 'portpic/Picture3.png';
        
    });
    howto.forEach(function(ht){
        ht.classList.add('howto');
    });

        
    } else {
        logotop.src = 'portpic/black-logo.png';
        

        bd.classList.remove('porbadi');
        arpic.classList.remove('arpic');

        lebl.forEach(function(label) {
            label.style.color = 'black';
        });

        sm.forEach(function(ne) {
            ne.style.color = 'black';
        });

        serbisList.forEach(function(sb) {
            sb.classList.remove('maniserb');
        });

        i = 0;
        serbpic.forEach(function(srvc){
                        
            switch(i){
                case 0:
                    
                    srvc.src = 'portpic/blackui.png';

                case 1:
                    
                        srvc.src = 'portpic/blacksupp.png';

                case 2:
                    
                        srvc.src = 'portpic/blacckgraphi.png';

            }
            i++;

        });
        
            abul.forEach(function(ab) {
                ab.classList.remove('abol');
            });
        
            rtm.forEach(function(rt){
                rt.classList.remove('ort');
            });
        
        
            port.forEach(function(pt) {
                pt.classList.remove('in2');
            });

            exterlin.forEach(function(ex){
                ex.src = 'portpic/guthib.png';
                
            });

            howto.forEach(function(ht){
                ht.classList.remove('howto');
            });
    }
    
}


let basic = document.getElementById('bs');
let standard = document.getElementById('st');
let premium = document.getElementById('pr');

let basicC = document.getElementById('bss');
let standardC = document.getElementById('stt');
let premiumC = document.getElementById('prr');

 



document.querySelector('.plan').addEventListener('change', function() {
    if (basic.checked) {
        basicC.classList.add('bC');
        standardC.classList.remove('sC');
        premiumC.classList.remove('pC');
    } else if (standard.checked) {
        basicC.classList.remove('bC');
        standardC.classList.add('sC');
        premiumC.classList.remove('pC');
    } else if (premium.checked) {
        basicC.classList.remove('bC');
        standardC.classList.remove('sC');
        premiumC.classList.add('pC');
    }
});



function openChatForm(service) {
    document.getElementById('chatFormTitle').innerText = 'Inquire about ' + service;
    document.getElementById('chatFormContainer').style.display = 'block';
    if (service == "formol") {
        document.getElementById('fol').style.display = 'block';
        document.getElementById('nside').style.display = 'none';
 
    } else {
        document.getElementById('fol').style.display = 'none';
        document.getElementById('nside').style.display = 'block';

    }
    document.getElementById('overlay').style.display = 'block';
}

function closeChatForm() {
     
    document.getElementById('chatFormContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('bs').value = '';
    document.getElementById('st').value = '';
    document.getElementById('pr').value = '';
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (!name || !email || !message) {
        alert('Please enter valid data in all fields.');
        return;
    }

    if (!n2 || !e2 || !ph) {
        alert('Please enter valid data in all fields.');
        return;
    }
    // const formData = {
    //     serviceName: document.getElementById('chatFormTitle').innerText,
    //     name: name,
    //     email: email,
    //     message: message
    // };

    // const formDataKey = 'chatFormData';
    // const existingData = JSON.parse(localStorage.getItem(formDataKey)) || [];
    // existingData.push(formData);
    // localStorage.setItem(formDataKey, JSON.stringify(existingData));

    alert('Form data submitted successfully!');

    closeChatForm();
}

function submitForm2(){

    const n2 = document.getElementById('Name2').value;
    const e2 = document.getElementById('Email2').value;
    const ph = document.getElementById('Phone').value;

    if (!n2 || !e2 || !ph) {
        alert('Please enter valid data in all fields.');
        return;
    }
    alert('Form data submitted successfully!');

    closeChatForm();
}



var imageIndex = 0;
var imageSources = [ "portpic/alquin.png", "portpic/geo.jpg", "portpic/brendo.jpg", "portpic/unnamed (1).png ","portpic/IDK.png"];

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



  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  const servicesElement = document.getElementById("servyo");

 


  document.addEventListener("DOMContentLoaded", function () {
    var aboutch = document.querySelectorAll('.about ul ol section li');
    var alserv = document.querySelectorAll('.srv li');
    var howtoap = document.querySelectorAll('.hu li');
    var arteam = document.querySelectorAll('.ourtm li');


    
   

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {


        aboutch.forEach(function (aboutch) {
            if (isInViewport(aboutch)) {
                aboutch.classList.add('bish');
            }
        });
        
        howtoap.forEach(function (howtoap) {
            if (isInViewport(howtoap)) {
                howtoap.classList.add('bish3');
            }
        });
        
        alserv.forEach(function (alserv) {
            if (isInViewport(alserv)) {
                alserv.classList.add('bish4');
            }
        });
        
        arteam.forEach(function (arteam) {
            if (isInViewport(arteam)) {
                arteam.classList.add('bish5');
            }
        });



    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});

var overtap = document.querySelector('.overtop');

setTimeout(function () {
    var loader = document.getElementById('loader');
    loader.classList.add('hidden');
    overtap.classList.add('oberhid');
  }, 3000);