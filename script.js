/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== HEADER CLICKER ====================*/

// Select all navbar links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active-link'));
        // Add active class to clicked link
        link.classList.add('active-link');
    });
});



/*==================== REMOVE MENU MOBILE ====================*/
<script>
    // Disable wheel scroll
    window.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Disable touch scroll (mobile)
    window.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Disable keyboard scroll
    window.addEventListener('keydown', function(e) {
        let keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space", "Home", "End"];
        if (keys.includes(e.key)) {
            e.preventDefault();
        }
    });
</script>
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);
        
    tabContents.forEach(tabContent =>{
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) =>{
            tab.classList.remove('tab__active');
        }); 

        tab.classList.add('tab__active');
        

    });
});

/*=============== CONTACT FORM =============== */



