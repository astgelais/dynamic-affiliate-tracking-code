# dynamic-affiliate-tracking-code
Dynamic Affiliate Tracking Code is a robust client-side solution for executing tracking code dynamically for multiple affiliate networks and in-house programs. It can easily accommodate a variety of shopping cart solutions and server side scripting languages like PHP and ASP. This solution has been deployed successfully by many merchants partners using various shopping cart solutions (Magento, Shopify, Yahoo Store, WooCommerce, WP eCommerce, etc.).

## Features

- Tracking can be fired based upon LIFO (last cookie attribution) or FIFO (first cookie attribution) solution
- Ability to pass promo / coupon codes, discounts, and product information to the network tracking code
- Ability to phase in implementation by statically calling all network pixels for a set pre-determined period
- Ability to add up to 3 custom tracking scripts
- Already integrated with many notable affiliate networks
  - LinkConnector
  - Commission Junction
  - LinkShare
  - Ebay/Pepperjam
  - Tradedoubler
  - ClixGalore
  - ClixGalore UK
  - iidevaffiliate
  - sShareASale
  - FlexOffers
  - Post Affiliate Pro
  - Webgains
  - ChineseAN

## Technical Solution: DATC has two major code components. 1) Landing Page Code and 2) Confirmation Page Code

1. Landing Page Code

As the name implies this is code that should be placed on all landing pages of the site. This code will set a merchant-side cookie. When a user arrives on the merchant's landing page from an affiliate link with an appropriately set 'source' parameter in the query string, the code activates to set the cookie to that network's assigned 'source' value. This cookie will be either FIFO or LIFO based on the merchant's preference (default is LIFO).

Here is the network map for acceptable source values:

`c1 => Custom Script 1`

`c2 => Custom Script 2`

`c3 => Custom Script 3`

`lc => LinkConnector`

`cj => Commission Junction`

`ls => LinkShare`

`eb => Ebay/Pepperjam`

`td => Tradedoubler`

`cg => ClixGalore`

`ck => ClixGalore UK`

`id => idevaffiliate`

`ss => ShareASale`

`fl => FlexOffers`

`pp => Post Affiliate Pro`

`wg => Webgains`

`ch => ChineseAN`

For example, a destination URL for a LC link will look like this:

http://www.merchantsite.com/?source=lc

2. Confirmation Page Code

Performance Marketing tracking code is generally placed on the merchant's confirmation (or thank you) page. The process starts with the merchant providing their network parameters/cart information and installing the code on their confirmation page. For a sample of the confirmation page code, please see [the confirmation page order variables code](https://github.com/astgelais/dynamic-affiliate-tracking-code/blob/master/confirmation-page-order-variables.js)

The confirmation page code implements all the typical order variables used in Performance Marketing and provides the option to include product-related information when carts make them available.

## Instructions

1. Add the [landing page code](https://github.com/astgelais/dynamic-affiliate-tracking-code/blob/master/landing-page-code.js) to all of your landing pages in the <body> section. This code needs to run on all pages of your site so that an affiliate can drive traffic to your homepage or product level pages. This code will create a source cookie on the customer's computer that will be used on the confirmation page. Explanation of this can be found in item 2.

Please note: this code can be placed in the global header or footer of your site similar to your Google Analytics code.

2. Append 'source={networkID}' to all of your affiliate links.

Explanation: The key to the dynamic solution is the merchant-side cookie set by the landing page code.  The key to setting this cookie is to ensure that all your links in every network pass a name/value pair identifying the network.  This is what our DATC uses to identify what network code to fire when a sale is completed.

The default parameter name is 'source', so an example of the name/value pair you would append to all your links is http://www.merchantsite.com/?source={networkID}

Please Note: Without completing this step, the Dynamic Affiliate Tracking Code solution will not work.

3. Please add the [the confirmation page order variables code](https://github.com/astgelais/dynamic-affiliate-tracking-code/blob/master/confirmation-page-order-variables.js) and the [confirmation page code](https://github.com/astgelais/dynamic-affiliate-tracking-code/blob/master/confirmation-page-code.js) to your confirmation page in the <body> section. Remember to replace orderid, amount, coupon, discount, and currency in the tracking code with the dynamic variables for your shopping cart that will fill these placeholders with real information from the sale. Place the variables inside of the single quotes for each javascript variable. The variable key can be found below in case you have any questions on what the variables should be replaced with in the code.

Variable Key:

orderid = the unique identifier for each order.

saleamount = the amount of the order.

coupon = the coupon code used in the sale.

discount = the absolute value of the dollar amount of the discount.

currency = the three digit currency code.

Please note: If your shopping cart does not allow you to pass back any variables, please leave these variables blank (example: var datc_coupon = ''; or var datc_discount = '';).

