import React from "react";
//import ReactDOM from 'react-dom'
import "../../sass/_botkit.scss";
import "../../sass/_chat.scss";
import "../../sass/_home.scss";
import "../../sass/embed.scss";
import "../../sass/styles.scss";
import "./css/embed.css";
import "./css/styles.css";
import "./css/styles.css.map";

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active })
    console.log("Hello World");

  }

  render() {
    return (

      <div id="embedded_messenger" class={this.state.active ? "active" : ""}>
        <header id="message_header" onClick={this.toggle} >Chat</header>
        <iframe title="botkitclient" id="botkit_client" src="../../public/chat.html"></iframe>
      </div>
    );
  }
}
export default Widget;


