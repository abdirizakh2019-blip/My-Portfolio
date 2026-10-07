/* =====================================================
   i18n.js — English / Somali translation dictionary
   and language switching logic for Abdirizakh Mohamed's
   portfolio website.
===================================================== */

const translations = {

/* ---------- Navbar ---------- */
"nav.home":        { en:"Home",       so:"Home" },
"nav.about":        { en:"About",      so:"Ku Saabsan" },
"nav.services":     { en:"Services",   so:"Adeegyada" },
"nav.portfolio":    { en:"Portfolio",  so:"Shaqooyinka" },
"nav.reviews":      { en:"Reviews",    so:"Ra'yiga" },
"nav.contact":      { en:"Contact",    so:"Nala Soo Xidhiidh" },

/* ---------- Promo banner ---------- */
"promo.badge":      { en:"30% OFF", so:"30% Qiimo Dhimis" },
"promo.message":    { en:"Limited-time discount on all new website projects — book your spot today!", so:"Qiimo dhimis xilli xaddidan ah oo ku aaddan dhammaan mashaariicda website cusub — maanta buuxi meeshaada!" },
"promo.cta":        { en:"Claim Offer", so:"Hel Qiimahan" },

/* ---------- Hero ---------- */
"hero.badge":       { en:"Professional Web Developer", so:"Horumariye Website oo Xirfad leh" },
"hero.greeting":    { en:"Hello, I'm", so:"Salaan, waxaan ahay" },
"hero.description": { en:"I design and develop modern websites, business solutions, and digital experiences that help companies grow, attract customers, and build a strong online presence.", so:"Waxaan naqshadeeyaa oo horumariyaa website-yo casri ah, xalal ganacsi, iyo khibrado dijitaal ah oo ka caawiya shirkadaha inay kobcaan, macaamiil soo jiitaan, oo ay dhisaan joogitaan xoog leh oo internet-ka ah." },
"hero.hireMe":      { en:"Hire Me", so:"I Shaqaali" },

/* ---------- Shared / common ---------- */
"common.viewPortfolio": { en:"View Portfolio", so:"Eeg Shaqooyinka" },
"common.liveDemo":  { en:"Live Demo", so:"Muuqaal Toos ah" },
"common.yes":       { en:"Yes", so:"Haa" },
"common.no":        { en:"No", so:"Maya" },

/* ---------- About ---------- */
"about.title":      { en:"About Me", so:"Ku Saabsan Aniga" },
"about.subtitle":   { en:"Get to know more about me and my experience", so:"Wax badan ka ogow aniga iyo khibradayda" },
"about.tag":        { en:"Web Developer & Designer", so:"Horumariye & Naqshadeeye Website" },
"about.heading":    { en:"Creating Modern Websites That Help Businesses Grow", so:"Waxaan Sameeyaa Website-yo Casri ah oo Ka Caawiya Ganacsatada Inay Kobcaan" },
"about.para1":      { en:"I am Abdirizakh Mohamed, a professional web developer and designer specializing in business websites, travel agency websites, healthcare websites, WordPress development, and modern web solutions.", so:"Waxaan ahay Abdirizakh Mohamed, oo ah horumariye iyo naqshadeeye website oo xirfad leh, kaas oo takhasusay website-yada ganacsiga, wakaaladaha safarka, caafimaadka, horumarinta WordPress, iyo xalal website oo casri ah." },
"about.para2":      { en:"My goal is to help businesses establish a strong online presence through beautiful, fast, and user-friendly websites that attract customers and increase credibility.", so:"Ujeeddadaydu waa inaan ka caawiyo ganacsatada inay dhisaan joogitaan xoog leh oo internet-ka ah iyadoo loo marayo website-yo qurux badan, degdeg ah, oo fudud in la isticmaalo, kuwaas oo soo jiita macaamiisha oo kordhiya kalsooshaha." },
"about.stat1":      { en:"Projects Completed", so:"Mashaariic la Dhammeeyay" },
"about.stat2":      { en:"Happy Clients", so:"Macaamiil Ku Qanacsan" },
"about.stat3":      { en:"Years Experience", so:"Sanadood Khibrad ah" },

/* ---------- Services ---------- */
"services.title":       { en:"My Services", so:"Adeegyadayda" },
"services.subtitle":    { en:"Professional digital services for modern businesses", so:"Adeegyo dijitaal oo xirfad leh oo loogu talagalay ganacsiyada casriga ah" },

"services.badge1":  { en:"Web & Mobile App Developer", so:"Horumariye Website iyo Mobile App" },
"services.title1":  { en:"Web Development", so:"Horumarinta Website" },
"services.desc1":   { en:"Modern, responsive and fast websites built using the latest technologies.", so:"Website-yo casri ah, jawaab-celin degdeg ah, oo lagu dhisay tignoolajiyada ugu casrisan." },

"services.badge2":  { en:"WordPress + Elementor", so:"WordPress + Elementor" },
"services.title2":  { en:"WordPress Development", so:"Horumarinta WordPress" },
"services.desc2":   { en:"Custom WordPress websites, blogs and business solutions.", so:"Website-yo WordPress oo gaar ah, blogs, iyo xalal ganacsi." },

"services.badge3":  { en:"UI / UX Design", so:"Naqshadaynta UI / UX" },
"services.title3":  { en:"UI / UX Design", so:"Naqshadaynta UI / UX" },
"services.desc3":   { en:"Beautiful user interfaces designed to improve user experience.", so:"Interfaces qurux badan oo loo naqshadeeyay in lagu hagaajiyo khibrada isticmaalaha." },

"services.badge4":  { en:"Building a Business Website", so:"Dhismaha Website Ganacsi" },
"services.title4":  { en:"E-Commerce", so:"Suuq-gareynta Online-ka (E-Commerce)" },
"services.desc4":   { en:"Online stores that help businesses sell products and services.", so:"Dukaamo online ah oo ka caawiya ganacsatada inay iibiyaan alaabtooda iyo adeegyadooda." },

"services.badge5":  { en:"Search Engine Optimization", so:"Hagaajinta Search Engine-ka (SEO)" },
"services.title5":  { en:"SEO Optimization", so:"Hagaajinta SEO" },
"services.desc5":   { en:"Improve your website visibility and rank higher on search engines.", so:"Kordhi muuqaalka website-kaaga oo ku sarreey natiijooyinka search engine-ka." },

"services.badge6":  { en:"24/7 Support", so:"Taageero 24/7 ah" },
"services.title6":  { en:"Website Maintenance", so:"Dayactirka Website-ka" },
"services.desc6":   { en:"Ongoing support, updates and security for your website.", so:"Taageero joogto ah, cusboonaysiin, iyo amni loogu talagalay website-kaaga." },

/* ---------- Portfolio ---------- */
"portfolio.title":      { en:"My Portfolio", so:"Shaqooyinkayga" },
"portfolio.subtitle":   { en:"Some of the projects I have designed and developed", so:"Qaar ka mid ah mashaariicda aan naqshadeeyay oo horumariyay" },

"portfolio.desc1":  { en:"Official website for a travel agency covering flights, tourism, visas and cargo services.", so:"Website rasmi ah oo safarka, dalxiiska, fiisaska iyo alaab-qaadka." },
"portfolio.desc2":  { en:"Business website built for a Somali camel-milk dairy company.", so:"Website ganacsi oo loogu talagalay shirkad caano geel oo Soomaaliyeed." },
"portfolio.desc3":  { en:"Official website for a Somali construction & engineering company.", so:"Website rasmi ah oo shirkad dhisme & engineering Soomaaliyeed." },
"portfolio.desc4":  { en:"Platform/app for managing personal money and finances.", so:"App/Platform maamulka lacagaha iyo dhaqaalaha shaqsiga ah." },
"portfolio.desc5":  { en:"Somalia's most modern school management system.", so:"Nidaamka maamulka dugsiyada ugu casrisan Soomaaliya." },
"portfolio.desc6":  { en:"Corporate subsidiary page built for Barawe Holding's STSC division, a Mogadishu-based services company trusted by NGOs, private companies and government institutions.", so:"Bogga shirkadda STSC ee ka tirsan Barawe Holding, oo ah shirkad adeeg ku saleysan Muqdisho oo ay kalsoonaan la yihiin NGO-yada, shirkadaha gaarka ah, iyo hay'adaha dawladda." },
"portfolio.desc7":  { en:"Modern coffeehouse brand website for Beydan Coffee, Somalia's leading Pan-African coffee company, featuring a menu showcase, café locations and franchise information.", so:"Website casri ah oo loogu talagalay Beydan Coffee, ganacsiga qaxwaha ugu horreeya Soomaaliya, oo lagu daawan karo menu-ga, goobaha laamaha, iyo macluumaadka franchise-ka." },
"portfolio.desc8":  { en:"Hospital management system for Somali hospitals and clinics — one platform for reception, consultation, laboratory, radiology, pharmacy, admissions and billing.", so:"Nidaamka maamulka isbitaalada iyo rugaha caafimaadka Soomaaliya — hal nidaam oo ka kooban qaabilaadda, baaritaanka dhakhtarka, shaybaarka, raajada, farmashiyaha, jiifka iyo biilasha." },
"portfolio.desc9":  { en:"All-in-one platform for travel agencies to manage bookings, flights, hotels, cargo, payments and their own website.", so:"Platform dhammaystiran oo u sahlaya shirkadaha safarka maamulka booking-ga, duulimaadyada, hoteelada, kaargada, lacag-bixinta iyo website-kooda." },
"portfolio.desc10":  { en:"SaaS business management software for small businesses — inventory, sales and customer management, installable as a mobile app (PWA).", so:"Software maamul ganacsi (SaaS) oo loogu talagalay ganacsiyada yaryar — maamulka bakhaarka, iibka iyo macaamiisha, kana shaqeeya sidii app moobayl ah (PWA)." },

"portfolio.ctaTitle":   { en:"Start Your Next Project Here", so:"Mashruucaaga Xiga Halkan ka Bilow" },
"portfolio.ctaDesc":    { en:"Have an idea for a new project? Let's talk and I'll build a website suited to your business.", so:"Ma haysataa fikrad mashruuc cusub? Aan wada hadalno oo aan kuu sameeyo website ku habboon ganacsigaaga." },
"portfolio.ctaBtn":     { en:"Start a Project", so:"Bilow Mashruuc" },

/* ---------- Testimonials ---------- */
"testimonials.title":       { en:"What Our Clients Say", so:"Maxay Macaamiisheennu Yiraahdeen" },
"testimonials.subtitle":    { en:"What our clients say about the work we did for them", so:"Waxa macaamiishayadii ka yiraahdeen shaqada aan u qabnay" },

"testimonials.t1":  { en:"Abdirizakh built us a beautiful, fast website. His design and service were excellent.", so:"Abdirizakh wuxuu nooga dhisay website aad u qurux badan oo degdeg ah. Naqshadaynta iyo adeegga aad buu u wanaagsanaa." },
"testimonials.r1":  { en:"Businessman, Mogadishu", so:"Ganacsade, Muqdisho" },

"testimonials.t2":  { en:"My business website was built professionally. He understood my needs and finished the project in a short time.", so:"Website-kaygii ganacsi waxaa lagu dhisay si professional ah. Wuu fahmay baahidayda oo waqti gaaban ku dhammeystay mashruuca." },
"testimonials.r2":  { en:"Sales & Marketing, Hargeisa", so:"Iib & Dalbasho, Hargeysa" },

"testimonials.t3":  { en:"I'm very satisfied with his work. The website works great on both mobile and computer.", so:"Aad baan ugu qanacsanahay shaqadiisa. Website-ku wuu ka shaqeeyaa mobile-ka iyo computer-ka labadaba si fiican." },
"testimonials.r3":  { en:"Manager, Kismayo", so:"Maamule, Kismaayo" },

"testimonials.t4":  { en:"I got a modern management system that is very easy to use. His support after project completion is also excellent.", so:"Waxaan ka helay nidaam maamul oo casri ah oo aad u fudud isticmaal. Taageeradiisa kadib mashruuca dhammaadkana way fiicantahay." },
"testimonials.r4":  { en:"School Principal, Bosaso", so:"Maamulaha Dugsiga, Boosaaso" },

"testimonials.t5":  { en:"Very high-quality work. He built my website in a short time using the most modern technology.", so:"Shaqo aad u tayo sare leh. Wuxuu ku dhisay website-kaygii xilli gaaban isagoo isticmaalaya tignoolajiyada ugu casrisan." },
"testimonials.r5":  { en:"Company Partner, Garowe", so:"Hayb-mid Shirkad, Garoowe" },

"testimonials.t6":  { en:"I'm extremely thankful. The website design is modern, and every part of it works well.", so:"Aad iyo aad ayaan ugu mahadcelinayaa. Naqshadda website-ka waa mid casri ah, dhammaan qaybaha si fiican ayey u shaqeeyaan." },
"testimonials.r6":  { en:"Business Owner, Baidoa", so:"Milkiile Ganacsi, Baidoa" },

"testimonials.t7":  { en:"He built us an easy-to-use website, and our people interacted with it well. I would recommend him to other companies.", so:"Wuxuu noo sameeyay website oo fudud loo isticmaalo, dadkayagiina si fiican ayey ula falgaleen. Waan ku talin doonaa shirkado kale." },
"testimonials.r7":  { en:"Project Lead, Galkayo", so:"Hoggaamiye Mashruuc, Galkacyo" },

"testimonials.t8":  { en:"Fast service, fair price, and great results. Thank you Abdirizakh for the service you provided us.", so:"Adeeg degdeg ah, qiimo macquul ah, iyo natiijo wanaagsan. Mahadsanid Abdirizakh adeegga aad noo qabatay." },
"testimonials.r8":  { en:"Finance Manager, Bosaso", so:"Maamule Maaliyadeed, Bossaso" },

"testimonials.t9":  { en:"I had a great experience from the start of the project to its completion. He delivered everything I asked for.", so:"Khibrad fiican ayaan kala kulmay laga bilaabo bilowga mashruuca ilaa dhammaystirkiisa. Wax kasta oo aan rabay wuu fuliyay." },
"testimonials.r9":  { en:"Company Owner, Beledweyne", so:"Milkiile Shirkad, Beledweyne" },

"testimonials.t10": { en:"He is very skilled. He turned my website into something modern and attractive — I'm happy with the role he played.", so:"Aad buu u xirfad leeyahay. Website-kaygii wuxuu ka dhigay mid casri ah oo soo jiidasho leh, kaalintaan ku faraxsanahay." },
"testimonials.r10": { en:"Small Business Owner, Berbera", so:"Ganacsade Yar, Berbera" },

/* ---------- FAQ ---------- */
"faq.title":    { en:"Frequently Asked Questions", so:"Su'aalaha Inta Badan La Isweydiiyo" },
"faq.subtitle": { en:"Everything you want to know about our services", so:"Wax kasta oo aad rabto inaad ka ogaato adeegyada" },

"faq.q1": { en:"How much does building a website cost?", so:"Immisa lacag ah ayuu kacayaa dhismaha website?" },
"faq.a1": { en:"The cost depends on the type and scope of the project. A simple website starts at an affordable price, while larger projects with a system require additional cost. Fill out the WhatsApp form to get an accurate, complete quote.", so:"Qiimaha wuxuu kuxiran yahay nooca iyo baaxadda mashruuca. Website fudud wuxuu bilaabmaa qiimo jaban, halka mashruucyada waaweyn ee leh nidaam (system) ay u baahan yihiin qiimo dheeraad ah. Buuxi foomka WhatsApp si aad u hesho qiyaas sax ah oo dhamaystiran." },

"faq.q2": { en:"How long does it take to complete a project?", so:"Intee in le'eg ayuu qaadanayaa in mashruuca la dhammeeyo?" },
"faq.a2": { en:"A simple website can take 3-7 days, while larger projects like a school/business management system can take 2-4 weeks depending on the scope of work.", so:"Website fudud waxay qaadan kartaa 3-7 maalmood, halka mashruucyo waaweyn sida nidaam maamul (school/business management system) ay qaadan karaan 2-4 toddobaad iyadoo ku xiran baaxadda shaqada." },

"faq.q3": { en:"Do you have a domain and hosting, or will they be provided to you?", so:"Ma haystaa domain iyo hosting, mise adigaa la siinaya?" },
"faq.a3": { en:"Both are possible. If you already have a domain and hosting, I can help you deploy your website. If you don't, I can recommend options suited to your needs and budget.", so:"Labadaba way suurtagal tahay. Haddii aad horay u haysatid domain iyo hosting waan kaa caawin karaa inaan website-ka kor ka dhigo (deploy). Haddii aadan haysan, waan kuu soo jeedin karaa ikhtiyaaro ku habboon baahidaada iyo lacagtaada." },

"faq.q4": { en:"Can the website be updated once it's completed?", so:"Website-ka ma la beddeli karaa marka horay la dhammeeyo?" },
"faq.a4": { en:"Yes, all websites I build can be updated afterward. I also provide ongoing maintenance service so your website always works well.", so:"Haa, dhammaan website-yada waxaan u sameeyaa si dib loogu cusboonaysiin karo. Waxaan sidoo kale bixiyaa adeeg maintenance ah oo joogto ah si website-kaagu had iyo jeer u shaqeeyo si fiican." },

"faq.q5": { en:"Do you also build Mobile Apps, or only websites?", so:"Ma sameeyaa Mobile App sidoo kale, mise website kaliya?" },
"faq.a5": { en:"I build both — websites and mobile applications (Android & iOS). If you need both, I can build a connected plan that runs on a single shared database.", so:"Waxaan sameeyaa labadaba — website iyo mobile application (Android & iOS). Haddii aad u baahan tahay labadaba, waan ku samayn karaa qorshe isku xidhan oo ay ku shaqeeyaan hal database." },

"faq.q6": { en:"How is the project payment handled?", so:"Sideed loo bixiyaa lacagta mashruuca?" },
"faq.a6": { en:"I usually split the payment into two parts: a deposit when the project starts, and the remainder once the project is completed and everything is confirmed to be working well.", so:"Caadi ahaan waxaan u qaybiyaa lacagta laba qayb: hormarin (deposit) marka mashruuca la bilaabo, iyo inta soo hartay marka mashruuca la dhammeeyo oo la hubiyo in wax walba u shaqeeyaan si fiican." },

"faq.q7": { en:"Do you provide support after the website is finished?", so:"Ma bixiyaa taageero (support) kadib marka website-ku dhammaado?" },
"faq.a7": { en:"Yes, I provide post-completion support to resolve any issues that come up, as well as future upgrades to the website whenever needed.", so:"Haa, waxaan bixiyaa taageero kadib-dhammaystir ah si loo xaliyo wax kasta oo dhibaato ah oo soo baxa, iyo sidoo kale kobcinta website-ka mustaqbalka haddii loo baahdo." },

/* ---------- Contact ---------- */
"contact.title":    { en:"Get In Touch", so:"Nala Soo Xidhiidh" },
"contact.subtitle": { en:"Have a project in mind? Let's build something great together", so:"Ma haysataa mashruuc maankaaga ku jira? Aan wada dhisno wax weyn oo wada jir ah" },
"contact.email":    { en:"Email", so:"Email" },
"contact.location": { en:"Location", so:"Goobta" },
"contact.locationValue": { en:"Mogadishu, Somalia", so:"Muqdisho, Soomaaliya" },
"contact.availability": { en:"Availability", so:"Waqtiga Shaqada" },
"contact.availabilityValue": { en:"Mon - Sat, 9:00 AM - 9:00 PM", so:"Isniin - Sabti, 9:00 Sn - 9:00 Ha" },

"contact.formName":     { en:"Full Name", so:"Magaca Buuxa" },
"contact.formNamePh":   { en:"Your name", so:"Magacaaga" },
"contact.formEmail":    { en:"Email Address", so:"Cinwaanka Email-ka" },
"contact.formSubject":  { en:"Subject", so:"Mowduuca" },
"contact.formSubjectPh":{ en:"Project inquiry", so:"Su'aal ku saabsan mashruuc" },
"contact.formMessage":  { en:"Message", so:"Fariinta" },
"contact.formMessagePh":{ en:"Tell me about your project...", so:"Ii sheeg mashruucaaga..." },
"contact.formSend":     { en:"Send Message", so:"Dir Fariinta" },

/* ---------- Footer ---------- */
"footer.tagline":       { en:"I help businesses grow online through modern, fast and user-friendly websites tailored to their goals and audience.", so:"Waxaan ka caawiyaa ganacsatada inay ku kobcaan internet-ka iyadoo loo marayo website-yo casri ah, degdeg ah, oo fudud in la isticmaalo, oo ku habboon yoolalkooda iyo dhagaystayaashooda." },
"footer.quickLinks":    { en:"Quick Links", so:"Xiriirro Degdeg ah" },
"footer.faq":           { en:"FAQ", so:"Su'aalaha Badan" },
"footer.servicesTitle": { en:"Services", so:"Adeegyada" },
"footer.rights":        { en:"All rights reserved.", so:"Dhammaan xuquuqda way dhowran tahay." },

/* ---------- WhatsApp bubble & toast ---------- */
"whatsapp.bubble": { en:"👋 Welcome! Reach out to me on WhatsApp if you have a project.", so:"👋 Soo dhowow! Nagala soo xidhiidh WhatsApp haddii aad mashruuc qabto." },
"toast.title":     { en:"Welcome!", so:"Soo dhowow!" },
"toast.message":   { en:"Thanks for visiting. Check out my work or get in touch.", so:"Ku mahadsantahay booqashadaada. Eeg shaqooyinkayga ama nala soo xidhiidh." },

/* ---------- Inquiry modal ---------- */
"modal.title":          { en:"Get In Touch", so:"Nagala Soo Xidhiidh" },
"modal.subtitle":       { en:"Fill out the form and I'll reach out to you on WhatsApp", so:"Buuxi foomka, waxaan kuula soo xidhiidhi doonaa WhatsApp" },
"modal.name":           { en:"Full Name", so:"Magaca Buuxa" },
"modal.namePh":         { en:"E.g: Mohamed Ali Hassan", so:"Tusaale: Mohamed Ali Hassan" },
"modal.phone":          { en:"Phone Number", so:"Lambarka Taleefanka" },
"modal.type":           { en:"Project Type", so:"Nooca Mashruuca" },
"modal.typeChoose":     { en:"Choose project type", so:"Dooro nooca mashruuca" },
"modal.typeOther":      { en:"Other", so:"Mid Kale" },
"modal.hadWebsite":     { en:"Did you previously have a website?", so:"Horay miyaad u lahaan jirtay Website?" },
"modal.oldWebsite":     { en:"Your previous website (to be redesigned)", so:"Magaca Website-kaaga hore (uu rabo in dib loo desing gareeyo)" },
"modal.hasDomain":      { en:"Do you have a Domain & Hosting?", so:"Ma haysataa Domain iyo Hosting?" },
"modal.hasDomainYes":   { en:"Yes, I have them", so:"Haa, waan haystaa" },
"modal.hasDomainNo":    { en:"No, I need them", so:"Maya, waan u baahanahay" },
"modal.domainName":     { en:"Your domain name", so:"Magaca Domain-kaaga" },
"modal.budget":         { en:"Budget", so:"Qiyaasta Lacagta (Budget)" },
"modal.budgetChoose":   { en:"Choose your budget range", so:"Dooro qiyaasta budget-ka" },
"modal.budgetUnsure":   { en:"Not sure yet, still deciding", so:"Ma hubo, weli waan qiimeynayaa" },
"modal.details":        { en:"Project Details", so:"Sharaxaad Mashruuca" },
"modal.detailsPh":      { en:"Describe your project in detail: the website's purpose, sections you want, etc...", so:"Sharax mashruucaaga si faahfaahsan: ujeedada website-ka, qaybaha aad rabto, iwm..." },
"modal.time":           { en:"Time Needed", so:"Waqtiga loo baahan yahay" },
"modal.timeChoose":     { en:"Choose timeframe", so:"Dooro waqtiga" },
"modal.timeAsap":       { en:"ASAP", so:"ASAP (degdeg ah)" },
"modal.time1w":         { en:"Within 1 week", so:"1 Toddobaad gudahood" },
"modal.time24w":        { en:"2-4 weeks", so:"2-4 Toddobaad" },
"modal.time12m":        { en:"1-2 months", so:"1-2 Bilood" },
"modal.timeMore":       { en:"More time needed", so:"Wakhti dheeraad ah" },
"modal.submit":         { en:"Send via WhatsApp", so:"U Dir WhatsApp" }

};

/* ---------- Bilingual rotating hero words ---------- */
const heroWordsByLang = {
en: ["Professional Web Developer","WordPress Expert","UI/UX Designer","Business Website Specialist","Creative Freelancer"],
so: ["Horumariye Website oo Xirfad leh","Khabiir WordPress ah","Naqshadeeye UI/UX","Takhasusle Website Ganacsi","Freelancer Hal-abuur leh"]
};

/* =====================================================
   Apply translation to a single element while preserving
   any child icon elements (e.g. <i class="fa..."></i>).
===================================================== */

function applyI18nText(el, text){
    const hasElementChild = Array.from(el.childNodes).some(n => n.nodeType === 1);
    if(!hasElementChild){
        el.textContent = text;
        return;
    }
    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
    if(textNode){
        textNode.textContent = text + " ";
    }else{
        el.insertBefore(document.createTextNode(text + " "), el.firstChild);
    }
}

let currentLang = "en";

function setLanguage(lang){

    if(lang !== "en" && lang !== "so") lang = "en";

    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const entry = translations[key];
        if(entry && entry[lang]){
            applyI18nText(el, entry[lang]);
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const entry = translations[key];
        if(entry && entry[lang]){
            el.setAttribute("placeholder", entry[lang]);
        }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    if(typeof window.setHeroWords === "function"){
        window.setHeroWords(heroWordsByLang[lang] || heroWordsByLang.en);
    }

    try{ localStorage.setItem("site_lang", lang); }catch(e){}

}

/* =====================================================
   Promo banner: keeps --banner-h in sync with the banner's
   real rendered height (it can wrap to 2 lines on small
   screens or after a language switch) and handles closing.
===================================================== */

function adjustPromoBannerHeight(){
    const banner = document.getElementById("promoBanner");
    if(!banner || banner.classList.contains("promo-hidden")) return;
    const h = banner.offsetHeight;
    if(h > 0){
        document.documentElement.style.setProperty("--banner-h", h + "px");
    }
}

function closePromoBanner(){
    const banner = document.getElementById("promoBanner");
    if(!banner) return;
    banner.classList.add("promo-hidden");
    document.documentElement.style.setProperty("--banner-h", "0px");
    try{ sessionStorage.setItem("promo_banner_closed", "1"); }catch(e){}
}

document.addEventListener("DOMContentLoaded", () => {

    let savedLang = "en";
    try{
        savedLang = localStorage.getItem("site_lang") || "en";
    }catch(e){}

    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
            requestAnimationFrame(adjustPromoBannerHeight);
        });
    });

    let bannerClosed = false;
    try{ bannerClosed = sessionStorage.getItem("promo_banner_closed") === "1"; }catch(e){}

    if(bannerClosed){
        closePromoBanner();
    }else{
        requestAnimationFrame(adjustPromoBannerHeight);
    }

    const promoCloseBtn = document.getElementById("promoClose");
    if(promoCloseBtn){
        promoCloseBtn.addEventListener("click", closePromoBanner);
    }

    window.addEventListener("resize", () => {
        clearTimeout(window._promoResizeTimer);
        window._promoResizeTimer = setTimeout(adjustPromoBannerHeight, 150);
    });

});
