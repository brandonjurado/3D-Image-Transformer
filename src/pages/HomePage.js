import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBContainer, MDBCol, MDBRow, MDBCardBody, MDBIcon, MDBNavLink, MDBAnimation } from "mdbreact";

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

                <MDBNavLink
                  tag="button"
                  className="btn btn-sm purple-gradient"
                  to="/view"
                >
                  View 3D Object
                </MDBNavLink>
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
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;
