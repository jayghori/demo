import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const RoundCheckIcon = (props: SvgProps) => {
    const { color, width = 23, height = 21 } = props;
    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM4.91701 12.7966L10.1179 16.851L16.8386 7.14713L14.8607 5.77604L9.58961 13.3872L6.39582 10.8975L4.91701 12.7966Z" fill="#FD7246" />
        </Svg>
    );
};

export default RoundCheckIcon;