// --- data.js ---
// This file completely handles all 132 hero images.

const IMAGE_BASE_URL = "https://openmlbb.fastapicloud.dev/static/hero_icon/"; 

const allHeroes = [
    "Aamon", "Akai", "Aldous", "Alice", "Alpha", "Alucard", "Angela", "Argus", "Arlott", "Atlas", 
    "Aulus", "Aurora", "Badang", "Balmond", "Bane", "Barats", "Baxia", "Beatrix", "Belerick", "Benedetta", 
    "Brody", "Bruno", "Carmilla", "Cecilion", "Chang'e", "Chip", "Chou", "Cici", "Claude", "Clint", 
    "Cyclops", "Diggie", "Dyrroth", "Edith", "Esmeralda", "Estes", "Eudora", "Fanny", "Faramis", "Floryn", 
    "Franco", "Fredrinn", "Freya", "Gatotkaca", "Gloo", "Gord", "Granger", "Grock", "Guinevere", "Gusion", 
    "Hanabi", "Hanzo", "Harith", "Harley", "Hayabusa", "Helcurt", "Hilda", "Hylos", "Irithel", "Ixia", 
    "Jawhead", "Johnson", "Joy", "Julian", "Kadita", "Kagura", "Kaja", "Kalea", "Karina", "Karrie", 
    "Khaleed", "Khufra", "Kimmy", "Lancelot", "Lapu-Lapu", "Layla", "Leomord", "Lesley", "Ling", "Lolita", 
    "Lukas", "Lunox", "Luo Yi", "Lylia", "Martis", "Masha", "Mathilda", "Melissa", "Minotaur", "Minsitthar", 
    "Miya", "Moskov", "Nana", "Natan", "Natalia", "Nolan", "Novaria", "Obsidia", "Odette", "Paquito", 
    "Pharsa", "Phoveus", "Popol and Kupa", "Rafaela", "Roger", "Ruby", "Saber", "Selena", "Silvanna", "Sora", 
    "Sun", "Suyou", "Terizla", "Thamuz", "Tigreal", "Uranus", "Vale", "Valentina", "Valir", "Vexana", 
    "Wanwan", "X.Borg", "Xavier", "Yi Sun-shin", "Yin", "Yu Zhong", "Yve", "Zetian", "Zhask", "Zhuxin", "Zilong"
];

const heroImages = {};

allHeroes.forEach(hero => {
    let formattedName = hero.toLowerCase().replace(/['\s-]/g, "_");
    heroImages[hero] = `${IMAGE_BASE_URL}${formattedName}.png`;
});

console.log("data.js successfully generated 132 image links!");
