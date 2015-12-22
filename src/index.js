'use strict';

var LightningVisualization = require('lightning-visualization');
var _ = require('lodash');
var ReactDom = require('react-dom');

/*
 * Extend the base visualization object
 */
var Visualization = LightningVisualization.extend({


    getDefaultOptions: function() {
      return {
        rowHeight: 50,
        headerHeight: 50
      };
    },

    init: function() {
        this.render();
    },


    renderColumns: function() {

    },

    render: function() {
      ReactDom.render(
        <Table
          rowHeight={this.options.rowHeight}
          rowsCount={rows.length}
          width={this.width}
          height={this.height}
          headerHeight={this.options.headerHeight}>
          <Column
            header={<Cell>Col 1</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={2000}
          />
          <Column
            header={<Cell>Col 2</Cell>}
            cell={<MyCustomCell mySpecialProp="column2" />}
            width={1000}
          />
          <Column
            header={<Cell>Col 3</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                Data for column 3: {rows[rowIndex][2]}
              </Cell>
            )}
            width={2000}
          />
        </Table>,
        this.el
      );
    },

    formatData: function(data) {
        /*
         * Format your data from a raw JSON blob
         */
        return data;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
        /*
         * FILL IN Re-render your visualization
         */
    },

    appendData: function(formattedData) {
        /*
         * FILL IN Update this.data to include the newly formatted data
         */

        /*
         * FILL IN Re-render the visualization
         */
    }

});


module.exports = Visualization;
