/* Theme Name: Softland - Responsive Landing page template
  Author: Themesbrand
  Version: 1.0.0
  File Description: Main JS file of the template
*/

//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
}
// Smooth scroll


window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})
window.addEventListener('resize', checkWidth);

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;
  
    const startCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";
      const preffix = counter.getAttribute("data-preffix") || "";
      let current = 1;
  
      const updateCount = () => {
        const increment = Math.ceil(target / speed);
        if (current < target) {
          current += increment;
          counter.innerText = preffix + current + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = preffix + target.toLocaleString() + suffix;
        }
      };
  
      updateCount();
    };
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounter(counter);
          obs.unobserve(counter); // Only run once
        }
      });
    }, {
      threshold: 0.5, // Half of the element is visible
    });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });

  


  
document.addEventListener("DOMContentLoaded", function () {
    const currentLang = document.getElementById("current-lang");
    const dropdownItems = document.querySelectorAll(".dropdown-item.aLang");

    dropdownItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const lang = this.getAttribute("data-lang");
            currentLang.textContent = lang.toUpperCase();
            

            // Load the selected language file
            //loadLanguageFile(lang);
        });
    });

    function loadLanguageFile(lang) {
        fetch(`./lang/tr-${lang}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error loading language file: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                updatePageContent(data);
            })
            .catch((error) => console.error(error));
    }

    function updatePageContent(translations) {
        // Update content dynamically based on the JSON keys
        //nav
        const navNews = document.querySelector("#nav-news");
        if (navNews) navNews.textContent = translations.nav.news;
        
        const navContact = document.querySelector("#nav-contact");
        if (navContact) navContact.textContent = translations.nav.contact;

        //Home
        const homeTitle = document.querySelector("h1.text-white");
        if (homeTitle) homeTitle.textContent = translations.home.title;
        
        const highlightLeft = document.querySelector("#highlight-left-text");
        if (highlightLeft) highlightLeft.textContent = translations.home.t1;
        
        const highlightRight = document.querySelector("#highlight-right-text");
        if (highlightRight) highlightRight.textContent = translations.home.t2;

        // Features Section
        const featuresTitle = document.querySelector("#features-title");
        if (featuresTitle) featuresTitle.textContent = translations.features.title;
        
        const featuresDesc = document.querySelector("#features-description");
        if (featuresDesc) featuresDesc.textContent = translations.features.description;
        
        const featuresCard1Title = document.querySelector("#features-card-title-1");
        if (featuresCard1Title) featuresCard1Title.textContent = translations.features.featurescardtitle1;
        
        const featuresCard1Desc = document.querySelector("#features-card-description-1");
        if (featuresCard1Desc) featuresCard1Desc.textContent = translations.features.featurescarddescription1;
        
        const featuresCard2Title = document.querySelector("#features-card-title-2");
        if (featuresCard2Title) featuresCard2Title.textContent = translations.features.featurescardtitle2;
        
        const featuresCard2Desc = document.querySelector("#features-card-description-2");
        if (featuresCard2Desc) featuresCard2Desc.textContent = translations.features.featurescarddescription2;

        const featuresCard3Title = document.querySelector("#features-card-title-3");
        if (featuresCard3Title) featuresCard3Title.textContent = translations.features.featurescardtitle3;
        
        const featuresCard3Desc = document.querySelector("#features-card-description-3");
        if (featuresCard3Desc) featuresCard3Desc.textContent = translations.features.featurescarddescription3;

        const featuresCard4Desc = document.querySelector("#features-card-description-4");
        if (featuresCard4Desc) featuresCard4Desc.textContent = translations.features.featurescarddescription4;
        
        const featuresCard5Desc = document.querySelector("#features-card-description-5");
        if (featuresCard5Desc) featuresCard5Desc.textContent = translations.features.featurescarddescription5;
        
        const featuresCard6Desc = document.querySelector("#features-card-description-6");
        if (featuresCard6Desc) featuresCard6Desc.textContent = translations.features.featurescarddescription6;
        
        const featuresCard7Desc = document.querySelector("#features-card-description-7");
        if (featuresCard7Desc) featuresCard7Desc.textContent = translations.features.featurescarddescription7;
        
        //MISION
        const missionTitle = document.querySelector("#mission-title");
        if (missionTitle) missionTitle.textContent = translations.mission.title;
        
        const missionDesc = document.querySelector("#mission-description");
        if (missionDesc) missionDesc.textContent = translations.mission.description;

        const missionCard1Title = document.querySelector("#mission-card-title-1");
        if (missionCard1Title) missionCard1Title.textContent = translations.mission.missioncardtitle1;
        
        const missionCard1Desc = document.querySelector("#mission-card-description-1");
        if (missionCard1Desc) missionCard1Desc.textContent = translations.mission.missioncarddescription1;

        const missionCard2Title = document.querySelector("#mission-card-title-2");
        if (missionCard2Title) missionCard2Title.textContent = translations.mission.missioncardtitle2;
        
        const missionCard2Desc = document.querySelector("#mission-card-description-2");
        if (missionCard2Desc) missionCard2Desc.textContent = translations.mission.missioncarddescription2;

        const missionCard3Title = document.querySelector("#mission-card-title-3");
        if (missionCard3Title) missionCard3Title.textContent = translations.mission.missioncardtitle3;
        
        const missionCard3Desc = document.querySelector("#mission-card-description-3");
        if (missionCard3Desc) missionCard3Desc.textContent = translations.mission.missioncarddescription3;

        const missionCard4Title = document.querySelector("#mission-card-title-4");
        if (missionCard4Title) missionCard4Title.textContent = translations.mission.missioncardtitle4;
        
        const missionCard4Desc = document.querySelector("#mission-card-description-4");
        if (missionCard4Desc) missionCard4Desc.textContent = translations.mission.missioncarddescription4;

        const missionCard5Title = document.querySelector("#mission-card-title-5");
        if (missionCard5Title) missionCard5Title.textContent = translations.mission.missioncardtitle5;
        
        const missionCard5Desc = document.querySelector("#mission-card-description-5");
        if (missionCard5Desc) missionCard5Desc.textContent = translations.mission.missioncarddescription5;

        const missionCard6Title = document.querySelector("#mission-card-title-6");
        if (missionCard6Title) missionCard6Title.textContent = translations.mission.missioncardtitle6;
        
        const missionCard6Desc = document.querySelector("#mission-card-description-6");
        if (missionCard6Desc) missionCard6Desc.textContent = translations.mission.missioncarddescription6;

        const missionCard7Title = document.querySelector("#mission-card-title-7");
        if (missionCard7Title) missionCard7Title.textContent = translations.mission.missioncardtitle7;
        
        const missionCard7Desc = document.querySelector("#mission-card-description-7");
        if (missionCard7Desc) missionCard7Desc.textContent = translations.mission.missioncarddescription7;

        const missionCard8Title = document.querySelector("#mission-card-title-8");
        if (missionCard8Title) missionCard8Title.textContent = translations.mission.missioncardtitle8;
        
        const missionCard8Desc = document.querySelector("#mission-card-description-8");
        if (missionCard8Desc) missionCard8Desc.textContent = translations.mission.missioncarddescription8;
        
        //NEWS
        const newsTitle = document.querySelector("#news-title");
        if (newsTitle) newsTitle.textContent = translations.news.title;
        
        const newsCard1Title = document.querySelector("#news-card-title-1");
        if (newsCard1Title) newsCard1Title.textContent = translations.news.newscardtitle1;
        
        const newsCard2Title = document.querySelector("#news-card-title-2");
        if (newsCard2Title) newsCard2Title.textContent = translations.news.newscardtitle2;
        
        const newsCard3Title = document.querySelector("#news-card-title-3");
        if (newsCard3Title) newsCard3Title.textContent = translations.news.newscardtitle3;
        
        const ctaTitle = document.querySelector("#cta-title");
        if (ctaTitle) ctaTitle.textContent = translations.news.ctatitle;

        //WORK
        const workTitle = document.querySelector("#work-title");
        if (workTitle) workTitle.textContent = translations.work.title;

        
        //US section
        const teamTitle = document.querySelector("#team-title");
        if (teamTitle) teamTitle.textContent = translations.us.teamtitle;

        const teamDescription = document.querySelector("#team-description");
        if (teamDescription) teamDescription.textContent = translations.us.teamdescription;
        
        //projects section

 		
        const projectsTitle = document.querySelector("#projects-title");
        if (projectsTitle) projectsTitle.textContent = translations.projects.title;


        const projectsTitle1 = document.querySelector("#crm-title");
        if (projectsTitle1) projectsTitle1.textContent = translations.projects.title1;

        const projectsDescription1 = document.querySelector("#crm-description");
        if (projectsDescription1) projectsDescription1.textContent = translations.projects.description1;

        const projectsTitle2 = document.querySelector("#epro-title");
        if (projectsTitle2) projectsTitle2.textContent = translations.projects.title2;

        const projectsDescription2 = document.querySelector("#epro-description");
        if (projectsDescription2) projectsDescription2.textContent = translations.projects.description2;

        const projectsTitle3 = document.querySelector("#ctms-title");
        if (projectsTitle3) projectsTitle3.textContent = translations.projects.title3;

        const projectsDescription3 = document.querySelector("#ctms-description");
        if (projectsDescription3) projectsDescription3.textContent = translations.projects.description3;












    }

    // Load the default language on page load
    const defaultLang = "en"; // Change to "en" if English is the default language
    //loadLanguageFile(defaultLang);
});






function checkViewport() {
    // const mobileContent1 = document.getElementById('mobileContent-f1');
   const desktopContent1 = document.getElementById('desktopContent-f1');
    // const mobileContent2 = document.getElementById('mobileContent-f2');
   const desktopContent2 = document.getElementById('desktopContent-f2');

   if(desktopContent1)   desktopContent1.classList.add('active');
   if(desktopContent2)   desktopContent2.classList.add('active');
    // if (window.innerWidth < 1000) {
    //     // If the screen width is less than 1000px, show mobile content
    //     mobileContent1.classList.add('active');
    //     desktopContent1.classList.remove('active');
       
    //     mobileContent2.classList.add('active');
    //     desktopContent2.classList.remove('active');

    // } else {
    //     // If the screen width is 1000px or greater, show desktop content
    //     mobileContent1.classList.remove('active');
    //     desktopContent1.classList.add('active');
    //     mobileContent2.classList.remove('active');
    //     desktopContent2.classList.add('active');

       

    // }
}

// Initial check
checkViewport();

// Add event listener for resize event
window.addEventListener('resize', checkViewport);




function checkWidthBtn() {
   const desktopContentb1 = document.getElementById('desktopContent-b1');
   
   // const mobileContentb1 = document.getElementById('mobileContent-b1');
   //desktopContentb1.classList.add('active');
    // if (window.innerWidth < 1000) {
    //     desktopContentb1.classList.remove('active');

    //     mobileContentb1.classList.add('active');
    // } else {
    //     desktopContentb1.classList.add('active');
    //     mobileContentb1.classList.remove('active');
    // }
}
checkWidthBtn()
window.addEventListener('resize', checkWidthBtn);
//remove colapse when width chiquito
function checkWidth() {
   
    
    const myDiv = document.getElementById('navbarCollapse');
    const myUl = document.getElementById('navbar-navlist');

    if (window.innerWidth < 992) {
        myDiv.classList.add('collapse');
        myDiv.classList.add('navbar-collapse');
       
        
        myUl.classList.remove('menu-right');

       
    } else {
        myDiv.classList.remove('collapse');
        myDiv.classList.remove('navbar-collapse');


        myUl.classList.add('menu-right');
       
    }
}




// Navbar Active Class

var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 80
});

// Auto-collapse mobile menu when any nav link is clicked (except language dropdown)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navbar-navlist .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Skip if this is the language dropdown toggle or has dropdown-toggle class
            if (this.classList.contains('dropdown-toggle') || this.id === 'languageDropdown') {
                return;
            }
            
            // Check if we're in mobile view (Bootstrap's collapse is active)
            if (window.innerWidth < 992) {
                // Check if the menu is currently expanded
                if (navbarCollapse.classList.contains('show')) {
                    // Trigger Bootstrap's collapse to hide the menu
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        // Fallback: manually remove the 'show' class
                        navbarCollapse.classList.remove('show');
                    }
                    
                    // Update the toggler button aria-expanded attribute
                    if (navbarToggler) {
                        navbarToggler.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });
    });
    
    // Also handle clicks on language dropdown items to close the menu
    const langItems = document.querySelectorAll('.dropdown-item.aLang');
    langItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't prevent default here - let the language change happen
            
            // Close the mobile menu after a small delay to allow language change
            setTimeout(() => {
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        navbarCollapse.classList.remove('show');
                    }
                    
                    if (navbarToggler) {
                        navbarToggler.setAttribute('aria-expanded', 'false');
                    }
                }
            }, 100);
        });
    });
});


function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}


// typed

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

function typewrite() {
    if (toRotate === 'undefined') {
        changeText()
    }
    else
        var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #494d61}";
    document.body.appendChild(css);
};
window.onload(typewrite());
window.onload(checkWidth());

