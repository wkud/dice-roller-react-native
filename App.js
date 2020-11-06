import React from 'react';
import MainScreen from './components/MainScreen';
import {DiceProvider} from './contexts/DiceContext';

const App = () => {
  return (
    <DiceProvider>
      <MainScreen/>
    </DiceProvider>
      
  );
};



export default App;
