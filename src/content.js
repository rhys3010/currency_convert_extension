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
const EUR_USD_EXCHANGE_RATE = 1.21;
const GBP_USD_EXCHANGE_RATE = 1.35;
const GBP_EUR_EXCHANGE_RATE = 1.12;

/**
  * Utility funciton to convert one currency to another
*/
function convertCurrency(value){

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
  }

  return output;
}

/**
  * Convert a given string to the correct currency
*/
function convertString(value){
  // Sanitize input and convert to number
  value = Number(value.replace(/[^0-9\.-]+/g,""));

  // Convert input to correct currency and restrict to 2 decimal places
  value = convertCurrency(value).toFixed(2);

  // Construct string with correct symbol
  switch(destinationCurrency){
    case USD:
      return '$'+value;
    break;

    case GBP:
      return '£'+value;
    break;

    case EUR:
      return '€'+value;
    break;

    default:
      return null;
  }
}

/**
  * Perform the string replacement on a given text based on the source currency
*/
function getReplacedText(inputString){

  // The replaced string
  var outputString;

  switch(sourceCurrency){
    case USD:
      outputString = inputString.replace(/\$([^\s]*)/gi, convertString(inputString));
    break;

    case GBP:
      outputString = inputString.replace(/£([^\s]*)/gi, convertString(inputString));
    break;

    case EUR:
      outputString = inputString.replace(/€([^\s]*)/gi, convertString(inputString));
    break;
  }

  return outputString;
}

/**
  * Match cases of a given currency and replace it
*/
function replaceAll(){
  // Iterate through all elements and search/replace
  var allElements = document.getElementsByTagName('*');

  // Nested for loop to get all elements
  for(var i = 0; i < allElements.length; i++){
    var element = allElements[i];

    for(var j = 0; j < element.childNodes.length; j++){
      var node = element.childNodes[j];

      if(node.nodeType == 3){
        var text = node.nodeValue;

        // Match given currency with regexp and replace with converted value and correct currency prefix
        var replacedText = getReplacedText(text);

        if(replacedText != text){
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}


/**
  * Run the conversion within the current active tab
*/
function run(source, dest){
  sourceCurrency = source;
  destinationCurrency = dest;

  replaceAll();
}
