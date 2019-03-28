import React from 'react';
import { SelectInputProps } from './SelectInput.props';
import { SelectInputOption } from '../types';

const SelectInput = (props: SelectInputProps) => {
  return (
    <select name={props.name} onChange={props.onChange}>
    <option value="">Select One</option>
      {props.options.map((option: SelectInputOption) => {
        return (
          <option key={option.value} value={option.value}>{option.label}</option>
        );
      })}
    </select>
  );
};

export default SelectInput;