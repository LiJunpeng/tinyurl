var express = require('express');
var router = express.Router();

var urlService = require('../services/urlService');

router.get('*', function (req, res) {   // * 指任何东西
    var shortUrl = req.originalUrl.slice(1); // 传入的url第一位是'\'，slice去掉第一位
    var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
    res.redirect(longUrl);
});

module.exports = router;