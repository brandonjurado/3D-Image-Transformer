# 3D Image Transformer
Create a 3D Image based on several images of one object

## Getting Started
To test, contribute or just see what we did follow few easy steps:
- clone the repository
- cd to the directory with the repository
- run `yarn install` (or `npm install` if you don't use yarn)
- run the app using `yarn start` (or `npm start`)
- to build project use `yarn run build` (or `npm run build`)
- `yarn run remove-demo` (or `npm run remove-demo`) removes demo app pages
- enjoy!

## Features
- Uploads a set of images to an external database for creating a 3D Image
- Image handling:
  - All images are converted to JPEG for functionality purposes on the backend.
  - Allow only files of image type for submission.
  - Retrieves EXIF orientation data from JPEG images to help with correctly orienting photos taken on mobile devices.
