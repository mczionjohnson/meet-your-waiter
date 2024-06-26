const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

// storage
let user = { message: null };
let userGreeting = { greeting: null };
let userOption = { option: null };

let userSelectedOrder = [];
let userCheckout = [];

// arrays
let arrayOfPossibleGreetings = [
  {
    greeting: "hello",
    response:
      "Welcome! How may I serve you today? <br> Please select from the list below: <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
  {
    greeting: "Hello",
    response:
      "Welcome! How may I serve you today? <br> Please select from the list below: <br>Select 1 to Place an order <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
];
const chatbotError =
  "Oops! I am a new bot in town and learning with time. I start a chat with hello or you can type end chat to cancel order";

const userSelectError =
  "Oops! Select a correct option or you can type end chat to cancel order";

const noOrderFound = "No order found";

let arrayOfOptions = [
  {
    select: "1",
    response:
      "Please select from the list below: <br>Select 22 for fiesta rice <br>Select 33 for spaghetti <br>Select 44 for fried rice <br>Select 55 for yam and egg sauce <br>Select 0 or type end chat to cancel order",
    addMore:
      "To add more please select from the list below: <br>Select 22 for fiesta rice <br>Select 33 for spaghetti <br>Select 44 for fried rice <br>Select 55 for yam and egg sauce <br>Select 0 or type end chat to cancel order",
  },
  // { select: "99", response: "checkout order" },
  // { select: "98", response: "order history" },
  // { select: "97", response: "current order" },
];

let arrayOfPossibleOrder = [
  {
    select: "22",
    name: "Fiesta rice",
    response:
      "You have selected fiesta rice. <br>Select 77 to place add more <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
  {
    select: "33",
    name: "Spaghetti rice",
    response:
      "Spaghetti coming in hot. <br>Select 77 to place add more <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
  {
    select: "44",
    name: "Fried rice",
    response:
      "You have selected fried rice. <br>Select 77 to place add more <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
  {
    select: "55",
    name: "Yam and egg sauce",
    response:
      "Oh! yam and egg sauce it is. <br>Select 77 to place add more <br>Select 99 to checkout order <br>Select 98 to see order history <br>Select 97 to see current order <br>Select 0 or type end chat to cancel order",
  },
];

// dynamic functions
const chatbotResponse = (userMessageText, chatbot) => {
  sendMessage(userMessageText);
  chatbotBasic(chatbot);
};

const checkEndchat = (userMessage) => {
  let userMessageText = userMessage;
  user.message = userMessageText;
  userGreeting = { greeting: null };
  userOption = { option: null };

  userSelectedOrder = { order: null };

  console.log("start", user.message);
  console.log("empty", userGreeting.greeting);
  console.log("empty", userOption.option);
  console.log("empty", userSelectedOrder.order, "end");
  textbox.value = "";

  sendMessage(userMessageText);
  alert("Have a nice time");
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

// main function
sendBtn.addEventListener("click", (e) => {
  // alert("hello")
  const userMessage = textbox.value;
  // alert(userMessage)

  if (userMessage == "") {
    alert("Please type a message");
  } else if (userMessage == "end chat") {
    // if user wants to exit
    checkEndchat(userMessage);
  } else if (userMessage == "0") {
    // if user wants to exit
    checkEndchat(userMessage);
  } else if (userMessage != "") {
    // re factoring code
    let userMessageText = userMessage.trim();
    textbox.value = "";

    let greetings = arrayOfPossibleGreetings.filter((val) =>
      val.greeting.includes(userMessage)
    );
    let options = arrayOfOptions.filter((val) =>
      val.select.includes(userMessage)
    );
    let selectedOrder = arrayOfPossibleOrder.filter((val) =>
      val.select.includes(userMessage)
    );
    if (greetings.length > 0) {
      // if (!userSelectedOrder > 0) {
      if (userOption.option == null) {
        if (userGreeting.greeting == null) {
          console.log("over here");
          userGreeting.greeting = userMessageText;

          let response = greetings[0].response;

          console.log("start", user.message);
          console.log(userGreeting.greeting);
          console.log(userOption.option);
          console.log(userSelectedOrder, "end");

          return chatbotResponse(userMessageText, response);
          //  greetings = null
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, userSelectError);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");

        return chatbotResponse(userMessageText, userSelectError);
      }
      // } else {
      //   // let userMessageText = userMessage.trim();
      //   // textbox.value = "";
      //   console.log("here");

      //   return chatbotResponse(userMessageText, userSelectError);
      // }
    } else if (options.length > 0) {
      // if (!userSelectedOrder.length > 0) {
      if (userOption.option == null) {
        if (userGreeting.greeting != null) {
          userOption.option = userMessageText;

          let response = options[0].response;

          console.log("start", user.message);
          console.log(userGreeting.greeting);
          console.log(userOption.option);
          console.log(userSelectedOrder.order, "end");

          return chatbotResponse(userMessageText, response);
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, chatbotError);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, userSelectError);
      }
      // } else {
      //   // let userMessageText = userMessage.trim();
      //   // textbox.value = "";
      //   console.log("here");
      //   return chatbotResponse(userMessageText, userSelectError);
      // }
    } else if (selectedOrder.length > 0) {
      // if (userSelectedOrder.order == null) {
      if (userOption.option != null) {
        if (userGreeting.greeting != null) {
          let response = selectedOrder[0].response;

          userSelectedOrder.push({
            order: userMessageText,
            name: selectedOrder[0].name,
          });

          let number = userSelectedOrder.length;

          const n = number - 1;
          // console.log(n)

          console.log("start", user.message);
          console.log(userGreeting.greeting);
          console.log(userOption.option);
          console.log(userSelectedOrder[n].name);
          console.log(`you have ${number} order(s)`);

          console.log("end");

          return chatbotResponse(userMessageText, response);
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, chatbotError);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, userSelectError);
      }
      // }
      // else {
      //   // let userMessageText = userMessage.trim();
      //   // textbox.value = "";
      //   console.log("here");
      //   return chatbotResponse(userMessageText, userSelectError);
      // }
    } else if (userMessage == 77) {
      if (userGreeting.greeting != null) {
        if (userOption.option != null) {
          if (userSelectedOrder.length > 0) {
            // userSelectedOrder.order = userMessageText;
            let number = userSelectedOrder.length;

            let response = arrayOfOptions[0].addMore;

            console.log("start", user.message);
            console.log(userGreeting.greeting);
            console.log(userOption.option);
            console.log(`you have ${number} order(s)`);
            console.log("to add more, end");

            return chatbotResponse(userMessageText, response);
          } else {
            // let userMessageText = userMessage.trim();
            // textbox.value = "";
            console.log("here");
            return chatbotResponse(userMessageText, userSelectError);
          }
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, userSelectError);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, chatbotError);
      }
    } else if (userMessage == 99) {
      if (userGreeting.greeting != null) {
        if (userOption.option != null) {
          if (userSelectedOrder.length > 0) {
            // const key = userSelectedOrder.order;
            // console.log(key);
            // const order = arrayOfPossibleOrder.filter((val) =>
            //   val.select.includes(key)
            // );
            // console.log(order);

            // const item = order[0].item;
            // console.log(item);

            // userCheckout.push({ order: `${item}` });
            //
            let iterator = userSelectedOrder.values();

            for (let elements of iterator) {
              console.log(elements.name);
              userCheckout.push({ order: `${elements.name}` });
            }
            arrayLength = userCheckout.length;

            let response = `${arrayLength} order(s) placed`;

            console.log("start", user.message);
            console.log(userGreeting.greeting);
            console.log(userOption.option);
            console.log(`you have ${arrayLength} order(s)`);
            console.log(userCheckout, "end");

            return chatbotResponse(userMessageText, response);
          } else {
            // let userMessageText = userMessage.trim();
            // textbox.value = "";
            console.log("here");
            return chatbotResponse(userMessageText, noOrderFound);
          }
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, noOrderFound);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, chatbotError);
      }
    } else if (userMessage == 97) {
      if (userGreeting.greeting != null) {
        if (userOption.option != null) {
          if (userSelectedOrder.length > 0) {
            if (userCheckout.length > 0) {
              const arrayLength = userCheckout.length;
              // console.log(arrayLength)

              const n = arrayLength - 1;
              // console.log(n)

              currentOrder = userCheckout[n].order;
              // console.log(currentOrder)

              const response = `your current order is ${currentOrder}`;

              console.log("start", user.message);
              console.log(userGreeting.greeting);
              console.log(userOption.option);
              console.log(`you have ${arrayLength} order(s)`);
              console.log(userCheckout, "end");
              console.log(response, "end");

              return chatbotResponse(userMessageText, response);
            }
          } else {
            // let userMessageText = userMessage.trim();
            // textbox.value = "";
            console.log("here");
            const noOrderFound = "No order was placed";
            return chatbotResponse(userMessageText, noOrderFound);
          }
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, noOrderFound);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, chatbotError);
      }
    } else if (userMessage == 98) {
      if (userGreeting.greeting != null) {
        if (userOption.option != null) {
          if (userSelectedOrder.length > 0) {
            if (userCheckout.length > 0) {
              const arrayLength = userCheckout.length;
              sendMessage(userMessageText);

              console.log("start", user.message);
              console.log(userGreeting.greeting);
              console.log(userOption.option);
              console.log(`you have ${arrayLength} order(s)`);
              console.log(userCheckout, "end");
              console.log(response, "end");

              let iterator = userCheckout.values();

              for (let elements of iterator) {
                console.log(elements.order);
                const response = `your order(s) is/are here <br> ${elements.order}`;
                chatbotBasic(response);
              }

              // return chatbotResponse(userMessageText, response);
            }
          } else {
            // let userMessageText = userMessage.trim();
            // textbox.value = "";
            console.log("here");
            const noOrderFound = "No order was placed";
            return chatbotResponse(userMessageText, noOrderFound);
          }
        } else {
          // let userMessageText = userMessage.trim();
          // textbox.value = "";
          console.log("here");
          return chatbotResponse(userMessageText, noOrderFound);
        }
      } else {
        // let userMessageText = userMessage.trim();
        // textbox.value = "";
        console.log("here");
        return chatbotResponse(userMessageText, chatbotError);
      }
    } else {
      if (userGreeting.greeting != null) {
        console.log("here");
        return chatbotResponse(userMessageText, userSelectError);
      } else {
        console.log("here");
        return chatbotResponse(userMessageText, chatbotError);
      }
    }
  } else {
    // catch else
    let userMessageText = userMessage.trim();
    textbox.value = "";
    chatbotResponse(userMessageText, chatbotError);
  }
});
