const EtherWallet =artifacts.require('EtherWallet');

contract ('Etherwallet' , (accounts) =>{
    let etherWallet =null;
    before (async () =>{
        etherWallet =await EtherWallet.deployed();
    });








})