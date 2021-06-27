let chatbotMsgList = ["Hi", "You are so good.", "Heya", "Superb", "Awesome", "Cool", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

sendMsgBtn.onclick = function() {
    let userInputText = userInput.value;
    let randomText = chatbotMsgList[Math.floor(Math.random() * 100) % chatbotMsgList.length];


    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");

    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");

    let msgToChatbot = document.createElement("p");
    msgToChatbot.textContent = userInputText;
    msgToChatbot.classList.add("msg-to-chatbot");

    let msgFromChatbot = document.createElement("p");
    msgFromChatbot.textContent = randomText;
    msgFromChatbot.classList.add("msg-from-chatbot");

    msgToChatbotContainer.appendChild(msgToChatbot);
    msgFromChatbotContainer.appendChild(msgFromChatbot);

    chatContainer.appendChild(msgToChatbotContainer);
    chatContainer.appendChild(msgFromChatbotContainer);

    window.scrollTo(0, document.body.scrollHeight);
}