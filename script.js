document.addEventListener('DOMContentLoaded', function() {
    let icons = document.querySelectorAll('.icon-container');

    // Touch device detection
    let isTouchDevice = 'ontouchstart' in document.documentElement;

    icons.forEach(icon => {
        if (isTouchDevice) {
            // For touch-capable devices
            icon.addEventListener('touchstart', function(e) {
                e.preventDefault(); // Prevent any default touch action

                let tooltip = this.querySelector('.icon-text');
                
                // Hide all other tooltips
                icons.forEach(otherIcon => {
                    if (otherIcon !== icon) {
                        otherIcon.querySelector('.icon-text').style.display = 'none';
                        otherIcon.classList.remove('active');
                    }
                });

                // Toggle the tooltip display
                if (window.getComputedStyle(tooltip).display === 'none') {
                    tooltip.style.display = 'block';
                    this.classList.add('active');
                } else {
                    tooltip.style.display = 'none';
                    this.classList.remove('active');
                }
            });
        } else {
            // For non-touch devices
            icon.addEventListener('mouseover', function() {
                this.querySelector('.icon-text').style.display = 'block';
                this.classList.add('active');
            });

            icon.addEventListener('mouseout', function() {
                this.querySelector('.icon-text').style.display = 'none';
                this.classList.remove('active');
            });
        }
    });

    // Close tooltips on scroll
    let scrollThreshold = 5; // Adjust this value as needed
    let initialScrollPosition = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
        let currentScrollPosition = window.pageYOffset;
        if (Math.abs(currentScrollPosition - initialScrollPosition) > scrollThreshold) {
            icons.forEach(icon => {
                icon.querySelector('.icon-text').style.display = 'none';
                icon.classList.remove('active');
            });
        }
        initialScrollPosition = currentScrollPosition;
    });

    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navList.classList.toggle('active');
    });
});