// ==========================================
// BACKEND API DEVELOPMENT WEBSITE
// script.js
// ==========================================


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});



// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.15)";
        header.style.background="#ffffff";

    }

    else{

        header.style.boxShadow="none";
        header.style.background="#ffffff";

    }

});




// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

'.section,.card,.box,.status,table,pre'

);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(50px)";

    el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();




// ===============================
// Hero Image Floating Animation
// ===============================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:'translateY(0px)'},

{transform:'translateY(-12px)'},

{transform:'translateY(0px)'}

],

{

duration:2500,

iterations:1

});

},2500);

}




// ===============================
// Card Hover Effect
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});




// ===============================
// Back To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="30px";
topButton.style.bottom="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#0077b6";
topButton.style.color="#fff";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topButton.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});




// ===============================
// Ripple Button Effect
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.5)";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.style.transform="scale(0)";

circle.style.transition=".6s";

button.appendChild(circle);

setTimeout(()=>{

circle.style.transform="scale(4)";
circle.style.opacity="0";

},10);

setTimeout(()=>{

circle.remove();

},700);

});

});




// ===============================
// Footer Current Year
// ===============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Backend API Development Project`;

}




// ===============================
// Console Message
// ===============================

console.log("Backend API Development Project Loaded Successfully");