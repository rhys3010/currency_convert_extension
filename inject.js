/**
  * Inject javascript into current tab
  * @author Rhys Evans (http://rhysevans.xyz)
*/

const USD = 0;
const GBP = 1;
const EUR = 2;

/**
  * Currency configs
*/
var sourceCurr;
var destCurr;

/**
  * Inject javascript into the current tab and pass relevant program arguments.
*/
function injectScript(){
  chrome.tabs.executeScript({
    code: 'var source = 1; var dest = 2;'
  }, function(){
    chrome.tabs.executeScript({file: 'convert.js'});
  });
}

/**
  * Listen for dropdown value changes and assign to variables
  * // TODO: Save dropdown state
*/
document.addEventListener('DOMContentLoaded', function(){
  var source_dropdown = document.getElementById('source_dropdown');
  var dest_dropdown = document.getElementById('dest_dropdown');

  // Listen for source value changes
  source_dropdown.addEventListener('change', function(){
    sourceCurr = source_dropdown.value;
  });

  // Listen for dest value changes
  dest_dropdown.addEventListener('change', function(){
    destCurr = dest_dropdown.value;

  });
});



/**
  * Listen for button press and inject script
*/
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('submit_btn');

  btn.addEventListener('click', function(){
    injectScript();
  });
});
