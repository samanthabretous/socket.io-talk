// Import React
import React from "react";
import io from 'socket.io-client';

export const socket = io.connect();

socket.on('connect', () => {
  console.log('connected');
});

import Chat from './Chat.jsx';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ajax: require("../assets/ajax.png"),
  me: require("../assets/me.png"),
  friend: require("../assets/friend.png"),
  ex: require("../assets/ex.png"),
  phone: require("../assets/phone.png"),
  money: require("../assets/money.gif"),
};

preloader(images);

const theme = createTheme({
  white: "white",
  black: "#1F2022", // black
  blue: "#3FADB9", // blue
  gray: "#535559", // gray
  pink: "#DD425E", // pink
  orange: "#E4943D" // orange
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Breakup with your Ex in Real-time
          </Heading>
          <Text margin="10px 0 0" textColor="blue" size={1} fit bold>
            Getting Started with Socket.io
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={2} textColor="white" caps>Socket.io?</Heading>
          <br />
          <Heading size={2} fit caps lineHeight={1.2} textColor="white">
            Real-time engine that allows <br />
            the server to emit data to the client.
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={5} fit caps lineHeight={1} textColor="white">
            Socket.io <br />
            vs <br />
            AJAX
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="blue">
          <Heading size={3} textColor="orange" caps>The Real AJAX</Heading>
          <Image src={images.ajax} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="orange" caps>Socket vs AJAX</Heading>
          <Layout>
            <Fill>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.ex} />
                <Text textColor="blue" lineHeight={3}>EX</Text>
              </article>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.me} />
                <Text textColor="blue">ME</Text>
              </article>
          </Fill>
          </Layout>
        </Slide>

        <Slide transition={["spin"]} bgColor="gray">
          <Heading size={3} textColor="white">@samanthabretous</Heading>
          <Text textColor="blue">Github</Text>
          <Text textColor="blue">Twitter</Text>
          <Text textColor="blue">Linkedin</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="orange">
          <Heading size={2} textColor="white" caps>How to get started?</Heading>
          <div>
            <Heading size={4} textColor="gray">SOCKET.IO</Heading >
            <Heading size={4} textColor="gray">SOCKET.IO-CLIENT</Heading >
          </div>
        </Slide>

        <Slide transition={["zoom"]} bgColor="orange">
          <Heading size={2} textColor="gray">SOCKET.IO</Heading >
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/server.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="orange">
          <Heading size={2} textColor="gray">SOCKET.IO-CLIENT</Heading >
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/client.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="orange" textColor="gray">
          <Heading size={1} textColor="white">SEND and RECEIVE data</Heading>
          <Text>Client</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/emitClient.example")}
            margin="20px auto"
          />
          <Text>Server</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/emitServer.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="orange" textColor="gray">
          <Chat messages={this.state.messages} parent={this}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="pink" textColor="blue">
          <Heading size={6} textColor="white" caps>How might you use sockets?</Heading>
          <List>
            <Appear><ListItem>Make a multiplayer game so you can dominate your friends</ListItem></Appear>
            <Appear><ListItem>Create a sports feed so you can never miss out when Steph Curry scores</ListItem></Appear>
            <Appear><ListItem>Send the current weather from your IOT moisture sensor</ListItem></Appear>
            <Appear><ListItem>Make a chat app so you can Break up with your ex</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="orange">
          <Heading size={1} textColor="white" caps>Thank you</Heading>
          <Heading size={3} textColor="white" caps>@samanthabretous</Heading>
        </Slide>
      </Deck>
    );
  }
};
