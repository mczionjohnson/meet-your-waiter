const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");

const user = { message: "" };

const sendMessage = () => {
  const messageElement = document.createElement("div");

  messageElement.innerHTML =
    "<span> You: </span>" + "<span>" + userMessage + "</span>";

  chatContainer.appendChild(messageElement);
};

sendBtn.addEventListener("click", () => {
  const userMessage = textbox.value;

  if (userMessage == "") {
  } else {
    // remove whitespace
    userMessage.trim();
  }
});
