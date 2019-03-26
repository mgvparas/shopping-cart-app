import React from 'react';
import { TextInputProps } from './TextInputProps.props';

const TextInput = ({ name, onChange }: TextInputProps) => {
  return (
    <input type="text" name={name} id={name} onChange={onChange} required/>
  );
};

export default TextInput;