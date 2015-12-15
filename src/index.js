/**
 * @param {Type}
 * @return {Type}
 */
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var readOnlyModels = [];
var defaultModelPath = path.resolve(process.env.PWD, 'models');

exports.default = function () {
  return true;
};

var getModelPath = function (modelPath, requirePaths) {
  var files = fs.readdirSync(modelPath);
  return Promise.resolve(files).map(function (file) {
    if (fs.statSync(path.join(modelPath, file)).isDirectory()) {
      return getModelPath(path.join(modelPath, file), requirePaths);
    } else {
      if (!~readOnlyModels.indexOf(file)) {
        return Promise.resolve(requirePaths.push(path.join(path.relative(__dirname, modelPath), file)));
      }
    }
  });
};


exports.init = function(modelPath) {
  modelPath = modelPath || defaultModelPath;
  console.log(modelPath);

  var requirePaths = [];
  return getModelPath(modelPath, requirePaths).then(function () {
    return Promise.resolve(requirePaths);
  }).map(function (requirePath) {
    return require(requirePath).sync();
  }).then(function () {
    return Promise.resolve();
  });

};

