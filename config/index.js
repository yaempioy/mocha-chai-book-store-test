import path from 'path';
import _ from 'lodash';

const env = process.env.NODE_ENV || 'development';
const config_env = require(`./${env}`);

const defaults = {
  root: path.join(__dirname)
};

const config = _.assign(config_env.default, defaults);

export default config;
