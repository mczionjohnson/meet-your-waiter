const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let user = { message: "" };


let arrayOfPossibleMessage = [
    {message: "Hello", response: "Hi, how can I serve you?"},
    {message: "",  response: ""},
    {message: "",  response: ""}
]

const sendMessage = (userMessage) => {
  // create a div and input message with + +
  // style the element
  const messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";

  messageElement.innerHTML =
    "<span> You: </span>" + "<span>" + userMessage + "</span>";

  // display it in the container
  chatContainer.appendChild(messageElement);
};

const chatbotResponse = (userMessage) => {
  let chatbotMessage = "hi";

  const messageElement = document.createElement("div");

  messageElement.innerHTML =
    "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

  // display it in the container
  chatContainer.appendChild(messageElement);
};

sendBtn.addEventListener("click", (e) => {
  // alert("hello")
  const userMessage = textbox.value;
  // alert(userMessage)

  if (userMessage == "") {
    alert("Please type a message");
  } else {
    // remove whitespace
    let userMessageText = userMessage.trim();
    // alert(userMessageText)
    user.message = userMessageText;
    textbox.value = "";
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);
  }
});
