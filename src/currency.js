export class ExchangeRate {
  async getRate() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.statusText);
      }
      return jsonifiedResponse;
    } catch(error) {
      console.log(error);
      return false;
    }
  }
  equivilancy(amount, rate){
    let output = amount * rate;
    return output;
  }
  growth(, exponent) {
    growthArray= [];
    for (i=0; i<7300; i++){
    let outputExp = number * exponent;
    exponent *= .90;
    number += outputExp;
    growthArray.push(number.toFixed(2));
    }
  console.log(growthArray);
  }
  

}