const prompt = require('prompt-sync')();
var jobType = document.getElementById('job_type').value;
            var resultText = "";

            if (jobType === "government") {
                var salary = parseInt(document.getElementById('salary').value);
                if (salary > 50000) {
                    resultText = "You can apply for a loan.";
                } else {
                    resultText = "You cannot apply for a loan.";
                }
            } else if (jobType === "business") {
                var turnover = parseInt(document.getElementById('turnover').value);
                if (turnover > 2000000) {
                    resultText = "You can apply for a loan.";
                } else {
                    resultText = "You cannot apply for a loan.";
                }
            } else if (jobType === "private") {
                resultText = "No loan available for you.";
            } else {
                resultText = "Invalid job type.";
            }