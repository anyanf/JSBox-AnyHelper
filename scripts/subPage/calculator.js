const pageWidth = $device.info.screen.width;
const btnMargin = 13;
const btnsLeftAndRightMargin = 3;
const btnDiameter = (pageWidth - btnsLeftAndRightMargin * 2 - btnMargin * 5) / 4;
const btnsHeight = btnDiameter * 5 + btnMargin * 6;

const btnsData = [
  {
    type: "AC",
    title: "C",
    subTitle: "C",
    bgcolor: "#a5a5a5"
  },
  {
    type: "±",
    title: "±",
    bgcolor: "#a5a5a5"
  },
  {
    type: "%",
    title: "%",
    bgcolor: "#a5a5a5"
  },
  {
    type: "÷",
    title: "÷",
    iconName: "division_Normal@2x",
    bgcolor: "#f1a33c"
  },
  {
    type: "7",
    title: "7",
    bgcolor: "#515151"
  },
  {
    type: "8",
    title: "8",
    bgcolor: "#515151"
  },
  {
    type: "9",
    title: "9",
    bgcolor: "#515151"
  },
  {
    type: "×",
    title: "×",
    bgcolor: "#f1a33c"
  },
  {
    type: "4",
    title: "4",
    bgcolor: "#515151"
  },
  {
    type: "5",
    title: "5",
    bgcolor: "#515151"
  },
  {
    type: "6",
    title: "6",
    bgcolor: "#515151"
  },
  {
    type: "﹣",
    title: "﹣",
    bgcolor: "#f1a33c"
  },
  {
    type: "1",
    title: "1",
    bgcolor: "#515151"
  },
  {
    type: "2",
    title: "2",
    bgcolor: "#515151"
  },
  {
    type: "3",
    title: "3",
    bgcolor: "#515151"
  },
  {
    type: "＋",
    title: "＋",
    bgcolor: "#f1a33c"
  },
  {
    type: "0",
    title: "0",
    bgcolor: "#515151"
  },
  {
    type: ".",
    title: ".",
    bgcolor: "#515151"
  },
  {
    type: "=",
    title: "=",
    bgcolor: "#f1a33c"
  },
].map((item) => (
  {
    type: item.type,
    btnText: {
      bgcolor: $color(item.bgcolor),
      text: item.title,
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
              type: "label",
              props: {
                id: "btnText",
                font: $font(38),
                align: $align.center,
                textColor: $color("#ffffff"),
                cornerRadius: btnDiameter / 2,
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
          const btnText = view.get("btnText")
          const data = btnsData[indexPath.row];

          console.log(btnText + "\n")
        },
        didSelect: function (sender, indexPath, data) {
          handleInput(data.type);
        }
      },
    },
  ],
};

const numbetStack = [Number];
const symbolStack = [String];

function handleInput(type) {
  console.log(type);




}


// 后缀表达式 逆波兰
function calculateSuffixExpression() {
  $ui.toast($("current"))
}


function show() {
  $ui.push(view);
}

module.exports = {
  show: show,
};
