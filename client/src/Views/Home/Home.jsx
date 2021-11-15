import React from "react";
import APIHandler from "./../../api/handler";
import Menu from "./../../Components/Menu/Menu";
import QuoteCard from "./../../Components/QuoteCard/QuoteCard"

class Home extends React.Component {
  state = {
    quotes: "[]",
  };

  async componentDidMount() {
    try {
    const quotes = await APIHandler.get("/api/home");
    this.setState({quotes: quotes.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
      console.log(this.state.quotes)
    return (
      <>
        <Menu/>
        <QuoteCard/>
      </>
    );
  }
}

export default Home;
