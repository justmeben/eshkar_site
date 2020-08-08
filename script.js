feather.replace()

let fs_elem = document.getElementById('fs')
fs_elem.addEventListener("click", function() {
    fs_elem.classList.toggle('fs_hide')
});

let elementsArray = document.querySelectorAll(".gallery img");

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        fs_elem.classList.toggle('fs_hide')
        fs_elem.querySelector('img').src = elem.src
    });
});