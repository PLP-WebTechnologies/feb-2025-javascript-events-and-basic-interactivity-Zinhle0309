// Event Handling
const clickButton = document.getElementById('clickButton');
let clickCount = 0;
clickButton.addEventListener('click', () => {
    clickCount++;
    clickButton.textContent = `Click me! (${clickCount} clicks)`;
    if (clickCount === 10) {
        clickButton.classList.add('bouncing');
    }
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.textContent = 'Mouse is here!';
});
hoverBox.addEventListener('mouseleave', () => {
    hoverBox.textContent = 'Hover over me!';
});

const keypressBox = document.getElementById('keypressBox');
document.addEventListener('keydown', (e) => {
    keypressBox.textContent = `Press any key (Last key: ${e.key})`;
});

// Interactive Elements
const colorButton = document.getElementById('colorButton');
const colors = ['#4f46e5', '#dc2626', '#059669', '#d97706', '#7c3aed'];
let colorIndex = 0;
colorButton.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    colorButton.style.backgroundColor = colors[colorIndex];
});

// Image Gallery
const images = [
    "Images/gije.jpg",
    "Images/benzaoui.jpg",
    "Images/fox.jpg",
    "Images/gabor.jpg",
    "Images/raditya.jpg"
];

let currentImageIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const prevImageButton = document.getElementById("prevImage");
const nextImageButton = document.getElementById("nextImage");

// Function to update the displayed image
function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

// Event listener for the "Next" button
nextImageButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image
    updateImage();
});

// Event listener for the "Previous" button
prevImageButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loop back to the last image
    updateImage();
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(`[data-content="${target}"]`).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const inputs = form.querySelectorAll('input');

const validateInput = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    
    if (!input.value) {
        errorElement.textContent = 'This field is required';
        return false;
    }

    if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        errorElement.textContent = 'Please enter a valid email address';
        return false;
    }

    if (input.id === 'password' && input.value.length < 8) {
        errorElement.textContent = 'Password must be at least 8 characters';
        return false;
    }

    if (input.id === 'username' && input.value.length < 3) {
        errorElement.textContent = 'Username must be at least 3 characters';
        return false;
    }

    errorElement.textContent = '';
    return true;
};

inputs.forEach(input => {
    input.addEventListener('input', () => validateInput(input));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'gradient 15s ease infinite';
            alert('🎮 Konami Code Activated! You got 30 extra lives!');
            konamiIndex = 0;
            
            // Reset after 5 seconds
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(to right, #e2e8f0, #f8fafc)';
                document.body.style.animation = 'none';
            }, 5000);
        }
    } else {
        konamiIndex = 0;
    }
});