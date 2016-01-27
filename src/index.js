/**
 * @param {Type}
 * @return {Type}
 */
'use strict';
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');
var uuid = require('node-uuid');
var Sequelize = require('sequelize');
var moment = require('moment');

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


exports.init = function(modelPath, ignoreModels) {
  modelPath = modelPath || defaultModelPath;
  readOnlyModels = ignoreModels || [];
  var requirePaths = [] ;
  return getModelPath(modelPath, requirePaths).then(function () {
    return Promise.resolve(requirePaths);
  }).map(function (requirePath) {
    return require(requirePath).sync();
  }).then(function () {
    return Promise.resolve();
  });

};

exports.createModel = function (conn, table, schema, notAdd, validation){
  if (typeof notAdd === 'function') {
    validation = notAdd;
    notAdd = '';
  }

  if (!notAdd) {
    schema.created_at = Sequelize.INTEGER;
    schema.updated_at = Sequelize.INTEGER;
  }

  var Model = conn.define(table, schema, {
    timestamps: false,
    tableName: table,
    hooks: {
      beforeCreate: function (item, options, fn) {
          if (!item.id && (schema.id && !schema.id.Model.rawAttributes.id.autoIncrement))
              item.id = uuid.v4();
          if (typeof item.updated_at != "object" && typeof item.created_at != "object"){
              item.created_at = moment().format('X');
              item.updated_at = moment().format('X');
          }
          fn(null, item)
      },
      beforeUpdate: function (item, options, fn) {
          if (typeof item.updated_at != "object"){
              item.updated_at = moment().format('X');
          }
          fn(null, item)
      },
      beforeValidate: function (item, options, fn) {
          if (validation)
              return 	validation.apply(this, arguments);
          else
              fn(null, item)

      },
      beforeFind: function (item, fn) {
          if (!item.order) {
              if (this.attributes.id.type._length == 36)
                  item.order = 'create_time desc';
              else
                  item.order = 'id desc';
          }
          fn(null, item);
      }
    }
  });

  Model.page = function (data, pageSize) {
    pageSize = data.pageSize || pageSize || 20;
    return {
      offset: (data.pageIndex - 1) * pageSize || 0,
      limit: data.pageSize || pageSize,
      where: {}
    }
  };

  Model.findById = function (id) {
      return Model.find({where: {id: id}})
  };

  return Model;
};

