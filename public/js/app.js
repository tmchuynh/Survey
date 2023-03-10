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
var message_list = document.querySelector(".message-list");
var body = document.querySelector(".body");
var selections = document.querySelector(".selections");
var nes_select = document.querySelector(".nes-select");
var default_select = document.querySelector("#default_select");
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
            console.log(element.innerHTML.toLowerCase());
            text_field.classList.remove("d-none");
            button_group.classList.add("d-none");
            displayBody(element.innerHTML.toLowerCase());

        });
    });
}

function displayBody(char) {
    var i = document.createElement("i");
    i.classList.add("mx-3");
    i.classList.add("nes-" + char);
    message_body.appendChild(i);

    textarea_field.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            body.innerHTML = textarea_field.value;
            text_field.classList.add("d-none");
            message_body.classList.remove("d-none");
            getSelections();

        }

    });

}

function getSelections() {
    selections.classList.remove("d-none");
    nes_select.addEventListener("click", function (event) {
        for (var i = 0; i < default_select.children.length; i++) {
            if (default_select.children[i].selected) {
                console.log(default_select.children[i].value);
                if (default_select.children[i].value == 0) {
                    $.getJSON("https://api.adviceslip.com/advice", function (data) {
                        var text = data.slip.advice;
                        createBubble(text);
                });
                } else if (default_select.children[i].value == 1) {
                    $.getJSON("https://passwordinator.onrender.com/", function (data) {
                        var text = data.data;
                        createBubble(text);
                });
                }
            }
        }
    });

}

function createBubble(text) {
    var section = document.createElement("section");
    section.classList.add("mesage");
    section.classList.add("-left");
    section.classList.add("d-flex");

    var i = document.createElement("i");
    i.classList.add("mx-3");
    i.classList.add("animate");
    i.classList.add("nes-octocat");
    section.appendChild(i);

    var div = document.createElement("div");
    div.classList.add("nes-balloon");
    div.classList.add("from-left");
    section.appendChild(div);

    var p = document.createElement("p");
    p.innerHTML = text;
    div.appendChild(p);

    message_list.appendChild(section);
}