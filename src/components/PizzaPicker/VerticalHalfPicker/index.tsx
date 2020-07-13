import React, {MutableRefObject, useCallback, useEffect, useRef} from 'react';
import {Image, View, useWindowDimensions} from 'react-native';
import styles from './styles';
import Carousel, {CarouselStatic} from 'react-native-snap-carousel';
import {DataItem} from '../data';
import {randomInteger} from '../../../utils';

export interface VerticalHalfPickerActions {
  shake: () => void | null;
}

interface VerticalHalfPickerProps {
  data: DataItem[];
  width: number;
  side: 'left' | 'right';
  onChangeItem?: (item: DataItem) => void;
  forwardRef?: MutableRefObject<VerticalHalfPickerActions | null>;
}

function VerticalHalfPicker({
  data,
  width,
  side,
  onChangeItem,
  forwardRef,
}: VerticalHalfPickerProps) {
  const {height, width: windowWidth} = useWindowDimensions();
  const translateX = width - width / 2;
  const itemHeight = windowWidth - 100;
  const ref = useRef<CarouselStatic<DataItem>>(null);

  useEffect(() => {
    if (forwardRef) {
      forwardRef.current = {
        shake: () =>
          ref.current &&
          ref.current.snapToItem(randomInteger(0, data.length - 1)),
      };
    }
  }, [data, forwardRef]);

  const renderItem = useCallback(
    (renderData: {item: DataItem; index: number}) => (
      <Image
        style={{
          height: itemHeight,
          width: itemHeight,
          transform: [{translateX}],
        }}
        source={renderData.item.image}
      />
    ),
    [itemHeight, translateX],
  );

  const onItemChange = useCallback(
    (index: number) => onChangeItem && onChangeItem(data[index]),
    [data, onChangeItem],
  );

  return (
    <View
      style={[
        styles.carousel,
        {
          transform: [{rotateY: side === 'right' ? '180deg' : '0deg'}],
        },
      ]}>
      <Carousel
        sliderHeight={height}
        vertical
        // Какая то беда с типами, не было времени разбираться
        // @ts-ignore
        ref={ref}
        inactiveSlideScale={0.5}
        inactiveSlideShift={translateX}
        contentContainerCustomStyle={styles.carouselContainerCustom}
        data={data}
        onSnapToItem={onItemChange}
        sliderWidth={width}
        itemHeight={itemHeight}
        itemWidth={width}
        renderItem={renderItem}
        style={styles.carousel}
      />
    </View>
  );
}

export default React.memo(VerticalHalfPicker);
