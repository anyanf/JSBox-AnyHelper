const calculator = require("./subPage/calculator");

const data = [
  {
    title: {
      text: "计算器",
    },
    bgcolor: {
      bgcolor: $color("#157EFB"),
    },

    url: "1",
  },
];

const view = {
  props: {
    title: "AnyHelper",
  },
  views: [
    {
      type: "matrix",
      props: {
        columns: 2,
        itemHeight: 47,
        spacing: 5,
        template: [
          {
            type: "view",
            props: {
              id: "bgcolor",
              radius: 9,
            },
            layout: $layout.fill,
          },
          {
            type: "label",
            props: {
              id: "title",
              textColor: $color("white"),
              bgcolor: $color("clear"),
              //font: $font(19)
            },
            layout(make, view) {
              make.bottom.inset(0);
              make.centerX.equalTo(view.super);
              make.height.equalTo(47);
            },
          },
        ],
        data: data,
      },
      layout: $layout.fill,
      events: {
        didSelect(sender, indexPath, data) {
          if (data.url == 1) {
            calculator.show();
          }
        },
      },
    },
  ],
};

function render() {
  $ui.render(view);
}

module.exports = {
  render: render,
};
