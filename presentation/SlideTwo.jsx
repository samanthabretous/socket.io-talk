import React from 'react';
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from "spectacle";

class SlideTwo extends React.Component {
  render() {
    return (
      <Slide bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Getting Started With Socket.io
        </Heading>
      </Slide>
    );
  }
}

export default SlideTwo;
