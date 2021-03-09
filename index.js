import React from 'react';
import {
  AppRegistry, asset, Image,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export class louvre extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    );
  }
};

export class infoPanel extends React.Component {
  state = {
    img: {
      name: 'info.png',
      width: 100,
      height: 100
    }
  }
  render() {
    return (
        <View style={styles.infoPanel}>
          <Image source={asset(`${this.state.img.name}`)} style={{width: this.state.img.width, height: this.state.img.height}} />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoPanel: {
    width: 100,
    height: 100,
    flexDirection: 'column',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('louvre', () => louvre);
AppRegistry.registerComponent('infoPanel', () => infoPanel);
