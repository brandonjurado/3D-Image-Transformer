import React, { Component } from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink, MDBFileInput, MDBAnimation } from "mdbreact";

import "./HomePage.css";

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginImageExifOrientation);
registerPlugin(FilePondPluginImageTransform);

class HomePage extends React.Component {
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
                    <strong>Submit Photos For Your Claim</strong>
                  </h2>
                </MDBAnimation>

                <MDBAnimation type="fadeInDown">
                  <p className="text-center">Drag & Drop images below or click on <strong>Browse</strong> to be prompted to select your images to be sumitted for a claim.</p>
                </MDBAnimation>

                <FilePond allowMultiple={true}
                          server="http://http://localhost:3000/"
                          acceptedFileTypes="image/*"
                          labelFileTypeNotAllowed="Invalid file type selected"
                          fileValidateTypeLabelExpectedTypes="Expects an image"
                          allowImageExifOrientation={true}
                          imageTransformOutputMimeType='image/jpeg'/>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
                What does this tool do?
              </h2>
              <p className="text-center">
                We submit all your provided images to a service we have created that will render a 3D image for you and our agents to look at for better inspection.
              </p>
              <h2 className="text-center my-4 font-weight-bold">
                Who are we?
              </h2>
              <p className="text-center">
                A group of developers with a diverse background of skills that have teamed up from Tarleton State University.
              </p>
              <hr className="my-5" />
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="css3" brand className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">CSS</h4>
                    <p className="grey-text">
                      Animations, colours, shadows, skins and many more! Get to
                      know all our css styles in one place.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm purple-gradient"
                      to="/css"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="cubes" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">COMPONENTS</h4>
                    <p className="grey-text">
                      Ready-to-use components that you can use in your
                      applications. Both basic and extended versions!
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/components"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="code" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADVANCED</h4>
                    <p className="grey-text">
                      Advanced components such as charts, carousels, tooltips
                      and popovers. All in Material Design version.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm purple-gradient"
                      to="/advanced"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="bars" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NAVIGATION</h4>
                    <p className="grey-text">
                      Ready-to-use navigation layouts, navbars, breadcrumbs and
                      much more! Learn more about our navigation components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm purple-gradient"
                      to="/navigation"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="edit" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">FORMS</h4>
                    <p className="grey-text">
                      Inputs, autocomplete, selecst, date and time pickers.
                      Everything in one place is ready to use!
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/forms"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="table" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">TABLES</h4>
                    <p className="grey-text">
                      Basic and advanced tables. Responsive, datatables, with
                      sorting, searching and export to csv.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm purple-gradient"
                      to="/tables"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories" center>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="window-restore" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MODALS</h4>
                    <p className="grey-text">
                      Modals used to display advanced messages to the user.
                      Cookies, logging in, registration and much more.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm purple-gradient"
                      to="/modals"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="arrows-alt" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADDONS</h4>
                    <p className="grey-text">
                      Google Maps, Social Buttons, Pre-built Contact Forms and
                      Steppers. Find out more about our extended components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo lighten-2"
                      to="/addons"
                    >
                      Learn more
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
