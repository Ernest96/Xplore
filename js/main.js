AOS.init({ once: true });

function mobileMenu() {
    var x = document.getElementById("header");

    x.classList.toggle("mobile");
}

function searchIndex() {
    let filter = document.getElementById('search').value;
    window.location.href = "./pages/destinations.html?filter=" + filter;
}

function pressEnterIndex(event) {
    if (event.key == "Enter") {
        searchIndex();
    }
}


function search() {
    let filter = document.getElementById('search').value;
    window.location.href = "./destinations.html?filter=" + filter;
}

function pressEnter(event) {
    if (event.key == "Enter") {
        search();
    }
}