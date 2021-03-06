const RequestStateEnum = Object.freeze({
  SCHEDULED: 'Scheduled',
  READY: 'Ready',
  PROCESSED: 'Processed',
  FINISHED: 'Finished',
  FAILED: 'Failed',
});

module.exports = RequestStateEnum;
