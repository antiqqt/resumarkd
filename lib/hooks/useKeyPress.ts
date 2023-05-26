import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

interface Props {
  keyCode: string;
  callback: (e: globalThis.KeyboardEvent) => void;
  modifiers: {
    shift?: boolean;
    ctrl?: boolean;
    alt?: boolean;
    meta?: boolean;
  };
}

const useKeyPress = ({
  keyCode,
  callback,
  modifiers = {
    shift: false,
    ctrl: false,
    alt: false,
    meta: false,
  },
}: Props) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  const handleKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (modifiers.shift && !event.shiftKey) return;
      if (modifiers.ctrl && !event.ctrlKey) return;
      if (modifiers.alt && !event.altKey) return;
      if (modifiers.meta && !event.metaKey) return;
      if (event.code !== keyCode) return;
      callbackRef.current(event);
    },
    [keyCode, modifiers.alt, modifiers.ctrl, modifiers.meta, modifiers.shift]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export { useKeyPress };
