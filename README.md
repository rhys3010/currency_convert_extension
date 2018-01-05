# Currency Converter Extension

## Synopsis

This Chrome Extension will convert all text on a given webpage from one selected currency to another.

![alt text](https://i.imgur.com/nHQdJgC.png "Extension")

## Installation

* Go to `chrome://extensions` in Chrome
* Navigate to `/out/`
* Drag and drop 'currency_converter.crx' into the `chrome://extensions` tab
* Select 'Add Extension'

## Alternative Installation

* Go to `chrome://extensions` in Chrome.
* Ensure 'Developer Mode' is enabled.
* Select 'Load Unpacked Extension'
* Navigate to and select `/src/currency_extension`

## Usage

* Select the currencies that you wish to convert to/from 
* Click 'Convert' and all text that contains the source currency will be converted to the desired currency
* The converted values will affect only the current active tab and can be restored by refreshing the page

## Limitations

* Currently only works for USD, EUR and GBP
* Exchange rates are hard coded, future plans to get the values from somewhere that is updated regularly
