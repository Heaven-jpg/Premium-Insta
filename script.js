const gestureLayer = document.getElementById('gesture-layer');
const mobileUI = document.getElementById('mobile-ui');

// Listen for your touch gesture on the top half of the screen
gestureLayer.addEventListener('click', () => {
    mobileUI.classList.toggle('hidden');
});
