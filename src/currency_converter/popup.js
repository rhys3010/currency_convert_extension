/**
  * Inject javascript into current tab
  * @author Rhys Evans (http://rhysevans.xyz)
*/

/**
  * Currency configs
*/
var sourceCurr = 0;
var destCurr = 0;

/**
  * Inject javascript into the current tab
*/
chrome.tabs.executeScript({file: 'content.js'});

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
    chrome.tabs.executeScript({
      // Run the converter and pass the currency arguments
      code: "run("+ sourceCurr + "," + destCurr + ");"
    });
  });
});
