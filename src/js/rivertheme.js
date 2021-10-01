// 河流图
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".river .chart"));
  // 2.指定配置
  const rawData = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 0, 1, 0, 5, 0, 0, 0, 0, 0, 2, 0, 1, 1, 8, 0,
    0, 2, 0, 1, 8, 0, 1, 1, 11, 0, 3, 5, 2, 0, 1, 0, 3, 4, 8, 0, 4, 3, 3, 8, 0,
    0, 0, 2, 0, 3, 9, 2, 0, 9, 2, 0, 0, 1, 1, 3, 1, 0, 1, 0, 2, 1, 0, 0, 0, 3,
    0, 0, 0, 1, 1, 3, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
  ];
  var values = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
  var labels = [
    "Central and Eastern Europe",
    "Commonwealth of Independent States",
    "East Asia",
    "Latin America and Caribbean",
    "Middle East and North Africa",
    "North America and ANZ",
    "South Asia",
    "Southeast Asia",
    "Sub-Saharan Africa",
    "Western Europe",
  ];
  var data = [];
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 10; j++) {
      var label = labels[j];
      data.push([values[i], rawData[i * 10 + j], label]);
    }
  }
  var option = {
    color:['#44633F','#285943','#77AF9C','#8CD790','#519D9E','#58C9B9','#9DC8C8','#8FBC94', '#D7FFF1','#C5E99B'],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(0,0,0,0.2)",
          width: 1,
          type: "solid",
        },
      },
    },

    legend: {
        show:false,
      data: labels,
    },

    singleAxis: {
        show:true,
      type: "value",
      min: 2.5,
      bottom: "13%",
    },

    series: [
      {
        type: "themeRiver",
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
        data: data,
        label: {
          show: false,
        },
      },
    ],
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".full .chart"));
  // 2.指定配置
  const rawData = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 0, 1, 0, 5, 0, 0, 0, 0, 0, 2, 0, 1, 1,
    8, 0, 0, 2, 0, 1, 8, 0, 1, 1, 11, 0, 3, 5, 2, 0, 1, 0, 3, 4, 8, 0, 4, 3,
    3, 8, 0, 0, 0, 2, 0, 3, 9, 2, 0, 9, 2, 0, 0, 1, 1, 3, 1, 0, 1, 0, 2, 1,
    0, 0, 0, 3, 0, 0, 0, 1, 1, 3, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
  ];
  var values = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
  var labels = [
    "Central and Eastern Europe",
    "Commonwealth of Independent States",
    "East Asia",
    "Latin America and Caribbean",
    "Middle East and North Africa",
    "North America and ANZ",
    "South Asia",
    "Southeast Asia",
    "Sub-Saharan Africa",
    "Western Europe",
  ];
  var data = [];
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 10; j++) {
      var label = labels[j];
      data.push([values[i], rawData[i * 10 + j], label]);
    }
  }
  var option = {
    color:['#44633F','#285943','#77AF9C','#8CD790','#519D9E','#58C9B9','#9DC8C8','#8FBC94', '#D7FFF1','#C5E99B'],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(0,0,0,0.2)",
          width: 1,
          type: "solid",
        },
      },
    },
    

    legend: {
      data: labels,
    },

    singleAxis: {
      type: "value",
      min: "dataMin",
    },

    series: [
      {
        type: "themeRiver",
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
        data: data,
        label: {
          show: false,
        },
      },
    ],
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();