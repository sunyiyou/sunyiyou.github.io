// Publications filter functionality
(function() {
    'use strict';
    
    function initPublicationFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const publications = document.querySelectorAll('.publication-item');
        
        if (filterButtons.length === 0 || publications.length === 0) {
            console.warn('Publication filter elements not found');
            return;
        }
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                publications.forEach(pub => {
                    if (filterValue === 'all') {
                        pub.classList.remove('hidden');
                    } else {
                        const tags = pub.getAttribute('data-tags');
                        if (tags && tags.split(',').includes(filterValue)) {
                            pub.classList.remove('hidden');
                        } else {
                            pub.classList.add('hidden');
                        }
                    }
                });
            });
        });
        
        console.log('Publication filters initialized successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPublicationFilters);
    } else {
        // DOM is already ready
        initPublicationFilters();
    }
})();

