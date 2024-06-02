const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let user = { message: "" };

let possibleGreetings =
  "Welcome! How may I serve you today? <br> Please select from the list below: <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or exit to cancel order";

// let arrayOfPossibleMessage = [
//   {
//     message: "hello",
//     response:
//       "Welcome! How may I serve you today? <br> Please select from the list below <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 to cancel order",
//   },
//   {
//     message: "Hello",
//     response:
//       "Welcome! How may I serve you today? <br> Please select from the list below <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 to cancel order",
//   },
// ];

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

// greetings
const chatbotBasic = (chatbotMessage) => {
  const messageElement = document.createElement("div");

  messageElement.innerHTML =
    "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

  // display it in the container
  chatContainer.appendChild(messageElement);
};

// const chatbotResponse = (userMessage) => {
//   let chatbotMessage = "";
//   if (userMessage == "") {
//     alert("Please type a message");
//   }
//   // search the array for possible response
//   //   filter each object and regex to lowercase
//   else if (userMessage.length > 3) {
//     const result = arrayOfPossibleMessage.filter((val) =>
//       val.message.includes(userMessage)
//     );
//     // alert(userMessage.toLowerCase());
//     // alert(result[0]);
//     if (result.length > 0) {
//       // pick the response in the first object found
//       const response = result[0].response;
//       chatbotMessage = response;
//     } else {
//       chatbotMessage = "say something else or exit";
//     }
//   }

//   const messageElement = document.createElement("div");

//   messageElement.innerHTML =
//     "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

//   // display it in the container
//   chatContainer.appendChild(messageElement);
// };

sendBtn.addEventListener("click", (e) => {
  // alert("hello")
  const userMessage = textbox.value;
  // alert(userMessage)

  if (userMessage == "") {
    alert("Please type a message");
  } else if (userMessage == "exit") {
    // if user wants to exit
    let userMessageText = "exit";
    sendMessage(userMessageText);
    alert("Have a nice time");
    textbox.value = "";
  } else if (userMessage == "hello") {
    //if it is a greeting
    // remove whitespace
    let userMessageText = userMessage.trim();
    // alert(userMessageText)
    user.message = userMessageText;
    textbox.value = "";
    sendMessage(userMessageText);

    let chatbotMessage = possibleGreetings;
    chatbotBasic(chatbotMessage);
  }
  // else if () {
  //   // remove whitespace
  //   let userMessageText = userMessage.trim();
  //   // alert(userMessageText)
  //   user.message = userMessageText;
  //   textbox.value = "";
  //   sendMessage(userMessageText);

  //   chatbotResponse(userMessageText);
  // }
  else {
    chatbotMessage = "Oops! I am a new bot in town and learning with time. I understand hello or exit";
    let userMessageText = userMessage.trim();

    sendMessage(userMessageText);
    chatbotBasic(chatbotMessage);
    textbox.value = "";
  }
});
