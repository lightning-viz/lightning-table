'use strict';

var LightningVisualization = require('lightning-visualization');
var _ = require('lodash');

var ReactDom = require('react-dom');

/*
 * Uncomment this code to require an optional stylesheet
 */
// var fs = require('fs');
// var styles = fs.readFileSync(__dirname + '/styles/style.css');

/*
 * Extend the base visualization object
 */
var Visualization = LightningVisualization.extend({

  init: function () {
    this.render();
  },

  /*
   * optionally pass a string of CSS styles
   */
  // styles: styles,

  render: function () {
    /*
     * FILL IN Render the visualization
     */

    /*
     * FILL IN Get data / selector from this.data and this.selector
     */
  },

  formatData: function (data) {
    /*
     * Format your data from a raw JSON blob
     */
    return data;
  },

  updateData: function (formattedData) {
    this.data = formattedData;
    /*
     * FILL IN Re-render your visualization
     */
  },

  appendData: function (formattedData) {
    /*
     * FILL IN Update this.data to include the newly formatted data
     */

    /*
     * FILL IN Re-render the visualization
     */
  }

});

module.exports = Visualization;