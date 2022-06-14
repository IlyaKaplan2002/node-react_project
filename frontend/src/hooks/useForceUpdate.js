import { useState } from 'react';

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue(prev => prev + value);
};

export default useForceUpdate;
