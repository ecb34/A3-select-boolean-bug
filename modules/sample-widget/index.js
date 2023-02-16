module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Sample'
  },
  fields: {
    add: {
      selector: {
        type: 'select',
        label: 'Selector',
        choices: [
          {
            value: false,
            label: 'False'
          },
          {
            value: true,
            label: 'True'
          }
        ]
      }
    }
  }
};
