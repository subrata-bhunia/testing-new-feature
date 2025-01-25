import type {PropsWithChildren} from 'react';
import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {TouchableWithoutFeedback, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export type DotStyle = Omit<ViewStyle, 'width' | 'height'> & {
  width?: number;
  height?: number;
};

export interface BasicProps<T> {
  progress: SharedValue<number>;
  horizontal?: boolean;
  data: Array<T>;
  renderItem?: (item: T, index: number) => React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  dotStyle?: DotStyle;
  activeDotStyle?: DotStyle;
  size?: number;
  onPress?: (index: number) => void;
}

export const PaginationItem: React.FC<
  PropsWithChildren<{
    index: number;
    count: number;
    size?: number;
    animValue: SharedValue<number>;
    horizontal?: boolean;
    dotStyle?: DotStyle;
    activeDotStyle?: DotStyle;
    onPress: () => void;
  }>
> = props => {
  const {
    animValue,
    dotStyle,
    activeDotStyle,
    index,
    count,
    size,
    horizontal,
    children,
    onPress,
  } = props;

  const defaultDotSize = 10;

  const sizes = {
    width: size || dotStyle?.width || defaultDotSize,
    height: size || dotStyle?.height || defaultDotSize,
  };

  /**
   * TODO: Keep this for future implementation
   * Used to change the size of the active dot with animation
   */
  // const animatedSize = {
  //   width: activeDotStyle?.width,
  //   height: activeDotStyle?.height,
  // };

  const width = sizes.width;
  const height = sizes.height;

  const animStyle = useAnimatedStyle(() => {
    const size = horizontal ? height : width;
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-size, 0, size];

    if (index === 0 && animValue?.value > count - 1) {
      inputRange = [count - 1, count, count + 1];
      outputRange = [-size, 0, size];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, count, horizontal]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            width,
            height,
            overflow: 'hidden',
            transform: [
              {
                rotateZ: horizontal ? '90deg' : '0deg',
              },
            ],
          },
          dotStyle,
        ]}>
        <Animated.View
          style={[
            {
              backgroundColor: 'black',
              flex: 1,
            },
            animStyle,
            activeDotStyle,
          ]}>
          {children}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const Basic = <T extends {}>(props: BasicProps<T>) => {
  const {
    activeDotStyle,
    dotStyle,
    progress,
    horizontal = true,
    data,
    size,
    containerStyle,
    renderItem,
    onPress,
  } = props;

  if (
    typeof size === 'string' ||
    typeof dotStyle?.width === 'string' ||
    typeof dotStyle?.height === 'string'
  )
    throw new Error('size/width/height must be a number');

  return (
    <View
      style={[
        {
          justifyContent: 'space-between',
          alignSelf: 'center',
        },
        horizontal
          ? {
              flexDirection: 'row',
            }
          : {
              flexDirection: 'column',
            },
        containerStyle,
      ]}>
      {data.map((item, index) => {
        return (
          <PaginationItem
            key={index}
            index={index}
            size={size}
            count={data.length}
            dotStyle={dotStyle}
            animValue={progress}
            horizontal={!horizontal}
            activeDotStyle={activeDotStyle}
            onPress={() => onPress?.(index)}>
            {renderItem?.(item, index)}
          </PaginationItem>
        );
      })}
    </View>
  );
};

export const Pagination = {Basic};
