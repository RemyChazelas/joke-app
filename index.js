const header = document.getElementById("header");
const text = document.getElementById("content");
const emoji = document.getElementById("emoji");


function getJoke() {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((data) => {
            const content = data.data.content;
            console.log(content);

            header.textContent = content.text_head;
            text.textContent =
                content.text !== "" ? content.text : content.text_hidden;
        });
}

getJoke();

function getEmoji() {


    fetch("https://api-ascii-emojis.herokuapp.com/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const content = data[Math.floor(Math.random() * data.length)].descr;
            console.log(content);
            emoji.textContent = content;
        });
}

getEmoji();

document.body.addEventListener("click", getJoke, getEmoji);