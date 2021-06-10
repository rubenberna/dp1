import { useState } from 'react';

export const useAnimationClassHook = ({initialClass, openClass, closeClass}) => {
  const [animationClass, setAnimationClass] = useState(initialClass)

  const handleToggle = ({resetClass}) => {
    let newClass;
    if (resetClass) {
      newClass = resetClass;
    } else {
      newClass = animationClass === initialClass || animationClass === closeClass? openClass : closeClass
    }
    setAnimationClass(newClass)
  }

  return {
    animationClass,
    handleToggle
  }
}