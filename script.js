// --- 1. THE BRAINS: FULL DATABASE WITH LANES ---
const matchupData = {
    // --- TANKS ---
    "Akai": { lanes: ["Jungle", "Roam", "EXP"], counteredBy: ["Diggie", "Valir", "Franco"], synergies: ["Pharsa", "Odette"] },
    "Atlas": { lanes: ["Roam"], counteredBy: ["Diggie", "Valir", "Chou"], synergies: ["Pharsa", "Yve", "Claude"] },
    "Barats": { lanes: ["Jungle", "EXP"], counteredBy: ["Karrie", "Lunox", "X.Borg"], synergies: ["Estes", "Floryn"] },
    "Baxia": { lanes: ["Jungle", "Roam"], counteredBy: ["Valir", "X.Borg", "Karrie"], synergies: ["Angela", "Pharsa"] },
    "Belerick": { lanes: ["Roam", "EXP"], counteredBy: ["Valir", "X.Borg", "Lunox"], synergies: ["Angela", "Estes"] },
    "Carmilla": { lanes: ["Roam", "Jungle"], counteredBy: ["Diggie", "Valir", "Chou"], synergies: ["Cecilion", "Claude"] },
    "Chip": { lanes: ["Roam", "EXP"], counteredBy: ["Diggie", "Valir", "Baxia"], synergies: ["Kadita", "Odette"] },
    "Edith": { lanes: ["EXP", "Roam"], counteredBy: ["Karrie", "Lunox", "Valir"], synergies: ["Estes", "Angela"] },
    "Franco": { lanes: ["Roam"], counteredBy: ["Diggie", "Johnson", "Atlas"], synergies: ["Beatrix", "Moskov", "Selena"] },
    "Fredrinn": { lanes: ["Jungle", "EXP"], counteredBy: ["Karrie", "Lunox", "Valir"], synergies: ["Estes", "Angela"] },
    "Gatotkaca": { lanes: ["EXP", "Roam"], counteredBy: ["Valir", "X.Borg", "Karrie"], synergies: ["Angela", "Pharsa"] },
    "Gloo": { lanes: ["EXP", "Roam"], counteredBy: ["Faramis", "Vexana", "Valir"], synergies: ["Estes", "Yve"] },
    "Grock": { lanes: ["Roam", "EXP"], counteredBy: ["Valir", "X.Borg", "Karrie"], synergies: ["Beatrix", "Moskov"] },
    "Hylos": { lanes: ["Roam", "Jungle"], counteredBy: ["Valir", "Karrie", "Baxia"], synergies: ["Angela", "Estes"] },
    "Johnson": { lanes: ["Roam"], counteredBy: ["Diggie", "Grock", "Baxia"], synergies: ["Odette", "Kadita"] },
    "Khufra": { lanes: ["Roam"], counteredBy: ["Valir", "Franco", "Diggie"], synergies: ["Esmeralda", "Fanny", "Ling"] },
    "Minotaur": { lanes: ["Roam"], counteredBy: ["Diggie", "Valir", "Chou"], synergies: ["Claude", "Irithel"] },
    "Tigreal": { lanes: ["Roam"], counteredBy: ["Diggie", "Valir", "Akai"], synergies: ["Pharsa", "Odette"] },
    "Uranus": { lanes: ["EXP"], counteredBy: ["Baxia", "Esmeralda", "Karrie"], synergies: ["Estes", "Angela"] },

    // --- FIGHTERS ---
    "Aldous": { lanes: ["EXP", "Mid"], counteredBy: ["Chou", "Valir", "Diggie"], synergies: ["Angela", "Estes"] },
    "Alpha": { lanes: ["Jungle", "EXP"], counteredBy: ["Baxia", "Valir", "Chou"], synergies: ["Angela", "Estes"] },
    "Alucard": { lanes: ["Jungle"], counteredBy: ["Baxia", "Chou", "Valir"], synergies: ["Angela", "Estes"] },
    "Argus": { lanes: ["EXP", "Gold"], counteredBy: ["Valir", "Chou", "Franco"], synergies: ["Angela", "Estes"] },
    "Arlott": { lanes: ["EXP", "Roam"], counteredBy: ["Phoveus", "Minsitthar", "Khufra"], synergies: ["Tigreal", "Atlas"] },
    "Aulus": { lanes: ["Jungle"], counteredBy: ["Chou", "Valir", "Baxia"], synergies: ["Angela", "Estes"] },
    "Badang": { lanes: ["EXP"], counteredBy: ["Chou", "Valir", "Khufra"], synergies: ["Johnson", "Atlas"] },
    "Balmond": { lanes: ["Jungle", "EXP"], counteredBy: ["Valir", "Baxia", "Karrie"], synergies: ["Angela", "Estes"] },
    "Bane": { lanes: ["Jungle", "EXP", "Mid"], counteredBy: ["Chou", "Valir", "Khufra"], synergies: ["Tigreal", "Atlas"] },
    "Benedetta": { lanes: ["EXP", "Jungle"], counteredBy: ["Minsitthar", "Khufra", "Phoveus"], synergies: ["Angela", "Tigreal"] },
    "Chou": { lanes: ["EXP", "Roam"], counteredBy: ["Paquito", "Gusion", "Hayabusa"], synergies: ["Brody", "Beatrix"] },
    "Cici": { lanes: ["EXP"], counteredBy: ["Baxia", "Chou", "Phoveus"], synergies: ["Angela", "Estes"] },
    "Dyrroth": { lanes: ["EXP", "Jungle"], counteredBy: ["Chou", "Paquito", "Guinevere"], synergies: ["Angela", "Estes"] },
    "Freya": { lanes: ["EXP", "Jungle"], counteredBy: ["Baxia", "Valir", "Chou"], synergies: ["Angela", "Estes"] },
    "Guinevere": { lanes: ["EXP", "Jungle", "Roam"], counteredBy: ["Chou", "Kaja", "Valir"], synergies: ["Tigreal", "Atlas"] },
    "Hilda": { lanes: ["Roam", "EXP"], counteredBy: ["Valir", "Karrie", "Baxia"], synergies: ["Angela", "Estes"] },
    "Jawhead": { lanes: ["Jungle", "Roam", "EXP"], counteredBy: ["Valir", "Chou", "Khufra"], synergies: ["Angela", "Mathilda"] },
    "Julian": { lanes: ["Jungle", "Mid", "EXP"], counteredBy: ["Chou", "Phoveus", "Khufra"], synergies: ["Tigreal", "Atlas"] },
    "Kalea": { lanes: ["EXP"], counteredBy: ["Chou", "Khufra", "Baxia"], synergies: ["Angela", "Estes"] },
    "Khaleed": { lanes: ["EXP", "Roam"], counteredBy: ["Baxia", "Chou", "Valir"], synergies: ["Tigreal", "Atlas"] },
    "Lapu-Lapu": { lanes: ["EXP"], counteredBy: ["Chou", "Khufra", "Valir"], synergies: ["Angela", "Tigreal"] },
    "Leomord": { lanes: ["Jungle", "EXP"], counteredBy: ["Chou", "Khufra", "Valir"], synergies: ["Angela", "Estes"] },
    "Lukas": { lanes: ["EXP"], counteredBy: ["Chou", "Valir", "Baxia"], synergies: ["Angela", "Estes"] },
    "Martis": { lanes: ["Jungle", "EXP"], counteredBy: ["Phoveus", "Gusion", "Lancelot"], synergies: ["Angela", "Mathilda"] },
    "Masha": { lanes: ["EXP", "Roam"], counteredBy: ["Baxia", "Valir", "Chou"], synergies: ["Angela", "Estes"] },
    "Minsitthar": { lanes: ["EXP", "Roam"], counteredBy: ["Valir", "Chou", "Diggie"], synergies: ["Tigreal", "Atlas"] },
    "Paquito": { lanes: ["EXP", "Jungle"], counteredBy: ["Benedetta", "Chou", "Esmeralda"], synergies: ["Angela", "Mathilda"] },
    "Phoveus": { lanes: ["EXP"], counteredBy: ["Esmeralda", "Lunox", "Karrie"], synergies: ["Angela", "Estes"] },
    "Roger": { lanes: ["Jungle", "Gold"], counteredBy: ["Baxia", "Chou", "Khufra"], synergies: ["Angela", "Estes"] },
    "Ruby": { lanes: ["EXP", "Roam"], counteredBy: ["Valir", "Pharsa", "Yve"], synergies: ["Tigreal", "Atlas"] },
    "Silvanna": { lanes: ["EXP", "Jungle"], counteredBy: ["Chou", "Diggie", "Valir"], synergies: ["Johnson", "Tigreal"] },
    "Sora": { lanes: ["EXP"], counteredBy: ["Chou", "Khufra", "Baxia"], synergies: ["Angela", "Estes"] },
    "Sun": { lanes: ["EXP", "Jungle"], counteredBy: ["Balmond", "X.Borg", "Valir"], synergies: ["Angela", "Estes"] },
    "Suyou": { lanes: ["EXP", "Jungle"], counteredBy: ["Chou", "Valir", "Baxia"], synergies: ["Angela", "Estes"] },
    "Terizla": { lanes: ["EXP"], counteredBy: ["Valir", "Wanwan", "Claude"], synergies: ["Angela", "Estes"] },
    "Thamuz": { lanes: ["EXP", "Jungle"], counteredBy: ["Baxia", "Valir", "Karrie"], synergies: ["Angela", "Estes"] },
    "X.Borg": { lanes: ["EXP", "Jungle"], counteredBy: ["Baxia", "Valir", "Karrie"], synergies: ["Angela", "Estes"] },
    "Yin": { lanes: ["Jungle", "EXP"], counteredBy: ["Melissa", "Argus", "Valir"], synergies: ["Johnson", "Angela"] },
    "Yu Zhong": { lanes: ["EXP"], counteredBy: ["Baxia", "Dyrroth", "Wanwan"], synergies: ["Angela", "Estes"] },
    "Zilong": { lanes: ["EXP", "Gold"], counteredBy: ["Chou", "Khufra", "Valir"], synergies: ["Angela", "Estes"] },

    // --- ASSASSINS ---
    "Aamon": { lanes: ["Jungle"], counteredBy: ["Saber", "Chou", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Fanny": { lanes: ["Jungle"], counteredBy: ["Khufra", "Franco", "Saber"], synergies: ["Angela", "Estes"] },
    "Gusion": { lanes: ["Jungle", "Mid"], counteredBy: ["Ruby", "Chou", "Khufra"], synergies: ["Tigreal", "Atlas"] },
    "Hanzo": { lanes: ["Jungle"], counteredBy: ["Natalia", "Aldous", "Ling"], synergies: ["Tigreal", "Atlas"] },
    "Hayabusa": { lanes: ["Jungle"], counteredBy: ["Saber", "Chou", "Khufra"], synergies: ["Angela", "Tigreal"] },
    "Helcurt": { lanes: ["Jungle", "Roam"], counteredBy: ["Hylos", "Belerick", "Tigreal"], synergies: ["Natalia", "Aldous"] },
    "Joy": { lanes: ["EXP", "Jungle", "Mid"], counteredBy: ["Minsitthar", "Phoveus", "Franco"], synergies: ["Angela", "Estes"] },
    "Karina": { lanes: ["Jungle"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Lancelot": { lanes: ["Jungle"], counteredBy: ["Khufra", "Ruby", "Phoveus"], synergies: ["Angela", "Mathilda"] },
    "Ling": { lanes: ["Jungle"], counteredBy: ["Khufra", "Ruby", "Minsitthar"], synergies: ["Angela", "Estes"] },
    "Natalia": { lanes: ["Roam", "Jungle"], counteredBy: ["Aldous", "Yi Sun-shin", "Rafaela"], synergies: ["Angela", "Mathilda"] },
    "Nolan": { lanes: ["Jungle"], counteredBy: ["Khufra", "Franco", "Saber"], synergies: ["Angela", "Estes"] },
    "Saber": { lanes: ["Jungle", "Roam"], counteredBy: ["Argus", "Diggie", "Tigreal"], synergies: ["Johnson", "Angela"] },
    "Selena": { lanes: ["Roam", "Mid"], counteredBy: ["Diggie", "Chou", "Khufra"], synergies: ["Franco", "Beatrix"] },
    "Yi Sun-shin": { lanes: ["Jungle"], counteredBy: ["Chou", "Khufra", "Natalia"], synergies: ["Angela", "Estes"] },

    // --- MAGES ---
    "Alice": { lanes: ["Mid", "EXP", "Jungle"], counteredBy: ["Baxia", "Valir", "Karrie"], synergies: ["Angela", "Estes"] },
    "Aurora": { lanes: ["Mid", "Roam"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Cecilion": { lanes: ["Mid"], counteredBy: ["Aldous", "Chou", "Franco"], synergies: ["Carmilla", "Tigreal"] },
    "Chang'e": { lanes: ["Mid", "Gold"], counteredBy: ["Lolita", "Chou", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Cyclops": { lanes: ["Mid", "Jungle"], counteredBy: ["Chou", "Lancelot", "Gusion"], synergies: ["Tigreal", "Atlas"] },
    "Esmeralda": { lanes: ["EXP", "Mid"], counteredBy: ["Baxia", "Phoveus", "Karrie"], synergies: ["Angela", "Mathilda"] },
    "Eudora": { lanes: ["Mid", "Roam"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Faramis": { lanes: ["Mid", "Roam"], counteredBy: ["Valentina", "Chou", "Franco"], synergies: ["Gloo", "Tigreal"] },
    "Gord": { lanes: ["Mid"], counteredBy: ["Chou", "Lancelot", "Gusion"], synergies: ["Tigreal", "Atlas"] },
    "Harith": { lanes: ["Gold", "Mid", "Jungle"], counteredBy: ["Baxia", "Esmeralda", "Khufra"], synergies: ["Angela", "Estes"] },
    "Harley": { lanes: ["Jungle", "Mid"], counteredBy: ["Chou", "Saber", "Khufra"], synergies: ["Tigreal", "Atlas"] },
    "Kadita": { lanes: ["Mid", "Roam"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Johnson", "Tigreal"] },
    "Kagura": { lanes: ["Mid"], counteredBy: ["Gusion", "Hayabusa", "Lancelot"], synergies: ["Tigreal", "Atlas"] },
    "Lunox": { lanes: ["Mid", "Jungle", "Gold"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Luo Yi": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Lancelot"], synergies: ["Tigreal", "Atlas"] },
    "Lylia": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Nana": { lanes: ["Mid", "Roam"], counteredBy: ["Saber", "Hayabusa", "Gusion"], synergies: ["Tigreal", "Atlas"] },
    "Novaria": { lanes: ["Mid", "Roam"], counteredBy: ["Natalia", "Ling", "Fanny"], synergies: ["Franco", "Selena"] },
    "Odette": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Johnson", "Tigreal"] },
    "Pharsa": { lanes: ["Mid"], counteredBy: ["Chou", "Khufra", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Vale": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Valentina": { lanes: ["Mid", "EXP"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Valir": { lanes: ["Mid", "Roam"], counteredBy: ["Chou", "Lancelot", "Hayabusa"], synergies: ["Tigreal", "Hylos"] },
    "Vexana": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Lancelot"], synergies: ["Tigreal", "Atlas"] },
    "Xavier": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Yve": { lanes: ["Mid"], counteredBy: ["Kaja", "Franco", "Chou"], synergies: ["Tigreal", "Atlas"] },
    "Zetian": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Zhask": { lanes: ["Mid", "Gold"], counteredBy: ["Claude", "Chou", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Zhuxin": { lanes: ["Mid"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },

    // --- MARKSMEN ---
    "Beatrix": { lanes: ["Gold", "Mid"], counteredBy: ["Natalia", "Chou", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Brody": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Mathilda", "Tigreal"] },
    "Bruno": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Diggie", "Mathilda"] },
    "Claude": { lanes: ["Gold"], counteredBy: ["Belerick", "Chou", "Saber"], synergies: ["Diggie", "Mathilda"] },
    "Clint": { lanes: ["Gold"], counteredBy: ["Beatrix", "Brody", "Popol and Kupa"], synergies: ["Tigreal", "Atlas"] },
    "Granger": { lanes: ["Jungle", "Gold"], counteredBy: ["Chou", "Khufra", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Hanabi": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Belerick"] },
    "Irithel": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Khufra"], synergies: ["Tigreal", "Minotaur"] },
    "Ixia": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Minotaur"] },
    "Karrie": { lanes: ["Gold"], counteredBy: ["Phoveus", "Chou", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Kimmy": { lanes: ["Gold", "Mid", "Jungle"], counteredBy: ["Lolita", "Chou", "Franco"], synergies: ["Tigreal", "Atlas"] },
    "Layla": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Lesley": { lanes: ["Gold"], counteredBy: ["Aldous", "Saber", "Natalia"], synergies: ["Tigreal", "Atlas"] },
    "Melissa": { lanes: ["Gold"], counteredBy: ["Yin", "Phoveus", "Chou"], synergies: ["Tigreal", "Atlas"] },
    "Miya": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Moskov": { lanes: ["Gold"], counteredBy: ["Belerick", "Chou", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Natan": { lanes: ["Gold", "Jungle"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Tigreal", "Atlas"] },
    "Obsidia": { lanes: ["Gold"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Popol and Kupa": { lanes: ["Gold", "Jungle", "Roam"], counteredBy: ["Chou", "Franco", "Saber"], synergies: ["Tigreal", "Atlas"] },
    "Wanwan": { lanes: ["Gold"], counteredBy: ["Phoveus", "Khufra", "Franco"], synergies: ["Mathilda", "Angela"] },

    // --- SUPPORTS ---
    "Angela": { lanes: ["Roam", "Mid"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Ling", "Leomord"] },
    "Diggie": { lanes: ["Roam"], counteredBy: ["Natalia", "Aldous", "Hilda"], synergies: ["Claude", "Karrie"] },
    "Estes": { lanes: ["Roam"], counteredBy: ["Baxia", "Atlas", "Carmilla"], synergies: ["Aldous", "Fanny"] },
    "Floryn": { lanes: ["Roam"], counteredBy: ["Baxia", "Natalia", "Chou"], synergies: ["Leomord", "Aulus"] },
    "Kaja": { lanes: ["Roam", "EXP"], counteredBy: ["Valir", "Grock", "Baxia"], synergies: ["Chou", "Franco"] },
    "Lolita": { lanes: ["Roam"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Claude", "Karrie"] },
    "Mathilda": { lanes: ["Roam", "Mid"], counteredBy: ["Khufra", "Minsitthar", "Franco"], synergies: ["Claude", "Karrie"] },
    "Rafaela": { lanes: ["Roam"], counteredBy: ["Chou", "Franco", "Kaja"], synergies: ["Bruno", "Irithel"] }
};

const draftState = {
    allies: [],
    enemies: []
};

function init() {
    const heroButtons = document.querySelectorAll('.hero-btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => handlePick(e.target, 'ally'));
        button.addEventListener('contextmenu', (e) => {
            e.preventDefault(); 
            handlePick(e.target, 'enemy');
        });
    });
}

function handlePick(button, team) {
    if (button.classList.contains('ally-selected') || button.classList.contains('enemy-selected')) return;

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
    calculateWinRate(); // Run the probability engine!
}

function updateDraftBoard(listId, heroName) {
    const list = document.getElementById(listId);
    const listItem = document.createElement('li');
    listItem.innerText = heroName;
    list.appendChild(listItem);
}

// --- WIN PROBABILITY ENGINE ---
function calculateWinRate() {
    const display = document.getElementById('win-rate-display');
    if (!display) return;

    // Start at a 50% baseline
    let winChance = 50; 

    // Rule 1: Add points for countering the enemy
    draftState.enemies.forEach(enemy => {
        let enemyData = matchupData[enemy.name];
        if (enemyData && enemyData.counteredBy) {
            draftState.allies.forEach(ally => {
                if (enemyData.counteredBy.includes(ally.name)) {
                    winChance += 6; // +6% per hard counter drafted
                }
            });
        }
    });

    // Rule 2: Add points for team synergy
    draftState.allies.forEach(ally => {
        let allyData = matchupData[ally.name];
        if (allyData && allyData.synergies) {
            draftState.allies.forEach(teammate => {
                if (allyData.synergies.includes(teammate.name)) {
                    winChance += 3; // +3% per good combo
                }
            });
        }
    });

    // Rule 3: Lane / Role Penalties (Only applies when your draft is getting full)
    if (draftState.allies.length >= 3) {
        let teamLanes = [];
        draftState.allies.forEach(ally => {
            if (matchupData[ally.name]) {
                // Collect every lane these heroes could possibly play
                teamLanes.push(...matchupData[ally.name].lanes);
            }
        });

        // Severe penalty if your team lacks a Jungler or Roamer
        if (!teamLanes.includes("Jungle")) winChance -= 15;
        if (!teamLanes.includes("Roam")) winChance -= 15;
        
        // Small penalty if missing standard damage lanes
        if (!teamLanes.includes("Gold")) winChance -= 5;
        if (!teamLanes.includes("Mid")) winChance -= 5;
    }

    // Rule 4: Clamp the percentage so it looks realistic (between 15% and 85%)
    winChance = Math.max(15, Math.min(85, winChance));

    // Update the HTML
    display.innerText = `Predicted Win Rate: ${winChance}%`;
    
    // Change color based on how good the draft is
    if (winChance >= 60) display.style.color = "#2ecc71"; // Green
    else if (winChance <= 40) display.style.color = "#e74c3c"; // Red
    else display.style.color = "#f1c40f"; // Yellow
}

function calculateRecommendations() {
    const recommendationsPanel = document.getElementById('top-picks');
    
    if (draftState.allies.length === 0 && draftState.enemies.length === 0) {
        recommendationsPanel.innerHTML = '<li>Waiting for draft to start...</li>';
        return;
    }

    let allButtons = Array.from(document.querySelectorAll('.hero-btn'));
    let availableHeroes = allButtons
        .filter(btn => !btn.classList.contains('ally-selected') && !btn.classList.contains('enemy-selected'))
        .map(btn => btn.innerText);
    
    let scores = {};
    availableHeroes.forEach(hero => scores[hero] = 0);

    // Score Counters
    draftState.enemies.forEach(enemy => {
        if (matchupData[enemy.name] && matchupData[enemy.name].counteredBy) {
            matchupData[enemy.name].counteredBy.forEach(counterHero => {
                if (scores[counterHero] !== undefined) scores[counterHero] += 10; 
            });
        }
    });

    // Score Synergies
    draftState.allies.forEach(ally => {
        if (matchupData[ally.name] && matchupData[ally.name].synergies) {
            matchupData[ally.name].synergies.forEach(synergyHero => {
                if (scores[synergyHero] !== undefined) scores[synergyHero] += 5; 
            });
        }
    });

    // Smart Lane Balancing: Filter out roles we don't need anymore!
    if (draftState.allies.length >= 3) {
        let pickedLanes = new Set();
        // Since flex picks have multiple lanes, we just record all possibilities
        draftState.allies.forEach(ally => {
            if (matchupData[ally.name]) {
                // If a hero can only play ONE lane (like Fanny = Jungle), lock it in
                if (matchupData[ally.name].lanes.length === 1) {
                    pickedLanes.add(matchupData[ally.name].lanes[0]);
                }
            }
        });

        // If Jungle is definitively taken, heavily penalize other pure Junglers
        if (pickedLanes.has("Jungle")) {
            availableHeroes.forEach(hero => {
                if (matchupData[hero] && matchupData[hero].lanes.includes("Jungle") && matchupData[hero].lanes.length === 1) {
                    scores[hero] -= 50; 
                }
            });
        }
    }

    let sortedRecommendations = availableHeroes.sort((a, b) => scores[b] - scores[a]);
    recommendationsPanel.innerHTML = ''; 
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
        if (recommendationsPanel.children.length >= 5) break; 
    }

    if (!recommendationsFound) {
        recommendationsPanel.innerHTML = '<li>No strong counters found yet.</li>';
    }
}

window.onload = init;
