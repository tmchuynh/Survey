var name_field = document.querySelector("#name_field");
var message_list = document.querySelector(".message-list");
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
    message_list.classList.remove("d-none");
}