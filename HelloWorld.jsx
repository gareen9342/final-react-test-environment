const React = require('react');
const {useState, useRef } = React;

const HelloWorld = () => {
    const [hello, setHello] = React.useState('Hello World! garinsensai');

    return (<div> {hello} </div>);
}

module.exports = HelloWorld;