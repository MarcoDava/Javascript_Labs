// Declare constants
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAltTexts = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of an Egyptian wall painting',
    'pic5.jpg': 'Large moth on a leaf'
};

// Select elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

// Loop through image filenames and create thumbnails
imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', imageAltTexts[filename]);
    thumbBar.appendChild(newImage);

    // Add click event listener to each thumbnail
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${filename}`);
        displayedImage.setAttribute('alt', imageAltTexts[filename]);
    });
});

// Add click event listener to the button
btn.addEventListener('click', () => {
    const isDark = btn.getAttribute('class') === 'dark';
    if (isDark) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});
