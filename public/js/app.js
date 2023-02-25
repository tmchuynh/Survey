var name_field = document.querySelector("#name_field");
var nes_field = document.querySelector(".nes-field");
var message_intro = document.querySelector(".message_intro");
var message_body = document.querySelector(".message_body");
var character_choice = document.querySelector(".character_choice");
var buttons = document.querySelectorAll(".button-group button");
var button_group = document.querySelector(".button-group");
var intro = document.querySelector(".intro");
var text_field = document.querySelector(".text_field");
var textarea_field = document.querySelector("#textarea_field");
var body = document.querySelector(".body");
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
    message_intro.classList.remove("d-none");
    intro.innerHTML = "Hello " + person + "!";
    character_choice.classList.remove("d-none");
    buttons.forEach(element => {
        element.addEventListener("click", function (event) {
            console.log(element.innerHTML);
            text_field.classList.remove("d-none");
    button_group.classList.add("d-none");

        });
    });

}

function displayBody() {
    textarea_field.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            body.innerHTML = textarea_field.value;
            text_field.classList.add("d-none");
            message_body.classList.remove("d-none");
        }
    });
}