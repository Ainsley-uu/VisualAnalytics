(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  

  option = {
    xAxis: {
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
        },
      },
      
      data: [
        "Western Europe",
        "North America and ANZ",
        "Middle East and North Africa",
        "Latin America and Caribbean",
        "Central and Eastern Europe",
        "East Asia",
        "Southeast Asia",
        "Commonwealth of Independent States",
        "Sub-Saharan Africa",
        "South Asia",
      ],
    },
    yAxis: {
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#9d9e99",
        },
      },
    },
    series: [
      {
        z: 2,
        type: "pictorialBar",
        animation: false,
        hoverAnimation: false,
        data: [6.91, 7.13, 5.22, 5.91, 5.98, 5.81, 5.41, 5.47, 4.49, 4.44],
        symbol:
          'path://d="M-135.22,142.85l-2.04-2.23l0.74-0.67l2.03,2.22L-135.22,142.85zM-132.31,142.21c-0.29-0.36-0.63-0.63-0.96-0.9l-0.3-0.25c-0.98-0.82-1.77-1.89-2.53-2.92c-0.07-0.09-0.14-0.18-0.16-0.26l-0.93,0.36c0.08,0.2,0.2,0.36,0.29,0.49c0.8,1.07,1.63,2.18,2.69,3.08l0.32,0.26c0.3,0.24,0.59,0.47,0.81,0.74L-132.31,142.21zM-127.58,142.35c-1.06-0.62-2-1.4-2.79-2.33c-0.33-0.38-0.63-0.79-0.94-1.19c-0.55-0.72-1.11-1.47-1.82-2.1c-0.36-0.32-0.76-0.61-1.14-0.88c-0.79-0.57-1.53-1.1-1.92-1.88l-0.89,0.45c0.5,0.99,1.38,1.63,2.23,2.24c0.38,0.27,0.74,0.53,1.06,0.82c0.63,0.56,1.14,1.24,1.68,1.95c0.32,0.42,0.63,0.84,0.98,1.24c0.87,1.01,1.89,1.86,3.04,2.54L-127.58,142.35zM-125.88,142.26c-0.79-1.32-2.01-2.36-3.44-2.92l-0.23-0.09c-0.24-0.09-0.47-0.17-0.65-0.29c-0.26-0.16-0.47-0.42-0.7-0.68l-3.19-3.75c-0.66-0.77-1.4-1.65-2.39-2.2l-0.49,0.87c0.83,0.46,1.48,1.23,2.11,1.97l3.19,3.75c0.25,0.3,0.54,0.63,0.92,0.88c0.28,0.18,0.56,0.29,0.84,0.39l0.21,0.08c1.23,0.49,2.27,1.38,2.94,2.51L-125.88,142.26zM-122.1,142.09l-3.66-2.92c-0.79-0.63-1.61-1.28-2.33-2c-0.52-0.51-1-1.08-1.48-1.63c-0.58-0.68-1.19-1.38-1.87-2.01c-0.53-0.49-1.1-0.94-1.66-1.38c-1.33-1.04-2.59-2.03-3.19-3.46l-0.92,0.39c0.7,1.67,2.12,2.78,3.49,3.85c0.54,0.42,1.1,0.86,1.59,1.32c0.64,0.59,1.22,1.27,1.79,1.93c0.49,0.57,0.99,1.15,1.53,1.69c0.76,0.75,1.6,1.42,2.42,2.08l3.65,2.92L-122.1,142.09zM-118.79,142.29c-1.53-1.84-3.27-3.49-5.18-4.92c-0.22-0.17-0.45-0.33-0.67-0.49c-0.41-0.3-0.82-0.59-1.21-0.91c-0.83-0.67-1.61-1.45-2.37-2.21l-3.38-3.37c-1.73-1.72-3.52-3.5-5-5.47l-0.8,0.6c1.53,2.02,3.34,3.83,5.1,5.58l3.39,3.37c0.77,0.77,1.57,1.56,2.45,2.27c0.41,0.33,0.83,0.63,1.25,0.94c0.22,0.16,0.44,0.32,0.66,0.48c1.85,1.38,3.53,2.98,5.01,4.76L-118.79,142.29zM-117.85,141.75c-0.7-0.1-1.21-0.76-1.74-1.46l-0.27-0.35c-0.95-1.19-2.15-2.11-3.31-3.01c-0.85-0.66-1.73-1.34-2.48-2.1c-0.32-0.33-0.63-0.68-0.93-1.03c-0.38-0.43-0.77-0.88-1.2-1.29c-0.48-0.46-1.01-0.88-1.51-1.28l-0.5-0.39c-2.48-2.01-4.66-4.44-6.76-6.8l-0.75,0.67c2.13,2.39,4.33,4.86,6.88,6.92l0.5,0.4c0.51,0.4,0.99,0.78,1.44,1.21c0.4,0.38,0.76,0.79,1.14,1.23c0.32,0.36,0.63,0.73,0.97,1.07c0.8,0.81,1.71,1.51,2.58,2.19c1.17,0.9,2.27,1.75,3.14,2.84l0.26,0.34c0.61,0.79,1.29,1.68,2.39,1.84L-117.85,141.75zM-114.48,142.01c-0.46-0.56-0.89-1.17-1.31-1.76c-0.21-0.3-0.43-0.61-0.65-0.91c-1.49-2.03-3.24-3.89-4.94-5.68l-4.8-5.07c-3.1-3.28-6.31-6.67-9.99-9.47l-0.61,0.79c3.61,2.75,6.79,6.11,9.87,9.36l4.8,5.07c1.67,1.77,3.4,3.6,4.86,5.58c0.22,0.29,0.43,0.59,0.64,0.89c0.43,0.61,0.87,1.23,1.36,1.82L-114.48,142.01zM-111.55,142.12c-2.9-2.21-5.16-5.18-7.34-8.05c-1.43-1.88-2.91-3.83-4.57-5.58c-0.54-0.57-1.1-1.12-1.66-1.67c-0.89-0.88-1.82-1.79-2.64-2.75c-1.03-1.22-1.95-2.57-2.83-3.89c-0.58-0.87-1.19-1.76-1.82-2.62c-0.91-1.21-2.17-2.64-3.9-2.92l-0.16,0.99c1.37,0.22,2.41,1.4,3.25,2.53c0.62,0.84,1.22,1.72,1.8,2.58c0.9,1.34,1.83,2.72,2.9,3.98c0.85,1,1.79,1.92,2.7,2.82c0.55,0.54,1.1,1.09,1.64,1.65c1.63,1.71,3.09,3.64,4.5,5.5c0.82,1.08,1.66,2.18,2.53,3.25c-1.29-1.06-2.53-2.17-3.74-3.32c-1.43-1.36-2.83-2.8-4.18-4.2l-2.89-2.99c-0.76-0.78-1.54-1.59-2.22-2.45c-0.26-0.33-0.51-0.67-0.76-1.01c-0.31-0.42-0.62-0.84-0.95-1.25c-0.44-0.54-0.93-1.05-1.4-1.55c-1.13-1.2-2.19-2.32-2.71-3.76l-0.94,0.34c0.58,1.63,1.77,2.89,2.92,4.11c0.46,0.49,0.93,0.99,1.35,1.5c0.32,0.39,0.62,0.8,0.91,1.2c0.26,0.35,0.51,0.7,0.78,1.04c0.71,0.9,1.51,1.72,2.28,2.52l2.89,2.99c1.36,1.4,2.76,2.85,4.21,4.23c2.92,2.78,6.1,5.34,9.45,7.6L-111.55,142.12zM-109.4,135.96c-1.89-3.29-4.33-6.92-8.1-8.9c-0.61-0.32-1.26-0.6-1.89-0.87c-1.53-0.66-2.98-1.28-3.93-2.47c-0.36-0.45-0.64-0.97-0.92-1.53c-0.16-0.3-0.31-0.59-0.48-0.88c-0.69-1.17-1.6-2.18-2.48-3.15c-2.9-3.2-5.89-6.5-9.21-9.41l-0.66,0.75c3.27,2.87,6.25,6.15,9.13,9.33c0.85,0.93,1.72,1.9,2.36,2.98c0.16,0.27,0.31,0.55,0.46,0.84c0.3,0.57,0.61,1.15,1.03,1.68c1.11,1.39,2.74,2.09,4.32,2.77c0.61,0.26,1.24,0.53,1.82,0.84c3.54,1.86,5.88,5.35,7.7,8.52L-109.4,135.96zM-109.82,139.95c-1.73-2.07-3.53-4.21-5.54-6.12c-1.01-0.95-2.08-1.86-3.12-2.73c-0.86-0.72-1.72-1.45-2.55-2.21c-1.41-1.29-2.77-2.7-4.08-4.07c-1.95-2.03-3.96-4.13-6.23-5.9l-0.61,0.79c2.21,1.72,4.2,3.79,6.13,5.8c1.32,1.38,2.69,2.8,4.13,4.11c0.84,0.77,1.71,1.5,2.58,2.23c1.03,0.87,2.09,1.76,3.08,2.7c1.97,1.87,3.74,3.98,5.46,6.03L-109.82,139.95zM-109.46,130.06l-2.51-2.32c-0.82-0.76-1.68-1.55-2.57-2.28c-0.46-0.37-0.93-0.73-1.4-1.08c-0.5-0.38-1-0.76-1.48-1.15c-1.02-0.83-1.99-1.77-2.95-2.7c-5.42-5.25-11.03-10.68-15.96-16.54l-0.76,0.64c4.97,5.9,10.59,11.35,16.05,16.64c0.95,0.92,1.94,1.88,2.99,2.74c0.49,0.41,1,0.79,1.51,1.18c0.46,0.35,0.92,0.7,1.37,1.06c0.87,0.71,1.71,1.48,2.54,2.25l2.49,2.31L-109.46,130.06zM-109.68,125.89c-2.95-3.8-6.44-7.12-10.37-9.87l-0.31-0.21c-0.52-0.36-1.02-0.71-1.48-1.1c-0.82-0.7-1.49-1.53-2.21-2.41c-0.19-0.23-0.38-0.47-0.57-0.7c-3.38-4.06-7.6-7.3-11.69-10.44l-0.61,0.79c4.04,3.1,8.22,6.31,11.53,10.29c0.19,0.23,0.38,0.46,0.56,0.69c0.71,0.88,1.44,1.78,2.33,2.54c0.5,0.43,1.04,0.8,1.56,1.16l0.3,0.21c3.85,2.69,7.27,5.95,10.16,9.66L-109.68,125.89zM-109.51,122.59c-2.94-2.24-5.55-4.98-8.07-7.63c-1.89-1.99-3.85-4.06-5.95-5.91c-0.31-0.27-0.61-0.53-0.92-0.8c-0.55-0.48-1.11-0.95-1.64-1.45c-1.12-1.05-2.16-2.24-3.19-3.4l-6.98-7.91l-0.75,0.66l6.99,7.93c1.02,1.16,2.08,2.36,3.24,3.45c0.54,0.51,1.11,0.99,1.67,1.48c0.31,0.26,0.61,0.52,0.91,0.79c2.07,1.82,4.01,3.87,5.89,5.85c2.55,2.68,5.18,5.46,8.19,7.74L-109.51,122.59zM-120.82,115.56c-1.07-1.61-2.17-3.28-3.46-4.78c-0.64-0.75-1.33-1.46-2-2.16l-9.54-9.9l-0.72,0.69l9.54,9.9c0.66,0.68,1.33,1.39,1.95,2.11c1.25,1.46,2.33,3.1,3.39,4.68L-120.82,115.56zM-109.43,119.67c-1.56-2.11-3.37-4.05-5.11-5.93c-1.26-1.35-2.56-2.75-3.96-4.03c-0.62-0.57-1.26-1.11-1.91-1.66c-0.74-0.63-1.5-1.28-2.21-1.95c-0.69-0.65-1.36-1.35-2.01-2.02l-12-12.46l-0.72,0.69l12,12.46c0.66,0.68,1.34,1.39,2.05,2.06c0.73,0.69,1.5,1.34,2.25,1.98c0.63,0.54,1.27,1.08,1.88,1.64c1.37,1.25,2.66,2.63,3.9,3.97c1.73,1.86,3.52,3.78,5.04,5.84L-109.43,119.67zM-109.44,114.82l-7-6.17c-0.98-0.87-1.96-1.73-2.93-2.62c-2.52-2.32-4.93-4.79-7.17-7.36c-0.87-1-1.72-2.02-2.58-3.04c-2.32-2.78-4.73-5.66-7.52-8.08l-0.65,0.76c2.74,2.37,5.11,5.21,7.41,7.97c0.86,1.03,1.71,2.05,2.59,3.06c2.26,2.6,4.7,5.1,7.25,7.44c0.97,0.89,1.96,1.76,2.94,2.63l7,6.17L-109.44,114.82zM-109.48,112.48c-1.29-1.13-2.54-2.34-3.75-3.51c-3.41-3.32-6.94-6.75-10.17-10.35l-0.58-0.65c-1-1.13-2.04-2.3-3.2-3.33c-0.41-0.36-0.83-0.71-1.25-1.06c-0.61-0.5-1.24-1.02-1.8-1.58c-0.92-0.92-1.73-2-2.5-3.05c-1.18-1.59-2.39-3.23-4.07-4.39l-0.57,0.82c1.54,1.06,2.66,2.57,3.83,4.16c0.8,1.08,1.63,2.2,2.6,3.17c0.59,0.59,1.24,1.12,1.87,1.64c0.41,0.34,0.82,0.67,1.22,1.03c1.11,0.99,2.13,2.14,3.12,3.25l0.58,0.65c3.25,3.63,6.79,7.07,10.22,10.4c1.22,1.18,2.48,2.41,3.79,3.55L-109.48,112.48zM-109.59,109.06c-0.51-1.1-1.49-1.77-2.43-2.42c-0.62-0.42-1.2-0.82-1.65-1.33c-0.23-0.25-0.42-0.54-0.63-0.84c-0.24-0.34-0.48-0.7-0.79-1.02c-0.38-0.4-0.82-0.72-1.27-1.04l-0.15-0.11c-0.68-0.48-1.32-0.93-1.82-1.52c-0.23-0.27-0.44-0.57-0.64-0.87c-0.16-0.24-0.32-0.47-0.49-0.7c-0.71-0.92-1.61-1.66-2.48-2.36c-0.97-0.79-1.9-1.53-2.54-2.51l-0.17-0.26c-0.19-0.3-0.38-0.61-0.67-0.89c-0.31-0.3-0.67-0.49-0.99-0.67c-1.21-0.66-2.46-1.33-3.26-2.39c-0.24-0.32-0.45-0.68-0.66-1.06c-0.17-0.3-0.34-0.6-0.52-0.88c-0.58-0.87-1.33-1.59-2.05-2.28l-3.7-3.52l-0.69,0.72l3.7,3.52c0.68,0.65,1.39,1.33,1.91,2.11c0.18,0.26,0.33,0.54,0.49,0.82c0.22,0.39,0.45,0.8,0.73,1.17c0.93,1.24,2.34,2,3.58,2.67c0.28,0.15,0.56,0.31,0.78,0.51c0.19,0.18,0.35,0.43,0.51,0.69l0.18,0.28c0.73,1.1,1.76,1.93,2.75,2.74c0.87,0.7,1.69,1.36,2.32,2.19c0.16,0.21,0.31,0.43,0.46,0.65c0.22,0.32,0.44,0.65,0.71,0.96c0.58,0.68,1.3,1.19,2,1.68l0.15,0.11c0.43,0.3,0.8,0.58,1.12,0.91c0.25,0.27,0.47,0.58,0.69,0.91c0.22,0.31,0.44,0.64,0.71,0.94c0.53,0.6,1.19,1.05,1.83,1.49c0.87,0.6,1.69,1.16,2.09,2.02L-109.59,109.06zM-109.78,105.4l-12.28-11.48c-0.66-0.62-1.34-1.25-1.93-1.95c-0.35-0.41-0.66-0.84-0.98-1.27c-0.33-0.45-0.66-0.89-1.02-1.32c-0.68-0.8-1.44-1.5-2.18-2.18l-5.37-4.94c-0.97-0.89-1.97-1.81-3.15-2.5l-0.5,0.86c1.09,0.63,2.05,1.51,2.98,2.37l5.37,4.94c0.72,0.66,1.46,1.34,2.09,2.09c0.34,0.41,0.66,0.83,0.98,1.26c0.33,0.45,0.66,0.9,1.02,1.32c0.63,0.74,1.33,1.4,2.01,2.03l12.28,11.48L-109.78,105.4zM-109.73,99.67c-1.91-1.09-3.43-2.67-5.04-4.33c-1.09-1.13-2.22-2.3-3.48-3.3c-0.28-0.22-0.57-0.44-0.86-0.65c-0.61-0.45-1.18-0.88-1.69-1.38c-0.61-0.6-1.12-1.29-1.66-2.03c-0.29-0.39-0.57-0.78-0.88-1.16c-0.69-0.86-1.48-1.65-2.25-2.43c-3.52-3.55-7.17-7.21-11.14-10.42l-0.63,0.78c3.93,3.17,7.55,6.81,11.07,10.36c0.74,0.75,1.5,1.52,2.17,2.34c0.29,0.37,0.57,0.75,0.85,1.13c0.54,0.73,1.09,1.49,1.76,2.15c0.56,0.55,1.19,1.01,1.79,1.46c0.28,0.21,0.56,0.42,0.84,0.63c1.2,0.95,2.31,2.1,3.38,3.21c1.58,1.64,3.22,3.34,5.26,4.51L-109.73,99.67zM-109.6,95.62c-1.79-1.93-3.88-3.58-5.9-5.17c-2.21-1.75-4.5-3.55-6.35-5.7c-0.46-0.54-0.91-1.11-1.35-1.67c-1.27-1.62-2.59-3.3-4.42-4.38c-0.34-0.2-0.7-0.37-1.05-0.55c-0.49-0.24-0.96-0.47-1.38-0.76c-1.21-0.83-2-2.13-2.84-3.5c-0.99-1.61-2.02-3.28-3.78-4.14l-0.44,0.9c1.5,0.73,2.41,2.2,3.37,3.76c0.86,1.4,1.75,2.84,3.13,3.8c0.48,0.33,1,0.59,1.51,0.84c0.33,0.16,0.67,0.33,0.99,0.52c1.67,0.98,2.87,2.51,4.14,4.13c0.45,0.58,0.91,1.16,1.38,1.71c1.91,2.22,4.24,4.06,6.49,5.83c1.99,1.57,4.05,3.19,5.78,5.06L-109.6,95.62zM-133.6,76.38l-1.65-2.22c-0.35-0.46-0.74-0.99-1.27-1.38l-0.59,0.81c0.41,0.3,0.74,0.74,1.06,1.17l1.65,2.22L-133.6,76.38zM-109.72,91.17c-1.54-1.15-3.13-2.34-4.48-3.73c-0.45-0.46-0.87-0.95-1.3-1.43c-0.22-0.25-0.44-0.5-0.66-0.74c-0.85-0.95-1.77-1.87-2.57-2.68l-3.69-3.73c-1.53-1.54-3.11-3.14-4.94-4.43c-0.29-0.2-0.58-0.4-0.87-0.59c-0.68-0.45-1.33-0.88-1.9-1.41c-0.5-0.46-0.94-0.99-1.4-1.55c-0.16-0.19-0.32-0.39-0.49-0.58c-1.3-1.51-2.79-2.86-4.42-3.99l-0.57,0.82c1.57,1.08,2.99,2.37,4.23,3.82c0.16,0.19,0.32,0.38,0.48,0.57c0.46,0.56,0.94,1.14,1.5,1.65c0.63,0.58,1.34,1.05,2.02,1.5c0.28,0.19,0.57,0.38,0.85,0.57c1.76,1.24,3.31,2.8,4.8,4.31l3.69,3.73c0.8,0.81,1.71,1.72,2.54,2.64c0.22,0.24,0.43,0.49,0.65,0.73c0.44,0.5,0.87,1,1.33,1.47c1.4,1.44,3.03,2.66,4.6,3.84L-109.72,91.17zM-109.87,86.77c-4.17-3.87-8.48-7.88-13.17-11.31l-0.27-0.2c-0.65-0.48-1.33-0.97-1.92-1.52c-0.61-0.58-1.14-1.23-1.7-1.92c-0.55-0.68-1.11-1.38-1.77-2c-0.9-0.86-1.94-1.54-2.94-2.2c-0.44-0.29-0.87-0.57-1.3-0.87c-1.69-1.2-2.7-2.34-3.16-3.6l-0.94,0.35c0.71,1.91,2.35,3.24,3.53,4.07c0.43,0.31,0.88,0.6,1.33,0.89c1.01,0.66,1.97,1.29,2.8,2.08c0.6,0.58,1.13,1.22,1.68,1.9c0.55,0.68,1.13,1.39,1.79,2.02c0.63,0.6,1.34,1.11,2.02,1.61l0.27,0.2c4.64,3.4,8.93,7.38,13.08,11.23L-109.87,86.77zM-109.31,83.14c-2.41-1.82-4.68-3.91-6.87-5.92l-2.64-2.42c-0.92-0.84-1.86-1.71-2.68-2.65l-0.37-0.44c-0.33-0.39-0.67-0.8-1.06-1.16c-0.82-0.77-1.8-1.33-2.74-1.87c-1.13-0.64-2.2-1.25-2.97-2.18c-0.2-0.25-0.38-0.51-0.56-0.78c-0.18-0.26-0.36-0.53-0.56-0.78c-0.58-0.73-1.31-1.31-2.01-1.86l-4.77-3.79l-0.62,0.78l4.77,3.79c0.66,0.52,1.34,1.06,1.85,1.7c0.18,0.23,0.35,0.47,0.51,0.71c0.2,0.29,0.4,0.58,0.62,0.85c0.89,1.07,2.08,1.75,3.24,2.41c0.94,0.53,1.82,1.04,2.55,1.73c0.35,0.33,0.65,0.69,0.98,1.08c0.13,0.15,0.25,0.3,0.38,0.45c0.86,0.99,1.83,1.88,2.77,2.74l2.64,2.42c2.21,2.03,4.5,4.13,6.94,5.98L-109.31,83.14zM-109.81,77.55c-3.25-3.56-6.89-6.81-10.41-9.96L-123,65.1c-1.76-1.58-3.59-3.21-5.44-4.78c-1.88-1.59-3.83-3.16-5.86-4.7c-0.8-0.61-1.63-1.24-2.19-2.04l-0.82,0.57c0.65,0.93,1.54,1.6,2.48,2.31c1.95,1.48,3.88,3.03,5.75,4.62c1.84,1.56,3.66,3.19,5.42,4.76l2.78,2.49c3.5,3.13,7.12,6.37,10.34,9.89L-109.81,77.55zM-109.73,73.31c-2.18-1.3-4.12-2.94-5.76-4.88l-0.3-0.36c-0.39-0.47-0.78-0.95-1.25-1.37c-0.45-0.41-0.95-0.74-1.44-1.07l-2.7-1.81c-0.29-0.2-0.61-0.36-0.93-0.53c-0.35-0.18-0.68-0.35-0.96-0.56c-0.96-0.72-1.85-1.7-2.71-2.64c-0.51-0.56-1.01-1.11-1.52-1.61c-2.96-2.89-6.07-5.7-9.22-8.36l-0.64,0.76c3.14,2.65,6.22,5.44,9.17,8.31c0.5,0.49,0.99,1.02,1.48,1.57c0.89,0.98,1.81,1.99,2.84,2.77c0.35,0.26,0.73,0.46,1.11,0.65c0.28,0.15,0.57,0.29,0.83,0.47l2.7,1.81c0.47,0.32,0.92,0.62,1.32,0.98c0.42,0.37,0.77,0.81,1.15,1.27l0.3,0.37c1.71,2.03,3.73,3.74,6.02,5.1L-109.73,73.31zM-109.67,70.03l-17.92-16.85c-3-2.82-6.09-5.73-9.35-8.38l-0.63,0.78c3.22,2.63,6.31,5.53,9.29,8.33l17.92,16.85L-109.67,70.03zM-109.64,75.89c-1.51-1.76-3.16-3.42-4.92-4.94l-0.4-0.34c-0.35-0.3-0.71-0.6-1.05-0.92c-0.47-0.43-0.91-0.89-1.36-1.35c-0.71-0.74-1.44-1.5-2.28-2.15c-0.23-0.18-0.46-0.35-0.7-0.52c-0.65-0.47-1.26-0.92-1.7-1.51l-0.81,0.59c0.53,0.72,1.23,1.23,1.91,1.73c0.23,0.16,0.45,0.33,0.67,0.5c0.78,0.61,1.46,1.31,2.17,2.06c0.46,0.47,0.91,0.95,1.4,1.39c0.35,0.33,0.71,0.64,1.08,0.95l0.39,0.34c1.72,1.49,3.34,3.11,4.81,4.84L-109.64,75.89zM-109.78,65.93c-3.15-2.89-6.47-5.66-9.89-8.24l-0.26-0.19c-0.83-0.62-1.69-1.27-2.44-1.99c-0.67-0.64-1.28-1.38-1.88-2.09c-0.72-0.85-1.46-1.74-2.32-2.5c-0.78-0.69-1.66-1.29-2.5-1.86c-1.39-0.94-2.69-1.82-3.6-3.1c-0.26-0.37-0.49-0.77-0.72-1.2c-0.23-0.42-0.47-0.85-0.75-1.25c-0.51-0.74-1.38-1.66-2.6-1.83l-0.14,0.99c0.86,0.13,1.52,0.84,1.92,1.42c0.25,0.37,0.47,0.76,0.7,1.17c0.24,0.43,0.48,0.87,0.78,1.29c1.01,1.43,2.46,2.41,3.85,3.35c0.82,0.55,1.67,1.13,2.4,1.78c0.81,0.71,1.52,1.57,2.21,2.4c0.61,0.73,1.25,1.49,1.95,2.17c0.79,0.76,1.68,1.43,2.53,2.07l0.26,0.19c3.39,2.56,6.69,5.31,9.82,8.17L-109.78,65.93zM-109.75,62.77c-1.89-1.64-3.84-3.34-5.98-4.73c-0.24-0.16-0.49-0.31-0.73-0.46c-0.67-0.42-1.3-0.81-1.88-1.28c-0.7-0.56-1.31-1.22-1.95-1.91c-0.41-0.44-0.82-0.88-1.26-1.3c-0.63-0.6-1.31-1.16-1.97-1.69c-0.41-0.33-0.81-0.66-1.21-1c-1.38-1.19-2.65-2.56-3.88-3.89c-1.54-1.66-3.14-3.38-4.99-4.8c-0.23-0.17-0.46-0.34-0.69-0.51c-0.83-0.61-1.61-1.18-2.2-1.93l-0.79,0.62c0.68,0.86,1.55,1.5,2.39,2.12c0.23,0.17,0.45,0.33,0.67,0.5c1.78,1.36,3.35,3.05,4.86,4.68c1.25,1.35,2.54,2.74,3.96,3.96c0.4,0.35,0.82,0.69,1.24,1.02c0.64,0.52,1.31,1.06,1.91,1.64c0.42,0.4,0.82,0.83,1.22,1.26c0.64,0.69,1.3,1.4,2.06,2c0.63,0.51,1.31,0.93,1.98,1.35c0.24,0.15,0.48,0.3,0.72,0.46c2.09,1.35,4.01,3.03,5.87,4.64L-109.75,62.77zM-109.56,57.97c-0.82-1.22-1.95-2.13-3.04-2.96c-1.59-1.21-3.26-2.37-4.95-3.44c-0.39-0.24-0.78-0.48-1.17-0.73c-1.45-0.9-2.95-1.82-4.26-2.93c-0.75-0.63-1.46-1.35-2.15-2.04l-0.45-0.45c-3.52-3.51-7.37-6.73-11.46-9.57l-0.57,0.82c4.04,2.8,7.84,5.98,11.32,9.45l0.45,0.45c0.7,0.71,1.43,1.44,2.21,2.1c1.37,1.16,2.9,2.1,4.38,3.02c0.39,0.24,0.77,0.48,1.16,0.72c1.67,1.05,3.31,2.19,4.88,3.39c1.02,0.78,2.08,1.63,2.81,2.72L-109.56,57.97zM-109.45,52.28c-3.82-2.61-7.32-5.78-10.71-8.85c-2.71-2.45-5.51-4.99-8.46-7.24c-0.32-0.25-0.65-0.49-0.98-0.73c-1.19-0.89-2.42-1.8-3.48-2.84c-0.38-0.37-0.74-0.76-1.11-1.15c-0.79-0.85-1.61-1.72-2.6-2.41l-0.57,0.82c0.9,0.63,1.65,1.42,2.44,2.27c0.37,0.4,0.75,0.8,1.14,1.18c1.11,1.08,2.37,2.02,3.58,2.93c0.32,0.24,0.65,0.48,0.97,0.73c2.92,2.23,5.71,4.75,8.4,7.18c3.41,3.09,6.94,6.28,10.81,8.94L-109.45,52.28zM-109.61,50.16c-0.77-0.5-1.35-1.24-1.96-2.02c-0.19-0.25-0.39-0.5-0.59-0.73c-2.02-2.43-4.73-4.12-7.35-5.75c-2-1.25-4.08-2.55-5.8-4.16c-0.49-0.46-0.95-0.94-1.42-1.42c-0.36-0.38-0.72-0.75-1.1-1.12c-1.01-0.98-2.1-1.89-3.17-2.76l-5.65-4.65l-0.64,0.77l5.66,4.66c1.04,0.86,2.13,1.75,3.1,2.7c0.37,0.36,0.72,0.73,1.08,1.09c0.48,0.5,0.95,0.99,1.46,1.46c1.8,1.67,3.91,2.99,5.95,4.27c2.67,1.67,5.19,3.24,7.11,5.55c0.19,0.23,0.38,0.47,0.57,0.71c0.64,0.81,1.29,1.65,2.2,2.24L-109.61,50.16zM-109.8,46.11c-2.91-2.74-6-5.35-9.17-7.79l-0.21-0.16c-0.68-0.52-1.39-1.06-2.01-1.66c-0.35-0.34-0.68-0.7-1.01-1.06c-0.38-0.41-0.77-0.84-1.19-1.23c-1.19-1.11-2.6-1.92-3.96-2.72c-1.47-0.86-2.87-1.66-4.01-2.81c-0.52-0.52-0.97-1.09-1.45-1.7c-0.33-0.42-0.66-0.84-1.02-1.25c-0.9-1.02-1.94-1.91-3.08-2.64l-0.54,0.84c1.07,0.68,2.03,1.51,2.87,2.46c0.34,0.39,0.66,0.79,0.98,1.2c0.47,0.6,0.97,1.23,1.53,1.79c1.23,1.23,2.75,2.11,4.21,2.96c1.32,0.76,2.68,1.55,3.78,2.58c0.39,0.37,0.75,0.76,1.13,1.18c0.34,0.38,0.69,0.75,1.05,1.1c0.66,0.64,1.39,1.19,2.1,1.73l0.2,0.16c3.15,2.41,6.21,5.01,9.1,7.72L-109.8,46.11zM-110.03,41.75c-2.32-2.44-4.72-4.96-7.7-6.73c-0.46-0.28-0.94-0.53-1.41-0.79c-0.64-0.35-1.31-0.7-1.92-1.1c-0.84-0.55-1.63-1.21-2.39-1.85l-0.08-0.07c-4.13-3.47-8.39-6.9-12.67-10.21l-0.61,0.79c4.26,3.3,8.51,6.72,12.63,10.18l0.08,0.07c0.79,0.66,1.6,1.34,2.48,1.92c0.65,0.43,1.33,0.79,2,1.15c0.46,0.25,0.92,0.5,1.38,0.76c2.86,1.7,5.21,4.17,7.49,6.56L-110.03,41.75zM-110.11,37.93c-0.47-0.58-0.98-1.13-1.51-1.66c-0.72-0.71-1.47-1.35-2.25-2.01c-2.1-1.78-4.24-3.52-6.37-5.27c-5.21-4.26-10.59-8.66-15.41-13.49c-0.44-0.44-0.82-0.85-0.94-1.33l-0.97,0.24c0.19,0.78,0.78,1.37,1.2,1.79c4.86,4.86,10.26,9.28,15.49,13.55c2.13,1.74,4.26,3.48,6.36,5.26c0.76,0.64,1.5,1.28,2.19,1.96c0.5,0.5,0.99,1.03,1.44,1.58L-110.11,37.93zM-109.76,35.43c-2.37-2.15-4.98-4.06-7.74-5.68c-0.31-0.18-0.62-0.36-0.92-0.53c-0.64-0.37-1.28-0.73-1.91-1.13c-1.22-0.78-2.37-1.7-3.41-2.72l-0.7,0.71c1.09,1.06,2.29,2.02,3.57,2.84c0.64,0.41,1.29,0.78,1.95,1.16c0.31,0.17,0.61,0.35,0.92,0.53c2.7,1.58,5.25,3.45,7.57,5.56L-109.76,35.43zM-109.72,32.27c-1.48-2.2-3.77-3.58-5.99-4.91c-1.19-0.71-2.41-1.45-3.49-2.3c-1.43-1.13-2.67-2.54-3.88-3.9c-0.95-1.07-1.92-2.18-3-3.16c-1.46-1.34-3.11-2.48-4.71-3.57c-0.96-0.66-1.96-1.34-2.9-2.06c-1.09-0.84-2.29-1.87-2.9-3.21l-0.91,0.41c0.7,1.54,2.01,2.68,3.2,3.59c0.96,0.73,1.96,1.42,2.94,2.09c1.57,1.08,3.19,2.19,4.6,3.48c1.04,0.95,2,2.04,2.93,3.09c1.23,1.39,2.51,2.83,4,4.02c1.12,0.89,2.38,1.65,3.59,2.37c2.22,1.33,4.31,2.59,5.67,4.61L-109.72,32.27zM-109.62,27.29c-1.44-1.71-3.1-3.21-4.93-4.48c-0.4-0.27-0.8-0.53-1.21-0.8c-0.86-0.56-1.76-1.13-2.53-1.81c-0.44-0.39-0.86-0.83-1.27-1.25c-0.2-0.21-0.4-0.42-0.61-0.62c-2.22-2.22-4.87-3.97-7.43-5.67c-2.24-1.48-4.55-3.01-6.54-4.84c-0.85-0.78-1.77-1.74-2.14-2.91l-0.95,0.3c0.44,1.4,1.47,2.48,2.42,3.35c2.05,1.88,4.39,3.43,6.66,4.93c2.52,1.67,5.13,3.4,7.28,5.55c0.2,0.2,0.4,0.41,0.6,0.61c0.42,0.44,0.86,0.89,1.33,1.31c0.83,0.72,1.75,1.32,2.64,1.9c0.4,0.26,0.79,0.51,1.18,0.78c1.76,1.21,3.36,2.66,4.73,4.3L-109.62,27.29zM-109.75,23.52c-2.21-1.31-4.05-3.25-5.83-5.12l-0.64-0.67c-6.18-6.46-13.1-12.23-20.57-17.13l-0.55,0.84c7.41,4.86,14.27,10.58,20.4,16.99l0.64,0.67c1.83,1.92,3.71,3.91,6.04,5.3L-109.75,23.52zM-109.51,18.42l-3.47-3.51c-0.67-0.68-1.36-1.38-2.13-1.99c-0.46-0.37-0.94-0.7-1.43-1.04c-0.35-0.24-0.7-0.48-1.04-0.74c-1.25-0.94-2.37-2.07-3.46-3.17c-0.75-0.76-1.53-1.54-2.15-2.41c-0.19-0.27-0.36-0.55-0.54-0.82c-0.18-0.29-0.37-0.58-0.56-0.86c-1.4-1.99-3.42-3.38-5.37-4.72c-1.51-1.04-3.07-2.12-4.3-3.45l-0.73,0.68c1.31,1.42,2.92,2.53,4.47,3.6c1.96,1.35,3.82,2.63,5.12,4.48c0.19,0.27,0.36,0.54,0.54,0.81c0.18,0.29,0.37,0.58,0.57,0.86c0.67,0.94,1.47,1.75,2.25,2.54c1.11,1.12,2.26,2.28,3.57,3.26c0.35,0.26,0.71,0.51,1.07,0.76c0.47,0.32,0.93,0.64,1.37,1c0.72,0.58,1.39,1.25,2.04,1.91l3.47,3.51L-109.51,18.42zM-109.61,14.78c-6.66-6.28-13.32-12.72-19.79-19.13l-0.7,0.71c6.48,6.41,13.15,12.86,19.81,19.15L-109.61,14.78zM-109.77,9.86c-4.18-5.2-8.97-9.91-14.23-14.01l-0.62,0.79c5.2,4.06,9.93,8.72,14.07,13.85L-109.77,9.86zM-109.69,4.81c-1.21-1.24-2.59-2.34-3.93-3.4c-2.21-1.75-4.3-3.4-5.7-5.69l-0.85,0.52c1.49,2.43,3.75,4.22,5.93,5.95c1.31,1.04,2.67,2.11,3.83,3.31L-109.69,4.81zM-109.17-0.11c-1.37-1.63-2.99-3-4.83-4.06l-0.5,0.87c1.74,1.01,3.28,2.3,4.57,3.84L-109.17-0.11zM-109.89-3.77c-0.14-0.1-0.26-0.24-0.33-0.39l-0.91,0.42c0.15,0.32,0.38,0.59,0.66,0.79L-109.89-3.77z"',
        barWidth: 25,
        itemStyle: {
          normal: {
            barBorderRadius: 50,
            color: function (params) {
              var colorList = [
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#44633F",
                  },
                  {
                    offset: 1,
                    color: "#44633F",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#285943",
                  },
                  {
                    offset: 1,
                    color: "#285943",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#77AF9C",
                  },
                  {
                    offset: 1,
                    color: "#77AF9C",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#8CD790",
                  },
                  {
                    offset: 1,
                    color: "#8CD790",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#519D9E",
                  },
                  {
                    offset: 1,
                    color: "#519D9E",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#58C9B9",
                  },
                  {
                    offset: 1,
                    color: "#58C9B9",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#9DC8C8",
                  },
                  {
                    offset: 1,
                    color: "#9DC8C8",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#8FBC94",
                  },
                  {
                    offset: 1,
                    color: "#8FBC94",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#D7FFF1",
                  },
                  {
                    offset: 1,
                    color: "#D7FFF1",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#C5E99B",
                  },
                  {
                    offset: 1,
                    color: "#C5E99B",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#CBE86B",
                  },
                  {
                    offset: 1,
                    color: "#CBE86B",
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#2EC4D6",
                  },
                  {
                    offset: 1,
                    color: "#2EC4D6",
                  },
                ]),
              ];
              return colorList[params.dataIndex];
            },
            label: {
              show: false,
            },
          },
        },
      },
      {
        z: 1,
        type: "pictorialBar",
        animation: false,
        hoverAnimation: false,
        data: [6.91, 7.13, 5.22, 5.91, 5.98, 5.81, 5.41, 5.47, 4.49, 4.44],
        symbol: 'path://d="M-116.2,52.93h-15.48v-3.96h15.48V52.93z"',
        barWidth: 25,
        itemStyle: {
          normal: {
            color: "#fff",
            // opacity: .7,
            label: {
              show: false,
            },
            // shadowColor: '#f00',
            // shadowBlur: 0,
            // shadowOffsetY: 1,
            // shadowOffsetX: 1,
          },
        },
      },
      {
        z: 0,
        type: "pictorialBar",
        animation: false,
        hoverAnimation: false,
        data: [6.91, 7.13, 5.22, 5.91, 5.98, 5.81, 5.41, 5.47, 4.49, 4.44],
        barWidth: 25,
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,1)",
            label: {
              show: false,
            },
            shadowColor: "rgba(0,0,0,.3)",
            shadowBlur: 20,
            shadowOffsetY: 0,
            shadowOffsetX: -6,
          },
        },
      },
    ],
  };
  const backImg = "/asset/get/s/data-1622796959507-HTopachtJ.png";
  myChart._dom.style.backgroundImage = "url('" + backImg + "')";

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
