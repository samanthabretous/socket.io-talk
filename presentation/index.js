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
  curtis: require("../assets/curtis_jackson.jpg"),
  ajax: require("../assets/ajax.png"),
  me: require("../assets/me.png"),
  friend: require("../assets/friend.png"),
  ex: require("../assets/ex.png"),
  phone: require("../assets/phone.png"),
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
          <Heading size={3} textColor="orange" caps> AJAX</Heading>
          <Layout>
            <Fill>
            <Appear>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.ex} />
                <Text textColor="blue" lineHeight={3}>EX</Text>
              </article>
            </Appear>
          </Fill>
            <Fill>
            <Appear>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Appear>
          </Fill>
            <Fill>
            <Appear>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.me} />
                <Text textColor="blue">ME</Text>
              </article>
            </Appear>
          </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="orange" caps> AJAX</Heading>
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
                <Text textColor="pink">SEND GET REQUEST</Text>
                <Image width={200} src={images.phone} />
              </article>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="orange" caps> AJAX</Heading>
          <Layout>
            <Fill>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Fill>
            <Fill>
              <Text textColor="white">Line for spacing</Text>
              <Text lineHeight={2} textColor="pink">POST REQUEST</Text>
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
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="orange" caps> AJAX</Heading>
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
                <Text textColor="pink">SEND GET REQUEST</Text>
                <Image width={200} src={images.phone} />
              </article>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="orange" caps>SOCKET.IO</Heading>
          <Layout>
            <Fill>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.me} />
                <Text textColor="blue">ME</Text>
              </article>
            </Fill>
            <Fill>
              <Text textColor="white">Line for spacing</Text>
              <Text lineHeight={2} textColor="pink">EMIT</Text>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">SERVER</Text>
                <Image width={200} src={images.friend} />
                <Text textColor="blue">FRIEND</Text>
              </article>
            </Fill>
            <Fill>
              <Text textColor="white">Line for spacing</Text>
              <Text lineHeight={2} textColor="pink">EMIT</Text>
            </Fill>
            <Fill>
              <article>
                <Text textColor="pink">CLIENT</Text>
                <Image width={200} src={images.ex} />
                <Text lineHeight={3} textColor="blue">EX</Text>
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
        <Slide transition={["zoom"]} bgColor="orange">
          <Heading size={2} textColor="gray">SOCKET TERMS</Heading >
          <Heading size={4} textColor="white">ROOMS</Heading>
          <Heading size={4} textColor="white">JOIN()</Heading>
          <Heading size={4} textColor="white">LEAVE()</Heading>
          <Heading size={4} textColor="white">BROADCAST</Heading>
          <Heading size={4} textColor="white">IO vs. IO.SOCKETS</Heading>
          <Heading size={4} textColor="white">IN() vs TO()</Heading>
          <Heading size={4} textColor="white">EMIT()</Heading>
          <Heading size={4} textColor="white">ON()</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="orange" textColor="gray">
          <Heading size={1} textColor="gray">EMIT() / ON()</Heading>
          <Text textColor="gray">How to send and recieve messages. Used on the client or server side</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/emit.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="orange" textColor="gray">
          <Chat />
        </Slide>
      </Deck>
    );
  }
};

// <Slide transition={["fade"]} bgColor="orange">
//   <Heading size={3} textColor="white" caps>ajax</Heading>
//   <Appear><Text textColor="blue">EX</Text><Image src={images.ex} /></Appear>
//   <Appear><Text textColor="blue">SERVER</Text><Image src={images.friend} /></Appear>
//   <Appear><Text textColor="blue">MEe</Text><Image src={images.me} /></Appear>
// </Slide>
