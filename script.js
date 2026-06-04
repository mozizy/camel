let iconHolder = document.getElementById("mood");
let btn = document.getElementsByClassName("btn-mood")[0]
let icon = btn.children[0];



iconHolder.addEventListener("click", function (e) {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mood", true);
    } else {
        
        localStorage.setItem("mood", false);
    }
})

if (localStorage.getItem("mood") == "true") {
    document.body.classList.add("dark")
}
