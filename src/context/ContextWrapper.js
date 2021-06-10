import React from 'react';
import { Provider as UserProvider } from './auth/auth.context';
import { Provider as LocaleProvider } from './locale/locale.context';

export const ContextWrapper = ({ children }) => {
  return (
    <LocaleProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </LocaleProvider>
  )
}