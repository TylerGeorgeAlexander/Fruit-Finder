# Fruit Finder
Welcome to Fruit Finder, a web application built with Node.js, Express, and EJS. This app utilizes Microsoft Azure's Cognitive Services to detect if an uploaded image contains fruit, and to identify the type of fruit present in the image.

## Getting Started
To run Fruit Finder locally, you will need to have Node.js and npm installed on your machine.

First, clone the repository to your local machine:

```git clone https://github.com/TylerGeorgeAlexander/fruit-finder.git```

Next, navigate to the project directory and install the necessary dependencies:

```cd fruit-finder```

```npm install```

Now, you can start the development server by running:

```npm start```

The app will be running on http://localhost:2121/.

## Using Fruit Finder
To use Fruit Finder, simply upload an image by clicking the "Choose File" button and selecting an image file from your computer. Once you have selected an image, click the "Upload" button to start the fruit detection process.

The app will use Microsoft Azure's Cognitive Services to analyze the image and determine if it contains fruit. If fruit is detected, the app will display the types of fruit present in the image. If no fruit is detected, the app will display a message indicating that no fruit was found.

### Additional Features
In addition to fruit detection, Fruit Finder also utilizes Microsoft Azure's Computer Vision API to identify any other objects present in the image. These objects will be displayed in a list below the fruit detection results.

### Acknowledgements
Fruit Finder would not be possible without the powerful machine learning and computer vision capabilities of Microsoft Azure's Cognitive Services. We are grateful for the opportunity to use these tools to build this app.

---

## Things to add

- Create a config folder with a `.env` file and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - CLOUD_NAME = `your cloudinary cloud name`
  - CLOUD_API_KEY = `your cloudinary api key`
  - CLOUD_API_SECRET = `your cloudinary api secret`
  - MS_COMPUTER_VISION_SUBSCRIPTION_KEY = `your Microsoft Subscription Key`
  - MS_COMPUTER_VISION_ENDPOINT = `your Microsoft Computer Vision Endpoint`
  - MS_FACE_ENDPOINT = `your Microsoft Face Endpoint`
  - MS_FACE_SUB_KEY = `your Microsoft Face Key`

---

## Run

`npm start`
