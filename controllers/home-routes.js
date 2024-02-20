const router = require('express').Router();

// Define routes
router.get('/', async (req, res) => {
  try {
    // Fetch and render existing blog posts
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;
