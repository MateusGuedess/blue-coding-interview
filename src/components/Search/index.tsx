import React from "react";
import { Input } from "./style";

interface Props {
  type?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ type, name, value, onChange }: Props) {
  return <Input type={type} name={name} value={value} onChange={onChange} />;
}

export default Search;
