import React from 'react';
import { HeaderWrapper, MenuItem } from './Header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuItem to="/">Search</MenuItem>
      <MenuItem to="/add">Add</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/theme">Theme</MenuItem>
    </HeaderWrapper>
  );
}
