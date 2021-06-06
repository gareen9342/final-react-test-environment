const React = require('react');
const {useState, useRef } = React;

const HelloWorld = () => {
    const [hello, setHello] = React.useState('Hello World!');

    return (<div> {hello} </div>);
}

module.exports = HelloWorld;