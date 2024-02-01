const gradientContainer = document.querySelector('.gradient-container');

// Add blur effect on mouseover
gradientContainer.addEventListener('mouseover', () => {
  gradientContainer.classList.add('blur-effect');
});

// Remove blur effect on mouseout
gradientContainer.addEventListener('mouseout', () => {
  gradientContainer.classList.remove('blur-effect');
});
