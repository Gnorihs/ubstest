const args = require('minimist')(process.argv.slice(2));
const util = require('./util');

var UBSComplianceApp = artifacts.require("UBSComplianceApp");

var pubKeys = util.pubKeys;

var name = args.name
var age = args.age
var monthlyIncome = args.mi

module.exports = (done) => {
    UBSComplianceApp.deployed().then(function(instance) {

        return instance.addCustomer(name, age, monthlyIncome, {privateFor: pubKeys.slice(1)});
    }).then(function(result){

        done();
    }).catch(function(e) {
        console.log(e);
        done();
    })
}

// truffle exec --network nodeone 2_addCustomer.js --name andrew --age 23 --mi 3400