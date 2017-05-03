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
            <Appear>
              <div className="text_with_image">
                <Text textColor="blue">EX</Text>
                <Image src={images.ex} />
              </div>
            </Appear>
            <Appear>
              <div>
                <Text textColor="blue">SERVER</Text>
                <Image src={images.friend} />
              </div>
            </Appear>
            <Appear>
              <div>
                <Text textColor="blue">ME</Text>
                <Image src={images.me} />
              </div>
            </Appear>
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
