export class ExchangeRate {
  async getRate() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      console.error(error + "everything is NOT hokey pokey.");
      return false;
    }
  }
  equivilancy(amount, rate){
    let output = amount * rate;
    return output;
  }

}