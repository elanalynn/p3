const showdown = require('showdown');
const converter = new showdown.Converter();
const text = '#hello, markdown!';
const html = converter.makeHtml(text);

module.exports = html;