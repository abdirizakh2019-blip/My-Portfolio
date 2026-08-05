let words = [
"Professional Web Developer",
"WordPress Expert",
"UI/UX Designer",
"Business Website Specialist",
"Creative Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

/* Allows i18n.js to swap the rotating hero words when the
   language is switched, restarting the animation cleanly. */
window.setHeroWords = function(newWords){
    if(!Array.isArray(newWords) || !newWords.length) return;
    words = newWords;
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if(typing) typing.textContent = "";
};

function typeEffect(){

const currentWord = words[wordIndex];

if(isDeleting){
typing.textContent =
currentWord.substring(0,charIndex--);
}else{
typing.textContent =
currentWord.substring(0,charIndex++);
}

let speed = isDeleting ? 60 : 120;

if(!isDeleting && charIndex === currentWord.length){
speed = 1500;
isDeleting = true;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}
}

setTimeout(typeEffect,speed);
}

typeEffect();


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

/* =====================
3D TILT CARDS
(mouse-tracking perspective tilt + glare position)
===================== */

const tiltElements = document.querySelectorAll('.tilt-3d');
const isTouchDevice = window.matchMedia('(hover: none)').matches;

if(!isTouchDevice){

    tiltElements.forEach(card => {

        const maxTilt = card.classList.contains('profile-card') ? 14 : 8;

        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const percentX = (x / rect.width) - 0.5;
            const percentY = (y / rect.height) - 0.5;

            const rotateY = percentX * maxTilt * 2;
            const rotateX = -percentY * maxTilt * 2;

            card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

            card.style.setProperty('--mx', `${x}px`);
            card.style.setProperty('--my', `${y}px`);

        });

        card.addEventListener('mouseleave', () => {
            card.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });

    });

}

/* =====================
MOBILE MENU TOGGLE
===================== */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if(menuToggle && navLinks){

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

}

/* =====================
BACK TO TOP
===================== */

const backToTop = document.getElementById('backToTop');
const floatingWhatsapp = document.getElementById('floatingWhatsapp');

if(backToTop){

    window.addEventListener('scroll', () => {

        if(window.scrollY > 500){
            backToTop.classList.add('show');
        }else{
            backToTop.classList.remove('show');
        }

    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top:0, behavior:'smooth' });
    });

}

/* =====================
WHATSAPP BUTTON: SCROLL WIGGLE ANIMATION
===================== */

if(floatingWhatsapp){

    let wiggleTimeout = null;
    let lastWiggleScroll = 0;

    window.addEventListener('scroll', () => {

        const scrollDelta = Math.abs(window.scrollY - lastWiggleScroll);

        if(scrollDelta > 350){

            lastWiggleScroll = window.scrollY;
            floatingWhatsapp.classList.add('wiggle');

            clearTimeout(wiggleTimeout);
            wiggleTimeout = setTimeout(() => {
                floatingWhatsapp.classList.remove('wiggle');
            }, 650);

        }

    });

}

/* =====================
WHATSAPP HINT ARROW + WELCOME BUBBLE
(stay visible until the user closes them — no auto-hide)
===================== */

const whatsappHintArrow = document.getElementById('whatsappHintArrow');
const whatsappBubble = document.getElementById('whatsappBubble');
const bubbleClose = document.getElementById('bubbleClose');

if(whatsappHintArrow && whatsappBubble && floatingWhatsapp){

    window.addEventListener('load', () => {

        setTimeout(() => {
            floatingWhatsapp.classList.add('bounce-in');
            whatsappHintArrow.classList.add('show');
            whatsappBubble.classList.add('show');
        }, 1200);

    });

    function dismissWhatsappHint(){
        whatsappHintArrow.classList.remove('show');
        whatsappBubble.classList.remove('show');
    }

    if(bubbleClose){
        bubbleClose.addEventListener('click', (e) => {
            e.stopPropagation();
            dismissWhatsappHint();
        });
    }

    floatingWhatsapp.addEventListener('click', dismissWhatsappHint);

}

/* =====================
FOOTER YEAR
===================== */

const yearSpan = document.getElementById('year');
if(yearSpan){
    yearSpan.textContent = new Date().getFullYear();
}

/* =====================
PORTFOLIO: CTA CARD
===================== */

const portfolioCtaBtn = document.getElementById('portfolioCtaBtn');

if(portfolioCtaBtn){
    portfolioCtaBtn.addEventListener('click', () => {
        if(typeof openInquiryModal === 'function'){
            openInquiryModal();
        }
    });
}

/* =====================
PORTFOLIO: INLINE LIVE DEMO PREVIEW
===================== */

const demoToggleBtns = document.querySelectorAll('.demo-toggle-btn');
const demoCloseBtns = document.querySelectorAll('.demo-close');

function closeAllDemos(exceptId){

    document.querySelectorAll('.demo-preview.open').forEach(panel => {
        if(panel.id !== exceptId){
            panel.classList.remove('open');
        }
    });

    document.querySelectorAll('.demo-toggle-btn.active').forEach(btn => {
        if(btn.getAttribute('data-target') !== exceptId){
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            const label = btn.querySelector('.btn-label');
            if(icon) icon.style.transform = '';
            if(label) label.textContent = 'Live Demo';
        }
    });

}

function loadDemoIframe(panel, url){

    const iframe = panel.querySelector('iframe');
    const loading = panel.querySelector('.demo-loading');

    if(iframe && !iframe.src){

        iframe.src = url;

        iframe.addEventListener('load', () => {
            iframe.classList.add('loaded');
            if(loading) loading.style.display = 'none';
        });

        // Fallback: if blocked by X-Frame-Options, stop showing spinner after a timeout
        setTimeout(() => {
            if(loading) loading.style.display = 'none';
            iframe.classList.add('loaded');
        }, 6000);

    }

}

demoToggleBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const targetId = btn.getAttribute('data-target');
        const url = btn.getAttribute('data-url');
        const panel = document.getElementById(targetId);

        if(!panel) return;

        const isOpen = panel.classList.contains('open');

        closeAllDemos(targetId);

        if(isOpen){
            panel.classList.remove('open');
            btn.classList.remove('active');
            btn.querySelector('.btn-label').textContent = 'Live Demo';
        }else{
            panel.classList.add('open');
            btn.classList.add('active');
            btn.querySelector('.btn-label').textContent = 'Hide Demo';
            loadDemoIframe(panel, url);

            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 250);
        }

    });

});

demoCloseBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        const toggleBtn = document.querySelector(`.demo-toggle-btn[data-target="${targetId}"]`);

        if(panel) panel.classList.remove('open');

        if(toggleBtn){
            toggleBtn.classList.remove('active');
            toggleBtn.querySelector('.btn-label').textContent = 'Live Demo';
        }

    });

});

/* =====================
WELCOME TOAST
===================== */

const welcomeToast = document.getElementById('welcomeToast');
const toastClose = document.getElementById('toastClose');

if(welcomeToast){

    window.addEventListener('load', () => {
        setTimeout(() => {
            welcomeToast.classList.add('show');
        }, 900);

        setTimeout(() => {
            welcomeToast.classList.remove('show');
        }, 8000);
    });

    if(toastClose){
        toastClose.addEventListener('click', () => {
            welcomeToast.classList.remove('show');
        });
    }

}

/* =====================
INQUIRY MODAL (WhatsApp)
===================== */

const inquiryModal = document.getElementById('inquiryModal');
const modalClose = document.getElementById('modalClose');
const inquiryForm = document.getElementById('inquiryForm');
const openBtns = [
    document.getElementById('floatingWhatsapp')
];

const WHATSAPP_NUMBER = '252617222842';

function openInquiryModal(){
    if(!inquiryModal) return;
    inquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInquiryModal(){
    if(!inquiryModal) return;
    inquiryModal.classList.remove('active');
    document.body.style.overflow = '';
}

openBtns.forEach(btn => {
    if(btn){
        btn.addEventListener('click', openInquiryModal);
    }
});

if(modalClose){
    modalClose.addEventListener('click', closeInquiryModal);
}

if(inquiryModal){
    inquiryModal.addEventListener('click', (e) => {
        if(e.target === inquiryModal){
            closeInquiryModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && inquiryModal && inquiryModal.classList.contains('active')){
        closeInquiryModal();
    }
});

/* =====================
TOGGLE GROUPS (Yes/No)
===================== */

function setupToggleGroup(groupId, hiddenInputId, conditionalFieldId, showOnValue){

    const group = document.getElementById(groupId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const conditionalField = conditionalFieldId
        ? document.getElementById(conditionalFieldId)
        : null;

    if(!group || !hiddenInput) return;

    const buttons = group.querySelectorAll('.toggle-btn');

    buttons.forEach(btn => {

        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            hiddenInput.value = btn.getAttribute('data-value');

            if(conditionalField){

                const innerInput = conditionalField.querySelector('input');

                if(hiddenInput.value === showOnValue){
                    conditionalField.classList.add('visible');
                    if(innerInput) innerInput.setAttribute('required', 'required');
                }else{
                    conditionalField.classList.remove('visible');
                    if(innerInput){
                        innerInput.removeAttribute('required');
                        innerInput.value = '';
                    }
                }

            }

        });

    });

}

setupToggleGroup('hasWebsiteToggle', 'iqHasWebsite', 'oldWebsiteField', 'Yes');
setupToggleGroup('hasDomainToggle', 'iqHasDomain', 'domainNameField', 'Yes');

if(inquiryForm){

    inquiryForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const hasWebsite = document.getElementById('iqHasWebsite').value;
        const hasDomain = document.getElementById('iqHasDomain').value;

        if(!hasWebsite){
            alert('Fadlan dooro: Horay miyaad u lahaan jirtay Website?');
            return;
        }

        if(!hasDomain){
            alert('Fadlan dooro: Ma haysataa Domain iyo Hosting?');
            return;
        }

        const name = document.getElementById('iqName').value.trim();
        const phone = document.getElementById('iqPhone').value.trim();
        const type = document.getElementById('iqType').value;
        const email = document.getElementById('iqEmail').value.trim();
        const oldWebsite = document.getElementById('iqOldWebsite').value.trim();
        const domainName = document.getElementById('iqDomainName').value.trim();
        const budget = document.getElementById('iqBudget').value;
        const details = document.getElementById('iqDetails').value.trim();
        const time = document.getElementById('iqTime').value;

        let message =
`Salaan, waxaan rabaa inaan mashruuc kala hadlo.

Magaca: ${name}
Lambarka: ${phone}
Nooca Mashruuca: ${type}
Email: ${email}
Horay u lahaa Website: ${hasWebsite === 'Yes' ? 'Haa' : 'Maya'}`;

        if(hasWebsite === 'Yes' && oldWebsite){
            message += `\nMagaca Website-ka hore: ${oldWebsite}`;
        }

        message += `\nDomain & Hosting: ${hasDomain === 'Yes' ? 'Wuu haystaa' : 'Uma baahan yahay, wuu rabaa in la siiyo'}`;

        if(hasDomain === 'Yes' && domainName){
            message += `\nMagaca Domain-ka: ${domainName}`;
        }

        message +=
`
Budget: ${budget}
Sharaxaad: ${details}
Waqtiga loo baahan yahay: ${time}`;

        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(waUrl, '_blank');

        closeInquiryModal();
        inquiryForm.reset();

        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.conditional-field').forEach(f => f.classList.remove('visible'));

    });

}

const contactForm = document.querySelector('.contact-form');

if(contactForm){

    contactForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const btn = contactForm.querySelector('.submit-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Message Sent <i class="fa-solid fa-check"></i>';

        setTimeout(() => {
            btn.innerHTML = originalText;
            contactForm.reset();
        }, 2500);

    });

}

/* =====================
TESTIMONIALS CAROUSEL
===================== */

const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialLeft = document.getElementById('testimonialLeft');
const testimonialRight = document.getElementById('testimonialRight');
const testimonialDots = document.getElementById('testimonialDots');

if(testimonialTrack && testimonialLeft && testimonialRight && testimonialDots){

    const cards = Array.from(testimonialTrack.children);
    let cardsPerView = 3;
    let currentIndex = 0;

    function getCardsPerView(){
        if(window.innerWidth <= 650) return 1;
        if(window.innerWidth <= 991) return 2;
        return 3;
    }

    function getMaxIndex(){
        return Math.max(0, cards.length - cardsPerView);
    }

    function renderDots(){

        testimonialDots.innerHTML = '';
        const totalDots = getMaxIndex() + 1;

        for(let i = 0; i < totalDots; i++){

            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);

            if(i === currentIndex){
                dot.classList.add('active');
            }

            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });

            testimonialDots.appendChild(dot);

        }

    }

    function updateCarousel(){

        cardsPerView = getCardsPerView();
        const maxIndex = getMaxIndex();

        if(currentIndex > maxIndex) currentIndex = maxIndex;
        if(currentIndex < 0) currentIndex = 0;

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 28;
        const offset = currentIndex * (cardWidth + gap);

        testimonialTrack.style.transform = `translateX(-${offset}px)`;

        renderDots();

    }

    testimonialLeft.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
        resetAutoplay();
    });

    testimonialRight.addEventListener('click', () => {
        currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
        updateCarousel();
        resetAutoplay();
    });

    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);

    updateCarousel();

    /* Autoplay: advances automatically, loops back to start, pauses on hover */

    let autoplayInterval = null;

    function startAutoplay(){

        autoplayInterval = setInterval(() => {

            const maxIndex = getMaxIndex();

            if(currentIndex >= maxIndex){
                currentIndex = 0;
            }else{
                currentIndex++;
            }

            updateCarousel();

        }, 4000);

    }

    function stopAutoplay(){
        clearInterval(autoplayInterval);
    }

    function resetAutoplay(){
        stopAutoplay();
        startAutoplay();
    }

    const testimonialSection = document.getElementById('testimonials');

    if(testimonialSection){
        testimonialSection.addEventListener('mouseenter', stopAutoplay);
        testimonialSection.addEventListener('mouseleave', startAutoplay);
    }

    startAutoplay();

}

/* =====================
FAQ ACCORDION
===================== */

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        const isActive = item.classList.contains('active');

        faqItems.forEach(i => i.classList.remove('active'));

        if(!isActive){
            item.classList.add('active');
        }

    });

});

/* =====================
3D FLYING BIRD MASCOT
(works on desktop via mouse-tracking, and on
mobile/tablet via a scroll-driven idle flight path)
===================== */

const birdMascot = document.getElementById('birdMascot');

if(birdMascot){

    let mouseX = window.innerWidth * 0.7;
    let mouseY = window.innerHeight * 0.25;
    let birdX = mouseX;
    let birdY = mouseY;
    let lastBirdX = birdX;
    let driftAngle = 0;

    const offsetX = 40;
    const offsetY = 50;
    const ease = 0.07;

    birdMascot.classList.add('visible');

    function animateBird(){

        const targetX = mouseX - offsetX;
        const targetY = mouseY - offsetY;

        birdX += (targetX - birdX) * ease;
        birdY += (targetY - birdY) * ease;

        if(birdX < lastBirdX - 0.5){
            birdMascot.classList.add('facing-left');
        }else if(birdX > lastBirdX + 0.5){
            birdMascot.classList.remove('facing-left');
        }

        lastBirdX = birdX;

        let drawX = birdX;
        let drawY = birdY;

        if(isTouchDevice){
            // Subtle idle drift so the bird doesn't look frozen between scrolls
            driftAngle += 0.6;
            drawX += Math.sin(driftAngle * 0.05) * 18;
            drawY += Math.cos(driftAngle * 0.08) * 10;
        }

        birdMascot.style.transform = `translate(${drawX}px, ${drawY}px)`;

        requestAnimationFrame(animateBird);

    }

    requestAnimationFrame(animateBird);

    if(!isTouchDevice){

        /* DESKTOP / MOUSE DEVICES: bird follows the cursor */

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Gently nudge the bird toward the section being scrolled into view,
        // so it feels like it's pointing toward the content.
        let scrollNudgeTimeout = null;

        window.addEventListener('scroll', () => {

            clearTimeout(scrollNudgeTimeout);

            scrollNudgeTimeout = setTimeout(() => {

                const sections = document.querySelectorAll('section[id], section.hero');
                let closest = null;
                let closestDistance = Infinity;

                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    if(distance < closestDistance){
                        closestDistance = distance;
                        closest = section;
                    }
                });

                if(closest){
                    const rect = closest.getBoundingClientRect();
                    mouseX = rect.left + rect.width * 0.78;
                    mouseY = Math.max(90, rect.top + 70);
                }

                mouseX = Math.min(Math.max(mouseX, 40), window.innerWidth - 40);
                mouseY = Math.min(Math.max(mouseY, 70), window.innerHeight - 70);

            }, 120);

        });

    }else{

        /* TOUCH DEVICES (mobile/tablet): no mouse exists, so the bird
           flies to a point near the top of whichever section is in view. */

        function updateTouchTarget(){

            const sections = document.querySelectorAll('section[id], section.hero');
            let closest = null;
            let closestDistance = Infinity;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top);
                if(distance < closestDistance){
                    closestDistance = distance;
                    closest = section;
                }
            });

            const vw = window.innerWidth;
            const vh = window.innerHeight;

            if(closest){
                const rect = closest.getBoundingClientRect();
                mouseX = Math.min(vw - 50, rect.left + rect.width * 0.74);
                mouseY = Math.max(80, rect.top + 60);
            }else{
                mouseX = vw * 0.7;
                mouseY = 90;
            }

            // Always keep the target within the visible viewport
            mouseX = Math.min(Math.max(mouseX, 40), vw - 40);
            mouseY = Math.min(Math.max(mouseY, 70), vh - 70);

        }

        let touchScrollTimeout = null;

        window.addEventListener('scroll', () => {
            clearTimeout(touchScrollTimeout);
            touchScrollTimeout = setTimeout(updateTouchTarget, 100);
        });

        window.addEventListener('resize', updateTouchTarget);

        updateTouchTarget();

    }

}
