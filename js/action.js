const form = document.getElementById('message-form');
const message = document.getElementById('message');
const content = document.querySelector('.message-content');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(message.value === ''){
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000)
    }else{
        content.textContent = message.value;
        message.value = '';
    }
});