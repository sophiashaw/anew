import React from 'react';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

var styleElement = document.createElement('style');

// // Define the font-face rule
// var fontFace = `
//     @font-face {
//         font-family: 'Yeseva One';
//         src: url('<link rel="preconnect" href="https://fonts.googleapis.com">
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//         <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet">

//     }
// `;

// // Append font-face rule to the style element
// styleElement.appendChild(document.createTextNode(fontFace));

// // Append the style element to the <head> of the document
// document.head.appendChild(styleElement);

// // Apply the font to the body or specific elements
// document.body.style.fontFamily = 'Yeseva One';

// const useGoogleFont = (fontUrl) => {
//     useEffect(() => {
//         const link = document.createElement('link');
//         link.href = fontUrl;
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);

//         return () => {
//             document.head.removeChild(link);
//         };
//     }, [fontUrl]);
// };

// export default useGoogleFont;


const TopBar = () => {
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
        anew
        </Box>
    );
};

export default TopBar;