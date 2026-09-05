const title = document.getElementById('title');
const message = document.getElementById('message');
const showBtn = document.getElementById('showBtn');

function showMessage() {
    alert(title.textContent);
    console.log(message.textContent);
}

showBtn.addEventListener('click', showMessage);
