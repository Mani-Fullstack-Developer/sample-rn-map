import React, {  Component  } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('sk.eyJ1IjoibWFuaWthbnRhMTIzNDUiLCJhIjoiY20xeG0zZmJlMTAwaDJrczU1dXl2Y2FtNCJ9.7OowJgcyxIqiWAgIhaF4Nw');


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 3100,
    width: 3100,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}
