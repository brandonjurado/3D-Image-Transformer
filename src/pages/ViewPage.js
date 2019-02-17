import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink, MDBAnimation } from "mdbreact";
import "./HomePage.css";
import Iframe from 'react-iframe';

class ViewPage extends React.Component {
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

                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
                    
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </div>
    );
  }
}

export default ViewPage;
