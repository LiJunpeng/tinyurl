var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var urlService = require('../services/urlService');

router.post('/urls', jsonParser, function (req, res) {  // express将app强行加入req，因此可以通过req来访问app中的变量
    var longUrl = req.body.longUrl; // body来自bodyParser, longUrl为前端发来的json中的变量
    var shortUrl = urlService.getShortUrl(longUrl, req.app.longToShortHash, req.app.shortToLongHash);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
    });
});

router.get("/urls/:shortUrl", function (req, res) {
    var shortUrl = req.params.shortUrl;
    var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
    if(longUrl) {
        res.json({
            shortUrl: shortUrl,
            longUrl: longUrl
        });
    } else {
        res.status(404).send("wtf???");
    }
});

module.exports = router;