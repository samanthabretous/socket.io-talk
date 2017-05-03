import React from "react";
import { socket } from "./index.js";

class ChatRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      messageInput: "",
      username: ""
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    socket.on("message", ({ username, message }) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, { message, username }]
      }));
    });
  }
  sendMessage(event) {
    event.preventDefault();
    socket.emit("add-message", {
      newMessage: this.state.messageInput,
      username: this.state.username
    });

    this.setState({ messageInput: "" });
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <main>
        <section>
          {this.props.messages.map((message, index) => (
            <article key={index}>
              <p><span style={{ color: "white", fontWeight: "bold" }}>{message.username} </span>
                {message.message
                  ? message.message
                  : "has join chat."
                }
              </p>
            </article>
          ))}
        </section>
        <form onSubmit={this.sendMessage}>
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInput}
            placeholder="Enter Username"
          />
          <input
            value={this.state.messageInput}
            name="messageInput"
            onChange={this.handleInput}
            placeholder="Enter Message"
          />
        <button>SEND</button>
        </form>
      </main>
    )
  }
}

export default ChatRoom;
