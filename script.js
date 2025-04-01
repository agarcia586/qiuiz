<script>
    document.querySelector(".timebutton").addEventListener("click", function() {
         let timeInput = Number(document.querySelector(".time").value);
      if (timeInput > = 1960 && timeInput < = 1999) {
            window.location.href = "https://www.ebay.com/";
            } else if (timeInput >= 2000 && timeInput <= 2025) {
            window.location.href = "https://www.amazon.com/"; 
						} else {document.querySelector(".timemessage").innerHTML = "Please enter a year between 1960-2025!";
}
    
    }
      
    });
</script>