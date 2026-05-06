// --- 1. THE HERO DATABASE & LANES ---
const matchupData = {
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
    blueBans: [], redBans: [], bluePicks: [], redPicks: [], selectedHeroFocus: null 
};

let heroImages = {}; 

// --- 3. INITIALIZATION (BULLETPROOF API FETCH) ---
async function init() {
    try {
        console.log("Fetching Hero Images from OpenMLBB...");
        // Try the new API endpoint
        const response = await fetch('https://openmlbb.fastapicloud.dev/api/v1/heroes')
            .catch(() => fetch('https://raw.githubusercontent.com/p3hndrx/MLBB-API/main/v1/hero-meta-final.json')); // Ultimate Fallback
        
        if (response && response.ok) {
            const rawData = await response.json();
            // Handle APIs that wrap data in 'data' object or return a raw array
            let apiData = rawData.data || rawData.result || rawData;
            let heroesList = Array.isArray(apiData) ? apiData : Object.values(apiData);
            
            heroesList.forEach(hero => {
                let name = hero.hero_name || hero.name || hero.title; 
                let imgUrl = hero.hero_avatar || hero.avatar || hero.icon || hero.image;
                if (name && imgUrl) heroImages[name] = imgUrl;
            });
            console.log("Hero portraits loaded successfully!");
        }
    } catch (error) {
        console.error("API failed. Falling back to text mode.", error);
    }

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
        
        // Include fallback text that shows up if the image link is broken or missing
        let fallbackText = `<span class="hero-fallback-text">${heroName}</span>`;
        
        if (heroImages[heroName]) {
            // Added onerror event: if the image breaks, it hides the image and displays the text!
            btn.innerHTML = `<img src="${heroImages[heroName]}" alt="${heroName}" title="${heroName}" onerror="this.style.display='none';">${fallbackText}`;
        } else {
            btn.innerHTML = fallbackText; 
        }

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
            
            if (heroImages[heroName]) {
                slots[i].innerHTML = `<img src="${heroImages[heroName]}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;" onerror="this.style.display='none'; this.nextSibling.style.display='block';"><span style="display:none; font-size: 0.6rem;">${heroName}</span>`;
            } else {
                slots[i].innerText = heroName;
            }
        }
    }
}

// --- 7. WIN PROBABILITY ENGINE (CLASH BAR EDITION) ---
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
