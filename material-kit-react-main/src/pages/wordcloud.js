import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const SimpleWordcloud = (props) => {
    const words = [
        {
            text: 'told',
            value: 64,
        },
        {
            text: 'mistake',
            value: 400,
        },
        {
            text: 'thought',
            value: 100,
        },
        {
            text: 'bad',
            value: 30,
        },
    ]


    return <ReactWordcloud words={props} />

};

export default SimpleWordcloud;