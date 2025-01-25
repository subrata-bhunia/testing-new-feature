import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  TCarouselProps,
} from 'react-native-reanimated-carousel';
import {Pagination} from './pagination.component';
import {COLORS, hp, wp} from '../themes';
type SnapCarouselProps = {
  pagination?: boolean;
} & TCarouselProps<any>;

function SnapCarousel(props: SnapCarouselProps) {
  const progress = useSharedValue<number>(0);
  return (
    <View>
      <View
        style={{
          margin: wp(5),
          height: props?.height,
        }}>
        <Carousel onProgressChange={(a, b) => progress.set(b)} {...props} />
      </View>
      {props.pagination && (
        <Pagination.Basic
          progress={progress}
          data={props.data}
          dotStyle={{
            backgroundColor: '#686868',
            borderRadius: 10,
          }}
          activeDotStyle={{
            backgroundColor: COLORS.primary,
            borderRadius: wp(5),
            overflow: 'hidden',
          }}
          containerStyle={{
            gap: wp(2),
            marginBottom: 10,
            // position: 'absolute',
            top: 0,
          }}
          // onPress={onPressPagination}
        />
      )}
    </View>
  );
}

export default SnapCarousel;
