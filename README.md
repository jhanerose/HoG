# HoG - Helpers of God 🤲🏻❤️

**Helpers of God (HoG)** is a humanitarian NGO website dedicated to empowering communities through service, character, and excellence. This project serves as a digital platform to highlight advocacy, organize events, and facilitate volunteerism and donations.

## 🚀 Project Overview

* **Organization:** Helpers of God (HoG)
* **Theme:** "Helpers of God in Action. Perpetualite Spirit at Work."
* **Location:** Bacoor, Philippines
* **Key Features:** Interactive event filtering, dynamic donation processing simulation, and responsive design.

## 📂 Folder Structure

The project follows a professional directory structure to ensure scalability and organization:

```text
HoG - Helpers of God_NGO-project/
│
├── index.html           # Main Landing Page (Home)
│
├── css/                 # Stylesheets
│   └── style.css        # Main CSS (Variables, Flexbox/Grid, Animations)
│
├── js/                  # JavaScript Logic
│   └── script.js        # DOM Manipulation, Filters, Modals, Counters
│
├── pages/               # Inner Pages
│   ├── about.html       # Organization History & Mission
│   ├── contact.html     # Volunteer Form with Validation
│   ├── donate.html      # Donation Simulation with Pop-ups
│   ├── events.html      # Event Calendar with Filtering
│   └── programs.html    # Core Services Showcase
│
└── assets/              # Media Assets
    └── images/
        ├── backgrounds/ # Hero images (ces.jpg, kaysuyo.jpg, etc.)
        ├── branding/    # Logo (hog.png)
        ├── events/      # Campaign images (noche-buena, computers, etc.)
        └── programs/    # Service icons/images

```

## ✨ Key Features

### 1. Dynamic Home Page (`index.html`)

* **Hero Section:** Features an inspiring background with a Call-to-Action.
* **Live Counters:** JavaScript-powered number counters for Chapters, Volunteers, and Seminars that animate on load.
* **Urgent Ticker:** A floating alert bar at the bottom right for urgent relief operations.

### 2. Interactive Events Page (`pages/events.html`)

* **Category Filtering:** Users can filter events by **Fundraisers** (Computer Lab), **Outreach** (Noche Buena), or **Seminars** (Digital Empowerment).
* **Countdown Timer:** A real-time countdown clock for the next major event.
* **Card Design:** Responsive cards that do not stretch on wide screens (`auto-fill` grid logic).

### 3. Donation System (`pages/donate.html`)

* **Interactive Selection:** Buttons highlight when selected.
* **Processing Simulation:** Clicking "Donate" triggers a "Processing..." state for 1.5 seconds.
* **Success Modal:** A custom pop-up confirms the specific donation amount with a generated reference ID.

### 4. Volunteer Registration (`pages/contact.html`)

* **Form Validation:** Prevents submission if fields are empty or emails are invalid.
* **Feedback:** Displays a success modal upon valid submission.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, CSS Grid, CSS Variables, and Animations (`@keyframes`).
* **JavaScript (ES6):** DOM manipulation, Event Listeners, and Logic functions.
* **FontAwesome:** Scalable vector icons.
* **Google Fonts:** Poppins typeface for a modern, clean aesthetic.

## 🎨 Design System

| Element | Style / Value |
| --- | --- |
| **Primary Color** | `#D32F2F` (Deep Red) |
| **Dark Red** | `#9A0007` |
| **Font Family** | `Poppins`, sans-serif |
| **Gradients** | Linear Gradient (Dark Red to Primary Red) |

## 🚀 How to Run

1.  **Clone the Repository**
    Open your terminal or command prompt and run the following command:
    ```bash
    git clone https://github.com/jhanerose/hog.git
    ```

2.  **Navigate to the Project Folder**
    ```bash
    cd 
    ```

3.  **Open the Project**
    * **Option A (VS Code):** Type `code .` in your terminal to open the project immediately.
    * **Option B (Manual):** Open the folder in your file explorer and double-click `index.html`.

4.  **Important Note:**
    Ensure the folder structure (`css/`, `js/`, `pages/`, `assets/`) is maintained. Do not move `index.html` into the `pages/` folder, or the main site links will break.

---

***Jhane Rose Sadicon***
