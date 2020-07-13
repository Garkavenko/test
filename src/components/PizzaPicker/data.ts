import Pepperoni from '../../assets/pepperoni.png';
import FourCheese from '../../assets/fourCheese.png';
import {ImageSourcePropType} from 'react-native';

export interface DataItem {
  id: number;
  cost: number;
  title: string;
  image: ImageSourcePropType;
}

export default [
  {
    id: 1,
    cost: 400,
    title: 'Гавайская',
    image: FourCheese,
  },
  {
    id: 2,
    cost: 410,
    title: 'Пепперони',
    image: Pepperoni,
  },
  {
    id: 3,
    cost: 420,
    title: 'Четыре сыра',
    image: FourCheese,
  },
  {
    id: 4,
    cost: 430,
    title: 'С ананасами',
    image: Pepperoni,
  },
  {
    id: 5,
    cost: 440,
    title: 'Dark side',
    image: FourCheese,
  },
  {
    id: 6,
    cost: 450,
    title: 'Light side',
    image: Pepperoni,
  },
];
