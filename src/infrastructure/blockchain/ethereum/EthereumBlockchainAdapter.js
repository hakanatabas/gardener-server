const BlockchainPort = require('../../../domain/blockchain/port/BlockchainPort');

class EthereumBlockchainAdapter extends BlockchainPort {
  constructor(web3) {
    super();
    this.web3 = web3;
  }

  getBlockNumber() {
    return this.web3.eth.getBlockNumber();
  }
}

module.exports = EthereumBlockchainAdapter;
