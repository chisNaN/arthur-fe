var data = {
    labels: ["Self Learning", "Communication", "Adaptation", "Creativity", "Analysis", "Synthesis", "Critical Acumen"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [100, 48, 75, 90, 80, 60, 80]

        }
    ]
};

var data2 = {
    labels: ["JavaScript", "PHP", "GIT", "Support", "Technological Watch", "Sys & Devops", "Docker"],
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: '#fff',
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [80, 65, 80, 45, 90, 75, 70]

        }
    ]
};

var ctx = document.getElementById("generalSkills").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data);

new Chart(document.getElementById("ITSkills").getContext("2d")).Radar(data2);
