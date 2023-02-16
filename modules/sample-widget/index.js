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
        def: false,
        choices: 'getSelectorChoices'
      },
      conditionalField: {
        type: 'color',
        label: 'Conditional',
        if: {
          selector: false
        }
      }
    }
  },
  methods(self) {
    return {
      getSelectorChoices(req) {
        return [
          {
            value: false,
            label: 'False'
          },
          {
            value: true,
            label: 'True'
          }
        ];
      }
    };
  }
}
