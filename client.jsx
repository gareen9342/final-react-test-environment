const React = require('react');
const ReactDom = require('react-dom');

const HelloWorld = require('./HelloWorld');

ReactDom.render(<HelloWorld/>,document.querySelector('#root'));

