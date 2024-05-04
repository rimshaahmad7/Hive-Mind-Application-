function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Good bye... Talk to you later!";
    } else if (input == "what is your name") {
        return "I'm Hive Mind  AI assistant. How can I assist you today?";
    } else if (input == "what is hive mind") {
        return "A Hive Mind is an online task management platform facilitating task creation, categorization, and assignment with due dates and priorities. It syncs with calendars, provides reporting tools, and employs access controls for security. Its responsive design enhances accessibility across devices.";
    } else if (input == "") {
        return "";
    }
    else {
        return "Try asking something else!";
    }
}

// else if (input == "") {
//     return "";
// } else if (input == "") {
//     return ";
// }  else if (input == "") {
//     return "";
// }