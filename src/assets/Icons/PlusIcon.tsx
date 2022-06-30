import React from 'react'
import Svg, { SvgProps, Path, G } from 'react-native-svg'

const PlusIcon = (props: SvgProps) => {
    const { color, width = 23, height = 21 } = props;
    return (
        <Svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="22" height="22" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <G transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                <Path d="M2370 5113 c-379 -36 -661 -116 -980 -278 -378 -193 -717 -497 -965
-865 -104 -156 -232 -419 -294 -605 -49 -150 -89 -321 -113 -490 -17 -118 -17
-512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220
412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 149
53 407 182 540 271 299 199 573 480 769 788 72 113 188 353 235 486 235 662
194 1372 -115 1993 -124 250 -263 447 -458 648 -216 224 -428 378 -711 518
-296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m304 -1253 c20 -14 49 -43
64 -64 l27 -39 5 -491 5 -491 491 -5 491 -5 39 -27 c21 -15 50 -44 64 -65 21
-31 25 -48 25 -113 0 -65 -4 -82 -25 -113 -14 -21 -43 -50 -64 -65 l-39 -27
-491 -5 -491 -5 -5 -491 -5 -491 -27 -39 c-15 -21 -44 -50 -65 -64 -31 -21
-48 -25 -113 -25 -65 0 -82 4 -113 25 -21 14 -50 43 -65 64 l-27 39 -5 491 -5
491 -491 5 -491 5 -39 27 c-62 44 -88 90 -92 167 -4 82 23 141 87 186 l43 30
491 5 492 5 5 492 5 491 30 43 c45 64 104 91 186 87 50 -3 75 -10 103 -28z"/>
            </G>
        </Svg>
    );
};

export default PlusIcon;