// Initialize chart data
const ctxApplicationsOverTime = document.getElementById('applicationsOverTimeChart').getContext('2d');
const ctxApplicationsBySource = document.getElementById('applicationsBySourceChart').getContext('2d');
const ctxApplicationsByStatus = document.getElementById('applicationsByStatusChart').getContext('2d');

// Example chart data (replace with actual data from your server or API)
const applicationsOverTimeChart = new Chart(ctxApplicationsOverTime, {
    type: 'line',
    data: {
        labels: ['2024-08-01', '2024-08-10', '2024-08-20'],
        datasets: [{
            label: 'Applications Over Time',
            data: [20, 40, 30],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: '#007bff',
            pointBorderColor: '#fff',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#6c757d',
                },
            },
            y: {
                grid: {
                    color: '#e9ecef',
                },
                ticks: {
                    color: '#6c757d',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const applicationsBySourceChart = new Chart(ctxApplicationsBySource, {
    type: 'pie',
    data: {
        labels: ['LinkedIn', 'Indeed', 'Company Website'],
        datasets: [{
            label: 'Applications by Source',
            data: [50, 30, 20],
            backgroundColor: ['#007bff', '#28a745', '#ffc107'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#6c757d',
                },
            },
        },
    },
});

const applicationsByStatusChart = new Chart(ctxApplicationsByStatus, {
    type: 'bar',
    data: {
        labels: ['New', 'In Progress', 'Hired', 'Rejected'],
        datasets: [{
            label: 'Applications by Status',
            data: [60, 25, 10, 5],
            backgroundColor: '#007bff',
            borderRadius: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#6c757d',
                },
            },
            y: {
                grid: {
                    color: '#e9ecef',
                },
                ticks: {
                    color: '#6c757d',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

// Refresh button functionality
document.getElementById('refreshButton').addEventListener('click', function() {
    // Simulate refreshing data
    alert('Dashboard data refreshed!');
    // Here, you would typically fetch the new data from the server and update the charts and metrics
});
