import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
const navbarHeight =
  screenHeight - windowHeight;

export default StyleSheet.create({
  separator: {
    width: 4,
  },
  container: {
    flexDirection: 'row',
  },
  pricesContainer: {
    position: 'absolute',
    top: 120,
    width: '100%',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  footerContainer: {
    position: 'absolute',
    bottom: StatusBar.currentHeight || 0,
    width: '100%',
  },
  randomButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 10,
  },
  randomButtonText: {
    fontSize: 15,
  },
});
