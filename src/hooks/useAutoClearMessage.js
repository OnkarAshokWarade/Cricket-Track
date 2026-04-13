import { useEffect } from 'react';

const DEFAULT_MESSAGE_TIMEOUT = 15000;

function useAutoClearMessage(message, setMessage, delay = DEFAULT_MESSAGE_TIMEOUT) {
  useEffect(() => {
    if (!message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setMessage('');
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay, message, setMessage]);
}

export default useAutoClearMessage;
