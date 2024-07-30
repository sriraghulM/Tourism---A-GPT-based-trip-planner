import { Component } from "react";
import "./Destination.css";
import Mountain1 from "../../images/mount.jpg";
import Mountain2 from "../../images/2.jpg";
//import Mountain3 from "../../images/3.jpg";
//import Mountain4 from "../../images/4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="first-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="image" src={this.props.img1} />
          <img alt="image" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
