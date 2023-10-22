


for (let i = 0; i < 20; i++) {
    const quote = document.createElement("div");
    quote.innerHTML = `<div class="card mt-2">
    <div class="card-body">
      This is some text within a card body.
    </div>
    </div>`;
    document.getElementById("container").appendChild(quote);
}
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight + 1 >=
        document.documentElement.scrollHeight) {
        const quote = document.createElement("div");
        quote.innerHTML = `<div class="card mt-2">
    <div class="card-body">
      This is some text within a card body.
    </div>
    </div>`;
        document.getElementById("container").appendChild(quote);
    }
})

