const selectFrom = document.getElementById('fromCurrency');
const selectTo = document.getElementById('toCurrency');
const inputAmount = document.getElementById('amount');
const buttonCalc = document.getElementById('buttonCalc');
const baseURI = "https://data.fixer.io/api/latest?";
const apiKeyURI = "access_key=";
const currencyKeyURI = "&symbols=";
const token = "9949dae3c9249a30b0b3c8c8808c616e";

let resp = function () {
    fetch(`${baseURI}${apiKeyURI}${token}`)
        .then((resp) => {
            if (!resp.ok) {
                throw Error(response.statusText);
            }
            return resp;
        })
        .then(x => x.json())
        .then((data) => {
                let {rates} = data;
                let option;
                for (let key in rates) {
                    if (rates.hasOwnProperty(key)) {
                        option = new Option(key, rates[key]);
                        selectFrom.add(option);
                        selectTo.add(new Option(option.text, option.value));
                    }
                }
            }
        ).then(() => {
        buttonCalc.addEventListener('click', () => {
            let res = convertCurrency(selectFrom.value, selectTo.value, inputAmount.value);
            let converted = document.createElement('p');
            converted.setAttribute('id', "res");
            converted.appendChild(
                document.createTextNode(`Converted: ${inputAmount.value} ${selectTo[selectFrom.selectedIndex].text} = 
                ${Number(+res).toFixed(2)} ${selectTo[selectTo.selectedIndex].text}`));
            if (converted.firstElementChild){
                converted.replaceChild(converted, converted.firstElementChild);
            } else {
                converted.appendChild(converted)
            }
            document.body.appendChild(converted);
            selectFrom.selectedIndex = 0;
            selectTo.selectedIndex = 0;
            inputAmount.value = '';
        })
    })
        .catch(e => console.log(e));
};

resp();

convertCurrency = function (currFrom, currTo, amount) {
    return 1 / currFrom * currTo * amount;
};
