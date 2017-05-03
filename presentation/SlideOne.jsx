// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
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
  folder: require("../assets/folderStructure.png"),
  folder2: require("../assets/folderStructure2.png"),
  docs: require("../assets/socketDocs.png"),
  ajax: require("../assets/ajax.png"),
  me: require("../assets/me.png"),
  friend: require("../assets/friend.png"),
  ex: require("../assets/ex.png"),
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



        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Samantha Bretous</Heading>
          <ListItem>Github</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Linkedin</ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>If you dont know what to build it in, use JavaScript</Quote>
            <Appear><Cite>Curtis Jackson</Cite></Appear>
            <Appear><Image src={images.curtis} /></Appear>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>How might you use sockets?</Heading>
          <List>
            <Appear><ListItem>Dominate your friends in multiplayer games</ListItem></Appear>
            <Appear><ListItem>Never miss out when Steph Curry scores with a sports feed</ListItem></Appear>
            <Appear><ListItem>Make a chat app so you can Break up with your ex</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>How to Start</Heading>
          <Heading size={6} textColor="secondary" caps>Yarn init -y && Yarn Add</Heading>
          <List>
            <ListItem>Socket.io</ListItem>
            <ListItem>Socket.io-Client</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Axios</ListItem>
            <ListItem>Babel/ Webpack</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image height={700} src={images.folder}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image height={700} src={images.folder2}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image height={700} src={images.docs}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/server.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image height={700} src={images.docs}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/requireio.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">Now to the Client Side</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/clientio.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">Picture of reception area</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">Picture of ChatRoom</Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="quartenary" textColor="primary">
          <Heading size={1} textColor="tertiary">Socket Terms</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">ROOM</Heading>
          <Text textColor="tertiary">Channels that socket users can join or leave.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">JOIN / LEAVE</Heading>
          <Text textColor="tertiary">To receive message the user must be in the channel unless the message is emitted publicly.</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/join.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">EMIT() / ON()</Heading>
          <Text textColor="tertiary">How to send out messages. Used on the client or server side</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/emit.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">BROADCAST</Heading>
          <Text textColor="tertiary">Send to everyone but the sender</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/broadcast.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} textColor="tertiary">IN / TO</Heading>
          <Text textColor="tertiary">Send message to specific room(channels)</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/in.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">Server Side</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/appAndSocket.example")}
            margin="20px auto"
          />
          <Heading size={3} textColor="tertiary">Server Side</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/in.example")}
            margin="20px auto"
          />
        </Slide>

      </Deck>
    );
  }
};
