# GTU Rover Website

- Admin Login: https://rover.gtu.edu.tr/admin
- After every successful commit github actions deploys the app to https://website-52fbe.firebaseapp.com/, which can be used for testing purposes before deploying to github pages.

## Admin Features

- [x] manage sponsors
- [x] manage members
- [x] edit sponsorship document (drag & drop file to 'Our Sponsors' nav link in admin mode)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn deploy`

Builds and deploys the app to github pages. (gh-pages branch)
