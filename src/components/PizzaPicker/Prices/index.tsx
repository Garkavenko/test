import React from 'react';
import {View, Text} from 'react-native';
import {DataItem} from '../data';
import styles from './styles';

interface PricesProps {
  leftItem: DataItem;
  rightItem: DataItem;
}

function renderBlock(item: DataItem, side: 'left' | 'right') {
  return (
    <View style={styles.block}>
      <Text style={[styles.title, side === 'right' && styles.rightText]}>
        {item.title}
      </Text>
      <Text style={[styles.cost, side === 'right' && styles.rightText]}>
        {item.cost} ₽
      </Text>
    </View>
  );
}

function Prices({leftItem, rightItem}: PricesProps) {
  return (
    <View style={styles.container}>
      {leftItem.id === rightItem.id ? (
        <View style={styles.block}>
          <Text style={[styles.title, styles.centeredText]}>
            {leftItem.title}
          </Text>
        </View>
      ) : (
        <>
          {renderBlock(leftItem, 'left')}
          {renderBlock(rightItem, 'right')}
        </>
      )}
    </View>
  );
}

export default React.memo(Prices);
