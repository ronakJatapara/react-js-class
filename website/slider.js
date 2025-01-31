document.addEventListener("DOMContentLoaded", () => {
    const filterTitles = document.querySelectorAll(".filter-title");

    filterTitles.forEach(title => {
        title.addEventListener("click", () => {
            const options = title.nextElementSibling;
            const arrow = title.querySelector(".arrow");

            if (options) {
                options.style.display = options.style.display === "block" ? "none" : "block";
                arrow.style.transform = options.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
            }
        });
    });
});
