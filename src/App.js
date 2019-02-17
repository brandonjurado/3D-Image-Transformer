import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,   MDBNavItem, MDBFooter, MDBNavLink, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from "mdbreact";
import { ReactComponent as Logo } from './assets/logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {

  state={
    collapseID: ""
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color="aqua-gradient" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/3D-Image-Transformer/">
              <Logo style={{ height: '3.5rem', width: "3.5rem" }} />
              EasyAR Claims
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left expand="md">
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/3D-Image-Transformer/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">3D Models</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="lego">Lego Car</MDBDropdownItem>
                      <MDBDropdownItem href="other">Another Model</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="purple-gradient">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://brandonjurado.github.io/"> Brandon Jurado </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
