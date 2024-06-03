const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

let userGreeting = { greeting: null };
let user = { message: null };

let userMenu = { menu: null };

let possibleGreetings =
  "Welcome! How may I serve you today? <br> Please select from the list below: <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order";
const chatbotError =
  "Oops! I am a new bot in town and learning with time. I start a chat with hello or you can type end chat";
let menu =
  "Please select from the list below: <br>Select 11 for fiesta rice <br>Select 12 for spaghetti <br>Select 13 for fried rice <br>Select 14 for yam and egg sauce <br>Select 0 or say type end chat to cancel order";
let arrayOfPossibleOrder = [
  { select: "11", response: "you have selected fiesta rice" },
  { select: "12", response: "Spaghetti coming in hot" },
  { select: "14", response: "you have selected fried rice" },
  { select: "13", response: "oh! yam and egg sauce it is" },
];
const sendChatbotResponse = (userMessageText, chatbotError) => {
  sendMessage(userMessageText);
  chatbotBasic(chatbotError);
};
const checkGreeting = (userMessage) => {
  console.log(userGreeting.greeting);
  let userMessageText = userMessage.trim();

  textbox.value = "";

  sendChatbotResponse(userMessageText, chatbotError);
};

const checkEndchat = (userMessage) => {
  console.log(user.message);

  let userMessageText = userMessage.trim();

  textbox.value = "";

  sendChatbotResponse(userMessageText, chatbotError);
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
  chatContainer.lastChild.scrollIntoView({ behavior: "smooth" });
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
    chatContainer.lastChild.scrollIntoView({ behavior: "smooth" });
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
    user.message = userMessageText;

    userGreeting = { greeting: null };

    userMenu = { menu: null };

    console.log(user.message);
    console.log(userGreeting.greeting);
    console.log(userMenu.menu);
    textbox.value = "";

    sendMessage(userMessageText);
    alert("Have a nice time");
  } else if (userMessage == "hello") {
    //if it is a greeting
    // remove whitespace
    let userMessageText = userMessage.trim();
    // alert(userMessageText)
    userGreeting.greeting = userMessageText;
    console.log(userGreeting.greeting);

    textbox.value = "";

    // re write code here to use dynamic function
    sendMessage(userMessageText);
    // console.log(user)

    let chatbotMessage = possibleGreetings;
    chatbotBasic(chatbotMessage);
  }
  else if (userMessage == "Hello") {
    //if it is a greeting
    // remove whitespace
    let userMessageText = userMessage.trim();
    // alert(userMessageText)
    userGreeting.greeting = userMessageText;
    console.log(userGreeting.greeting);

    textbox.value = "";

    // re write code here to use dynamic function
    sendMessage(userMessageText);
    // console.log(user)

    let chatbotMessage = possibleGreetings;
    chatbotBasic(chatbotMessage);
  }
  else if (userMessage == 1) {
    if (userGreeting.greeting == null ) {
      console.log(userGreeting.greeting);
      let userMessageText = userMessage.trim();

      textbox.value = "";

      sendChatbotResponse(userMessageText, chatbotError);
      // } else if (user.message == "end chat") {
      //   console.log(user.message);

      //   let userMessageText = userMessage.trim();

      //   textbox.value = "";

      //   sendChatbotResponse(userMessageText, chatbotError);
    } else {
      console.log(userGreeting.greeting);

      let userMessageText = userMessage.trim();
      userMenu.menu = userMessageText;
      console.log(userMenu.menu);

      textbox.value = "";
      let chatbotMenuResponse = menu;

      sendChatbotResponse(userMessageText, chatbotMenuResponse);
    }
  }
  // else if (userMessage == 11) {
  //   if (userGreeting.greeting == undefined) {
  //     checkGreeting(userMessage);

  // console.log(userGreeting.greeting);
  // let userMessageText = userMessage.trim();

  // textbox.value = "";

  // sendChatbotResponse(userMessageText, chatbotError);
  // } else if (user.message == "end chat") {
  //   checkEndchat(userMessage);
  // console.log(user.message);

  // let userMessageText = userMessage.trim();

  // textbox.value = "";

  // sendChatbotResponse(userMessageText, chatbotError);
  // }
  // else if (userMenu != 1) {
  //   let userMessageText = userMessage.trim();
  //   // user.message = userMessageText;
  //   textbox.value = "";
  //   let chatbotMenuResponse = menu;

  //   sendChatbotResponse(userMessageText, chatbotMenuResponse);
  // } else {
  //   // let userMessageText = userMessage.trim();
  //   // user.message = userMessageText;
  //   textbox.value = "";

  //   const result = arrayOfPossibleOrder.filter((val) =>
  //     val.select.includes(userMessage)
  //   );

  //   // pick the response in the first object found
  //   const response = result[0].response;
  //   const chatbotConfirmSelect = response;

  //   sendChatbotResponse(userMessageText, chatbotConfirmSelect);
  // }
  // }
  else {
    let userMessageText = userMessage.trim();
    textbox.value = "";
    sendChatbotResponse(userMessageText, chatbotError);
  }
});
