// 1. Enter the game
function hideInstructions() {
    document.getElementById('instruction-overlay').style.display = 'none';
    document.getElementById('unity-wrapper').style.display = 'block';
    // No need to reload, the game can be loading in the background
}

// 2. Exit back to the main site
function goToHome() {
    window.location.href = "../undex.html"; // Takes you back one folder to your main page
}

// 3. Called by Unity GameManager when 5 items are found
function onGameComplete() {
    // Show a final 'Victory' message or redirect back home automatically
    alert("The Balance is Restored! Returning to Palace...");
    setTimeout(goToHome, 2000); 
}