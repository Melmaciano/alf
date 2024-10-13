const btn = document.querySelector(".btn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50 &&
        document.documentElement.scrollTop < (document.documentElement.scrollTopMax - 50)
    ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    document.documentElement.scrollTo(0,0);
});