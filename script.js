const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('item-list');

const itemWidth = document.querySelector('.item').clientWidth; // Get the width of one item

prev.addEventListener('click', () => {
    list.scrollLeft -= itemWidth; // Scroll left by the width of one item
});

next.addEventListener('click', () => {
    list.scrollLeft += itemWidth; // Scroll right by the width of one item
});

const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const backToMenuButton = document.getElementById('back-to-menu');

// Function to open the cart modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex'; // Show the modal
});

// Function to close the cart modal
backToMenuButton.addEventListener('click', () => {
    cartModal.style.display = 'none'; // Hide the modal
});

// Optional: Close the modal when clicking outside of it
cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none'; // Hide the modal
    }
});

const requestDishButton = document.getElementById('request-dish-button');
const requestModal = document.getElementById('request-modal');
const cancelRequestButton = document.getElementById('cancel-request');
const submitRequestButton = document.getElementById('submit-request');

// Function to open the request dish modal
requestDishButton.addEventListener('click', () => {
    requestModal.style.display = 'flex'; // Show the modal
});

// Function to close the request dish modal
cancelRequestButton.addEventListener('click', () => {
    requestModal.style.display = 'none'; // Hide the modal
});

// Optional: Close the modal when clicking outside of it
requestModal.addEventListener('click', (event) => {
    if (event.target === requestModal) {
        requestModal.style.display = 'none'; // Hide the modal
    }
});

// Close the modal on submit request button click (no data storage)
submitRequestButton.addEventListener('click', () => {
    requestModal.style.display = 'none'; // Hide the modal
});



const body = document.body; // Reference to the body element

// Function to open the cart modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex'; // Show the modal
    body.classList.add('no-scroll'); // Add class to body to prevent scrolling
});

// Function to close the cart modal
backToMenuButton.addEventListener('click', () => {
    cartModal.style.display = 'none'; // Hide the modal
    body.classList.remove('no-scroll'); // Remove class to allow scrolling
});

// Function to open the request dish modal
requestDishButton.addEventListener('click', () => {
    requestModal.style.display = 'flex'; // Show the modal
    body.classList.add('no-scroll'); // Add class to body to prevent scrolling
});

// Function to close the request dish modal
cancelRequestButton.addEventListener('click', () => {
    requestModal.style.display = 'none'; // Hide the modal
    body.classList.remove('no-scroll'); // Remove class to allow scrolling
});

submitRequestButton.addEventListener('click', () => {
    requestModal.style.display = 'none'; // Hide the modal
    body.classList.remove('no-scroll'); // Remove class to allow scrolling
});

const video = document.getElementById('promo-video');
const playIcon = document.getElementById('play-icon');

// Function to play/pause the video when clicking anywhere on the video
video.addEventListener('click', () => {
    if (video.paused) {
        video.play(); // Play the video
        playIcon.style.display = 'none'; // Hide the play icon
    } else {
        video.pause(); // Pause the video
        playIcon.style.display = 'block'; // Show the play icon
    }
});

// Show the play icon when the video is paused
video.addEventListener('pause', () => {
    playIcon.style.display = 'block'; // Show the play icon
});

// Hide the play icon when the video is playing
video.addEventListener('play', () => {
    playIcon.style.display = 'none'; // Hide the play icon
});