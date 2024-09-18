// JavaScript for interactivity
document.querySelector('.btn-accept').addEventListener('click', () => {
    const acceptModal = document.getElementById('acceptModal');
    const balloonContainer = document.getElementById('balloon-container');
    const music = document.getElementById('celebration-music');

    // Show the modal
    acceptModal.style.display = 'flex';

    // Play the music when the button is clicked
    music.play();

    // Generate multiple balloons
    for (let i = 0; i < 15; i++) {  // Creates 15 balloons, adjust as needed
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.classList.add('animate');
        
        // Randomize balloon color
        const colors = ['#ff4081', '#ffb6c1', '#ffd700', '#87ceeb', '#32cd32'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;
        
        // Randomize the balloon size
        const randomSize = Math.random() * 0.5 + 0.5; // Sizes between 0.5x and 1x of original
        balloon.style.transform = `scale(${randomSize})`;

        // Randomize the horizontal position
        const randomLeft = Math.random() * 100; // Positions balloons between 0% and 100% of width
        balloon.style.left = `${randomLeft}%`;

        // Append the balloon to the full-screen container
        balloonContainer.appendChild(balloon);

        // Remove balloon after animation to prevent DOM clutter
        setTimeout(() => {
            balloon.remove();
        }, 6000); // Matches the animation duration
    }
});

// Handle Decline Button
document.querySelector('.btn-decline').addEventListener('click', () => {
    const declineModal = document.getElementById('declineModal');
    
    // Show the modal
    declineModal.style.display = 'flex';
});

// Close modals when the close button is clicked
document.getElementById('closeAccept').addEventListener('click', () => {
    document.getElementById('acceptModal').style.display = 'none';
    const music = document.getElementById('celebration-music');
    music.pause();
    music.currentTime = 0; // Reset music
});

document.getElementById('closeDecline').addEventListener('click', () => {
    document.getElementById('declineModal').style.display = 'none';
});
