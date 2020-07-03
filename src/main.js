import { ExchangeRate } from './../src/currency.js';
import { validity } from './../src/validity.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//Begin UI logic

//Begin UI logic
$(document).ready(function() {
  $('#currency-form').submit(function() {
    event.preventDefault();
    const conversionAmnt = $('#conversionAmnt').val();
    const conversionChoice = $('#currency-select').val();



    (async () => {
      let currencyList = new ExchangeRate();
      const response = await currencyList.getRate();
      let output = currencyList.equivilancy(conversionAmnt, response.conversion_rates[conversionChoice]);
      validity(output);

      $('.output').text(parseInt(output).toFixed(2) + " " + conversionChoice);
    })();
  });
});