import React, { ChangeEvent, FunctionComponent } from 'react';
import Input from '../Input/Input';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
  return (
    <Input
      {...props}
      icon={<SearchIcon></SearchIcon>}
    ></Input>
  );
}

export default SearchInput;
