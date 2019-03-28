import { SelectInputOption } from '../types';

export type SelectInputProps = {
  name: string,
  onChange: (e: any) => void, // TODO: identify type for Event
  options: SelectInputOption[]
};