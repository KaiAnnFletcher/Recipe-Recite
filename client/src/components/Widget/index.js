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

function Widget() {

  return (
    
  <div id="embedded_messenger"> 
      <header id="message_header" onClick={(e) => this.toggle(e)}>Chat</header>
      <iframe  id="botkit_client" src="../../public/chat.html"></iframe>
  </div>
    );
  }
  
  export default Widget;
/*var Iframe = React.createClass({     
  render: function Widget() {
    return(         
<div id="embedded_messenger"> 
    <header id="message_header" onClick={(e) => this.toggle(e)}>Chat</header>
    <iframe  id="botkit_client" src={this.props.source}></iframe>
</div>
    )
  }
});

ReactDOM.render(
  <Iframe src="../../public/chat.html"/>,
  document.getElementById('botkit_client')
);
*/

