//classlist - shows/gets all classes
//contains - checks classList for specific classes
//add - add class
//remove - remove class
//toggle - toggle class


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

//Event listener code

navToggle.addEventListener('click', function(){
//   console.log(links.classList);
//   console.log(links.classList.contains("random"));
//   console.log(links.classList.contains("links"));
  if(links.classList.contains('show-links')){
   links.classList.remove('show-links')
  } else {
    links.classList.add("show-links");
  }
});