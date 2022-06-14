const section = document.querySelector(".section");
section.addEventListener("input", () => {
    const classFirstCurrency = document.querySelector(".classFirstCurrency");
    const classSecondCurrency = document.querySelector(".classSecondCurrency");
    const firstCash = document.querySelector(".firstCash");
    const secondCash = document.querySelector(".secondCash");
    const PLNtoUSD = (1 / 4.28);
    const PLNtoBOLIWAR = (1 / 1.2);
    const PLNtoEURO = (1 / 4.58);

    let result = () => { return parseFloat(firstCash.value) };
    let cashAfterConversion;


    if (classFirstCurrency.value === "PLN") {
        switch (classSecondCurrency.value) {
            case "PLN":
                cashAfterConversion = result();
                break;
            case "USD":
                cashAfterConversion = result() * PLNtoUSD;
                break;
            case "BOLIWAR":
                cashAfterConversion = result() * PLNtoBOLIWAR;
                break;
            default:
                cashAfterConversion = result() * PLNtoEURO;
        }
    }
    if (classFirstCurrency.value === "USD") {

        switch (classSecondCurrency.value) {
            case "USD":
                cashAfterConversion = result();
                break;
            case "PLN":
                cashAfterConversion = result() * (1 / PLNtoUSD);
                break;
            case "BOLIWAR":
                cashAfterConversion = result() * (1 / PLNtoUSD) * PLNtoBOLIWAR;
                break;
            default:
                cashAfterConversion = result() * (1 / PLNtoUSD) * PLNtoEURO;
        }
    } if (classFirstCurrency.value === "EURO") {

        switch (classSecondCurrency.value) {
            case "EURO":
                cashAfterConversion = result();
                break;
            case "USD":
                cashAfterConversion = result() * (1 / PLNtoEURO) * PLNtoUSD;
                break;
            case "BOLIWAR":
                cashAfterConversion = result() * (1 / PLNtoEURO) * PLNtoBOLIWAR;
                break;
            default:
                cashAfterConversion = result() * (1 / PLNtoEURO);
        }
    } if (classFirstCurrency.value === "BOLIWAR") {

        switch (classSecondCurrency.value) {
            case "BOLIWAR":
                cashAfterConversion = result();
                break;
            case "USD":
                cashAfterConversion = result() * (1 / PLNtoBOLIWAR) * PLNtoUSD;
                break;
            case "PLN":
                cashAfterConversion = result() * (1 / PLNtoBOLIWAR);
                break;
            default:
                cashAfterConversion = result() * (1 / PLNtoBOLIWAR) * PLNtoEURO;
        }
    }
    if (result() > 0) {
        secondCash.value = cashAfterConversion.toFixed(2);
    }
    else {
        secondCash.value = 0;
    }
})




