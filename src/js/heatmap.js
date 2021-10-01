// 热力图
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".heatmap .chart"));
  // 2.指定配置
  var xAxis = [
    "ladder_score",
    "logged_gdp_per_capita",
    "social_support",
    "healthy_life_expectancy",
    "freedom_to_make_life_choices",
    "generosity",
    "perceptions_of_corruption",
  ];
  var yAxis = [
    "score",
    "gdp",
    "social",
    "healthy",
    "freedom",
    "generosity",
    "corruption",
  ];

  var data = [
    [0, 0, 1.35],
    [0, 1, 1.16],
    [0, 2, 1.15],
    [0, 3, 1.15],
    [0, 4, 0.96],
    [0, 5, 0.34],
    [0, 6, 0.05],
    [1, 0, 1.16],
    [1, 1, 1.35],
    [1, 2, 1.14],
    [1, 3, 1.22],
    [1, 4, 0.79],
    [1, 5, 0.2],
    [1, 6, 0.07],
    [2, 0, 1.15],
    [2, 1, 1.14],
    [2, 2, 1.35],
    [2, 3, 1.08],
    [2, 4, 0.84],
    [2, 5, 0.26],
    [2, 6, 0.2],
    [3, 0, 1.15],
    [3, 1, 1.22],
    [3, 2, 1.08],
    [3, 3, 1.35],
    [3, 4, 0.8],
    [3, 5, 0.21],
    [3, 6, 0.09],
    [4, 0, 0.96],
    [4, 1, 0.79],
    [4, 2, 0.84],
    [4, 3, 0.8],
    [4, 4, 1.35],
    [4, 5, 0.55],
    [4, 6, 0.0],
    [5, 0, 0.34],
    [5, 1, 0.07],
    [5, 2, 0.26],
    [5, 3, 0.07],
    [5, 4, 0.55],
    [5, 5, 1.35],
    [5, 6, 0.19],
    [6, 0, 0.05],
    [6, 1, 0.07],
    [6, 2, 0.2],
    [6, 3, 0.09],
    [6, 4, 0.0],
    [6, 5, 0.19],
    [6, 6, 1.35],
  ];

  option = {
    color: [
      "#285943",
      "#77AF9C",
      "#8CD790",
      "#519D9E",
      "#58C9B9",
      "#9DC8C8",
      "#8FBC94",
      "#D7FFF1",
      "#C5E99B",
    ],

    tooltip: {
      position: "top",
    },
    animation: false,
    grid: {
      height: "100%",
      left: "25%",
      top: "0%",
      bottom: "0%",
    },
    xAxis: {
      show: false,
      data: xAxis,
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      show: true,
      data: yAxis,
      min: "dataMin",
      max: "dataMax",
    },
    visualMap: {
      min: 0,
      max: 1.35,
      calculable: true,
      orient: "horizontal",
      show: false,
      left: "center",
      bottom: "15%",
      color: ["#285943", "#D7FFF1"],
    },
    series: [
      {
        name: "",
        type: "heatmap",
        data: data,
        label: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
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

// 热力图
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".hm .chart"));
  // 2.指定配置
  var xAxis = [
    "score",
    "gdp",
    "social support",
    "health",
    "freedom",
    "generosity",
    "corruption",
  ];
  var yAxis = [
    "ladder_score",
    "logged_gdp_per_capita",
    "social_support",
    "healthy_life_expectancy",
    "freedom_to_make_life_choices",
    "generosity",
    "perceptions_of_corruption",
  ];

  var data = [
    [0, 0, 1.35],
    [0, 1, 1.16],
    [0, 2, 1.15],
    [0, 3, 1.15],
    [0, 4, 0.96],
    [0, 5, 0.34],
    [0, 6, 0.05],
    [1, 0, 1.16],
    [1, 1, 1.35],
    [1, 2, 1.14],
    [1, 3, 1.22],
    [1, 4, 0.79],
    [1, 5, 0.2],
    [1, 6, 0.07],
    [2, 0, 1.15],
    [2, 1, 1.14],
    [2, 2, 1.35],
    [2, 3, 1.08],
    [2, 4, 0.84],
    [2, 5, 0.26],
    [2, 6, 0.2],
    [3, 0, 1.15],
    [3, 1, 1.22],
    [3, 2, 1.08],
    [3, 3, 1.35],
    [3, 4, 0.8],
    [3, 5, 0.21],
    [3, 6, 0.09],
    [4, 0, 0.96],
    [4, 1, 0.79],
    [4, 2, 0.84],
    [4, 3, 0.8],
    [4, 4, 1.35],
    [4, 5, 0.55],
    [4, 6, 0.0],
    [5, 0, 0.34],
    [5, 1, 0.07],
    [5, 2, 0.26],
    [5, 3, 0.07],
    [5, 4, 0.55],
    [5, 5, 1.35],
    [5, 6, 0.19],
    [6, 0, 0.05],
    [6, 1, 0.07],
    [6, 2, 0.2],
    [6, 3, 0.09],
    [6, 4, 0.0],
    [6, 5, 0.19],
    [6, 6, 1.35],
  ];

  option = {
    color: [
      "#285943",
      "#77AF9C",
      "#8CD790",
      "#519D9E",
      "#58C9B9",
      "#9DC8C8",
      "#8FBC94",
      "#D7FFF1",
      "#C5E99B",
    ],

    tooltip: {
      position: "top",
    },
    animation: false,
    grid: {
      height: "90%",
      left: "20%",
      top: "0%",
    },
    xAxis: {
      show: true,
      data: xAxis,
    },
    yAxis: {
      show: true,
      data: yAxis,
    },
    visualMap: {
      min: 0,
      max: 1.35,
      calculable: true,
      orient: "horizontal",
      show: false,
      left: "center",
      bottom: "15%",
      color: ["#285943", "#D7FFF1"],
    },
    series: [
      {
        name: "",
        type: "heatmap",
        data: data,
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
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
