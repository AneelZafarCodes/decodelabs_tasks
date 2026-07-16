/*=========================================
        STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "none";
    }

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/*=========================================
        HERO BUTTON
=========================================*/

const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {

    document.querySelector("#vision").scrollIntoView({
        behavior: "smooth"
    });

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".vision-box, .card, .blueprint-content div, .color-box, .font-box, .implementation-grid div"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("fade-up");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*=========================================
        CONTACT FORM VALIDATION
=========================================*/

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    const message = form.querySelector("textarea").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

        return;

    }

    if(!email.includes("@")){

        alert("Please enter a valid email.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});


/*=========================================
        CARD HOVER EFFECT
=========================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/*=========================================
        PAGE LOADER ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },100);

});


/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00a8e8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
topBtn.style.transition = "0.3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("Responsive Frontend Interface Loaded Successfully!");