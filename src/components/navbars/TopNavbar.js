import React, { useContext, useRef } from 'react';
import { Context as AuthContext} from '../../context/auth/auth.context';
import { useAnimationClassHook } from '../../hooks/animations/useAnimationClass.hook';
import { useClickOutsideHook } from '../../hooks/animations/useClickOutside.hook';

export const TopNavbar = () => {
  const { state: { user: { account } }, logout, login } = useContext(AuthContext)
  const { animationClass, handleToggle } = useAnimationClassHook({
    initialClass: 'u-hide',
    openClass: 'scale-up-tl',
    closeClass: 'scale-down-tl'
  })
  const ref = useRef();
  useClickOutsideHook(ref, () => handleToggle({ resetClass: 'u-hide'}))

  const handleLogout = () => {
    logout(account.homeAccountId)
  }


  const LoggedIn = () =>  (
    <div className="top-navbar--logged-in" onClick={handleToggle}>
      <span>{account.name}</span>
        <ul className={`top-navbar--logged-in__options ${animationClass}`} ref={ref}>
          <li className="top-navbar--logged-in__options__item" onClick={handleLogout}>Logout</li>
        </ul>
    </div>
  )

  return (
    <div className="top-navbar">
      { account?.name ?
        <LoggedIn/>
        :
        <span onClick={login}>Login</span>
      }
    </div>
  )
}