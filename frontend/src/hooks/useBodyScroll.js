const useBodyScroll = () => {
  const enable = () => (document.body.style.overflow = 'hidden');
  const disable = () => (document.body.style.overflow = 'visible');

  return [enable, disable];
};

export default useBodyScroll;
