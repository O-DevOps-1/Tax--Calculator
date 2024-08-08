// adding event listener to the menu
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("nav ul");
    menu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href").replace("#", "");
            document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.querySelector("#calculator form").addEventListener("submit", function(event) {
    event.preventDefault();
    const country = document.querySelector("#country").value;
    const income = document.querySelector("#income").value;
    const incomeSource = document.querySelector("#income-source").value;
    const deductions = document.querySelector("#deductions").value;
    const credits = document.querySelector("#credits").value;

    // Countries' tax calculations
    let taxRate = 0;
    switch (country) {
        case "usa":
            taxRate = calculateUSATaxes(income);
            break;
        case "canada":
            taxRate = calculateCanadaTaxes(income);
            break;
        case "uk":
            taxRate = calculateUKTaxes(income);
            break;
        // in plans for adding more countries in the future
    }

    // Calculate deductions and credits
    let totalDeductions = 0;
    let totalCredits = 0;
    switch (incomeSource) {
        case "salary":
            totalDeductions += calculateSalaryDeductions(deductions);
            break;
        case "freelance":
            totalDeductions += calculateFreelanceDeductions(deductions);
            break;
        case "investments":
            totalDeductions += calculateInvestmentDeductions(deductions);
            break;
        case "rental":
            totalDeductions += calculateRentalDeductions(deductions);
            break;
    }

    totalCredits += calculateCredits(credits);

    // Calculate total tax
    let totalTax = income * taxRate - totalDeductions - totalCredits;

    // displaying
    
    const taxBracketVisualization = document.querySelector("#tax-bracket-visualization");
    taxBracketVisualization.innerHTML = "";
    const taxBracketBars = [];
    for (let i = 0; i < 10; i++) {
        const taxBracketBar = document.createElement("div");
        taxBracketBar.style.width = `${i * 10}%`;
        taxBracketBar.style.height = "20px";
        taxBracketBar.style.background-color = `rgba(0, 0, 0, ${i / 10})`;
        taxBracketVisualization.appendChild(taxBracketBar);
        taxBracketBars.push(taxBracketBar);
    }

    // this animates tax bracket visualization
    taxBracketBars.forEach((bar, index) => {
        bar.style.animation = `animateTaxBracket ${index * 0.5}s ease-in-out`;
    });
});

// ads event listener to the resources section
document.querySelector("#resources ul").addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const resourceId = event.target.getAttribute("href").replace("#", "");
        const resourceContent = document.querySelector(`#${resourceId}-content`);
        resourceContent.style.display = "block";
    }
});

document.querySelector("#community ul").addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        event.preventDefault();
        const communityId = event.target.getAttribute("href").replace("#", "");
        const communityContent = document.querySelector(`#${communityId}-content`);
        communityContent.style.display = "block";
    }
});

// Function to calculate USA taxes
function calculateUSATaxes(income) {
    if (income < 9875) {
        return 0.10;
    } else if (income < 40125) {
        return 0.12;
    } else if (income < 85525) {
        return 0.22;
    } else if (income < 163300) {
        return 0.24;
    } else if (income < 207350) {
        return 0.32;
    } else if (income < 518400) {
        return 0.35;
    } else {
        return 0.37;
    }
}

// Function to calculate Canada taxes
function calculateCanadaTaxes(income) {
    if (income < 47630) {
        return 0.15;
    } else if (income < 95259) {
        return 0.205;
    } else if (income < 147667) {
        return 0.26;
    } else if (income < 210371) {
        return 0.29;
    } else {
        return 0.33;
    }
}

// Function to calculate UK taxes
function calculateUKTaxes(income) {
    if (income < 12570) {
        return 0.20;
    } else if (income < 50270) {
        return 0.40;
    } else {
        return 0.45;
    }}

// calculating functions

function calculateSalaryDeductions(deductions) {
    return deductions * 0.25;
}

function calculateFreelanceDeductions(deductions) {
    return deductions * 0.30;
}

function calculateInvestmentDeductions(deductions) {
    return deductions * 0.20; }


function calculateRentalDeductions(deductions) {
    return deductions * 0.25;}

function calculateCredits(credits) {
    return credits * 0.10;}
