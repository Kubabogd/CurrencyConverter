let classFirstCurrency = document.querySelector(".classFirstCurrency");
let classSecondCurrency = document.querySelector(".classSecondCurrency");
let firstCash = document.querySelector(".firstCash");
let secondCash = document.querySelector(".secondCash");
let section = document.querySelector(".section");
let PLNtoUSD = (1 / 4.28);
let PLNtoBOLIWAR = (1 / 1.2);
let PLNtoEURO = (1 / 4.58);
let result;


section.addEventListener("input", () => {

    if (classFirstCurrency.value === "PLN") {

        switch (classSecondCurrency.value) {
            case "PLN":
                result = parseFloat(firstCash.value);
                break;
            case "USD":
                result = parseFloat(firstCash.value) * PLNtoUSD;
                break;
            case "BOLIWAR":
                result = parseFloat(firstCash.value) * PLNtoBOLIWAR;
                break;
            default:
                result = parseFloat(firstCash.value) * PLNtoEURO;
        }
    }
    if (classFirstCurrency.value === "USD") {

        switch (classSecondCurrency.value) {
            case "USD":
                result = parseFloat(firstCash.value);
                break;
            case "PLN":
                result = parseFloat(firstCash.value) * (1 / PLNtoUSD);
                break;
            case "BOLIWAR":
                result = parseFloat(firstCash.value) * (1 / PLNtoUSD) * PLNtoBOLIWAR;
                break;
            default:
                result = parseFloat(firstCash.value) * (1 / PLNtoUSD) * PLNtoEURO;
        }
    } if (classFirstCurrency.value === "EURO") {

        switch (classSecondCurrency.value) {
            case "EURO":
                result = parseFloat(firstCash.value);
                break;
            case "USD":
                result = parseFloat(firstCash.value) * (1 / PLNtoEURO) * PLNtoUSD;
                break;
            case "BOLIWAR":
                result = parseFloat(firstCash.value) * (1 / PLNtoEURO) * PLNtoBOLIWAR;
                break;
            default:
                result = parseFloat(firstCash.value) * (1 / PLNtoEURO);
        }
    } if (classFirstCurrency.value === "BOLIWAR") {

        switch (classSecondCurrency.value) {
            case "BOLIWAR":
                result = parseFloat(firstCash.value);
                break;
            case "USD":
                result = parseFloat(firstCash.value) * (1 / PLNtoBOLIWAR) * PLNtoUSD;
                break;
            case "PLN":
                result = parseFloat(firstCash.value) * (1 / PLNtoBOLIWAR);
                break;
            default:
                result = parseFloat(firstCash.value) * (1 / PLNtoBOLIWAR) * PLNtoEURO;
        }
    }
    if (result > 0) {
        secondCash.value = result.toFixed(2);
    }
    else {
        secondCash.value = 0;
    }


})




