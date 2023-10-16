// Initialize any required JS libraries or animations
// This will toggle the tooltip on mobile touch events
// document.querySelectorAll('.circle-icon').forEach(icon => {
//     icon.addEventListener('touchstart', function(event) {
//         event.preventDefault();
//         const tooltip = this.nextElementSibling;
//         if (tooltip.style.display === 'block') {
//             tooltip.style.display = 'none';
//         } else {
//             tooltip.style.display = 'block';
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    let icons = document.querySelectorAll('.icon-container');
    

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.querySelector('.icon-text').style.display = 'block';
            this.classList.add('active');  // Add the active class to the icon-container
        });

        icon.addEventListener('mouseout', function() {
            this.querySelector('.icon-text').style.display = 'none';
            this.classList.remove('active');  // Remove the active class from the icon-container
        });

        // For mobile
        icon.addEventListener('click', function() {
            let tooltip = this.querySelector('.icon-text');
            if (window.getComputedStyle(tooltip).display === 'none') {
                tooltip.style.display = 'block';
                this.classList.add('active');  // Add the active class to the icon-container
            } else {
                tooltip.style.display = 'none';
                this.classList.remove('active');  // Remove the active class from the icon-container
            }
        });
    });
});