import React, {RefObject, useCallback, useRef, useState} from 'react';
import VerticalHalfPicker, {
  VerticalHalfPickerActions,
} from './VerticalHalfPicker';
import data, {DataItem} from './data';
import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Prices from './Prices';
import styles from './styles';
import Footer from './Footer';

const SEPARATOR_WIDTH = 4;

function usePickerState(): [
  DataItem,
  (item: DataItem) => void,
  RefObject<VerticalHalfPickerActions>,
] {
  const [item, setItem] = useState<DataItem>(data[0]);
  const ref = useRef<VerticalHalfPickerActions>(null);
  const onItemChange = useCallback((changedItem: DataItem) => {
    setItem(changedItem);
  }, []);

  return [item, onItemChange, ref];
}

function PizzaPicker() {
  const {width} = useWindowDimensions();

  const pickerWidth = (width - SEPARATOR_WIDTH) / 2;
  const [pickedLeft, setPickedLeft, leftRef] = usePickerState();
  const [pickedRight, setPickedRight, rightRef] = usePickerState();
  const shakePicker = useCallback(() => {
    leftRef.current && leftRef.current.shake();
    rightRef.current && rightRef.current.shake();
  }, [leftRef, rightRef]);

  return (
    <View>
      <View style={styles.container}>
        <VerticalHalfPicker
          onChangeItem={setPickedLeft}
          width={pickerWidth}
          data={data}
          forwardRef={leftRef}
          side="left"
        />
        <View style={{width: SEPARATOR_WIDTH}} />
        <VerticalHalfPicker
          width={pickerWidth}
          data={data}
          side="right"
          forwardRef={rightRef}
          onChangeItem={setPickedRight}
        />
      </View>
      <View style={styles.pricesContainer}>
        <Prices leftItem={pickedLeft} rightItem={pickedRight} />
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.randomButton} onPress={shakePicker}>
          <Text style={styles.randomButtonText}>R</Text>
        </TouchableOpacity>
        <Footer cost={pickedLeft.cost + pickedRight.cost} />
      </View>
    </View>
  );
}

export default React.memo(PizzaPicker);
