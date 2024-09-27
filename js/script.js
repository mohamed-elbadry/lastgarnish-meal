
$(function () {

    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    $('.show-search').click(function () {
        $('.control-search').toggle(500);

    });
    $('.my-special-link').click(function () {
        $('.special-dropdown ').toggle(500)
    })
    $("#open-menu").click(function () {
        var isExpanded = $(this).attr('aria-expanded');
        $(this).find('.fa-bars, .fa-bars').toggleClass('all');
        if (isExpanded === 'false') {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-xmark')
                .toggleClass('fa-bars');
            $('body').css('position', 'static');
        } else {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-bars')
                .toggleClass('fa-xmark');
            $('body').css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%'
            });
        }
    })
    const navLinks = document.querySelectorAll('nav a');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const currentURL = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
    const dashLinks = document.querySelectorAll('.dashboard-menu li a');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        dashLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    dashLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const dashcurrentURL = window.location.href;
    dashLinks.forEach(link => {
        if (link.href === dashcurrentURL) {
            link.classList.add('active');
        }
    });
    
   
    /* ===========================
               btn-nav-2 
          =========================== */
    const done = document.querySelectorAll('.btn-nav-2');
    done.forEach(function (el) {
        el.addEventListener('click', function () {

            const b = el.children[1];
            if (b.style.display === "block") {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            } else {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            }
        });
    });
    
})
