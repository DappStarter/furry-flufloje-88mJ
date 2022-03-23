require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stool curtain stereo snow hunt farm equal genius'; 
let testAccounts = [
"0x64789f8c92b990a42607d88a1210677a809bf5c920a9f9af2da44cc3eede79e5",
"0x7945efc6cc170e494401601428ece9b20fdd462a94d8c8218088e7befe3434f1",
"0xedb2f08e93a1cb356dd732d569d29a5a5c720c129d88b17e8f23e0f599588fd4",
"0x816da6f97a2e3159aec1157403d75d0503b1613b8030433b7c0803fb965ef9bc",
"0x1c9fd3daff74fd7bf28c7fe666546c08d0b5d9a32e12c355ae1703411dce1c85",
"0xe815154b7f059783e9e669814bbd4ae564fbd2fa136059d9eb5622ecee41fb96",
"0x04c68a98e20aee6f816041160f72108576935b32932786978f1f6145b90ca99e",
"0xa6aaee1746b442144ea058640e0449d8b4bce78c759688d99d4e2c01ab231ca1",
"0x02a6450afe687e56f9302b042f65d407f88deda8962e1bf05f889d0f0d4cf6bf",
"0xed870422761375e639c6884e49232de127760fed1df5e10e8a186722f8b050ae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


