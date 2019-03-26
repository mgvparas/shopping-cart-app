import React from 'react';
import { NumberInputProps } from './NumberInput.props';

const NumberInput = ({ name, onChange }: NumberInputProps) => {
  return (
    <input type="number" name={name} id={name} onChange={onChange} required/>
  );
};

export default NumberInput;