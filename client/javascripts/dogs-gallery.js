// jshint esversion: 6

let failHandler = () => {
 console.log("Fail -- unknown breed");
 $(".photos").empty().html("<h3>Error -- breed not found<h3>");
};
//1. Define the onclick handler


let clickHandler = function() {
  let imgElem;
  let prefixURL =
    'https://dog.ceo/api/breed/';
  let suffixURL = '/images/random/6';


  //get value entered by user from textbox
  //let flickrTag = document.querySelector('input[type = "text"]').value;
  let breedTag = $('input[type = "text"]').val().toLowerCase();
  let requestURL = prefixURL + breedTag + suffixURL;

console.log(requestURL);

console.log(document.querySelectorAll("h2")[0].textContent);
console.log($("h2")[0].textContent);

  //clear old photos
  //document.querySelector('.photos').innerHTML = '';
  $('.photos').html('');

  $.getJSON(requestURL, function(DogAPIResponse) {
    //flickrResponse.items.forEach(function(item, index) {
    DogAPIResponse.message.forEach(function(imgURL, index) {
      let imgElem = $("<img>");
      imgElem.hidden = true;

  // set the attribute to the response url
      imgElem.attr('src', imgURL);
      imgElem.attr('width', '100');

      // attach the img tag to the main photos delive
      $(".photos").append(imgElem);
      imgElem.hidden = false;
    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});
