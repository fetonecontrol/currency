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
      return false;
    }
  }
  // equuivilancy(conversionAmount, rub, cad, jpy, euro){
  // let rubVal = rub;
  // let cadVAl = cad;
  // let jpyVal = jpy;
  // let eurVal = eur;

  //  let output = conversionAmount * this.conversion_rates.conversionChoice;
  //   return output;
  // }
}