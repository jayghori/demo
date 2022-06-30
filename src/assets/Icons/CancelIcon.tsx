import React from 'react'
import Svg, { SvgProps, Path, G } from 'react-native-svg'

const CancelIcon = (props: SvgProps) => {
    const { color, width, height } = props;
    return (
        <Svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <G transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <Path d="M2325 5109 c-1079 -100 -1982 -871 -2244 -1916 -347 -1379 478 -2768
1849 -3113 1054 -265 2155 156 2757 1055 576 860 576 1989 0 2850 -180 269
-433 522 -702 702 -483 324 -1081 476 -1660 422z m-573 -1455 c18 -9 207 -190
421 -402 l387 -386 388 386 c213 212 403 394 422 404 22 11 57 18 95 19 121 0
210 -89 210 -210 -1 -38 -8 -73 -19 -95 -10 -19 -192 -209 -404 -422 l-386
-388 386 -387 c212 -214 394 -404 404 -423 11 -22 18 -57 19 -95 0 -121 -89
-210 -210 -210 -38 1 -73 8 -95 19 -19 10 -209 192 -422 404 l-388 387 -387
-387 c-214 -212 -404 -394 -423 -404 -22 -11 -57 -18 -95 -19 -121 0 -210 89
-210 210 1 38 8 73 19 95 10 19 192 209 404 423 l386 387 -386 388 c-212 213
-394 403 -404 422 -11 22 -18 57 -19 95 0 97 58 175 153 206 37 12 114 4 154
-17z"/>
            </G>
        </Svg>
    );
};

export default CancelIcon;