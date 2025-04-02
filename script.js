
    document.querySelector(".timebutton").addEventListener("click", function() {
let timeInput = Number(document.querySelector(".time").value);
         if (timeInput >= 1960 && timeInput <= 1999) {
            window.location.href = "3q1.html";
         } else if (timeInput >= 2000 && timeInput <= 2025) {
            window.location.href = "3q2.html";
         }
    });
