import { ExchangeRate } from './../src/currency.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#currency-form').click(function() {
    event.preventDefault();
    const conversionAmnt = $('#conversionAmnt').val();
    const conversionChoice = $('#currency-select').val();
    console.log(conversionChoice);
    console.log(conversionAmnt);

    (async () => {
      let currencyList = new ExchangeRate();
      const response = await currencyList.getRate();
      console.log(response.conversion_rates[conversionChoice]);
      // let output = currencyList.equuivilancy(conversionAmnt, conversionChoice);
      // $('#output').text(output);
    })();
  });
});