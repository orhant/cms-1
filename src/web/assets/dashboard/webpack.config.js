/*jshint esversion: 6 */
/* globals module, require */
const fs = require('fs');
const merge = require('webpack-merge');
const decache = require('decache');
decache('../../../../webpack.base.asset.config');
const BASE_CONFIG = require('../../../../webpack.base.asset.config');

module.exports = merge(BASE_CONFIG, {
    entry: {'dashboard': './dashboard.js'},
    output: {
        filename: 'Dashboard.min.js',
    },
});