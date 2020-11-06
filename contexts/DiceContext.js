import React, {createContext, useState} from 'react';

export const DiceContext = createContext();

export const DiceProvider = (props) => {
  const buttonNames = [
    {name: 'd100', key: 100},
    {name: 'd20', key: 20},
    {name: 'd12', key: 12},
    {name: 'd10', key: 10},
    {name: 'd8', key: 8},
    {name: 'd6', key: 6},
    {name: 'd4', key: 4},
    {name: 'd3', key: 3},
    {name: 'd2', key: 2},
  ];

  const [state, setState] = useState({
    equationString: '',
    totalResult: 0,
    totalResultString: '_',
    rolled: false,
  });

  const onRollButtonClick = () => {
    setState({
      ...state,
      totalResultString: totalResult.toString(),
      rolled: true,
    });
  };

  const onDiceButtonClick = (diceType) => {
    tryClear();
    
    if (state.equationString === '') {
      equationString += 'd' + diceType;
    } else {
      equationString += '+d' + diceType;
    }
    
    const randomNumber = randomize(diceType);
    setState({
      ...state,
      equationString: (state.equationString === '' ? '' : state.equationString + '+') + 'd'+diceType,
      totalResult: state.totalResult + randomNumber,
    });
  };
  
  const tryClear = () => {
    if (state.rolled)
    setState({
      ...state,
      equationString: '',
      totalResultString: '_',
      totalResult: 0,
      rolled: false,
    });
  };
  
  const randomize = (diceType) =>
    1 + Math.floor(diceType * Math.random());

  return (
    <DiceContext.Provider
      value={{...state, buttonNames, onRollButtonClick, onDiceButtonClick}}>
      {props.children}
    </DiceContext.Provider>
  );
};
