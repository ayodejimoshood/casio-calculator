import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Svg, ClipPath, Rect } from 'react-native-svg';

const KeypadAmount = () => {

  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberPress = (value) => {
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
  };

  const handleOperationPress = (value) => {
    if (value === 'C') {
      setDisplayValue('0');
      setPreviousValue(null);
      setOperation(null);
      return;
    }

    if (value === '=') {
      if (!previousValue || !operation) {
        return;
      }

      let result;
      switch (operation) {
        case '+':
          result = parseFloat(previousValue) + parseFloat(displayValue);
          break;
        case '-':
          result = parseFloat(previousValue) - parseFloat(displayValue);
          break;
        case '*':
          result = parseFloat(previousValue) * parseFloat(displayValue);
          break;
        case '÷':
          result = parseFloat(previousValue) / parseFloat(displayValue);
          break;
        case '%':
          result = parseFloat(previousValue) % parseFloat(displayValue);
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperation(null);
      return;
    }

    setPreviousValue(displayValue);
    setDisplayValue('0');
    setOperation(value);
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 50, top: 40}}>
        <View style={{ flex: 1, }}>
          <Image
            source={require('../../assets/casio-logo.png')}
            style={{ width: 107, height: 47 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
          <Image
            source={require('../../assets/window-icon.png')}
            style={{ width: 110, height: 23, position: 'absolute', right: 0 }}
          />
        </View>
      </View>
      <View style={styles.screenDisplay}>
      {/* <Svg style={styles.svg}>
        <ClipPath id="clip">
          <Rect x="0" y="0" width="100" height="100" rx="20" />
          <Rect x="0" y="20" width="100" height="80" />
        </ClipPath>
      </Svg> */}
        
        <Text style={styles.display}>{displayValue}</Text>
        <View style={{backgroundColor: '#B9D9F7'}}><Text></Text></View>
        <View style={{backgroundColor: '#F7CD8A'}}><Text></Text></View>
        
      </View>
      
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('C')}>
              <Text style={styles.buttonBlueText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('+/-')}>
            <Text style={styles.buttonBlueText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('%')}>
            <Text style={styles.buttonBlueText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('÷')}>
            <Text style={styles.buttonOrangeText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('*')}>
            <Text style={styles.buttonOrangeText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('-')}>
            <Text style={styles.buttonOrangeText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('+')}>
            <Text style={styles.buttonOrangeText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonZero} onPress={() => handleNumberPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperationPress('=')}>
            <Text style={styles.buttonOrangeText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 20,
    // top: 5
  },
  screenDisplay: {
    backgroundColor: '#ffffff', 
    borderColor: '#000000', 
    borderWidth: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    marginBottom: 20,
    background: '#522d5b',
    // position: 'relative',
    // overflow: 'hidden',
    transform: [{ rotate: '0deg' }],
    // width: 100,
    // height: 100,
    backgroundColor: '#fff',
    // clipPath: 'url(#clip)',
    borderWidth: 2,
    borderColor: '#333',
    clipPath: 'polygon(35% 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
  },
  svg: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
  },
  display: {
    fontSize: 60,
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: 80,
    marginRight: 10,
    fontFamily: 'Bungee_400Regular',
    // marginBottom: 50,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    position: 'relative',
    width: '100%',
    bottom: 0
  },
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    padding: 20,
    borderRadius: 10,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonZero: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    padding: 20,
    borderRadius: 10,
    width: '49%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Bungee_400Regular',
  },
  buttonBlueText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#78B3F0',
    textAlign: 'center',
    fontFamily: 'Bungee_400Regular',
    // fontFamily: '<FontName>, sans-serif',
  },
  buttonOrangeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F19D38',
    textAlign: 'center',
    fontFamily: 'Bungee_400Regular',
  },
  text: {
    fontFamily: 'Bungee_400Regular',
  },
});

export default KeypadAmount;