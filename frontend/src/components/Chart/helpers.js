import { isBefore } from 'date-fns';
import { array } from 'yup';

const getAmountDays = array => {
  const data = array.map(item => item.date.slice(0, -14));
  const uniqueSet = new Set(data);
  const uniqArray = [...uniqueSet];
  return uniqArray;
};

const getActPages = array => {
  let result = [];
  array.forEach(item => {
    const { date, pages } = item;
    const same = result.find(uniq => uniq.date === date);
    if (same) {
      const dayPages = same.pages + pages;
      result = result.map(x => {
        if (x.date === same.date) return { ...x, pages: dayPages };
        return { ...x };
      });
      return;
    }
    result.push(item);
  });
  return [...result]
    .sort((a, b) => {
      if (isBefore(new Date(a.date), new Date(b.date))) return -1;
      return 1;
    })
    .map(result => result.pages);
};

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}

const getPlanDays = object => {
  const amounDays = getNumberOfDays(object.start, object.end);
  return amounDays;
};

export { getAmountDays, getActPages, getPlanDays };
