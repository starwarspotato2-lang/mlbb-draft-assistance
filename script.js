// Define our state to keep track of the draft
const draftState = {
    allies: [],
    enemies: []
};

// Initialize the application once the HTML loads
function init() {
    const heroButtons = document.querySelectorAll('.hero-btn');
    
    // Add event listeners to all 132 buttons
    heroButtons.forEach(button => {
        
        // LEFT CLICK = Pick for Your Team (Blue)
        button.addEventListener('click', (e) => {
            handlePick(e.target, 'ally');
        });
        
        // RIGHT CLICK = Pick for Enemy Team (Red)
        button.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Stops the normal right-click menu from popping up
            handlePick(e.target, 'enemy');
        });
    });
}

// Handle the hero selection
function handlePick(button, team) {
    // Prevent picking a hero that is already selected
    if (button.classList.contains('ally-selected') || button.classList.contains('enemy-selected')) {
        return;
    }

    const heroName = button.innerText;
    const heroRole = button.dataset.role; // Grabs the role we hid in the HTML

    // Add to the draft state
    if (team === 'ally') {
        if (draftState.allies.length >= 5) return alert("Your team is full!");
        draftState.allies.push({ name: heroName, role: heroRole });
        button.classList.add('ally-selected');
        updateDraftBoard('ally-picks', heroName);
    } else {
        if (draftState.enemies.length >= 5) return alert("Enemy team is full!");
        draftState.enemies.push({ name: heroName, role: heroRole });
        button.classList.add('enemy-selected');
        updateDraftBoard('enemy-picks', heroName);
    }

    // Run the recommendation algorithm every time a hero is picked
    calculateRecommendations();
}

// Update the visual draft board at the top
function updateDraftBoard(listId, heroName) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.innerText = heroName;
    list.appendChild(listItem);
}

// The Core Math Logic (Currently a placeholder structure)
function calculateRecommendations() {
    const recommendationsPanel = document.getElementById('top-picks');
    
    // If draft is empty, wait.
    if (draftState.allies.length === 0 && draftState.enemies.length === 0) {
        recommendationsPanel.innerHTML = '<li>Waiting for draft to start...</li>';
        return;
    }

    // --- YOUR AI LOGIC GOES HERE LATER ---
    // For now, this just proves the system works by grabbing the first 3 unpicked heroes
    // and pretending they scored high points.
    
    let allButtons = Array.from(document.querySelectorAll('.hero-btn'));
    let availableHeroes = allButtons.filter(btn => 
        !btn.classList.contains('ally-selected') && 
        !btn.classList.contains('enemy-selected')
    );
    
    recommendationsPanel.innerHTML = ''; // Clear the "Waiting..." text
    
    // Output the top recommendations
    for(let i = 0; i < 3 && i < availableHeroes.length; i++) {
        let heroName = availableHeroes[i].innerText;
        let listItem = document.createElement('li');
        
        // This is where your dynamic math score will eventually go
        listItem.innerText = heroName + " (+10 pts)"; 
        recommendationsPanel.appendChild(listItem);
    }
}

// Run the initialization function when the window loads
window.onload = init;
