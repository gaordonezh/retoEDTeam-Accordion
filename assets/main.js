document.addEventListener('DOMContentLoaded', function(){
  let summaries = document.querySelectorAll(".accordion__item-summary");
  summaries.forEach((summary) => {
    summary.addEventListener("click", (event) => {
      const summaryActive = document.querySelector(".accordion__item-summary.active");
      if (summaryActive && summaryActive !== summary) {
        summaryActive.classList.toggle("active");
        summaryActive.nextElementSibling.classList.toggle("active");
      }
      summary.classList.toggle("active");

      const content = summary.nextElementSibling;
      if(summary.classList.contains("active")){
        content.classList.toggle("active");
      }else{
        content.classList.remove("active");
      }
    });
  });
}, false);