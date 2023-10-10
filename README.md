# Fruit Finder: Discover and Identify Fruits in Images

Welcome to Fruit Finder, a dynamic web application powered by Node.js, Express, and EJS. This innovative platform leverages Microsoft Azure's Cognitive Services to perform two crucial tasks: detecting whether an uploaded image contains fruit and identifying the specific type of fruit present in the image.

## Getting Started

To run Fruit Finder locally, ensure you have Node.js and npm installed on your machine. Follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/TylerGeorgeAlexander/fruit-finder.git
   ```

2. Navigate to the project directory and install the necessary dependencies:
   ```
   cd fruit-finder
   npm install
   ```

3. Start the development server with the following command:
   ```
   npm start
   ```

   The application will be accessible at http://localhost:2121/.

## Using Fruit Finder

Utilizing Fruit Finder is straightforward. Follow these steps:

1. Click the "Choose File" button to upload an image from your computer.

2. Once the image is selected, initiate the fruit detection process by clicking the "Upload" button.

3. Fruit Finder employs Microsoft Azure's Cognitive Services to analyze the image. If fruit is detected, the application will display the types of fruit found in the image. If no fruit is detected, the app will present a message indicating the absence of fruit.

## Additional Features

Beyond fruit detection, Fruit Finder integrates Microsoft Azure's Computer Vision API to identify any other objects present in the uploaded image. These identified objects will be listed below the fruit detection results.

## Acknowledgments

Fruit Finder owes its capabilities to the robust machine learning and computer vision resources provided by Microsoft Azure's Cognitive Services. We express our gratitude for the opportunity to harness these tools in the creation of this application.

---

## Additional Configuration

To enhance the functionality of Fruit Finder, follow these steps:

1. Create a "config" folder in the project directory.

2. Inside the "config" folder, create a `.env` file.

3. Add the following key-value pairs to the `.env` file:

   - `PORT` = 2121 (You can use any available port, for example, 3000)
   - `CLOUD_NAME` = `your Cloudinary cloud name`
   - `CLOUD_API_KEY` = `your Cloudinary API key`
   - `CLOUD_API_SECRET` = `your Cloudinary API secret`
   - `MS_COMPUTER_VISION_SUBSCRIPTION_KEY` = `your Microsoft Subscription Key`
   - `MS_COMPUTER_VISION_ENDPOINT` = `your Microsoft Computer Vision Endpoint`
   - `MS_FACE_ENDPOINT` = `your Microsoft Face Endpoint`
   - `MS_FACE_SUB_KEY` = `your Microsoft Face Key`

## Run the Application

To start the application, use the following command:

```
npm start
```
