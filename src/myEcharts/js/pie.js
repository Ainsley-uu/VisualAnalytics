(function() {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
        
        color:['#285943','#77AF9C','#8CD790','#519D9E','#58C9B9','#9DC8C8','#8FBC94', '#D7FFF1','#C5E99B'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //     left: 'center',
        //     top: 'bottom',
        //     // data: ['Western Europe', 'North America and ANZ', 'Middle East and North Africa', 'Latin America and Caribbean', 'Central and Eastern Europe', 'East Asia', 'Southeast Asia', 'Commonwealth', 'Sub-Saharan Africa', 'South Asia']
        // },

        series: [
            {
                name: '幸福指数',
                type: 'pie',
                radius: ["10%", "80%"],
                center: ['25%', '40%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                
                data: [
                    {value: 10.82, name: 'Western Europe'},
                    {value: 10.81, name: 'North America and ANZ' },
                    {value: 9.67, name: 'Middle East and North Africa' },
                    {value: 9.37, name: 'Latin America and Caribbean' },
                    {value: 10.11, name: 'Central and Eastern Europe' },
                    {value: 10.37, name: 'East Asia'},
                    {value: 9.42, name: 'Southeast Asia'},
                    {value: 8.08, name: 'Sub-Saharan Africa'},
                    {value: 8.68, name: 'South Asia'}
                ]
            },
            {
                name: '人均GDP',
                type: 'pie',
                radius: ["10%", "80%"],
                center: ['75%', '40%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: false
                },
                data: [
                    {value: 6.91, name: 'Western Europe'},
                    {value: 7.13, name: 'North America and ANZ' },
                    {value: 5.22, name: 'Middle East and North Africa' },
                    {value: 5.91, name: 'Latin America and Caribbean' },
                    {value: 5.98, name: 'Central and Eastern Europe' },
                    {value: 5.81, name: 'East Asia'},
                    {value: 5.41, name: 'Southeast Asia'},
                    {value: 4.49, name: 'Sub-Saharan Africa'},
                    {value: 4.44, name: 'South Asia'}
                ]
            }
        ]
    };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();}
  );
})();
