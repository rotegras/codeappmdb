import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, MenuItem } from './Header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/theme">Theme</MenuItem>
    </HeaderWrapper>
  );
}
