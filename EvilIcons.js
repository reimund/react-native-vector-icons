/**
 * EvilIcons icon set component.
 * Usage: <EvilIcons name="icon-name" size={20} color="#4F8EF7" />
 *
 * @providesModule EvilIcons
 */
'use strict';

var createIconSet = require('./lib/create-icon-set');
var glyphMap = {
  "archive": 61696,
  "arrow-down": 61697,
  "arrow-left": 61698,
  "arrow-right": 61699,
  "arrow-up": 61700,
  "bell": 61701,
  "calendar": 61702,
  "camera": 61703,
  "cart": 61704,
  "chart": 61705,
  "check": 61706,
  "chevron-down": 61707,
  "chevron-left": 61708,
  "chevron-right": 61709,
  "chevron-up": 61710,
  "clock": 61711,
  "close": 61712,
  "close-o": 61713,
  "comment": 61714,
  "credit-card": 61715,
  "envelope": 61716,
  "exclamation": 61717,
  "external-link": 61718,
  "eye": 61719,
  "gear": 61720,
  "heart": 61721,
  "image": 61722,
  "like": 61723,
  "link": 61724,
  "location": 61725,
  "lock": 61726,
  "minus": 61727,
  "navicon": 61728,
  "paperclip": 61729,
  "pencil": 61730,
  "play": 61731,
  "plus": 61732,
  "pointer": 61733,
  "question": 61734,
  "redo": 61735,
  "refresh": 61736,
  "retweet": 61737,
  "sc-facebook": 61738,
  "sc-github": 61739,
  "sc-google-plus": 61740,
  "sc-instagram": 61741,
  "sc-linkedin": 61742,
  "sc-odnoklassniki": 61743,
  "sc-pinterest": 61744,
  "sc-skype": 61745,
  "sc-soundcloud": 61746,
  "sc-tumblr": 61747,
  "sc-twitter": 61748,
  "sc-vimeo": 61749,
  "sc-vk": 61750,
  "sc-youtube": 61751,
  "search": 61752,
  "share-apple": 61753,
  "share-google": 61754,
  "spinner": 61755,
  "spinner-2": 61756,
  "spinner-3": 61757,
  "star": 61758,
  "tag": 61759,
  "trash": 61760,
  "trophy": 61761,
  "undo": 61762,
  "unlock": 61763,
  "user": 61764
};

var EvilIcons = createIconSet(glyphMap, 'EvilIcons', 'EvilIcons.ttf');

module.exports = EvilIcons;
module.exports.glyphMap = glyphMap;

