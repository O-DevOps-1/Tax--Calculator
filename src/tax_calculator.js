document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const amountInput = document.getElementById("amount");
    const countrySelect = document.getElementById("country");
    const taxAmount = document.getElementById("tax-amount");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const amount = parseFloat(amountInput.value);
        const country = countrySelect.value;
        const taxRate = taxRates[country];
        const taxAmountValue = (amount * taxRate).toFixed(2);
        taxAmount.textContent = `$${taxAmountValue}`;
    });
});

const taxRates = {
    "USA": 0.25,
    "Canada": 0.20,
    "UK": 0.20,
    "Australia": 0.30,
    "Germany": 0.25,
    "Spain": 0.22
};