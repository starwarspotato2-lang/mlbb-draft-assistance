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

// --- 3. THE FALLBACK IMAGE SYSTEM ---
// If the main image breaks, it generates a beautiful golden icon with the hero's initials!
function getFallbackImage(heroName) {
    return `https://ui-avatars.com/api/?name=${heroName}&background=151f32&color=f1c40f&bold=true&size=150`;
}

// --- 4. RENDER HERO GRID ---
function renderHeroGrid(laneFilter) {
    const grid = document.getElementById('main-hero-grid');
    grid.innerHTML = ''; 

    let heroes = Object.keys(matchupData).sort();

    heroes.forEach(heroName => {
        let heroData = matchupData[heroName];
        if (laneFilter !== "All" && !heroData.lanes.includes(laneFilter)) return;

        let btn = document.createElement('div');
        btn.classList.add('hero-btn');
        
        // This is the magic bulletproof image tag
        let primaryImg = getHeroImage(heroName);
        let fallbackImg = getFallbackImage(heroName);
        
        btn.innerHTML = `
            <img src="${primaryImg}" alt="${heroName}" title="${heroName}" 
                 onerror="this.onerror=null; this.src='${fallbackImg}';">
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

// --- 5. HANDLING LOCK INS ---
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

// --- 6. UPDATE VISUAL SLOTS ---
function updateSlots(selector, dataArray) {
    let slots = document.querySelectorAll(selector);
    for (let i = 0; i < slots.length; i++) {
        if (dataArray[i]) {
            let heroName = dataArray[i];
            let primaryImg = getHeroImage(heroName);
            let fallbackImg = getFallbackImage(heroName);
            
            slots[i].innerHTML = `
                <img src="${primaryImg}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" 
                     onerror="this.onerror=null; this.src='${fallbackImg}';">
            `;
        }
    }
}

// --- 7. WIN PROBABILITY ENGINE ---
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
        if (!teamLanes.includes("Roam")) blueChance -= 15;
        if (!teamLanes.includes("Gold")) blueChance -= 5;
        if (!teamLanes.includes("Mid")) blueChance -= 5;
    }

    blueChance = Math.max(10, Math.min(90, blueChance));
    let redChance = 100 - blueChance;

    blueBar.style.width = `${blueChance}%`;
    redBar.style.width = `${redChance}%`;
    display.innerText = `${blueChance}% - ${redChance}%`;
}

// --- 8. AI RECOMMENDATIONS ---
function calculateRecommendations() {
    const recommendationsPanel = document.getElementById('top-picks');
    
    if (draftState.bluePicks.length === 0 && draftState.redPicks.length === 0) {
        recommendationsPanel.innerHTML = '<li>Waiting for draft...</li>';
        return;
    }

    let availableHeroes = Object.keys(matchupData).filter(hero => 
        !draftState.bluePicks.includes(hero) && 
        !draftState.redPicks.includes(hero) &&
        !draftState.blueBans.includes(hero) &&
        !draftState.redBans.includes(hero)
    );
    
    let scores = {};
    availableHeroes.forEach(hero => scores[hero] = 0);

    draftState.redPicks.forEach(enemy => {
        if (matchupData[enemy] && matchupData[enemy].counteredBy) {
            matchupData[enemy].counteredBy.forEach(counterHero => {
                if (scores[counterHero] !== undefined) scores[counterHero] += 10; 
            });
        }
    });

    draftState.bluePicks.forEach(ally => {
        if (matchupData[ally] && matchupData[ally].synergies) {
            matchupData[ally].synergies.forEach(synergyHero => {
                if (scores[synergyHero] !== undefined) scores[synergyHero] += 5; 
            });
        }
    });

    let sortedRecommendations = availableHeroes.sort((a, b) => scores[b] - scores[a]);
    recommendationsPanel.innerHTML = ''; 

    let outputCount = 0;
    for (let i = 0; i < sortedRecommendations.length; i++) {
        let heroName = sortedRecommendations[i];
        let heroScore = scores[heroName];

        if (heroScore > 0) {
            let listItem = document.createElement('li');
            listItem.innerText = `${heroName} (+${heroScore})`; 
            recommendationsPanel.appendChild(listItem);
            outputCount++;
        }
        if (outputCount >= 5) break; 
    }

    if (outputCount === 0) {
        recommendationsPanel.innerHTML = '<li>No clear counters yet.</li>';
    }
}

window.onload = init;
