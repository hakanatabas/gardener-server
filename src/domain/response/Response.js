const ResponseState = require('./ResponseState');

class Response {
  constructor(requestId) {
    this.requestId = requestId;
    this.state = new ResponseState();
    this.errorCode = 0;
  }

  addFetchedData(fetchedData) {
    if (this.fetchedData) {
      throw new Error('Fetched data already added');
    }
    this.fetchedData = fetchedData;
  }

  addSelectedData(selectedData) {
    if (!this.fetchedData) {
      throw new Error('Cannot add selected data without fetched data');
    }
    if (this.selectedData) {
      throw new Error('Selected data already added');
    }
    this.selectedData = selectedData;
  }

  setError(errorCode) {
    this.errorCode = errorCode;
  }
}

module.exports = Response;
