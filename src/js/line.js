// 折线图模块
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  const color = ["#58C9B9", "#C5E99B", "#285943"];
  const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    const reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
        "0x" + hex.slice(3, 5)
      )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
  };
  const lineStyle = (index) => {
    return {
      normal: {
        color: color[index],
        shadowColor: hexToRgba(color[index], 0.5),
        shadowBlur: 3,
        shadowOffsetY: 8,
      },
    };
  };
  const areaStyle = (index) => {
    return {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: hexToRgba(color[index], 0.3),
          },
          {
            offset: 1,
            color: hexToRgba(color[index], 0.1),
          },
        ]),
        shadowColor: hexToRgba(color[index], 0.1),
        shadowBlur: 10,
      },
    };
  };
  var option = {
    title: {
      show: false,
      text: "ladder_score",
      textStyle: {
        align: "center",
        color: "#000",
        fontSize: 13,
      },
      top: "5%",
      left: "center",
    },
    grid: {
      height: "70%",
      top: "0%",
    },
    color: color,
    xAxis: {
      data: [
        2.5, 2.8, 3.1, 3.4, 3.7, 4, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8, 6.1, 6.4, 6.7,
        7, 7.3, 7.6, 7.9, 8.2,
      ],
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        name: "",
        type: "line",
        data: [0, 0, 0, 0, 0, 0, 1, 5, 6, 7, 10, 9, 13, 11, 4, 1, 0, 0, 0, 0],
        smooth: true,
        symbolSize: 0,
        lineStyle: lineStyle(0),
        areaStyle: areaStyle(0),
      },
      {
        name: "",
        type: "line",
        data: [0, 1, 0, 1, 7, 3, 6, 4, 9, 10, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        smooth: true,
        symbolSize: 0,
        lineStyle: lineStyle(1),
        areaStyle: areaStyle(1),
      },
      {
        name: "",
        type: "line",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 5, 7, 2, 9, 6, 2, 0],
        smooth: true,
        symbolSize: 0,
        lineStyle: lineStyle(2),
        areaStyle: areaStyle(2),
      },
    ],
  };

  // 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
