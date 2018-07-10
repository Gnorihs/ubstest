const args = require('minimist')(process.argv.slice(2));
// const util = require('./util');

var UBSComplianceApp = artifacts.require("UBSComplianceApp");

var custAddr = args.address;

module.exports = (done) => {
    UBSComplianceApp.deployed().then(function(instance) {
        return instance.getRiskStatus.call(custAddr).then((val) => {
            console.log(val)
        });
    }).then(function(result){
        done();
    }).catch(function(e) {
        console.log(e);
        done();
    })
}

//truffle exec --network nodeone 1_getCall.js --address 0xed9d02e382b34818e88b88a309c7fe71e65f419d
