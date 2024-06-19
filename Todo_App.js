let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let items = document.createElement("li");
    items.innerText = inp.value;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");

    items.appendChild(del);
    ul.appendChild(items);
    inp.value = "";
});


ul.addEventListener("click", function (event) {
    if (event.target.nodeName = "BUTTON ") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});