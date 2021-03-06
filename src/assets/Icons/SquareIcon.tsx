import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SquareIcon = (props: SvgProps) => {
    const { color, width = 23, height = 21 } = props;
    return (
        <Svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.94414 4.8504L5.14835 0.0588683C5.06602 -0.0196228 4.93654 -0.0196228 4.85421 0.0588683L0.0626959 4.84612C0.0616768 4.84712 0.0606776 4.84812 0.0596785 4.84914C-0.0210506 4.93155 -0.0197118 5.06379 0.0626959 5.14452L4.85848 9.93605C4.89653 9.97558 4.94859 9.99854 5.00342 10C5.05903 10.0003 5.11258 9.97891 5.15263 9.94031L9.94416 5.14878C9.94518 5.14778 9.94618 5.14678 9.94718 5.14576C10.0279 5.06339 10.0265 4.93113 9.94414 4.8504Z" fill="#FF8244" />
        </Svg>

    );
};

export default SquareIcon;