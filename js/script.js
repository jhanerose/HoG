// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HERO COUNTERS (Runs only on Home Page)
    const counters = document.querySelectorAll('.hero-stats h3');
    if(counters.length > 0) {
        const speed = 200; 
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    }

    // 2. CAMPAIGN PROGRESS BAR (Runs on Events & Donate Pages)
    const progressBar = document.getElementById('campaignProgress');
    if(progressBar) {
        setTimeout(() => {
            progressBar.style.width = '75%';
        }, 500);
    }

    // 3. URGENT TICKER (Global)
    const ticker = document.getElementById('urgentTicker');
    if(ticker) {
        setTimeout(() => {
            ticker.style.display = 'block';
        }, 3000);
    }

    // 4. FORM VALIDATION (Runs on Contact Page)
    const form = document.getElementById('volunteerForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            // Name Check
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if(name.value.trim() === "") {
                name.style.borderColor = "#D32F2F";
                nameError.style.display = "block";
                isValid = false;
            } else {
                name.style.borderColor = "#eee";
                nameError.style.display = "none";
            }

            // Email Check
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            if(!email.value.includes('@')) {
                email.style.borderColor = "#D32F2F";
                emailError.style.display = "block";
                isValid = false;
            } else {
                email.style.borderColor = "#eee";
                emailError.style.display = "none";
            }

            if(isValid) {
                alert("Thank you! Your application has been sent.");
                form.reset();
            }
        });
    }
});

// 4. FORM VALIDATION (Runs on Contact Page)
    const form = document.getElementById('volunteerForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            // Name Check
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if(name.value.trim() === "") {
                name.style.borderColor = "#D32F2F";
                nameError.style.display = "block";
                isValid = false;
            } else {
                name.style.borderColor = "#eee";
                nameError.style.display = "none";
            }

            // Email Check
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            if(!email.value.includes('@')) {
                email.style.borderColor = "#D32F2F";
                emailError.style.display = "block";
                isValid = false;
            } else {
                email.style.borderColor = "#eee";
                emailError.style.display = "none";
            }

            // --- UPDATED SUCCESS LOGIC ---
            if(isValid) {
                // Instead of alert(), we show the modal
                const modal = document.getElementById('successModal');
                if(modal) {
                    modal.style.display = "flex";
                }
                form.reset();
            }
        });
    }

// --- NEW HELPER FUNCTIONS ---

// Function to Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if(modal) {
        modal.style.display = "none";
    }
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// --- COUNTDOWN TIMER LOGIC ---

function startCountdown() {
    // 1. Set the date you want to count down to
    // Since today is Feb 2026, let's set the event for March 15, 2026
    const countDate = new Date("Feb 18, 2026 08:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const gap = countDate - now;

        // Time math definitions
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calculate the math
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        // Update the HTML only if the elements exist
        if(document.getElementById('days')) {
            // Add a leading '0' if the number is less than 10 (e.g., "09" instead of "9")
            document.getElementById('days').innerText = textDay < 10 ? '0' + textDay : textDay;
            document.getElementById('hours').innerText = textHour < 10 ? '0' + textHour : textHour;
            document.getElementById('minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
            document.getElementById('seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
        }

    }, 1000); // Run this function every 1000 milliseconds (1 second)
}

// 2. Start the timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
});
// --- DONATION PAGE LOGIC ---

let currentDonationAmount = 0;

// 1. Function to handle selecting an amount
function selectAmount(btn, amount) {
    // Reset all buttons to outline style
    const allBtns = document.querySelectorAll('.donate-amount');
    allBtns.forEach(b => {
        b.style.background = 'transparent';
        b.style.color = '#D32F2F'; // red text
        b.style.borderColor = '#D32F2F'; // red border
    });

    // Highlight the clicked button (Make it look filled)
    btn.style.background = '#D32F2F'; // Fill with red
    btn.style.color = 'white';
    
    // Save the amount
    currentDonationAmount = amount;
    document.getElementById('selected-msg').innerText = "Selected Amount: ₱" + amount.toLocaleString();
    document.getElementById('selected-msg').style.color = "#333";
}

// --- UPDATED PROCESS DONATION LOGIC ---

function processDonation() {
    const cardInput = document.getElementById('cardNumber');
    const cardError = document.getElementById('cardError');
    let isValid = true;

    // 1. Check if amount is selected
    if(currentDonationAmount === 0) {
        alert("Please select a donation amount first.");
        return;
    }

    // 2. Check Card Number (Simple length check)
    if(cardInput.value.length < 10) {
        cardInput.style.borderColor = "#D32F2F";
        cardError.style.display = "block";
        isValid = false;
    } else {
        cardInput.style.borderColor = "#eee";
        cardError.style.display = "none";
    }

    if(isValid) {
        // A. Change button to "Processing..."
        const btn = document.querySelector('.btn-primary[onclick="processDonation()"]');
        const originalText = btn.innerText;
        
        btn.innerText = "Processing...";
        btn.style.opacity = "0.7";
        btn.style.cursor = "not-allowed";
        btn.disabled = true;

        // B. Wait 1.5 seconds, then show the Pop-Up
        setTimeout(() => {
            // Update the amount text inside the modal
            document.getElementById('confirmAmount').innerText = "₱" + currentDonationAmount.toLocaleString();
            
            // SHOW THE POP-UP
            document.getElementById('donateModal').style.display = "flex";
            
            // Reset the button back to normal
            btn.innerText = originalText;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.disabled = false;
        }, 1500);
    }
}

// 3. Close Donation Modal
function closeDonateModal() {
    document.getElementById('donateModal').style.display = "none";
    // Optional: clear the form
    document.getElementById('cardNumber').value = "";
    currentDonationAmount = 0;
    document.getElementById('selected-msg').innerText = "Please select an amount";
    
    // Reset buttons visual
    const allBtns = document.querySelectorAll('.donate-amount');
    allBtns.forEach(b => {
        b.style.background = 'transparent';
        b.style.color = '#D32F2F';
    });
}
// 2. FILTER EVENTS LOGIC (THIS FIXES YOUR ISSUE)
function filterEvents(category) {
    // A. Get all the card elements
    const cards = document.querySelectorAll('.event-card');
    
    // B. Get all buttons to handle the "active" color highlight
    const buttons = document.querySelectorAll('.filter-btn');

    // C. Update the buttons styling
    buttons.forEach(btn => {
        // Remove 'active' class from all buttons
        btn.classList.remove('active');
        
        // Add 'active' class to the clicked button
        // We check if the button's onclick text contains the category we just clicked
        if(btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // D. Show or Hide cards based on the category
    cards.forEach(card => {
        // Get the category of the specific card (e.g., "fundraiser")
        const cardCategory = card.getAttribute('data-category');

        // Logic: If we clicked 'all', show everything. 
        // OR if the card's category matches the clicked category, show it.
        if(category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            
            // Optional: Re-trigger the fade animation
            card.style.animation = 'none';
            card.offsetHeight; /* trigger reflow */
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            // Otherwise, hide it
            card.style.display = 'none';
        }
    });
}