import React, {createContext, useState} from 'react';

export const DiceContext = createContext();

export const DiceProvider = (props) => {
  const buttonNames = [
    {name: 'd100', diceType: 100},
    {name: 'd20', diceType: 20},
    {name: 'd12', diceType: 12},
    {name: 'd10', diceType: 10},
    {name: 'd8', diceType: 8},
    {name: 'd6', diceType: 6},
    {name: 'd4', diceType: 4},
    {name: 'd3', diceType: 3},
    {name: 'd2', diceType: 2},
  ];

  const initialState = {
    equationString: '',
    totalResult: 0,
    totalResultString: '_',
    rolled: false,
  };
  const [state, setState] = useState(initialState);

  const onRollButtonClick = () => {
    const tempState = state.rolled ? initialState : state; //tryClear()

    setState({
      ...tempState,
      totalResultString: state.rolled
        ? '_'
        : '= ' + tempState.totalResult.toString(),
      rolled: true,
    });
  };

  const onDiceButtonClick = (diceType) => {
    const randomNumber = randomize(diceType);

    const tempState = state.rolled ? initialState : state; //tryClear()
    setState({
      ...tempState,
      equationString:
        (tempState.equationString === ''
          ? ''
          : tempState.equationString + '+') + `d${diceType}`,
      totalResult: tempState.totalResult + randomNumber,
    });
  };

  const randomize = (diceType) => 1 + Math.floor(diceType * Math.random());

  return (
    <DiceContext.Provider
      value={{...state, buttonNames, onRollButtonClick, onDiceButtonClick}}>
      {props.children}
    </DiceContext.Provider>
  );
};
