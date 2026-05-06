# MLBB Draft Assistant ⚔️

A web-based drafting calculator and assistant for Mobile Legends: Bang Bang (MLBB). This tool uses a custom point-based scoring algorithm to analyze draft data, evaluate hero matchups, and suggest the most optimal picks to help you survive solo queue. 

## ✨ Features

* **Smart Counter Logic:** Calculates hero advantages and disadvantages based on a hard-coded matchup matrix.
* **Team Composition Balancing:** Dynamically adjusts scoring to ensure the drafted team has the right mix of roles (e.g., frontline tanks, magic damage, physical damage).
* **Interactive UI:** A clickable dashboard to input allied and enemy picks in real-time as the draft unfolds.
* **The "Dark System" Mode:** A humorous toggle that flips the algorithm upside-down to suggest the absolute *worst* possible drafts. 

## 🧠 How It Works

This tool is a standalone, browser-based expert system. It does **not** inject into or read game memory, making it 100% safe to use and completely compliant with Moonton's Terms of Service. 

It functions using a mathematical matrix:
1. Every hero is assigned base points against other heroes based on synergy and counter-play.
2. As heroes are selected on the UI, the script aggregates the points.
3. The heroes with the highest overall scores are dynamically pushed to the top of the recommended list.

## 🛠️ Tech Stack

* **HTML5:** For the basic structure of the hero grid and output feed.
* **CSS3:** To style the UI and make the hero portraits look clean.
* **JavaScript (Vanilla):** The brains of the operation—handling the point matrix, the logic loops, and the dynamic DOM updates.

## 🚀 How to Run Locally

Since this is a vanilla web application, there are no complicated installations or servers required.

1. Clone or download this repository to your local machine.
2. Open the project folder.
3. Double-click the `index.html` file to open it in your default web browser.
4. Start drafting!

## 🗺️ Roadmap (Future Updates)

* Add a "Lane Preference" toggle to filter recommendations by role.
* Expand the matchup database with the latest patch adjustments.
* Implement a save/load feature for custom user tier lists.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
