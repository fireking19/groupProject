function loopImgs(){
    var imgs = document.getElementsByClassName('my-imgs');
    for (var i=0; i< imgs.length; i++){
    loopDelay(i);
    }
}

function loopDelay(i){
    var option = document.getElementById('sel');
    var main = document.getElementById('main');
    var location1 = document.getElementById('location1');
    var location2 = document.getElementById('location2');
    var location3 = document.getElementById('location3');
    var similar1 = document.getElementById('similar1');
    var similar2 = document.getElementById('similar2');
    var similar3 = document.getElementById('similar3');
    var mainHeading = document.getElementById('main-heading');
    setTimeout(function() { 

            /* Conditionals */
        if (i == 1) {
            location1.style.display = 'block';
            location2.style.display = 'none';
            location3.style.display = 'none';
            similar1.style.display = 'none';
            similar2.style.display = 'none';
            similar3.style.display = 'none';
            main.style.display = 'none';
            mainHeading.innerHTML = "Welcome to LA";
            location1.style.background = "red";
        }
        else  if (i == 2) {
            location1.style.display = 'none';
            location2.style.display = 'block';
            location3.style.display = 'none';
            similar1.style.display = 'none';
            similar2.style.display = 'none';
            similar3.style.display = 'none';
            mainHeading.innerHTML = "wELcOme to OAKLAND!!!";
            main.style.display = 'none';
            location2.style.background = "orange";
        }   
        else  if (i == 3) {
            location1.style.display = 'none';
            location2.style.display = 'none';
            location3.style.display = 'block';
            similar1.style.display = 'none';
            similar2.style.display = 'none';
            similar3.style.display = 'none';
            mainHeading.innerHTML = "Welcome to The Rich";
            main.style.display = 'none';
            location3.style.background = "yellow";
        }
        else if (i == 4) {
            location1.style.display = 'none';
            location2.style.display = 'none';
            location3.style.display = 'none';
            similar1.style.display = 'block';
            similar2.style.display = 'none';
            similar3.style.display = 'none';
            mainHeading.innerHTML = "Similar Interest: <br> The Warriors Are Good";
            main.style.display = 'none';
            similar1.style.background = "purple";
        }
        else  if (i == 5) {
            location1.style.display = 'none';
            location2.style.display = 'none';
            location3.style.display = 'none';
                similar1.style.display = 'none';
            similar2.style.display = 'block';
            similar3.style.display = 'none';
            mainHeading.innerHTML = "Similar Interest: <br> Movie: Friday";
            main.style.display = 'none';
            similar2.style.background = "green";
        }   
        else  if (i == 6) {
            location1.style.display = 'none';
            location2.style.display = 'none';
            location3.style.display = 'none';
            similar1.style.display = 'none';
            similar2.style.display = 'none';
            similar3.style.display = 'block';
            mainHeading.innerHTML = "Similar Interest: <br>Brand:  Vans";
            main.style.display = 'none';
            similar3.style.background = "brown";
        }
        else{
            location1.style.display = 'none';
            location2.style.display = 'none';
            location3.style.display = 'none';
            similar1.style.display = 'none';
            similar2.style.display = 'none';
            similar3.style.display = 'none';
            main.style.display = 'block';
            main.style.background="red";
        }
    }, 3000 * i); 
}

function toggle() {
     /* Initialize Variables */
    var option = document.getElementById('sel');
    var main = document.getElementById('main');
    var location1 = document.getElementById('location1');
    var location2 = document.getElementById('location2');
    var location3 = document.getElementById('location3');
    var similar1 = document.getElementById('similar1');  
    var similar2 = document.getElementById('similar2'); 
    var similar3 = document.getElementById('similar3');
    var mainHeading = document.getElementById('main-heading');

     /* Conditionals */
    if (option.value == 1) {
        location1.style.display = 'block';
        location2.style.display = 'none';
        location3.style.display = 'none';
        similar1.style.display = 'none';
        similar2.style.display = 'none';
        similar3.style.display = 'none';
        main.style.display = 'none';
        mainHeading.innerHTML = "Welcome to LA";
        location1.style.background = "red";
    }
    else  if (option.value == 2) {
        location1.style.display = 'none';
        location2.style.display = 'block';
        location3.style.display = 'none';
        similar1.style.display = 'none';
        similar2.style.display = 'none';
        similar3.style.display = 'none';
        main.style.display = 'none';
        mainHeading.innerHTML = "wELcOme to OAKLAND!!!";
        location2.style.background = "orange";
    
    }   
    else  if (option.value == 3) {
        location1.style.display = 'none';
        location2.style.display = 'none';
        location3.style.display = 'block';
        similar1.style.display = 'none';
        similar2.style.display = 'none';
        similar3.style.display = 'none';
        main.style.display = 'none';
        mainHeading.innerHTML = "Welcome to The Rich";
        location3.style.background = "yellow";
    }   
    else  if (option.value == 4) {
        location1.style.display = 'none';
        location2.style.display = 'none';
        location3.style.display = 'none';
        similar1.style.display = 'block';
        similar2.style.display = 'none';
        similar3.style.display = 'none';
        main.style.display = 'none';
        mainHeading.innerHTML = "Similar Interest: <br> The Warriors Are Good";
        similar1.style.background = "black";
    
    }   
    else  if (option.value == 5) {
        location1.style.display = 'none';
        location2.style.display = 'none';
        location3.style.display = 'none';
        similar1.style.display = 'none';
        similar2.style.display = 'block';
        similar3.style.display = 'none';
        main.style.display = 'none';
        mainHeading.innerHTML = "Similar Interest: <br> Movie: Friday";
        similar2.style.background = "blue";
    }   
    else  if (option.value == 6) {
        location1.style.display = 'none';
        location2.style.display = 'none';
        location3.style.display = 'none';
        similar1.style.display = 'none';
        similar2.style.display = 'none';
        similar3.style.display = 'block';
        main.style.display = 'none';
        mainHeading.innerHTML = "Similar Interest: <br>Brand:  Vans";
        similar3.style.background = "purple";
    
    
    }else{
    
        location1.style.display = 'none';
        location2.style.display = 'none';
        location3.style.display = 'none';
        similar1.style.display = 'none';
        similar2.style.display = 'none';
        similar3.style.display = 'none';
        main.style.display = 'block';
        main.style.background="red";
    
    }
}