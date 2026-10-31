const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function() {
    const searchValue = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();

        if(text.includes(searchValue)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
