/* Step 1: Set variables for site-wide landing page code */

var datc_lp_trafficname = 'source'; // url parameter to identify traffic source. this can be changed to whatever you desire. example: https://yoursite.com/?source={networkID} where {networkID} = a two digit identifier that identifies the traffic source. See datc_lp_trafficname networkID map below for examples.

var datc_lp_method = 'lifo'; // options - lifo or fifo. (lifo = last click attribution. fifo = first click attribution).

var datc_lp_duration = 90; // cookie duration in days.

/* datc_lp_trafficname networkID map examples
networkID => Network 
c1 => Custom Script 1
c2 => Custom Script 2
c3 => Custom Script 3
lc => LinkConnector
cj => Commission Junction
ls => LinkShare
eb => Ebay/Pepperjam
td => Tradedoubler
cg => ClixGalore
ck => ClixGalore UK
id => idevaffiliate
ss => ShareASale
fl => FlexOffers
pp => Post Affiliate Pro
wg => Webgains
ch => ChineseAN
*/

/* Landing Page Functions */

function datc_lp_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function datc_lp_getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    } else {
        return null;
    }
}

function datc_lp_getDomain(url) {
    var hostName = datc_lp_getHostName(url);
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

/* Landing Page Main Code */

if (document.documentURI) {
    var datc_lp_uri = document.documentURI;
} else {
    var datc_lp_uri = window.location.href;
}

var datc_lp_domain = datc_lp_getDomain(datc_lp_uri);

var uString = new Array();
var uCookieVal = new Array();

uString.push(datc_lp_trafficname + '=');
uCookieVal.push('lc');

/* Sample string values to be set for various cookies
uString.push('source=i2');
uCookieVal.push('i2');
uString.push('idevaffiliate.php[?]id=[0-9]');
uCookieVal.push('id');
uString.push('idevads.php[?]id=[0-9]');
uCookieVal.push('id');
*/

var datc_lp_cookieval = '';
for (i = 0; i < uString.length; i++) {
    var regex = new RegExp(uString[i]);
    if (datc_lp_uri.search(regex) > 0) {
        if (uString[i] == datc_lp_trafficname + '=') {
            datc_lp_cookieval = datc_lp_uri.substr(datc_lp_uri.search(regex) + uString[i].length, 2);
        } else {
            datc_lp_cookieval = uCookieVal[i];
        }
        break
    }
}

if (datc_lp_cookieval.search(/[0-9a-z]{2}/) < 0) { datc_lp_cookieval = ""; }

var datc_lp_wcookie = true;

var exdate = new Date();

if (datc_lp_cookieval) {
    if (datc_lp_method == 'fifo' && document.cookie.indexOf(datc_lp_trafficname) >= 0) {
        datc_lp_wcookie = false;
    }
    if (datc_lp_wcookie) {
        exdate.setTime(exdate.getTime() + (datc_lp_duration * 24 * 60 * 60 * 1000));
        document.cookie = datc_lp_trafficname + '=' + datc_lp_cookieval + '; expires=' + exdate.toUTCString() + '; path=/; domain=.' + datc_lp_domain + ';';
    }
}