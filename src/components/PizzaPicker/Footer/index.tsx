import React, {useCallback} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import styles from './styles';

interface FooterProps {
  cost: number;
}

function Footer({cost}: FooterProps) {
  const onPress = useCallback(() => Alert.alert('Хороший выбор :)'), []);
  return (
    <View style={styles.container}>
      <Text>Цена {cost} ₽</Text>
      <Button title="Объединить половинки" onPress={onPress} />
    </View>
  );
}

export default React.memo(Footer);
