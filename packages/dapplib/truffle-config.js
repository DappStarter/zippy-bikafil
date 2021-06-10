require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach cruise pulse coast harvest ghost army giggle'; 
let testAccounts = [
"0x6899828fa23e8d03628ff5c9164ca68b35c767470f7d6db724fa704e877e2669",
"0xcacc57e9251016d88b66ca25b853750cf099e7184b63491dc8d5bdbdec60724d",
"0x7405d6dcd9dae3f33a5ca6c1d6163556c3fa2842581829198fe59725d3b3b82c",
"0xb5bde42dfea8a8dc2d11e342a8ee3e0fa0f044f695d6e5d4c5cd9b949e0841e8",
"0x1aa35b6f4cb5a18404b89ae1152b35097903fd022ead1beb44e75c9ffe1fb915",
"0xd52dfedeed208e98aa500036219e0ca6bdad5327b6b70de49b955d7e6b97363f",
"0xd3f2acc556c072ddc2b4ad66e3ba0706806ed7436c130cc0a67bf19b83eb5351",
"0x94e16e30f874115eb6713a5a99d1ad9c598e7d122b94a4c5a4a5286e371801c8",
"0x0bac906a700bb806330a498993c49229456c427069844af6e90a6432d1d99843",
"0x03e1a0b68b305e41f51599801d7f39aeae6509f9775150027dbd1ddf405f36a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

