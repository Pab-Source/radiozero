import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Player = () => {
  const [isPlay, setIsPlay] = useState(true);

  const [volumen, setVolumen] = useState(0);

  const handleIncrement = () => {
    if (volumen === 100) return;
    setVolumen(volumen + 10);
  };

  const handleDecrement = () => {
    if (volumen === 0) return;
    setVolumen(volumen - 10);
  };

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={{
            width: 327,
            height: '60%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          source={require('../../../assets/caratula.jpeg')}
        />
        <Text style={styles.textArtists}>Wake me up</Text>
        <Text style={styles.textTitle}>Avicci</Text>
        <View style={styles.wrapperControlVol}>
          <TouchableOpacity onPress={handleDecrement} opacity={1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/volumen-mute.png')}
            />
          </TouchableOpacity>
          <View style={styles.vol}>
            <View style={{height: 3, backgroundColor: '#707070'}}></View>

            <View
              style={{
                position: 'absolute',
                width: `${volumen}%`,
                height: 5,
                backgroundColor: '#060F2F',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  borderRadius: 10,
                  height: 10,
                  width: 10,
                  justifyContent: 'center',
                  backgroundColor: '#060F2F',
                }}
              />
            </View>
          </View>

          <TouchableOpacity onPress={handleIncrement} opacity={1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/volumen.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        opacity={1}
        style={styles.controlPlay}
        onPress={handlePlay}>
        {isPlay ? (
          <Image
            style={{height: 95, width: 95}}
            source={require('../../../assets/pause.png')}
          />
        ) : (
          <Image
            style={{height: 95, width: 95}}
            source={require('../../../assets/play.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 327,
    height: 500,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    height: 446,
    width: 327,
    borderColor: '#FFFDFD',
    borderRadius: 16,
    alignItems: 'center',
  },
  controlPlay: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
  },
  wrapperControlVol: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArtists: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    color: '#707070',
    alignSelf: 'flex-start',
    marginLeft: 18,
  },
  textTitle: {
    marginLeft: 18,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontFamily: 'HelveticaNeue',
    color: '#707070',
  },
  vol: {
    width: 161,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default Player;
