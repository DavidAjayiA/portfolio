const homeLink = document.querySelector(".home_link");
const aboutLink = document.querySelector(".about_link");
const workLink = document.querySelector(".work_link");
const contactLink = document.querySelector(".contact_link");
const skillLink = document.querySelector(".skill_link");
const containerLinks = document.querySelector(".container_links")
const checkBox = document.querySelector("#check");

// style

checkBox.addEventListener("click", ()=>{
    containerLinks.style.display = "block"
})

homeLink.addEventListener("click", ()=>{
    console.log(containerLinks);
    containerLinks.style.display = 'none'
})

aboutLink.addEventListener("click", ()=>{
    console.log(containerLinks);
    containerLinks.style.display = 'none'
})

workLink.addEventListener("click", ()=>{
    console.log(containerLinks);
    containerLinks.style.display = 'none'
})

contactLink.addEventListener("click", ()=>{
    console.log(containerLinks);
    containerLinks.style.display = 'none'
})

skillLink.addEventListener("click", ()=>{
    console.log(containerLinks);
    containerLinks.style.display = 'none'
})


const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 400);
});
   