import React, { ChangeEvent, FunctionComponent } from 'react';
import Input from '../Input/Input';

export interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
  return (
    <Input
      {...props}
      icon="search"
      iconViewbox="0 0 16 16"
      iconSize="16"
    ></Input>
  );
}

export default SearchInput;
