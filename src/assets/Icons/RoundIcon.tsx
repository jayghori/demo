import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const RoundIcon = (props: SvgProps) => {
    const { color, width = 23, height = 21 } = props;
    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11 22C17.0647 22 22 17.0647 22 11C22 4.93534 17.0647 0 11 0C4.93528 0 0 4.93534 0 11C0 17.0647 4.93534 22 11 22ZM11 1.46664C16.258 1.46664 20.5334 5.74196 20.5334 11C20.5334 16.258 16.258 20.5334 11 20.5334C5.74196 20.5334 1.46664 16.258 1.46664 11C1.46664 5.74196 5.74202 1.46664 11 1.46664Z" fill="#989EA4" />
        </Svg>
    );
};

export default RoundIcon;