const buttons = document.querySelectorAll(".button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Visual toggle
    btn.classList.toggle("active");
    btn.classList.add("no-hover");
    
    // Logic: If it's a project card, maybe redirect after a short delay
    if(btn.classList.contains('project-card')) {
        setTimeout(() => {
            console.log("Navigating to project details...");
        }, 600);
    }
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("no-hover");
  });
});