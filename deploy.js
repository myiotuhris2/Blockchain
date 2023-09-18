
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'frog buddy wrestle payment right volume easy atom doctor speed amateur glide',
  
  'https://sepolia.infura.io/v3/04af7db0db154cfabd014ee23dc12e7e'
  
);
const web3 = new Web3(provider);

const deploy = async () => {
    try{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
}catch(err){
    console.log('catch block ran: ', err);
}
  
};
deploy();