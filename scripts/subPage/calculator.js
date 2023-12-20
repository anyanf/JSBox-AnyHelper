const pageWidth = $device.info.screen.width;
const btnMargin = 13;
const btnsLeftAndRightMargin = 3;
const btnDiameter = (pageWidth - btnsLeftAndRightMargin * 2 - btnMargin * 5) / 4;
const btnsHeight = btnDiameter * 5 + btnMargin * 6;

const btnsData = [
  {
    type: "AC",
    iconName: "AC_Normal@2x",
    iconSelectedName: "C_Normal@2x",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "±",
    iconName: "negate_Normal@2x",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "%",
    iconName: "percent_Normal@2x",
    bgcolor: $color("#a5a5a5")
  },
  {
    type: "/",
    iconName: "division_Normal@2x",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "7",
    iconName: "7_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "8",
    iconName: "8_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "9",
    iconName: "9_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "*",
    iconName: "multiplication_Normal@2x",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "4",
    iconName: "4_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "5",
    iconName: "5_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "6",
    iconName: "6_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "-",
    iconName: "subtraction_Normal@2x",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "1",
    iconName: "1_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "2",
    iconName: "2_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "3",
    iconName: "3_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "+",
    iconName: "addition_Normal@2x",
    bgcolor: $color("#f1a33c")
  },
  {
    type: "0",
    iconName: "0_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: ".",
    iconName: "dot_Normal@2x",
    bgcolor: $color("#515151")
  },
  {
    type: "=",
    iconName: "equals_Normal@2x",
    bgcolor: $color("#f1a33c")
  },
].map((item) => (
  {
    type: item.type,
    btnImage: {
      bgcolor: item.bgcolor,
      image: image = $image("assets/calculator/" + item.iconName + ".png"),
    },
  }))

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
              type: "image",
              props: {
                id: "btnImage",
                font: $font(38),
                cornerRadius: btnDiameter / 2,
                userInteractionEnabled: false,
                contentMode: $contentMode.center,
                tintColor: $color("#ffffff"),
              },
              layout: $layout.fill,
            },
          ],
        },
        data: btnsData,
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
        forEachItem: function (view, indexPath) {
          const btnImage = view.get("btnImage")
          const data = btnsData[indexPath.row];

          const needAlwaysTemplate = data.type === "1" || data.type === "2" || data.type === "3" || data.type === "4" || data.type === "5" || data.type === "6" || data.type === "7" || data.type === "8" || data.type === "9" || data.type === "0" || data.type === ".";

          if (needAlwaysTemplate) {
            btnImage.image = btnImage.image.alwaysTemplate
          } else {
            btnImage.image = btnImage.image.alwaysOriginal
          }
          console.log(btnImage + "\n")
        },
        didSelect: function (sender, indexPath, data) {
          $ui.toast(data.type)
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
