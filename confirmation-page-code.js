/* Step 1: Set confirmation page variables */

var products = false; // options - true or false.

var datc_cp_implementation_date = 'June 24, 2017'; // implementation date should be set to the date you want to start dynamically calling network codes. Prior to this date, all codes will be fired statically.

var datc_cp_trafficname = 'source'; // this value MUST equal the datc_lp_trafficname set in your landing-page-code.js file

/* Step 2: Setup Network Variables -
There are 3 Custom Script options below as well as multiple preset Affiliate Marketing Network Codes - feel free to use or edit the below preset options 
*/

// Custom Script 1 Variables
var datc_cp_url_c1 = ''; // url that you want called to signify a transaction.
var datc_cp_cm_c1 = 'js'; // call mode. options - js, img, iframe, or code

// Custom Script 2 Variables
var datc_cp_url_c2 = ''; // url that you want called to signify a transaction.
var datc_cp_cm_c2 = 'js'; // call mode. options - js, img, iframe, or code

// Custom Script 3 Variables
var datc_cp_url_c3 = ''; // url that you want called to signify a transaction.
var datc_cp_cm_c3 = 'js'; // call mode. options - js, img, iframe, or code

// LinkConnector variables
var datc_cp_lc_eventid = "lc_eventid";
var datc_cp_url_lc = '//linkconnector.com/tmjs.php?lc=00000000' + datc_cp_lc_eventid + '&oid=' + datc_cp_orderid + '&amt=' + datc_cp_saleamount + '&lc_coupon=' + datc_cp_coupon + '&lc_cur=' + datc_cp_currency + '&lc_discount=' + datc_cp_discount;
var datc_cp_cm_lc = 'js';

// CJ Variables
var datc_cp_cj_tagid = ''; // CJ TagID
var datc_cp_cj_cid = ''; // CJ CID
var datc_cp_cj_type = ''; // CJ Type or ActionID
var datc_cp_cm_cj = 'iframe';
var datc_cp_url_cj = '//www.emjcd.com/tags/c?CID=' + datc_cp_cj_cid + '&TYPE=' + datc_cp_cj_type + '&DISCOUNT=' + datc_cp_discount + '&OID=' + datc_cp_orderid + '&CURRENCY=' + datc_cp_currency + '&COUPON=' + datc_cp_coupon;
if (datc_cp_cj_tagid) {
    datc_cp_url_cj += '&containerTagId=' + datc_cp_cj_tagid;
} else {
    datc_cp_url_cj += '&METHOD=IMG';
    datc_cp_cm_cj = 'img';
}
if (!products) {
    datc_cp_url_cj += '&AMOUNT=' + datc_cp_saleamount;
}

// LinkShare variables
var datc_cp_ls_customerid = ''; // your LinkShare customer number
var datc_cp_url_ls = '//track.linksynergy.com/ep?mid=' + datc_cp_ls_customerid + '&ord=' + datc_cp_orderid + '&cur=' + datc_cp_currency;
var datc_cp_cm_ls = 'img';
if (!products) {
    datc_cp_url_ls += '&amtlist=' + datc_cp_saleamount;
}

// eBay Enterprise Affiliate/Pepperjam variables
var datc_cp_eb_pid = ''; // your eBay Enterprise Affiliate/Pepperjam ID
var datc_cp_url_eb = '//t.pepperjamnetwork.com/track?INT=DYNAMIC&PROGRAM_ID=' + datc_cp_eb_pid + '&ORDER_ID=' + datc_cp_orderid;
var datc_cp_cm_eb = 'iframe';
if (!products) {
    datc_cp_url_eb += '&ITEM_ID1=Cart&QUANTITY1=1&ITEM_PRICE1=' + datc_cp_saleamount + '&COUPON=' + datc_cp_coupon;
}

// TradeDoubler variables
var datc_cp_td_organization = ''; // org ID 
var datc_cp_td_event = ''; // event ID
var datc_cp_url_td = '//tbs.tradedoubler.com/report?organization=' + datc_cp_td_organization + '&event=' + datc_cp_td_event + '&orderNumber=' + datc_cp_orderid + '&orderValue=' + datc_cp_saleamount + '&cy=' + datc_cp_currency;
var datc_cp_cm_td = 'img';

// clixGalore variables
var datc_cp_cg_adid = ''; // Advertiser ID
var datc_cp_url_cg = '//www.clixGalore.com/AdvTransaction.aspx?AdID=' + datc_cp_cg_adid + '&SV=' + datc_cp_saleamount + '&OID=' + datc_cp_orderid;
var datc_cp_cm_cg = 'img';

// clixGalore UK variables
var datc_cp_ck_adid = ''; // Advertiser ID
var datc_cp_url_ck = '//www.clixGalore.com/AdvTransaction.aspx?AdID=' + datc_cp_ck_adid + '&SV=' + datc_cp_saleamount + '&OID=' + datc_cp_orderid;
var datc_cp_cm_ck = 'img';

// iDevAffiliate variables
var datc_cp_url_id_path = ''; // the location (subdomain) of the file to call
var datc_cp_id_profileid = ''; // Profile ID
var datc_cp_url_id = '//' + datc_cp_url_id_path + '/sale.php?profile=' + datc_cp_id_profileid + '&idev_saleamt=' + datc_cp_saleamount + '&idev_ordernum=' + datc_cp_orderid;
var datc_cp_cm_id = 'img';

// Sharesale variables
var datc_cp_ss_merchantid = ''; // your Shareasale merchant ID
var datc_cp_ss_action = 'void';
var datc_cp_ss_type = 'SALE';
var datc_cp_url_ss = '//shareasale.com/sale.cfm?amount=' + datc_cp_saleamount + '&tracking=' + datc_cp_orderid + '&transtype=' + datc_cp_ss_type + '&merchantID=' + datc_cp_ss_merchantid + '&couponcode=' + datc_cp_coupon;
var datc_cp_cm_ss = 'img';

// FlexOffers variables
var datc_cp_fl_merchantid = ''; // your FlexOffers merchant ID
var datc_cp_url_fl = '//track.flexlinks.com/tracker.aspx?AID=' + datc_cp_fl_merchantid + '&AMT=' + datc_cp_saleamount + '&UID=' + datc_cp_orderid;
var datc_cp_cm_fl = 'img';

// Post Affiliate Pro variables
var datc_cp_pp_merchantid = ''; // your Post Affiliate Pro merchant ID
var datc_cp_pp_subdomain = '';
var datc_cp_url_pp = '//' + datc_cp_pp_subdomain + '.postaffiliatepro.com/scripts/notifysale.php?accountId=' + datc_cp_pp_merchantid;
var datc_cp_cm_pp = 'js';

// Webgains variables
var datc_cp_wgOrderReference = datc_cp_orderid; //sales order number
var datc_cp_wgOrderValue = datc_cp_saleamount;
var datc_cp_wgEventID = '';
var datc_cp_wgComment = '';
var datc_cp_wgLang = 'en_US';
var datc_cp_wgsLang = 'javascript-client';
var datc_cp_wgVersion = '1.2';
var datc_cp_wgPin = '';
var datc_cp_wgProgramID = '';
var datc_cp_wgSubDomain = 'track';
var datc_cp_wgCheckSum = '';
var datc_cp_wgItems = '';
var datc_cp_wgVoucherCode = '';
var datc_cp_wgCustomerID = '';
var datc_cp_wgCurrency = datc_cp_currency;

if (location.protocol.toLowerCase() == "https:") datc_cp_wgProtocol = "https";
else datc_cp_wgProtocol = "http";

var datc_cp_url_wg = datc_cp_wgProtocol + "://" + datc_cp_wgSubDomain + ".webgains.com/transaction.html" + "?wgver=" + datc_cp_wgVersion + "&wgprotocol=" + datc_cp_wgProtocol + "&wgsubdomain=" + datc_cp_wgSubDomain + "&wgslang=" + datc_cp_wgsLang + "&wglang=" + datc_cp_wgLang + "&wgprogramid=" + datc_cp_wgProgramID + "&wgeventid=" + datc_cp_wgEventID + "&wgvalue=" + datc_cp_wgOrderValue + "&wgchecksum=" + datc_cp_wgCheckSum + "&wgorderreference=" + datc_cp_wgOrderReference + "&wgcomment=" + escape(datc_cp_wgComment) + "&wglocation=" + escape(document.referrer) + "&wgitems=" + escape(datc_cp_wgItems) + "&wgcustomerid=" + escape(datc_cp_wgCustomerID) + "&wgvouchercode=" + escape(datc_cp_wgVoucherCode) + "&wgCurrency=" + escape(datc_cp_wgCurrency);
var datc_cp_cm_wg = 'js';

// ChineseAN variables
var datc_cp_ch_merchantid = ''; // your ChineseAN merchant ID
var datc_cp_url_ch = '//www.chinesean.com/affiliate/trackingPixel1.do?pId=' + datc_cp_ch_merchantid + '&tracking=' + datc_cp_orderid + '&cpa=&cpl=&cps=' + datc_cp_saleamount + ',TIERID';
var datc_cp_cm_ch = 'iframe';

/* Networks - Initialize Network Variables */

var datc_cp_url_c1;
var datc_cp_cm_c1;

var datc_cp_url_c2;
var datc_cp_cm_c2;

var datc_cp_url_c3;
var datc_cp_cm_c3;

var datc_cp_url_lc;
var datc_cp_cm_lc;

var datc_cp_url_cj;
var datc_cp_cm_cj;

var datc_cp_url_ls;
var datc_cp_cm_ls;

var datc_cp_url_eb;
var datc_cp_cm_eb;

var datc_cp_url_td;
var datc_cp_cm_td;

var datc_cp_url_cg;
var datc_cp_cm_cg;

var datc_cp_url_ck;
var datc_cp_cm_ck;

var datc_cp_url_id;
var datc_cp_cm_id;

var datc_cp_url_ss;
var datc_cp_cm_ss;

var datc_cp_url_fl;
var datc_cp_cm_fl;

var datc_cp_url_pp;
var datc_cp_cm_pp;

var datc_cp_url_wg;
var datc_cp_cm_wg;

var datc_cp_url_ch;
var datc_cp_cm_ch;

/* Confirmation Page Functions */

function datc_cp_ScriptFunction(path) {
    var x = document.createElement("SCRIPT");
    x.src = path;
    try {
        document.body.appendChild(x);
    } catch (e) {
        document.head.appendChild(x);
    }
}

function datc_cp_ImgFunction(path) {
    var x = document.createElement("IMG");
    x.setAttribute("src", path);
    x.setAttribute("height", "1");
    x.setAttribute("width", "1");
    try {
        document.body.appendChild(x);
    } catch (e) {
        document.head.appendChild(x);
    }
}

function datc_cp_IframeFunction(path) {
    var x = document.createElement("IFRAME");
    x.setAttribute("src", path);
    x.setAttribute("height", "1");
    x.setAttribute("width", "1");
    x.setAttribute("frameborder", "0");
    x.setAttribute("scrolling", "no");
    try {
        document.body.appendChild(x);
    } catch (e) {
        document.head.appendChild(x);
    }
}

function datc_cp_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function datc_cp_getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    } else {
        return null;
    }
}

function datc_cp_getDomain(url) {
    var hostName = datc_cp_getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();

        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }

    return domain;
}

/* Product Map */

var datc_cp_pitem_map = 0;
var datc_cp_pname_map = 1;
var datc_cp_pqty_map = 2;
var datc_cp_pamt_map = 3;
var datc_cp_ptype_map = 4;

/* Product Code */

var datc_cp_pitem = new Array();
var datc_cp_pname = new Array();
var datc_cp_pqty = new Array();
var datc_cp_pamt = new Array();
var datc_cp_ptype = new Array();

if (typeof datc_cp_products === 'undefined') {
    var datc_cp_products = new Array();
    var datc_cp_noproducts = true;
}
var p = datc_cp_products.length; // number of products in cart

for (i = 0; i < p; i++) {
    datc_cp_pitem.push(datc_cp_products[i][datc_cp_pitem_map]);
    datc_cp_pname.push(datc_cp_products[i][datc_cp_pname_map]);
    if (datc_cp_products[i][datc_cp_pqty_map] == 0) {
        datc_cp_pqty_val = 1;
    } else {
        datc_cp_pqty_val = datc_cp_products[i][datc_cp_pqty_map];
    }
    datc_cp_pqty.push(datc_cp_pqty_val);
    datc_cp_pamt.push(datc_cp_products[i][datc_cp_pamt_map]);
    datc_cp_ptype.push(datc_cp_products[i][datc_cp_ptype_map]);
}
var x = datc_cp_pitem.length;
var datc_cp_pitem_pipe = '';
var datc_cp_pname_pipe = '';
var datc_cp_pqty_pipe = '';
var datc_cp_pamt_pipe = '';
var datc_cp_ptype_pipe = '';
var datc_cp_pitem_comma = '';
var datc_cp_pname_comma = '';
var datc_cp_pqty_comma = '';
var datc_cp_pamt_comma = '';
var datc_cp_ptype_comma = '';
var datc_cp_product_linear_seq = '';
var datc_cp_product_linear_eb_special = '';
var datc_cp_product_linear_eb = '';
var datc_cp_product_linear_same = '';
var datc_cp_product_avantlink = '';
var datc_cp_pnum = '';
for (i = 0; i < x; i++) {
    datc_cp_pnum = i + 1;
    datc_cp_pitem_pipe += datc_cp_pitem[i] + '|';
    datc_cp_pname_pipe += encodeURI(datc_cp_pname[i]) + '|';
    datc_cp_pqty_pipe += datc_cp_pqty[i] + '|';
    datc_cp_pamt_pipe += datc_cp_pamt[i] + '|';
    if (datc_cp_ptype[i]) { datc_cp_ptype_pipe += encodeURI(datc_cp_ptype[i]) + ','; }
    datc_cp_pitem_comma += datc_cp_pitem[i] + ',';
    datc_cp_pname_comma += encodeURI(datc_cp_pname[i]) + ',';
    datc_cp_pqty_comma += datc_cp_pqty[i] + ',';
    datc_cp_pamt_comma += datc_cp_pamt[i] + ',';
    if (datc_cp_ptype[i]) { datc_cp_ptype_comma += encodeURI(datc_cp_ptype[i]) + ','; }
    datc_cp_product_linear_seq += '&ITEM' + datc_cp_pnum + '=' + datc_cp_pitem[i] + '&AMT' + datc_cp_pnum + '=' + datc_cp_pamt[i] + '&QTY' + datc_cp_pnum + '=' + datc_cp_pqty[i];
    datc_cp_product_linear_eb_special += '&ITEM' + datc_cp_pnum + '=' + datc_cp_pitem[i] + '-' + datc_cp_pnum + '&AMT' + datc_cp_pnum + '=' + datc_cp_pamt[i] + '&QTY' + datc_cp_pnum + '=' + datc_cp_pqty[i];
    datc_cp_product_linear_eb += '&ITEM_ID' + datc_cp_pnum + '=' + datc_cp_pitem[i] + '&ITEM_PRICE' + datc_cp_pnum + '=' + datc_cp_pamt[i] + '&QUANTITY' + datc_cp_pnum + '=' + datc_cp_pqty[i];
    datc_cp_product_linear_same += '&f1=' + datc_cp_pitem[i] + '&f2=' + datc_cp_pname[i] + '&f3=' + datc_cp_pamt[i] + '&f4=' + datc_cp_pqty[i] + '|';
    datc_cp_product_avantlink += datc_cp_pitem[i] + '|' + datc_cp_pamt[i] + '|' + datc_cp_pqty[i] + '~';
}
datc_cp_product_linear_same = datc_cp_product_linear_same.substr(0, datc_cp_product_linear_same.length - 1);
datc_cp_product_avantlink = datc_cp_product_avantlink.substr(0, datc_cp_product_avantlink.length - 1);

if (products) {
    var datc_cp_lc_products = '&lc_pitem=' + datc_cp_pitem_pipe.slice(0, -1) + '&lc_pname=' + datc_cp_pname_pipe.slice(0, -1) + '&lc_pqty=' + datc_cp_pqty_pipe.slice(0, -1) + '&lc_pamt=' + datc_cp_pamt_pipe.slice(0, -1) + '&lc_ptype=' + datc_cp_ptype_pipe.slice(0, -1);
    datc_cp_url_lc += datc_cp_lc_products;
    var datc_cp_cj_products = datc_cp_product_linear_seq;
    datc_cp_url_cj += datc_cp_cj_products;
    var datc_cp_ls_products = '&skulist=' + datc_cp_pitem_pipe.slice(0, -1) + '&qlist=' + datc_cp_pqty_pipe.slice(0, -1) + '&amtlist=' + datc_cp_pamt_pipe.slice(0, -1) + '&namelist=' + datc_cp_pname_pipe.slice(0, -1);
    datc_cp_url_ls += datc_cp_ls_products;
    var datc_cp_eb_products = datc_cp_product_linear_eb;
    datc_cp_url_eb += datc_cp_eb_products + '&COUPON=' + datc_cp_coupon;
    var datc_cp_td_products = escape(datc_cp_product_linear_same);
    datc_cp_url_td += '&reportInfo=' + datc_cp_td_products;
    var datc_cp_ss_products = '&skulist=' + datc_cp_pitem_comma.slice(0, -1) + '&quantitylist=' + datc_cp_pqty_comma.slice(0, -1) + '&pricelist=' + datc_cp_pamt_comma.slice(0, -1);
    datc_cp_url_ss += datc_cp_ss_products;
}

/* Confirmation Page Main Code */

var datc_cp_url = 'oid=' + datc_cp_orderid + '&amt=' + datc_cp_saleamount + '&lc_coupon=' + datc_cp_coupon;
var datc_cp_domain = document.location.host;
if (datc_cp_domain.search("www.") >= 0) { datc_cp_domain = datc_cp_domain.substring(4); }
//var datc_cp_domain = datc_cp_getDomain(document.documentURI);
var datc_cp_cookievalue = "";
var datc_cp_date = new Date();
datc_cp_date.setTime(Date.parse(datc_cp_implementation_date));
var datc_cp_today = new Date();
var datc_cp_firedate = (datc_cp_date > datc_cp_today) ? false : true;

datc_cp_cookievalue = datc_cp_readCookie(datc_cp_trafficname);
if (!datc_cp_cookievalue) { datc_cp_cookievalue = ""; }
var datc_cp_fire_arr = new Array();
var datc_cp_url_order = new Array();
var datc_cp_url_link = new Array();
var datc_cp_url_cm = new Array();
var datc_cp_urls_fired = '';

if (datc_cp_url_c1) {
    datc_cp_url_order.push('c1');
    datc_cp_url_link.push(datc_cp_url_c1);
    datc_cp_url_cm.push(datc_cp_cm_c1);
}
if (datc_cp_url_c2) {
    datc_cp_url_order.push('c2');
    datc_cp_url_link.push(datc_cp_url_c2);
    datc_cp_url_cm.push(datc_cp_cm_c2);
}
if (datc_cp_url_c3) {
    datc_cp_url_order.push('c3');
    datc_cp_url_link.push(datc_cp_url_c3);
    datc_cp_url_cm.push(datc_cp_cm_c3);
}
if (datc_cp_url_lc) {
    datc_cp_url_order.push('lc');
    datc_cp_url_link.push(datc_cp_url_lc);
    datc_cp_url_cm.push(datc_cp_cm_lc);
}
if (datc_cp_url_cj) {
    datc_cp_url_order.push('cj');
    datc_cp_url_link.push(datc_cp_url_cj);
    datc_cp_url_cm.push(datc_cp_cm_cj);
}
if (datc_cp_url_ls) {
    datc_cp_url_order.push('ls');
    datc_cp_url_link.push(datc_cp_url_ls);
    datc_cp_url_cm.push(datc_cp_cm_ls);
}
if (datc_cp_url_eb) {
    datc_cp_url_order.push('eb');
    datc_cp_url_link.push(datc_cp_url_eb);
    datc_cp_url_cm.push(datc_cp_cm_eb);
}
if (datc_cp_url_td) {
    datc_cp_url_order.push('td');
    var datc_cp_td_uid = datc_cp_readCookie("TRADEDOUBLER");
    datc_cp_url_link.push(datc_cp_url_td + '&tduid=' + datc_cp_td_uid);
    datc_cp_url_cm.push(datc_cp_cm_td);
}
if (datc_cp_url_cg) {
    datc_cp_url_order.push('cg');
    datc_cp_url_link.push(datc_cp_url_cg);
    datc_cp_url_cm.push(datc_cp_cm_cg);
}
if (datc_cp_url_ck) {
    datc_cp_url_order.push('ck');
    datc_cp_url_link.push(datc_cp_url_ck);
    datc_cp_url_cm.push(datc_cp_cm_ck);
}
if (datc_cp_url_id) {
    datc_cp_url_order.push('id');
    datc_cp_url_link.push(datc_cp_url_id);
    datc_cp_url_cm.push(datc_cp_cm_id);
}
if (datc_cp_url_ss) {
    if (datc_cp_cookievalue != 'ss' && datc_cp_firedate == true) {
        var datc_cp_ss_action = '1';
        var datc_cp_url_ss = datc_cp_url_ss + '&autovoid=' + datc_cp_ss_action;
        datc_cp_fire_arr.push('ss');
    }
    datc_cp_url_order.push('ss');
    datc_cp_url_link.push(datc_cp_url_ss);
    datc_cp_url_cm.push(datc_cp_cm_ss);
}
if (datc_cp_url_fl) {
    datc_cp_url_order.push('fl');
    datc_cp_url_link.push(datc_cp_url_fl);
    datc_cp_url_cm.push(datc_cp_cm_fl);
}
if (datc_cp_url_pp) {
    datc_cp_url_order.push('pp');
    datc_cp_url_link.push(datc_cp_url_pp);
    datc_cp_url_cm.push(datc_cp_cm_pp);
}
if (datc_cp_url_wg) {
    datc_cp_url_order.push('wg');
    datc_cp_url_link.push(datc_cp_url_wg);
    datc_cp_url_cm.push(datc_cp_cm_wg);
}
if (datc_cp_url_ch) {
    datc_cp_url_order.push('ch');
    datc_cp_url_link.push(datc_cp_url_ch);
    datc_cp_url_cm.push(datc_cp_cm_ch);
}

var datc_cp_no_cookie = false;

if (datc_cp_no_cookie == false) {
    if ((datc_cp_firedate == false && datc_cp_url_order.length == 2 && datc_cp_cookievalue != 'lc') || (datc_cp_firedate == false && datc_cp_url_order.length > 2)) {
        for (var i in datc_cp_url_order) {
            if (datc_cp_fire_arr.indexOf(datc_cp_url_order[i]) < 0 && i > 0) { datc_cp_fire_arr.push(datc_cp_url_order[i]); }
        }
    }
}

if (datc_cp_fire_arr.indexOf(datc_cp_cookievalue) < 0 && datc_cp_cookievalue > '' && datc_cp_no_cookie == false) { datc_cp_fire_arr.push(datc_cp_cookievalue); }

var datc_cp_fire = '';
if (datc_cp_fire_arr.length > 0) {
    var datc_cp_url = '';
    var datc_cp_cm = '';
    var urls_fired = '';
    for (var i = 0; i < datc_cp_fire_arr.length; i++) {
        datc_cp_fire = datc_cp_fire_arr[i];
        datc_cp_url = datc_cp_url_link[datc_cp_url_order.indexOf(datc_cp_fire)];
        datc_cp_cm = datc_cp_url_cm[datc_cp_url_order.indexOf(datc_cp_fire)];
        switch (datc_cp_cm) {
            case 'js':
                datc_cp_ScriptFunction(datc_cp_url);
                break;
            case 'img':
                datc_cp_ImgFunction(datc_cp_url);
                break;
            case 'iframe':
                datc_cp_IframeFunction(datc_cp_url);
                break;
            case 'code':
                document.write(datc_cp_url);
                break;
            default:
        }
        datc_cp_urls_fired += datc_cp_url + '\r\n';
    }
    datc_cp_fire = datc_cp_fire_arr.toString();
} else {
    datc_cp_urls_fired = datc_cp_url;
    datc_cp_fire = "NoneFired";
}