const pageWidth = $device.info.screen.width;
const btnMargin = 13;
const btnsLeftAndRightMargin = 3;
const btnDiameter = (pageWidth - btnsLeftAndRightMargin * 2 - btnMargin * 5) / 4;
const btnsHeight = btnDiameter * 5 + btnMargin * 6;

const btnsData = [
  {
    type: "C",
    iconName: "C_Normal@2x",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "±",
    iconName: "negate_Normal@2x",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "%",
    iconName: "C_Normal",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "/",
    iconName: "C_Normal",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "7",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "8",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "9",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "*",
    iconName: "C_Normal",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "4",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "5",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "6",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "-",
    iconName: "C_Normal",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "1",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "2",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "3",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "+",
    iconName: "C_Normal",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "0",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: ".",
    iconName: "C_Normal",
    bgcolor: $color("#515151")
  },
  {
    type: "=",
    iconName: "C_Normal",
    bgcolor: $color("#f1a33c")
  },
]

const view = {
  props: {
    title: "计算器",
    id: "calculatorView",
  },
  events: {
    appeared: function () {
    },
    disappeared: function () { },
    dealloc: function () { },
  },
  views: [
    {
      type: "text",
      props: {
        text: "历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史历史",
        id: "history",
        editable: false,
        align: $align.right,
      },
      layout: function (make, view) {
        make.top.offset(10);
        make.left.offset(10);
        make.right.offset(-10);
        make.height.equalTo(100);
      },
    },
    {
      type: "text",
      props: {
        text: "999",
        id: "current",
        editable: false,
        align: $align.right,
      },
      layout: function (make, view) {
        make.top.equalTo($("history").bottom);
        make.width.equalTo(view.super);
        make.height.equalTo(100);
      },
    },
    {
      type: "matrix",
      props: {
        scrollEnabled: false,
        columns: 4,
        ietmWidth: btnDiameter,
        itemHeight: btnDiameter,
        spacing: btnMargin,
        template: {
          props: {},
          views: [
            {
              type: "button",
              props: {
                id: "btn",
                font: $font(38),
                cornerRadius: btnDiameter / 2,
                userInteractionEnabled: false
              },
              layout: $layout.fill,
              events: {
                tapped: function (sender) {
                  $ui.toast("Tapped");
                },
              },
            },
          ],
        },
        data: btnsData.map((item) => ({
          type: item.type,
          btn: {
            // title: `${item}.`,
            bgcolor: item.bgcolor,
            image: $image("assets/calculator/" + item.iconName + ".png"),
          },
        })),
      },
      layout: function (make, view) {
        make.left.equalTo(btnsLeftAndRightMargin)
        make.right.equalTo(-btnsLeftAndRightMargin)
        make.height.equalTo(btnsHeight);
        make.bottom.equalTo(view.super.safeAreaBottom).offset(-34);
      },
      events: {
        itemSize: function (sender, indexPath) {
          const data = sender.object(indexPath);
          if (data.type === "0") {
            return $size(btnDiameter + btnMargin + btnDiameter, btnDiameter);
          }
          return $size(btnDiameter, btnDiameter);
        },
        didSelect: function (sender, indexPath, data) {
          $ui.toast(data.btn.title)
        }
      },
    },
  ],
};

function show() {
  $ui.push(view);
}

module.exports = {
  show: show,
};
