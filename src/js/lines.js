// 折线图
(function () {
    // 1. 实例化对象
    // 2.指定配置
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

      const xAxisData = {
        ladder_score: [
          2.5, 2.8, 3.1, 3.4, 3.7, 4, 4.3, 4.6, 4.9, 5.2, 5.5, 5.8, 6.1, 6.4,
          6.7, 7, 7.3, 7.6, 7.9, 8.2,
        ],
        healthy_life_expectancy: [
          48, 49.5, 51, 52.5, 54, 55.5, 57, 58.5, 60, 61.5, 63, 64.5, 66, 67.5,
          69, 70.5, 72, 73.5, 75, 76.5,
        ],
        freedom_to_make_life_choices: [
          0.43, 0.46, 0.49, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.7, 0.73, 0.76,
          0.79, 0.82, 0.85, 0.88, 0.91, 0.94, 0.97, 1,
        ],
        generosity: [
          0.3, -0.25, -0.2, -0.15, -0.1, -0.05, 0, 0.05, 0.1, 0.15, 0.2, 0.25,
          0.3, 0.35, 0.4, 0.45, 0.5, 0.55,
        ],
        social_support: [
          0.46, 0.49, 0.52, 0.55, 0.58, 0.61, 0.64, 0.67, 0.7, 0.73, 0.76, 0.79,
          0.82, 0.85, 0.88, 0.91, 0.94, 0.97, 1, 1.03,
        ],
        perceptions_of_corruption: [
          0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
          0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
        ],
        logged_gdp_per_capita: [
          6.6, 6.9, 7.2, 7.5, 7.8, 8.1, 8.4, 8.7, 9, 9.3, 9.6, 9.9, 10.2, 10.5,
          10.8, 11.1, 11.4, 11.7, 12, 12.3,
        ],
      };
      const yAxisData1 = {
        ladder_score: [
          0, 0, 0, 0, 0, 0, 1, 5, 6, 7, 10, 9, 13, 11, 4, 1, 0, 0, 0, 0,
        ],
        healthy_life_expectancy: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 7, 15, 8, 1, 0, 0, 0, 0,
        ],
        freedom_to_make_life_choices: [
          0, 0, 1, 0, 1, 1, 1, 1, 3, 0, 6, 4, 9, 2, 11, 13, 8, 4, 2, 0,
        ],
        generosity: [
          0, 0, 0, 0, 6, 10, 13, 13, 5, 5, 4, 4, 1, 1, 3, 1, 0, 0, 0, 1,
        ],
        social_support: [
          0, 0, 0, 0, 1, 0, 0, 0, 4, 1, 1, 4, 9, 16, 9, 10, 8, 3, 1, 0,
        ],
        perceptions_of_corruption: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2, 7, 7, 10, 14, 11, 10, 0,
        ],
        logged_gdp_per_capita: [
          0, 0, 0, 0, 0, 1, 2, 5, 3, 8, 19, 10, 7, 8, 1, 3, 0, 0, 0, 0,
        ],
      };
      const yAxisData2 = {
        ladder_score: [
          0, 1, 0, 1, 7, 3, 6, 4, 9, 10, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        healthy_life_expectancy: [
          0, 2, 3, 3, 3, 6, 7, 7, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        freedom_to_make_life_choices: [
          1, 0, 0, 0, 1, 3, 2, 3, 1, 7, 5, 8, 3, 2, 2, 1, 4, 0, 0, 0,
        ],
        generosity: [
          0, 0, 0, 0, 2, 1, 5, 3, 8, 7, 9, 3, 1, 0, 1, 0, 0, 2, 0, 1,
        ],
        social_support: [
          0, 3, 0, 2, 2, 1, 5, 3, 4, 8, 4, 7, 2, 1, 1, 0, 0, 0, 0, 0,
        ],
        perceptions_of_corruption: [
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 7, 8, 13, 5, 2, 0,
        ],
        logged_gdp_per_capita: [
          0, 1, 3, 6, 8, 6, 5, 6, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      };
      const yAxisData3 = {
        ladder_score: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 5, 7, 2, 9, 6, 2, 0,
        ],
        healthy_life_expectancy: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 15, 10, 1,
        ],
        freedom_to_make_life_choices: [
          0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 2, 4, 3, 2, 6, 3, 9, 6, 0,
        ],
        generosity: [
          0, 0, 0, 2, 2, 3, 4, 5, 4, 7, 6, 2, 3, 1, 0, 0, 0, 0, 0, 0,
        ],
        social_support: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 9, 11, 10, 1, 0,
        ],
        perceptions_of_corruption: [
          0, 1, 0, 2, 2, 2, 1, 2, 3, 3, 0, 1, 3, 2, 5, 1, 6, 4, 1, 0,
        ],
        logged_gdp_per_capita: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 5, 17, 10, 2, 2, 0, 0,
        ],
      };

      // 初始化实例对象  echarts.init(dom容器);
      var myChart = echarts.init(
        document.querySelector(".ladder_score"),"vintage",
      );

      var option = {
        title: {
          text: "ladder_score",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.ladder_score,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.ladder_score,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.ladder_score,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.ladder_score,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(
        document.querySelector(".healthy_life_expectancy"),"vintage",
      );

      var option = {
        title: {
          text: "healthy_life_expectancy",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.healthy_life_expectancy,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.healthy_life_expectancy,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.healthy_life_expectancy,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.healthy_life_expectancy,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(
        document.querySelector(".freedom_to_make_life_choices"),"vintage",
      );

      var option = {
        title: {
          text: "freedom_to_make_life_choices",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.freedom_to_make_life_choices,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.freedom_to_make_life_choices,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.freedom_to_make_life_choices,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.freedom_to_make_life_choices,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(document.querySelector(".generosity"),"vintage",);

      var option = {
        title: {
          text: "generosity",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.generosity,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.generosity,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.generosity,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.generosity,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(
        document.querySelector(".social_support"),"vintage",
      );

      var option = {
        title: {
          text: "social_support",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.social_support,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.social_support,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.social_support,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.social_support,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(
        document.querySelector(".perceptions_of_corruption"),"vintage",
      );

      var option = {
        title: {
          text: "perceptions_of_corruption",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.perceptions_of_corruption,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.perceptions_of_corruption,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.perceptions_of_corruption,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.perceptions_of_corruption,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
          },
        ],
      };

      // 把配置项给实例对象
      myChart.setOption(option);

      var myChart = echarts.init(
        document.querySelector(".logged_gdp_per_capita"),"vintage",
      );

      var option = {
        title: {
          text: "logged_gdp_per_capita",
          textStyle: {
            align: "center",
            color: "#285943",
            fontSize: 13,
          },
          top: "5%",
          left: "center",
        },
        color: color,
        xAxis: {
          data: xAxisData.logged_gdp_per_capita,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            name: "",
            type: "line",
            data: yAxisData1.logged_gdp_per_capita,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(0),
            areaStyle: areaStyle(0),
          },
          {
            name: "",
            type: "line",
            data: yAxisData2.logged_gdp_per_capita,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(1),
            areaStyle: areaStyle(1),
          },
          {
            name: "",
            type: "line",
            data: yAxisData3.logged_gdp_per_capita,
            smooth: true,
            symbolSize: 0,
            lineStyle: lineStyle(2),
            areaStyle: areaStyle(2),
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