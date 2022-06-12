import { isBefore, eachDayOfInterval } from 'date-fns';

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

const getNumberOfDays = (start, end) => {
  return eachDayOfInterval({
    start: new Date(start),
    end: new Date(end),
  }).reduce(acc => acc + 1, 0);
};

const getTrainingDays = object => {
  const start = object.start;
  const end = object.end;
  const days = getNumberOfDays(start, end);
  console.log();
  return days;
};

const getTrainingPages = object => {
  const { books } = object;
  const pages = books.reduce(function (acc, item) {
    return acc + item.pages;
  }, 0);
  return pages;
};

const getPlanPages = (stat, tran) => {
  const tranDays = getTrainingDays(tran);
  const tranPages = getTrainingPages(tran);
  const actPages = getActPages(stat);
  const planPages = [];

  for (let i = 0; i < actPages.length; i++) {
    let step = tranPages / tranDays;

    i = step;
    planPages.push(i);
  }

  console.log(tranDays);
  console.log(tranPages);
  console.log(actPages);
  console.log(planPages);
  return planPages;
};

export { getAmountDays, getPlanPages, getActPages };
