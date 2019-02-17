import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink, MDBAnimation, MDBProgress } from "mdbreact";
import "./HomePage.css";
import Iframe from 'react-iframe';

class ViewLegoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 400);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <MDBEdgeHeader color="blue-gradient" />
        <MDBFreeBird>
          <MDBRow>
            <MDBCol
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <MDBCardBody>
                <MDBAnimation type="pulse">
                  <h2 className="h2-responsive mb-4 text-center">
                    <strong>Your 3D Claim</strong>
                  </h2>
                </MDBAnimation>

                <MDBAnimation type="fadeInDown">
                  <p className="text-center">This is the 3D model we were able to create based off of the images your provided!</p>
                </MDBAnimation>

                <Iframe url="https://brandonjurado.github.io/ReactObject3D/"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
                <MDBProgress material value={this.state.seconds} striped />

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </div>
    );
  }
}

export default ViewLegoPage;
