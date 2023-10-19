document.addEventListener('DOMContentLoaded', function() {
    let icons = document.querySelectorAll('.icon-container');
    

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.querySelector('.icon-text').style.display = 'block';
            this.classList.add('active');
        });

        icon.addEventListener('mouseout', function() {
            this.querySelector('.icon-text').style.display = 'none';
            this.classList.remove('active');
        });

        // For mobile
        icon.addEventListener('click', function() {
            let tooltip = this.querySelector('.icon-text');
            if (window.getComputedStyle(tooltip).display === 'none') {
                tooltip.style.display = 'block';
                this.classList.add('active');
            } else {
                tooltip.style.display = 'none';
                this.classList.remove('active');
            }
        });
    });
});