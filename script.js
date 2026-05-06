// --- 1. THE BRAINS: FULL MATCHUP DATABASE ---
const matchupData = {
    // --- TANKS ---
    "Akai": { counteredBy: ["Diggie", "Valir", "Franco", "Claude"], synergies: ["Pharsa", "Odette", "Marksman"] },
    "Atlas": { counteredBy: ["Diggie", "Valir", "Chou", "Valentina"], synergies: ["Pharsa", "Yve", "Claude"] },
    "Barats": { counteredBy: ["Karrie", "Lunox", "X.Borg", "Valir"], synergies: ["Estes", "Floryn", "Rafaela"] },
    "Baxia": { counteredBy: ["Valir", "X.Borg", "Karrie", "Lunox"], synergies: ["Angela", "Mathilda", "Pharsa"] },
    "Belerick": { counteredBy: ["Valir", "X.Borg", "Lylia", "Lunox"], synergies: ["Angela", "Mathilda", "Estes"] },
    "Carmilla": { counteredBy: ["Diggie", "Valir", "Chou", "Franco"], synergies: ["Cecilion", "Claude", "Pharsa"] },
    "Chip": { counteredBy: ["Diggie", "Valir", "Baxia", "Minsitthar"], synergies: ["Kadita", "Odette", "Tigreal"] },
    "Edith": { counteredBy: ["Karrie", "Lunox", "Valir", "Chou"], synergies: ["Estes", "Angela", "Tigreal"] },
    "Franco": { counteredBy: ["Diggie", "Johnson", "Atlas", "Gloo"], synergies: ["Beatrix", "Moskov", "Selena"] },
    "Fredrinn": { counteredBy: ["Karrie", "Lunox", "Valir", "Baxia"], synergies: ["Estes", "Angela", "Mathilda"] },
    "Gatotkaca": { counteredBy: ["Valir", "X.Borg", "Lylia", "Karrie"], synergies: ["Angela", "Mathilda", "Pharsa"] },
    "Gloo": { counteredBy: ["Faramis", "Vexana", "Valir", "Alpha"], synergies: ["Estes", "Angela", "Yve"] },
    "Grock": { counteredBy: ["Valir", "X.Borg", "Lylia", "Karrie"], synergies: ["Beatrix", "Moskov", "Selena"] },
    "Hylos": { counteredBy: ["Valir", "Karrie", "Baxia", "Lunox"], synergies: ["Angela", "Estes", "Pharsa"] },
    "Johnson": { counteredBy: ["Diggie", "Grock", "Baxia", "Valir"], synergies: ["Odette", "Kadita", "Badang"] },
    "Khufra": { counteredBy: ["Valir", "Franco", "Diggie", "Chou"], synergies: ["Esmeralda", "Fanny", "Ling"] },
    "Minotaur": { counteredBy: ["Diggie", "Valir", "Chou", "Franco"], synergies: ["Claude", "Irithel", "Pharsa"] },
    "Tigreal": { counteredBy: ["Diggie", "Valir", "Akai", "Chou"], synergies: ["Pharsa", "Odette", "Claude"] },
    "Uranus": { counteredBy: ["Baxia", "Esmeralda", "Karrie", "Lunox"], synergies: ["Estes", "Angela", "Mathilda"] },

    // --- FIGHTERS ---
    "Aldous": { counteredBy: ["Chou", "Valir", "Diggie", "Akai"], synergies: ["Angela", "Estes", "Johnson"] },
    "Alpha": { counteredBy: ["Baxia", "Valir", "Chou", "Lunox"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Alucard": { counteredBy: ["Baxia", "Chou", "Valir", "Khufra"], synergies: ["Angela", "Estes", "Diggie"] },
    "Argus": { counteredBy: ["Valir", "Chou", "Franco", "Kaja"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Arlott": { counteredBy: ["Phoveus", "Minsitthar", "Khufra", "Ruby"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Aulus": { counteredBy: ["Chou", "Valir", "Baxia", "Khufra"], synergies: ["Angela", "Estes", "Diggie"] },
    "Badang": { counteredBy: ["Chou", "Valir", "Khufra", "Phoveus"], synergies: ["Johnson", "Atlas", "Tigreal"] },
    "Balmond": { counteredBy: ["Valir", "Baxia", "Karrie", "Lunox"], synergies: ["Angela", "Estes", "Diggie"] },
    "Bane": { counteredBy: ["Chou", "Valir", "Khufra", "Lancelot"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Benedetta": { counteredBy: ["Minsitthar", "Khufra", "Phoveus", "Chou"], synergies: ["Angela", "Tigreal", "Atlas"] },
    "Chou": { counteredBy: ["Paquito", "Gusion", "Hayabusa", "Benedetta"], synergies: ["Brody", "Beatrix", "Clint"] },
    "Cici": { counteredBy: ["Baxia", "Chou", "Phoveus", "Khufra"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Dyrroth": { counteredBy: ["Chou", "Paquito", "Thamuz", "Guinevere"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Freya": { counteredBy: ["Baxia", "Valir", "Chou", "Khufra"], synergies: ["Angela", "Estes", "Diggie"] },
    "Guinevere": { counteredBy: ["Chou", "Kaja", "Valir", "Franco"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Hilda": { counteredBy: ["Valir", "Karrie", "Baxia", "Lunox"], synergies: ["Angela", "Estes", "Diggie"] },
    "Jawhead": { counteredBy: ["Valir", "Chou", "Khufra", "Baxia"], synergies: ["Angela", "Mathilda", "Tigreal"] },
    "Julian": { counteredBy: ["Chou", "Phoveus", "Khufra", "Saber"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Kalea": { counteredBy: ["Chou", "Khufra", "Baxia", "Valir"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Khaleed": { counteredBy: ["Baxia", "Chou", "Valir", "Khufra"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Lapu-Lapu": { counteredBy: ["Chou", "Khufra", "Valir", "Baxia"], synergies: ["Angela", "Tigreal", "Atlas"] },
    "Leomord": { counteredBy: ["Chou", "Khufra", "Valir", "Baxia"], synergies: ["Angela", "Estes", "Diggie"] },
    "Lukas": { counteredBy: ["Chou", "Valir", "Baxia", "Khufra"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Martis": { counteredBy: ["Phoveus", "Gusion", "Lancelot", "Benedetta"], synergies: ["Angela", "Mathilda", "Tigreal"] },
    "Masha": { counteredBy: ["Baxia", "Valir", "Chou", "Karrie"], synergies: ["Angela", "Estes", "Diggie"] },
    "Minsitthar": { counteredBy: ["Valir", "Chou", "Diggie", "Karrie"], synergies: ["Tigreal", "Atlas", "Pharsa"] },
    "Paquito": { counteredBy: ["Benedetta", "Chou", "Esmeralda", "Phoveus"], synergies: ["Angela", "Mathilda", "Tigreal"] },
    "Phoveus": { counteredBy: ["Esmeralda", "Lunox", "Karrie", "Baxia"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Roger": { counteredBy: ["Baxia", "Chou", "Khufra", "Valir"], synergies: ["Angela", "Estes", "Diggie"] },
    "Ruby": { counteredBy: ["Valir", "Pharsa", "Yve", "Lunox"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Silvanna": { counteredBy: ["Chou", "Diggie", "Valir", "Kadita"], synergies: ["Johnson", "Tigreal", "Atlas"] },
    "Sora": { counteredBy: ["Chou", "Khufra", "Baxia", "Valir"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Sun": { counteredBy: ["Balmond", "X.Borg", "Valir", "Baxia"], synergies: ["Angela", "Estes", "Diggie"] },
    "Suyou": { counteredBy: ["Chou", "Valir", "Baxia", "Khufra"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Terizla": { counteredBy: ["Valir", "Wanwan", "Claude", "Karrie"], synergies: ["Angela", "Estes", "Atlas"] },
    "Thamuz": { counteredBy: ["Baxia", "Valir", "Karrie", "Lunox"], synergies: ["Angela", "Estes", "Diggie"] },
    "X.Borg": { counteredBy: ["Baxia", "Valir", "Karrie", "Chou"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Yin": { counteredBy: ["Melissa", "Argus", "Valir", "Pharsa"], synergies: ["Johnson", "Angela"] },
    "Yu Zhong": { counteredBy: ["Baxia", "Dyrroth", "Wanwan", "Karrie"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Zilong": { counteredBy: ["Chou", "Khufra", "Valir", "Baxia"], synergies: ["Angela", "Estes", "Tigreal"] },

    // --- ASSASSINS ---
    "Aamon": { counteredBy: ["Saber", "Chou", "Kaja", "Franco"], synergies: ["Tigreal", "Atlas", "Mathilda"] },
    "Fanny": { counteredBy: ["Khufra", "Franco", "Saber", "Moskov"], synergies: ["Angela", "Estes", "Floryn"] },
    "Gusion": { counteredBy: ["Ruby", "Chou", "Khufra", "Saber"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Hanzo": { counteredBy: ["Natalia", "Aldous", "Ling", "Fanny"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Hayabusa": { counteredBy: ["Saber", "Chou", "Khufra", "Ruby"], synergies: ["Angela", "Tigreal", "Atlas"] },
    "Helcurt": { counteredBy: ["Hylos", "Belerick", "Tigreal", "Aldous"], synergies: ["Natalia", "Aldous", "Yi Sun-shin"] },
    "Joy": { counteredBy: ["Minsitthar", "Phoveus", "Franco", "Kaja"], synergies: ["Angela", "Estes", "Floryn"] },
    "Karina": { counteredBy: ["Chou", "Franco", "Kaja", "Khufra"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Lancelot": { counteredBy: ["Khufra", "Ruby", "Phoveus", "Chou"], synergies: ["Angela", "Mathilda", "Rafaela"] },
    "Ling": { counteredBy: ["Khufra", "Ruby", "Minsitthar", "Saber"], synergies: ["Angela", "Estes", "Diggie"] },
    "Natalia": { counteredBy: ["Aldous", "Yi Sun-shin", "Rafaela", "Popol and Kupa"], synergies: ["Angela", "Mathilda", "Tigreal"] },
    "Nolan": { counteredBy: ["Khufra", "Franco", "Saber", "Chou"], synergies: ["Angela", "Estes", "Floryn"] },
    "Saber": { counteredBy: ["Argus", "Diggie", "Tigreal", "Gatotkaca"], synergies: ["Johnson", "Angela", "Mathilda"] },
    "Selena": { counteredBy: ["Diggie", "Chou", "Khufra", "Franco"], synergies: ["Franco", "Beatrix", "Tigreal"] },
    "Yi Sun-shin": { counteredBy: ["Chou", "Khufra", "Natalia", "Ling"], synergies: ["Angela", "Estes", "Tigreal"] },

    // --- MAGES ---
    "Alice": { counteredBy: ["Baxia", "Valir", "Karrie", "Lunox"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Aurora": { counteredBy: ["Chou", "Franco", "Saber", "Lancelot"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Cecilion": { counteredBy: ["Aldous", "Chou", "Franco", "Kaja"], synergies: ["Carmilla", "Tigreal", "Atlas"] },
    "Chang'e": { counteredBy: ["Lolita", "Radiant Armor", "Chou", "Franco"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Cyclops": { counteredBy: ["Chou", "Lancelot", "Gusion", "Saber"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Esmeralda": { counteredBy: ["Baxia", "Phoveus", "Karrie", "Dyrroth"], synergies: ["Angela", "Mathilda", "Carmilla"] },
    "Eudora": { counteredBy: ["Chou", "Franco", "Saber", "Lancelot"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Faramis": { counteredBy: ["Valentina", "Chou", "Franco", "Kaja"], synergies: ["Gloo", "Tigreal", "Atlas"] },
    "Gord": { counteredBy: ["Chou", "Lancelot", "Gusion", "Saber"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Harith": { counteredBy: ["Baxia", "Esmeralda", "Khufra", "Chou"], synergies: ["Angela", "Estes", "Tigreal"] },
    "Harley": { counteredBy: ["Chou", "Saber", "Khufra", "Franco"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Kadita": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Johnson", "Tigreal", "Atlas"] },
    "Kagura": { counteredBy: ["Gusion", "Hayabusa", "Lancelot", "Chou"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Lunox": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Luo Yi": { counteredBy: ["Chou", "Franco", "Lancelot", "Hayabusa"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Lylia": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Nana": { counteredBy: ["Saber", "Hayabusa", "Gusion", "Lancelot"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Novaria": { counteredBy: ["Natalia", "Ling", "Fanny", "Aldous"], synergies: ["Franco", "Selena", "Beatrix"] },
    "Odette": { counteredBy: ["Chou", "Franco", "Saber", "Kaja"], synergies: ["Johnson", "Tigreal", "Atlas"] },
    "Pharsa": { counteredBy: ["Chou", "Khufra", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Vale": { counteredBy: ["Chou", "Franco", "Saber", "Lancelot"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Valentina": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Valir": { counteredBy: ["Chou", "Lancelot", "Hayabusa", "Gusion"], synergies: ["Tigreal", "Atlas", "Hylos"] },
    "Vexana": { counteredBy: ["Chou", "Franco", "Lancelot", "Saber"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Xavier": { counteredBy: ["Chou", "Franco", "Saber", "Natalia"], synergies: ["Tigreal", "Atlas", "Franco"] },
    "Yve": { counteredBy: ["Kaja", "Franco", "Chou", "Khufra"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Zetian": { counteredBy: ["Chou", "Franco", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Zhask": { counteredBy: ["Claude", "Retribution", "Chou", "Franco"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Zhuxin": { counteredBy: ["Chou", "Franco", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas", "Minotaur"] },

    // --- MARKSMEN ---
    "Beatrix": { counteredBy: ["Natalia", "Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Brody": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Mathilda", "Tigreal", "Atlas"] },
    "Bruno": { counteredBy: ["Chou", "Franco", "Kaja", "Khufra"], synergies: ["Diggie", "Mathilda", "Angela"] },
    "Claude": { counteredBy: ["Belerick", "Chou", "Saber", "Franco"], synergies: ["Diggie", "Mathilda", "Angela"] },
    "Clint": { counteredBy: ["Beatrix", "Brody", "Popol and Kupa", "Chou"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Granger": { counteredBy: ["Chou", "Khufra", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Hanabi": { counteredBy: ["Chou", "Franco", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas", "Belerick"] },
    "Irithel": { counteredBy: ["Chou", "Franco", "Khufra", "Saber"], synergies: ["Tigreal", "Minotaur", "Atlas"] },
    "Ixia": { counteredBy: ["Chou", "Franco", "Kaja", "Khufra"], synergies: ["Tigreal", "Minotaur", "Atlas"] },
    "Karrie": { counteredBy: ["Phoveus", "Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Kimmy": { counteredBy: ["Lolita", "Chou", "Franco", "Khufra"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Layla": { counteredBy: ["Chou", "Franco", "Saber", "Natalia"], synergies: ["Tigreal", "Atlas", "Belerick"] },
    "Lesley": { counteredBy: ["Aldous", "Saber", "Natalia", "Karina"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Melissa": { counteredBy: ["Yin", "Phoveus", "Chou", "Franco"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Miya": { counteredBy: ["Chou", "Franco", "Saber", "Natalia"], synergies: ["Tigreal", "Atlas", "Belerick"] },
    "Moskov": { counteredBy: ["Belerick", "Chou", "Saber", "Franco"], synergies: ["Tigreal", "Atlas", "Johnson"] },
    "Natan": { counteredBy: ["Chou", "Franco", "Kaja", "Khufra"], synergies: ["Tigreal", "Atlas", "Mathilda"] },
    "Obsidia": { counteredBy: ["Chou", "Franco", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas", "Minotaur"] },
    "Popol and Kupa": { counteredBy: ["Chou", "Franco", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas", "Angela"] },
    "Wanwan": { counteredBy: ["Phoveus", "Khufra", "Franco", "Chou"], synergies: ["Mathilda", "Angela", "Diggie"] },

    // --- SUPPORTS ---
    "Angela": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Ling", "Leomord", "Aldous"] },
    "Diggie": { counteredBy: ["Natalia", "Aldous", "Hilda", "Joy"], synergies: ["Claude", "Karrie", "Ling"] },
    "Estes": { counteredBy: ["Baxia", "Atlas", "Carmilla", "Luo Yi"], synergies: ["Aldous", "Fanny", "Barats"] },
    "Floryn": { counteredBy: ["Baxia", "Natalia", "Chou", "Saber"], synergies: ["Leomord", "Aulus", "Fanny"] },
    "Kaja": { counteredBy: ["Valir", "Grock", "Baxia", "Chou"], synergies: ["Chou", "Franco", "Saber"] },
    "Lolita": { counteredBy: ["Chou", "Franco", "Kaja", "Esmeralda"], synergies: ["Claude", "Karrie", "Wanwan"] },
    "Mathilda": { counteredBy: ["Khufra", "Minsitthar", "Franco", "Kaja"], synergies: ["Claude", "Karrie", "Brody"] },
    "Rafaela": { counteredBy: ["Chou", "Franco", "Kaja", "Saber"], synergies: ["Bruno", "Irithel", "Brody"] }
};

// --- 2. THE DRAFT STATE ---
const draftState = {
    allies: [],
    enemies: []
};

// --- 3. INITIALIZATION ---
function init() {
    const heroButtons = document.querySelectorAll('.hero-btn');
    
    heroButtons.forEach(button => {
        // LEFT CLICK = Your Team
        button.addEventListener('click', (e) => {
            handlePick(e.target, 'ally');
        });
        
        // RIGHT CLICK = Enemy Team
        button.addEventListener('contextmenu', (e) => {
            e.preventDefault(); 
            handlePick(e.target, 'enemy');
        });
    });
}

// --- 4. HANDLING PICKS ---
function handlePick(button, team) {
    if (button.classList.contains('ally-selected') || button.classList.contains('enemy-selected')) {
        return;
    }

    const heroName = button.innerText;
    const heroRole = button.dataset.role;

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

    calculateRecommendations();
}

// --- 5. UPDATING VISUALS ---
function updateDraftBoard(listId, heroName) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.innerText = heroName;
    list.appendChild(listItem);
}

// --- 6. THE ALGORITHM: CALCULATING SCORES ---
function calculateRecommendations() {
    const recommendationsPanel = document.getElementById('top-picks');
    
    if (draftState.allies.length === 0 && draftState.enemies.length === 0) {
        recommendationsPanel.innerHTML = '<li>Waiting for draft to start...</li>';
        return;
    }

    // Get all heroes that haven't been picked yet
    let allButtons = Array.from(document.querySelectorAll('.hero-btn'));
    let availableHeroes = allButtons
        .filter(btn => !btn.classList.contains('ally-selected') && !btn.classList.contains('enemy-selected'))
        .map(btn => btn.innerText);
    
    // Set everyone's starting score to 0
    let scores = {};
    availableHeroes.forEach(hero => scores[hero] = 0);

    // LOOP 1: Enemy Picks (Find Counters)
    // If we have heroes that counter the enemy, give them +10 points
    draftState.enemies.forEach(enemy => {
        let enemyName = enemy.name;
        if (matchupData[enemyName] && matchupData[enemyName].counteredBy) {
            matchupData[enemyName].counteredBy.forEach(counterHero => {
                if (scores[counterHero] !== undefined) {
                    scores[counterHero] += 10; 
                }
            });
        }
    });

    // LOOP 2: Ally Picks (Find Synergies)
    // If we have heroes that combo well with our team, give them +5 points
    draftState.allies.forEach(ally => {
        let allyName = ally.name;
        if (matchupData[allyName] && matchupData[allyName].synergies) {
            matchupData[allyName].synergies.forEach(synergyHero => {
                if (scores[synergyHero] !== undefined) {
                    scores[synergyHero] += 5; 
                }
            });
        }
    });

    // Sort the available heroes from highest score to lowest score
    let sortedRecommendations = availableHeroes.sort((a, b) => scores[b] - scores[a]);
    
    // Clear the UI panel
    recommendationsPanel.innerHTML = ''; 
    
    // Output the Top 5 heroes to the screen (only if they have a score above 0)
    let recommendationsFound = false;

    for (let i = 0; i < sortedRecommendations.length; i++) {
        let heroName = sortedRecommendations[i];
        let heroScore = scores[heroName];

        if (heroScore > 0) {
            let listItem = document.createElement('li');
            listItem.innerText = `${heroName} (+${heroScore} pts)`; 
            recommendationsPanel.appendChild(listItem);
            recommendationsFound = true;
        }

        // Stop after showing the top 5
        if (recommendationsPanel.children.length >= 5) break; 
    }

    // Fallback if no heroes scored any points
    if (!recommendationsFound) {
        recommendationsPanel.innerHTML = '<li>No strong counters found yet.</li>';
    }
}

// Run init on load
window.onload = init;
