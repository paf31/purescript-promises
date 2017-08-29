exports.thenImpl = function (promise, onFulfilled, onRejected) {
  return promise.then(onFulfilled, onRejected);
};

exports.catchImpl = function (promise, f) {
  return promise.catch(f);
}

exports.resolveImpl = function (a) {
  return Promise.resolve(a);
}

exports.rejectImpl = function (a) {
  return Promise.reject(a);
}

exports.promiseToEffImpl = function (promise, onFulfilled, onRejected) {
  return function () {
    promise.then(onFulfilled(), onRejected());
    return null;
  }
}

exports.allImpl = function (arr) {
  return Promise.all(arr);
}

exports.raceImpl = function (arr) {
  return Promise.race(arr);
}

exports.liftEffImpl = function (eff) {
  return new Promise(function (onSucc, onErr) {
    try {
      result = eff();
    } catch (err) {
      return onErr(err);
    }
    return onSucc(result);
  });
}

exports.promiseImpl = function (callback) {
  return new Promise(callback);
}

exports.delayImpl = function (a, ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, a);
  });
}
