const box = document.querySelector(".box");
console.log(box);

box.addEventListener("click", function(event) {
    const target = event.target;

    if (target.classList.contains("tab")) {
        const index = Array.from(target.parentNode.children).indexOf(target);

        const tabs = document.querySelectorAll(".tabs > div");
        tabs.forEach(tab => tab.classList.remove("active"));
        target.classList.add("active");

        const toggleBox = document.querySelectorAll(".toggle-box > div");
        toggleBox.forEach(element => element.classList.remove("active"));
        toggleBox[index].classList.add("active");
    }
});