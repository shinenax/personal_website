// Get DOM elements
const objects = document.querySelectorAll('.object');
const popupOverlay = document.getElementById('popup-overlay');
const popupText = document.getElementById('popup-text');
const closeButton = document.getElementById('close-popup');

// Add click event listeners to all objects
objects.forEach(object => {
    object.addEventListener('click', () => {
        const content = object.getAttribute('data-content');
        showPopup(content);
    });
});

// Function to show popup
function showPopup(content) {
    popupText.innerHTML = content;
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to hide popup
function hidePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close popup when clicking the close button
closeButton.addEventListener('click', hidePopup);

// Close popup when clicking outside the content
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        hidePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        hidePopup();
    }
});

// Add some entrance animations
window.addEventListener('load', () => {
    const title = document.querySelector('.title');
    const centerCharacter = document.querySelector('.center-character');
    const objects = document.querySelectorAll('.object');
    
    // Animate title
    title.style.opacity = '0';
    title.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => {
        title.style.transition = 'all 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateX(-50%) translateY(0)';
    }, 300);
    
    // Animate center character
    centerCharacter.style.opacity = '0';
    centerCharacter.style.transform = 'scale(0.8)';
    setTimeout(() => {
        centerCharacter.style.transition = 'all 1s ease';
        centerCharacter.style.opacity = '1';
        centerCharacter.style.transform = 'scale(1)';
    }, 600);
    
    // Animate objects with staggered delay
    objects.forEach((object, index) => {
        object.style.opacity = '0';
        object.style.transform = 'scale(0.5) translateY(20px)';
        setTimeout(() => {
            object.style.transition = 'all 0.8s ease';
            object.style.opacity = '1';
            object.style.transform = 'scale(1) translateY(0)';
        }, 900 + (index * 150));
    });
});
