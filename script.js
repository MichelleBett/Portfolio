const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");


// add active class on click to nav-items
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");

    navLinks.classList.toggle("nav-active");
  });
});

const sections = document.querySelectorAll('.section') 
 
sections.forEach((section)=>{ 
    section.addEventListener('click',()=>{ 
  
        sections.forEach((section) => { 
            section.classList.remove('active') 
        }) 
        section.classList.add('active') 
    }) 
})