<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CurrencyApp</title>
    <script defer src="script/script.js"></script>
</head>
<body>
<label for="fromCurrency">From: </label><select id="fromCurrency">
    <option disabled selected value> -- select currency -- </option>
</select>
<label for="toCurrency">To: </label><select id="toCurrency">
    <option disabled selected value> -- select currency -- </option>
</select>
<label for="amount">Amount: </label><input id="amount" type="number">
<button id="buttonCalc">Calculate</button>
</body>
</html>