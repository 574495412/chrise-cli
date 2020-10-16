/*
 * @Descripttion: 
 * @Author: xiaodong
 * @Date: 2020-10-15 13:57:53
 */
const setPkg = options => {
  const { name, ...rest } = options;

  return {
    name,
    version: '1.0.0',
    private: true,
    description: '',
    main: 'index.js',
    scripts: {},
    keywords: [],
    author: '',
    license: 'ISC',
    ...rest
  };
};

const setPkgScripts = pkg => {
  pkg.scripts = {
    dev: 'chrise-webpack dev',
    build: 'chrise-webpack build'
  };
};

const getPluginOptions = _plugin => {
  const options = {};
  const plugins = [];

  _plugin.forEach(item => {
    const [opt, ...rest] = item;

    options[opt] = true;
    plugins.push(...rest);
  });

  return { options, plugins };
};

module.exports = {
  setPkg,
  setPkgScripts,
  getPluginOptions
};
