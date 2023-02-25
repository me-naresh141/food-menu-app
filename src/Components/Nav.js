import React from "react";
import data from "../data.json";
import FoodCard from "./FoodCard";
import "../stylesheet/nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: "all",
      selectedData: null,
    };
  }
  handleClick = (e) => {
    let info = data.filter((elm) => {
      if (e.target.innerText === "all") {
        return elm;
      } else {
        return elm.category === e.target.innerText;
      }
    });
    this.setState({
      activeBtn: e.target.innerText,
      selectedData: info,
    });
  };
  render() {
    return (
      <>
        <nav>
          {this.props.category.map((tag, index) => (
            <li
              key={index}
              onClick={this.handleClick}
              className={this.state.activeBtn === tag ? "active" : ""}
            >
              {tag}
            </li>
          ))}
        </nav>
        <FoodCard
          data={!this.state.selectedData ? data : this.state.selectedData}
        />
      </>
    );
  }
}

export default Nav;
