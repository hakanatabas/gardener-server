const CurrentBlockEvent = require('../event/CurrentBlockEvent');

const CHECK_INTERVAL_MILLIS = 5000;

class BlockListener {
  constructor(eventBus, blockchain, logger, safeBlockDelay) {
    this.eventBus = eventBus;
    this.blockchain = blockchain;
    this.logger = logger;
    this.safeBlockDelay = safeBlockDelay;
  }

  listen() {
    setInterval(this.pollBlockNumber.bind(this), CHECK_INTERVAL_MILLIS);
  }

  async pollBlockNumber() {
    const blockNumber = await this.blockchain.getBlockNumber();
    const safeBlockNumber = blockNumber - this.safeBlockDelay;
    this.logger.info(`Block number: ${safeBlockNumber}`);

    const event = new CurrentBlockEvent(safeBlockNumber);
    this.eventBus.emit(CurrentBlockEvent.name(), event);
  }
}

module.exports = BlockListener;
