const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

const app = express();
const port = process.env.PORT || 3000;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: 'dwus0wpxb',
  api_key: '615785614172234',
  api_secret: 'your_api_secret_here'
});

// Configure multer to store images in Cloudinary
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'uploads', // You can define the folder name here
  allowedFormats: ['jpg', 'jpeg', 'png'],
});

const upload = multer({ storage: storage });

// Endpoint to handle the image upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({ imageUrl: req.file.secure_url });
  } else {
    res.status(400).send('No file uploaded');
  }
});

// Serve your static files (if necessary)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
