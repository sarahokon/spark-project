import * as React from 'react';
// const ICON = `M11.9,2.5C8,2.5,5.5,5.7,5.5,9c0,3.6,2.4,5.1,3.4,5.6c2.5,1.3,2.9,7.2,2.9,7.2h0.9c0.1-2.1,0.6-6.1,2.1-7
// c0.7-0.4,3.6-1.9,3.6-5.8C18.4,5.7,15.8,2.5,11.9,2.5z`;;
// const ICON = `M8.2,12.8c-1-1-1.6-2.3-1.6-3.8c0-0.2,0-0.5,0.1-0.7C7.4,8.2,8.1,8,8.9,7.8
// C9,8,9.1,8.3,9.3,8.5C9,9.3,8.1,11.5,8.2,12.8z M8.5,4.8c0.9-0.8,2.1-1.2,3.5-1.2c0.4,0,0.9,0.1,1.3,0.2c-1.1,0.5-2,1.8-2.3,2.2
// c-0.2-0.1-0.4-0.1-0.6-0.1C10,5.8,9.6,6,9.3,6.3C9.1,6,8.7,5.4,8.5,4.8z M9.4,7.4c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1s-0.4,1-1,1
// C9.8,8.4,9.4,7.9,9.4,7.4z M14.5,13.8c-0.8-0.3-2.3-1.2-3.1-2.8c-0.5-0.9-0.7-1.7-0.8-2.1C11.4,8.8,12,8.1,12,7.4c0-0.1,0-0.2,0-0.2
// c0.6-0.2,1.6-0.3,2.7-0.1c1.2,0.3,2.1,0.9,2.7,1.3c0,0.2,0,0.4,0,0.6C17.4,11.1,16.2,12.9,14.5,13.8z`
// const ICON = `M3.4,5.4c-.3.1-.6.2-1,.3a7.38,7.38,0,0,1-1.2.2,5.22,5.22,0,0,1,2-3.5,1.85,1.85,0,0,0,.2.7,5.58,5.58,0,0,0,.5.8A1.61,1.61,0,0,0,3.4,5M11.9,6A6.92,6.92,0,0,0,9.3,4.7a6.8,6.8,0,0,0-2.8-.1,1.44,1.44,0,0,0-.9-1.1h0a3.78,3.78,0,0,1,.9-1.3,4.64,4.64,0,0,1,1.4-.9h0A5.44,5.44,0,0,1,11.9,6ZM3.4,5.3a1.69,1.69,0,0,0,.2.5q.15.3.3.3A6.9,6.9,0,0,0,3.2,8a8.63,8.63,0,0,0-.3,2.6A4.56,4.56,0,0,1,1.4,8.4a6.47,6.47,0,0,1-.3-2.5,6,6,0,0,0,1.2-.2A2.82,2.82,0,0,0,3.4,5.3ZM12,6a4.91,4.91,0,0,1-.8,3.5,5.49,5.49,0,0,1-2,1.9A7.43,7.43,0,0,1,6,8.6a8.32,8.32,0,0,1-.9-2,1.67,1.67,0,0,0,1.2-.7,1.33,1.33,0,0,0,.2-1.3,6.8,6.8,0,0,1,2.8.1A6.74,6.74,0,0,1,12,6ZM3.9,3.9c.1-.1.2-.2.3-.2a1.83,1.83,0,0,1,.9-.2,1.09,1.09,0,0,1,.5.1,3.78,3.78,0,0,1,.9-1.3,3.26,3.26,0,0,1,1.4-.9,5.79,5.79,0,0,0-2.4-.1,4.51,4.51,0,0,0-2.4,1,.76.76,0,0,0,.1.4,1.2,1.2,0,0,0,.4.8C3.7,3.6,3.8,3.8,3.9,3.9Z`
const ICON = `M11.9,2.5C8,2.5,5.5,5.7,5.5,9c0,3.6,2.4,5.1,3.4,5.6c2.5,1.3,2.9,7.2,2.9,7.2h0.9c0.1-2.1,0.6-6.1,2.1-7
c0.7-0.4,3.6-1.9,3.6-5.8C18.4,5.7,15.8,2.5,11.9,2.5z M8.2,12.8c-1-1-1.6-2.3-1.6-3.8c0-0.2,0-0.5,0.1-0.7C7.4,8.2,8.1,8,8.9,7.8
C9,8,9.1,8.3,9.3,8.5C9,9.3,8.1,11.5,8.2,12.8z M8.5,4.8c0.9-0.8,2.1-1.2,3.5-1.2c0.4,0,0.9,0.1,1.3,0.2c-1.1,0.5-2,1.8-2.3,2.2
c-0.2-0.1-0.4-0.1-0.6-0.1C10,5.8,9.6,6,9.3,6.3C9.1,6,8.7,5.4,8.5,4.8z M9.4,7.4c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1s-0.4,1-1,1
C9.8,8.4,9.4,7.9,9.4,7.4z M14.5,13.8c-0.8-0.3-2.3-1.2-3.1-2.8c-0.5-0.9-0.7-1.7-0.8-2.1C11.4,8.8,12,8.1,12,7.4c0-0.1,0-0.2,0-0.2
c0.6-0.2,1.6-0.3,2.7-0.1c1.2,0.3,2.1,0.9,2.7,1.3c0,0.2,0,0.4,0,0.6C17.4,11.1,16.2,12.9,14.5,13.8z`;;
function LoadingPin({ size , color }) {
    return (
        <svg height="60" width="60" viewBox='0 0 13 13' fill='green'>
            <g transform="translate(-5.4,-2.1)">
            <path d={ICON}/>
            </g>
        </svg>
    )
    // return (React.createElement("svg", {viewBox: "0 0 18 17", style: { width: 60, height: 60, cursor: 'pointer', fill : color}},
        // React.createElement("path", { d: ICON, })));
}
export default React.memo(LoadingPin);