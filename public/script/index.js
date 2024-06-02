const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let user = [
  { greeting: "" },
  {
    menu: "",
  },
];

let possibleGreetings =
  "Welcome! How may I serve you today? <br> Please select from the list below: <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or end chat to cancel order";
const chatbotError =
  "Oops! I am a new bot in town and learning with time. I understand hello or end chat";
let menu =
  "Please select from the list below: <br>Select 1 for fiesta rice <br>Select 2 for spaghetti <br>Select 3 for fried rice <br>Select 4 for yam and egg sauce <br>Select 0 or end chat to cancel order";

const sendChatbotResponse = (userMessageText, chatbotError) => {
  sendMessage(userMessageText);
  chatbotBasic(chatbotError);
};

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

const chatbotBasic = (chatbotMessage) => {
  const messageElement = document.createElement("div");

  messageElement.innerHTML =
    "<span> Chatbot: </span>" + "<span>" + chatbotMessage + "</span>";

  // delay the response by 1 second to mimic processing
  setTimeout(() => {
    // display it in the container
    chatContainer.appendChild(messageElement);
    // scroll to the new element
    chatContainer.lastChild.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
};

sendBtn.addEventListener("click", (e) => {
  // alert("hello")
  const userMessage = textbox.value;
  // alert(userMessage)

  if (userMessage == "") {
    alert("Please type a message");
  } else if (userMessage == "end chat") {
    // if user wants to exit
    let userMessageText = userMessage;
    sendMessage(userMessageText);
    alert("Have a nice time");
    textbox.value = "";
  } else if (userMessage == "hello") {
    //if it is a greeting
    // remove whitespace
    let userMessageText = userMessage.trim();
    // alert(userMessageText)
    user.greeting = userMessageText;
    textbox.value = "";

    // re write code here to use dynamic function
    sendMessage(userMessageText);
    // console.log(user)

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
  else if (userMessage == 1) {
    if (user.greeting == undefined) {
      console.log(user);
      let userMessageText = userMessage.trim();

      textbox.value = "";

      sendChatbotResponse(userMessageText, chatbotError);
    } else {
      // console.log("here now")
      let userMessageText = userMessage.trim();
      user.message = userMessageText;
      textbox.value = "";
      let chatbotMenuResponse = menu;
      // set unique id for scrolling

      sendChatbotResponse(userMessageText, chatbotMenuResponse);

      // document.getElementById('here').scrollIntoView();
      // messageElement.scrollIntoView();
      // document.getElementById('here').scrollIntoView();
      // document.querySelector('#div').scrollIntoView({behavior: 'smooth'});
    }
  } else {
    let userMessageText = userMessage.trim();
    textbox.value = "";
    sendChatbotResponse(userMessageText, chatbotError);
    // textbox.value = "";
  }
});
