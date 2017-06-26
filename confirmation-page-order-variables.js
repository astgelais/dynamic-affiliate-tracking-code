/* Instructions: 
Add the Confirmation Page code to your confirmation page in the <body> section in between <script> tags.

Remember to replace all JavaScript variables attached tracking code with the dynamic variables
for your shopping cart that will fill these placeholders with real information from the sale.
Place the variables inside of the single quotes for each javascript variable.
The variable key can be found below in case you have any questions on what the
variables should be replaced with in the code.

orderid = the unique identifier for each order.
saleamount = the amount of the order.
coupon = the coupon code used in the sale.
discount = the absolute value of the dollar amount of the discount.
currency = the three digit currency code.
*/

/* Order Variables */
var datc_cp_orderid = 'orderid';
var datc_cp_saleamount = 'saleamount';
var datc_cp_coupon = 'coupon';
var datc_cp_discount = 'discount';
var datc_cp_currency = 'currency';

/* Product Variables - OPTIONAL 

Instructions:
What you need to build for product level tracking is a two dimensional JavaScript array that passes back
all of the product information in the order.
 
Javascript Array Map:
0 - Product ID or SKU of the item
1 - Name/Title of the item
2 - Quantity of the item
3 - Price of the item
4 - Category or Type of the item

Below is an example two dimensional JavaScript array for an order with two products. You will need to
make your array dynamic to include all the products in an order.

*/

var datc_cp_products = new Array();
datc_cp_products[0] = new Array();
datc_cp_products[0][0] = 'productSKU1'; // the product ID or SKU of the item
datc_cp_products[0][1] = 'productName1'; // the name/title of the item
datc_cp_products[0][2] = '1'; // the quantity of the item
datc_cp_products[0][3] = '20'; // the price of the item
datc_cp_products[0][4] = 'productCategory1'; // a type, category, or classification of the item
datc_cp_products[0][5] = ''; // product commission. Please do not include decimals in this varible
datc_cp_products[1] = new Array();
datc_cp_products[1][0] = 'productSKU2'; // the product ID or SKU of the item
datc_cp_products[1][1] = 'productName2'; // the name/title of the item
datc_cp_products[1][2] = '2'; // the quantity of the item
datc_cp_products[1][3] = '10'; // the price of the item
datc_cp_products[1][4] = 'productCategory2'; // a type, category, or classification of the item
datc_cp_products[1][5] = ''; // product commission. Please do not include decimals in this varible