// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});



// Simple image reveal animation

const projects = document.querySelectorAll(".project");


window.addEventListener("scroll",()=>{


projects.forEach(project=>{


let position =
project.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

project.style.opacity="1";
project.style.transform="translateY(0)";

}


});


});