var encode = [];

var genCharArray = function (charStart, charEnd) {
    var arr = [];
    var i = charStart.charCodeAt(0);
    var j = charEnd.charCodeAt(0);

    for(; i <= j; i++){
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));
encode = encode.concat(genCharArray('a', 'z'));

var getShortUrl = function (longUrl, longToShortHash, shortToLongHash) {
    if( longUrl.indexOf('http') == -1) {
        longUrl = "http://" + longUrl;
    }
    if(longToShortHash[longUrl] != null)
    {
        return longToShortHash[longUrl];
    } else {
        var shortUrl = generateShortUrl(longToShortHash);
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

var generateShortUrl = function (longToShortHash) {
    return convertTo62(Object.keys(longToShortHash).length);  // longToShortHash是个Obejct，通过keys()获取keys array，再通过length获取长度
};

var convertTo62 = function (num) {
    var result = '';
    do { // 用do-while，防止num=0时直接结束循环
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num);
    return result;
};

var getLongUrl = function (shortUrl, shortToLongHash) {
    return shortToLongHash[shortUrl];
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};
