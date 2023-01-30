import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {isIos} from './helper';

export interface useKeyboardHookProps {
  useWillShow: boolean;
  useWillHide: boolean;
}

const defaultProps = {
  useWillShow: false,
  useWillHide: false,
};

const useKeyboardHook = ({
  useWillShow,
  useWillHide,
}: useKeyboardHookProps & typeof defaultProps) => {
  const [visible, setVisible] = useState(false);
  const showEvent = isIos()
    ? useWillShow
      ? 'keyboardWillShow'
      : 'keyboardDidShow'
    : 'keyboardDidShow';
  const hideEvent = isIos()
    ? useWillHide
      ? 'keyboardWillHide'
      : 'keyboardDidHide'
    : 'keyboardDidHide';

  const dismiss = () => {
    Keyboard.dismiss();
    setVisible(false);
  };

  useEffect(() => {
    const onKeyboardShow = () => {
      setVisible(true);
    };

    const onKeyboardHide = () => {
      setVisible(false);
    };

    const showSubscription = Keyboard.addListener(showEvent, onKeyboardShow);
    const hideSubscription = Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useWillShow, useWillHide]);

  return [visible, dismiss] as const;
};

export {useKeyboardHook};
useKeyboardHook.defaultProps = defaultProps;
