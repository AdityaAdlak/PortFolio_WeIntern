
document.addEventListener('DOMContentLoaded', function() {
    
    setupSmoothScrolling();
    
    setupActiveNavigation();
    
    setupScrollReveal();
    
    setupBackToTop();
    
    console.log('Portfolio loaded successfully! 🚀');
});


function setupSmoothScrolling() {

    const navLinks = document.querySelectorAll('.navbar a, .cta-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
             
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}


function setupActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
          
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
        
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
}


function setupScrollReveal() {
  
    const revealElements = document.querySelectorAll(
        '.about-card, .education-card, .skill-card, .project-card, .experience-card'
    );
    
   
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });
    

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}


function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
   
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


function addTypingEffect() {
    const titleElement = document.querySelector('.title');
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    
    let index = 0;
    
    function type() {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    

    setTimeout(type, 1000);
}




let clickCount = 0;
const nameElement = document.querySelector('.name');

nameElement.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 5) {
        alert('🎉 You found an Easter egg! You clicked my name 5 times!');
        this.style.animation = 'pulse 0.5s';
        clickCount = 0;
        
        setTimeout(() => {
            this.style.animation = 'slideUp 1s';
        }, 500);
    }
});


console.log('%c Welcome to my Portfolio! ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; font-size: 20px; padding: 10px;');
console.log('%c Made with ❤️ by Aditya Adlak', 'color: #667eea; font-size: 14px;');