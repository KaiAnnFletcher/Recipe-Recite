import React from "react";
import "../../sass/_botkit.scss";
//import "../../sass/_chat.scss";
//import "../../sass/_home.scss";
import "../../sass/embed.scss";
import "../../sass/styles.scss";
import "./css/embed.css";
import "./css/styles.css";
import "./css/styles.css.map";
//import "./client.js"
import "./embed.js"

function Widget() {
  return (
<div id="embedded_messenger"> 
    <header id="message_header" onClick="Botkit.toggle()">Chat</header>
    <iframe  id="botkit_client" src="../../public/chat.html"></iframe>
</div>
  );
}

export default Widget;