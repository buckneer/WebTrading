export const planetChartData = {
    type: "line",
    data: {
        labels: ["Nov", "Dec", "Jan", "Feb"],
        datasets: [
            {
                label: "",
                data: [123, 122, 112, 231],
                backgroundColor: "rgba(255, 193, 7, .5)",
                borderColor: "#FFC107",
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default planetChartData;
