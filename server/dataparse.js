var fs = require('fs');
var _ = require('underscore');
var admin = require('firebase-admin');
var json = JSON.parse(fs.readFileSync('./units.json', 'utf8'));

var serviceAccount = require("../serviceaccount/ffbebuilds-firebase-adminsdk-c5ldp-da473b6b27.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ffbebuilds.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("units");

var names = _.mapObject(json, (val, key) => {
    return val.name;
});

var nonCharacters = ['306000105','306000204','306000303','306000404','306000503','306000603','306000804','900000101','900000201','900000301','900001101','900001201','900001301','900002101',
'900002201','900002301','900003101','900003201','900003301','900004101','900004201','900005101','900005201','900005301','900010101','900010201','900010301','900010401','900020101','900020201',
'900020301','905000102','905000103','905000104','905004301','905020401','904000101','904000103','904000105','904000104','900004301','900020401'];

_.each(nonCharacters, (x) => {
    delete names[x]
});  

ref.set(names);