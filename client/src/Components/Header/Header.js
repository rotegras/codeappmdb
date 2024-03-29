import React from 'react';
import { HeaderWrapper, MenuItem } from './Header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/search/_">Search</MenuItem>
      <MenuItem to="/add">Add</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/theme">Theme</MenuItem>
      <MenuItem to="/login">Log in</MenuItem>
      <MenuItem to="/signup">Sign in</MenuItem>
    </HeaderWrapper>
  );
}
