var name_field = document.querySelector("#name_field");
var nes_field = document.querySelector(".nes-field");
var message_list = document.querySelector(".message-list");
var intro = document.querySelector(".intro");
var person;

name_field.addEventListener("keyup", function (event) {
    name_field.value = name_field.value.toUpperCase();
    if (event.keyCode === 13) {
        person = name_field.value;
        console.log(person);
        displayDialog();
    }

});

function displayDialog() {
    nes_field.classList.add("d-none");
    message_list.classList.remove("d-none");
    intro.innerHTML = "Hello " + person + "!";
}