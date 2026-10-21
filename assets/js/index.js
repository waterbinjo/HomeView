window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY + window.innerHeight / 2;
    console.log(scrollTop);

    let section = document.querySelectorAll(".section");

    section.forEach((elem) => {
        if (scrollTop > elem.offsetTop) {
            elem.classList.add("show");
        } else {
            elem.classList.remove("show");
        }
    });
});
