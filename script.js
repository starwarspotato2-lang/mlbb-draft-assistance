// --- 1. THE DRAFT STATE ---
const draftState = {
    blueBans: [], redBans: [], bluePicks: [], redPicks: [], selectedHeroFocus: null 
};

// --- 2. INITIALIZATION ---
function init() {
    renderHeroGrid("All");

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            let filterMap = { "All Lanes": "All", "Roam": "Roam", "EXP": "EXP", "Jungle": "Jungle", "Mid": "Mid", "Gold": "Gold" };
            renderHeroGrid(filterMap[e.target.innerText]);
        });
    });

    document.getElementById('btn-ban').addEventListener('click', () => handleAction('ban'));
    document.getElementById('btn-pick-blue').addEventListener('click', () => handleAction('blue'));
    document.getElementById('btn-pick-red').addEventListener('click', () => handleAction('red'));
}

// --- 3. RENDER HERO GRID ---
function renderHeroGrid(laneFilter) {
    const grid = document.getElementById('main-hero-grid');
    grid.innerHTML = ''; 

    let heroes = Object.keys(matchupData).sort();

    heroes.forEach(heroName => {
        let heroData = matchupData[heroName];
        if (laneFilter !== "All" && !heroData.lanes.includes(laneFilter)) return;

        let btn = document.createElement('div');
        btn.classList.add('hero-btn');
        
        let primaryImg = heroImages[heroName];
        
        // If image fails to load, it falls back to the clean logo provided in data.js
        btn.innerHTML = `
            <img src="${primaryImg}" alt="${heroName}" title="${heroName}" 
                 onerror="this.onerror=null; this.src='${FALLBACK_ICON}'; this.style.opacity='0.4';">
            <span class="hero-fallback-text">${heroName}</span>
        `;

        if (draftState.blueBans.includes(heroName) || draftState.redBans.includes(heroName)) btn.classList.add('banned');
        if (draftState.bluePicks.includes(heroName) || draftState.redPicks.includes(heroName)) btn.classList.add('picked');

        btn.addEventListener('click', () => {
            if (btn.classList.contains('banned') || btn.classList.contains('picked')) return;
            document.querySelectorAll('.hero-btn').forEach(b => b.classList.remove('selected-focus'));
            btn.classList.add('selected-focus');
            draftState.selectedHeroFocus = heroName;
        });

        grid.appendChild(btn);
    });
}

// --- 4. HANDLING LOCK INS ---
function handleAction(actionType) {
    if (!draftState.selectedHeroFocus) return alert("Select a hero first!");
    
    let hero = draftState.selectedHeroFocus;

    if (actionType === 'ban') {
        if (draftState.blueBans.length < 5) {
            draftState.blueBans.push(hero);
            updateSlots('.blue-bans .ban-slot', draftState.blueBans);
        } else if (draftState.redBans.length < 5) {
            draftState.redBans.push(hero);
            updateSlots('.red-bans .ban-slot', draftState.redBans);
        } else {
            return alert("All bans are full!");
        }
    } 
    else if (actionType === 'blue') {
        if (draftState.bluePicks.length >= 5) return alert("Blue team is full!");
        draftState.bluePicks.push(hero);
        updateSlots('.blue-team .pick-slot', draftState.bluePicks);
    } 
    else if (actionType === 'red') {
        if (draftState.redPicks.length >= 5) return alert("Red team is full!");
        draftState.redPicks.push(hero);
        updateSlots('.red-team .pick-slot', draftState.redPicks);
    }

    draftState.selectedHeroFocus = null; 
    let currentFilter = document.querySelector('.filter-btn.active').innerText;
    let filterMap = { "All Lanes": "All", "Roam": "Roam", "EXP": "EXP", "Jungle": "Jungle", "Mid": "Mid", "Gold": "Gold" };
    renderHeroGrid(filterMap[currentFilter]);

    calculateRecommendations();
    calculateWinRate();
}

// --- 5. UPDATE VISUAL SLOTS ---
function updateSlots(selector, dataArray) {
    let slots = document.querySelectorAll(selector);
    for (let i = 0; i < slots.length; i++) {
        if (dataArray[i]) {
            let heroName = dataArray[i];
            let primaryImg = heroImages[heroName];
            
            slots[i].innerHTML = `
                <img src="${primaryImg}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" 
                     onerror="this.onerror=null; this.src='${FALLBACK_ICON}'; this.style.opacity='0.4';">
                <span class="hero-fallback-text" style="font-size: 0.6rem;">${heroName}</span>
            `;
        }
    }
}

// --- 6. WIN PROBABILITY ENGINE ---
function calculateWinRate() {
    const display = document.getElementById('win-rate-display');
    const blueBar = document.getElementById('win-bar-blue');
    const redBar = document.getElementById('win-bar-red');
    if (!display || !blueBar || !redBar) return;

    let blueChance = 50; 

    draftState.redPicks.forEach(enemy => {
        let enemyData = matchupData[enemy];
        if (enemyData && enemyData.counteredBy) {
            draftState.bluePicks.forEach(ally => {
                if (enemyData.counteredBy.includes(ally)) blueChance += 6; 
            });
        }
    });

    draftState.bluePicks.forEach(ally => {
        let allyData = matchupData[ally];
        if (allyData && allyData.synergies) {
            draftState.bluePicks.forEach(teammate => {
                if (allyData.synergies.includes(teammate)) blueChance += 3; 
            });
        }
    });

    if (draftState.bluePicks.length >= 3) {
        let teamLanes = [];
        draftState.bluePicks.forEach(ally => {
            if (matchupData[ally]) teamLanes.push(...matchupData[ally].lanes);
        });

        if (!teamLanes.includes("Jungle")) blueChance -= 15;
