/**
  * Convert currencies in a given page
  * @author Rhys Evans
*/


/**
  * Currency enumerations
*/
const USD = 0;
const GBP = 1;
const EUR = 2;

/**
  * Currency variables from injection file
*/
var sourceCurrency;
var destinationCurrency;

/**
  * Exchange rates
*/
const EUR_USD_EXCHANGE_RATE = 1.20;
const GBP_USD_EXCHANGE_RATE = 1.35;
const GBP_EUR_EXCHANGE_RATE = 1.12;

/**
  * Utility funciton to convert one currency to another
*/
function convert(value){

  var output;

  if(sourceCurrency == USD){
    switch(destinationCurrency){

      case GBP:
        output = value / GBP_USD_EXCHANGE_RATE
      break;

      case EUR:
        output = value / EUR_USD_EXCHANGE_RATE;
      break;

      default:
        output = value;
    }
  }else if(sourceCurrency == GBP){
    switch(destinationCurrency){

      case USD:
        output = value * GBP_USD_EXCHANGE_RATE;
      break;

      case EUR:
        output = value * GBP_EUR_EXCHANGE_RATE;
      break;

      default:
        output = value;
    }
  }else if(sourceCurrency == EUR){
    switch(destinationCurrency){

      case USD:
        output = value * EUR_USD_EXCHANGE_RATE;
      break;

      case GBP:
        output = value / GBP_EUR_EXCHANGE_RATE;
      break;

      default:
        output = value;
    }
  }else{
    console.error("Invalid Currency!");
    output = 0;
  }

  return output;
}


/**
  * Run the conversion within the current active tab
*/
function run(source, dest){
  sourceCurrency = source;
  destinationCurrency = dest;
}
