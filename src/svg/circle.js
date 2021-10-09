import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import Svg, { Circle, Defs, Rect, Mask } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

const CircleSvg = ({ bgColor }) => {
    const circleRadius = width / 2.5;
    const viewBox = `0 0 ${width} ${height}`
    return (
        <View aspectRatio={1}>
            <Svg height={height} viewBox={viewBox}>
                <Defs>
                    <Mask id="mask">
                        <Rect
                            height={height}
                            width={width}
                            fill="#FFFFFF"
                        />
                        <Circle
                            r={circleRadius}
                            cx={width / 2}
                            cy={height / 2}
                            fill="#000000"
                        />
                    </Mask>
                </Defs>
                <Rect
                    height={height}
                    width={width}
                    fill={bgColor}
                    mask="url(#mask)"
                />
            </Svg>
        </View>
    );
};

export default CircleSvg;