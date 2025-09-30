let currentSlide = 0;
const images = [
    '/javascript-projects/Carousel/images/image1.jpg',
    '/javascript-projects/Carousel/images/image2.jpg',
    '/javascript-projects/Carousel/images/image3.jpg',
    '/javascript-projects/Carousel/images/image4.jpg'
];

// Get the image element
const imageElement = document.getElementById('carousel-image');

// Function to update the displayed image based on currentSlide index
function updateImage() {
    imageElement.src = images[currentSlide];
}

// Initialize the carousel by setting the initial image
updateImage();

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length; // Loop back to first slide after the last one
    updateImage();
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length; // Loop back to last slide if at the first one
    updateImage();
}



