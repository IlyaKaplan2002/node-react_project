const useOnEscClose = close => {
  const onEscape = e => {
    if (e.code !== 'Escape') return;
    close();
  };
  const addEvent = () => {
    window.addEventListener('keydown', onEscape);
  };

  const removeEvent = () => {
    window.removeEventListener('keydown', onEscape);
  };

  return [addEvent, removeEvent];
};

export default useOnEscClose;
