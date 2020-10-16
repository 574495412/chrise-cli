/*
 * @Descripttion: 
 * @Author: xiaodong
 * @Date: 2020-10-15 13:57:53
 */
/**
 * webpack config
 */
const { merge } = require('webpack-merge');
const Config = require('webpack-chain');
const chriseConfig = require(`${process.cwd()}/chrise.config.js`);
const { setBaseConfig } = require('./util/merge');
const BASE = require('./config/webpack.base');
const DEVE = merge(BASE, require('./config/webpack.deve'));
const PROD = merge(BASE, require('./config/webpack.prod'));

const config = new Config();

const handleChriseConfig = ({ plugins } = {}) => {
  if (plugins) {
    plugins.forEach(plugin => {
      require(plugin[0])(config, plugin[1]);
    });
  }
};

const getConfig = isDeve => {
  config.clear();

  setBaseConfig(isDeve ? DEVE : PROD, config);
  handleChriseConfig(chriseConfig);

  return merge(config.toConfig(), {
    plugins: isDeve ? DEVE.plugins : PROD.plugins
  });
};

exports.getDeveConfig = () => getConfig(true);

exports.getProdConfig = () => getConfig(false);
