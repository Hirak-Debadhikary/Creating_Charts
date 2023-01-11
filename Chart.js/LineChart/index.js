

  let ctx;
  let chart;
  window.addEventListener("load", () => {
    //Get the Canvas ID
    ctx = document.getElementById("MyFirstChart");

    //Creating new Object for Chart
    chart = new Chart(ctx, {
      // type: "radar",
      data: {
        labels: ["Sprint-1", "Sprint-2", "Sprint-3", "Sprint-4", "Sprint-5"],
        datasets: [
          {
            type: "bar",
            label: "Scores",
            data: [2, 6, 10, 3, 8],
            borderWidth: 1,
            backgroundColor: [CreateColor(345)],
          },
          {
            type: "bar",
            label: "Performence",
            data: [3, 5, 8, 6, 2],
            borderWidth: 1,
            backgroundColor: [CreateColor(684)],
          },
        ],
      },

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    //For Get New data from User
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      let sprints = document.getElementById("sprint").value;
      let score = document.getElementById("score").value;
      let performence = document.getElementById("performence").value;

      //Pass in payload variable as like object
      let payload = { sprints, score, performence };

      addData(chart, payload);
    });

    //   For Removing One data

    let remove = document.getElementById("remove");
    remove.addEventListener("click", () => {
      RemoveData(chart);
    });
  });

  //Add data Function
  const addData = (chart, payload) => {
    chart.data.labels.push(payload.sprints);
    chart.data.datasets[0].data.push(payload.score);
    chart.data.datasets[1].data.push(payload.performence);
    chart.update();
  };

  //RemoveData Function
  const RemoveData = (chart) => {
    chart.data.labels.pop();
    chart.data.datasets.forEach((elem) => {
      elem.data.pop();
    });
    chart.update();
  };

  //Create seperate functions for random Colors
  const RandomColor = (nums) => {
    return Math.floor(Math.random() * nums);
  };

  const CreateColor = (nums) => {
    return `rgb(${RandomColor(468)},${RandomColor(353)},${RandomColor(452)})`;
  };
