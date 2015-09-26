var user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20';
var Browser = require('zombie');
var browser = new Browser({userAgent: user_agent, debug: true, waitFor: 15000});
var cheerio = require('cheerio');

var url = 'http://www.kpig.com/playlist.htm';

browser.visit(url, function(e) {
  if (e) console.log(e);
  else {
    var data = browser.html();
    var $ = cheerio.load(data);
    var songinfo = $('#playlist_1 .songinfo');
    var artist = songinfo.children().first().text();
    console.log(artist);
  }
});

