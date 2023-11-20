/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}




function openResume() {
            document.getElementById('resumeModal').style.display = 'grid';
            document.body.style.overflow = 'hidden'; 
        }



function closeResume() {
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
        }



function returnHome() {
        window.location.href = "index.html"; 
    }
    document.getElementById("homeLink").addEventListener("click", returnHome);



function alert_send(){
    var contactForm = document.getElementById("contactForm");

        
        if (contactForm.checkValidity()) {
            
            alert("Form submitted successfully!");
            
            return true;
        } 

}



function cancelContact() {
        
        alert("Contact form canceled!");
        
    }



function redirectToFacebook() {
      
      var facebookURL = "https://www.facebook.com/andrelle.fidel.3?mibextid=ZbWKwL";
      window.location.href = facebookURL;
    }



function redirectToGmail() {
      
    var email = " https://mail.google.com";
    window.location.href = email;
    }



function redirectToInsta() {
      
    var insta = " https://instagram.com/andre_llefidel?igshid=NzZlODBkYWE4Ng==";
    window.location.href = insta;
    }



function scrollToSection() {
    
    var targetSection = document.getElementById('sectionabout');

   
    targetSection.scrollIntoView({ behavior: 'smooth' });
}




function scrollTocontact() {
    
    var targetSection = document.getElementById('sectioncontact');

    
    targetSection.scrollIntoView({ behavior: 'smooth' });
}



function scrollToService() {
    
    var targetSection = document.getElementById('sectionservices');

    
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

document.body.style.overflow = 'auto'; 
    
showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})