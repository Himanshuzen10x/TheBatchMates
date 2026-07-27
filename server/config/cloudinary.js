const cloudinary = require('cloudinary').v2;
const multer = require('multer');

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME || 'niqykuy3';
const api_key = process.env.CLOUDINARY_API_KEY || '767646741512121';
const api_secret = process.env.CLOUDINARY_API_SECRET || '4VaES-fDWJzVY0_nJMDaX3gNiBQ';

cloudinary.config({
  cloud_name,
  api_key,
  api_secret
});

// Use memory storage so we can check moderation before accepting
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG, GIF, and WebP images are allowed'), false);
    }
  }
});

module.exports = { cloudinary, upload };
