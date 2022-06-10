const getDays = array => {
  const data = array.map(item => item.date.slice(0, -14));
  const uniqueSet = new Set(data);
  const uniqArray = [...uniqueSet];
  return uniqArray;
};

export { getDays };
