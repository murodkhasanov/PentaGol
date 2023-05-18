const button = document.querySelector(".formbtn")
const names = document.querySelector(".name");
const familiya = document.querySelector(".familiya");
const email = document.querySelector(".email");
const number = document.querySelector(".number");
const textarea = document.querySelector(".textarea");

button.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = 1613825763
    const botToken = "2031317396:AAGG_jnu7hSRCV-XdYj3ASZKyMgzZyeSJU4"
    const nameValue = names.value;
    const familValue = familiya.value;
    const emailValue = email.value;
    const telValue = number.value;
    const textareavalu = textarea.value;
    let message =
        "Ismi: " + nameValue + "\nFamiliya: " + familValue + "\nTelefon: " + emailValue + "\nTelefon: " + telValue + "\nComment: " + textareavalu;

    fetch("https://api.telegram.org/bot" + botToken + "/sendmessage", {
        method: "POST",
        body: JSON.stringify({
            "chat_id": id,
            "text": message
        }),
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        }
    }).then(res => res.json())
        .then(data => console.log(data))
})