document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const inputField = document.getElementById('messageInput');
    const message = inputField.value.trim();

    if (message !== "") {
        appendMessage(message, 'user');
        inputField.value = '';
        inputField.focus();

        // Simulate bot reply after 1 second
        setTimeout(() => {
            appendMessage('Bot: ' + getBotResponse(), 'bot');
        }, 1000);
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse() {
    const responses = [
        "Hello! How can I help you today?",
        "I'm a bot, but I can answer some questions!",
        "Please feel free to ask anything.",
        "I'm still learning, but I'll try my best to help you!",
        "Good to see you! What would you like to talk about?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
