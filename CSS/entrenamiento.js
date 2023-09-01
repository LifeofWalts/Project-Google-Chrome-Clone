document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-details");
    
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const detailsRows = button.parentNode.querySelectorAll(".details");
            
            detailsRows.forEach(row => {
                row.classList.toggle("hidden");
            });
        });
    });
});
