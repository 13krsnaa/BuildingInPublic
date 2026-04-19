class ExpressError extends Error {
  // ye oops concept hsi yha ye EXTENDS Error ki properties ko expressErro me bhej rha hai . inheritance ho rha hai
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = ExpressError;
