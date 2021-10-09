import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import Svg, { Circle, Defs, Rect, Mask } from 'react-native-svg';

const { height, width } = Dimensions.get('window');
const viewBox = `0 0 ${width} ${height}`;

const Rectangle_Rounded = ({ bgColor, CornerRadius }) => 
{
    const cardWidth = width * 0.7; // 70% of screen's width
    const cardHeight = height * 0.6; // 60% of screen's height

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
                        <Rect
                            height={cardHeight}
                            width={cardWidth}
                            x={(width / 2) - (cardWidth / 2)}
                            y={(height / 2) - (cardHeight / 2)}
                            ry={CornerRadius}
                            rx={CornerRadius}
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

export default Rectangle_Rounded;