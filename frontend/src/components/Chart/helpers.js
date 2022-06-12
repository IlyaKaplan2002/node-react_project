import { isBefore } from 'date-fns';

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
  const date1 = new Date(start);
  const date2 = new Date(end);

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};

function formatDate(s) {
  const a = s.slice(0, -14).split('-');
  return [a[0], a[2], a[1]].join('-');
}

const getTrainingDays = object => {
  const start = formatDate(object.start);
  const end = formatDate(object.end);
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
  const actPage = getActPages(stat);
  const planPages = [];
  planPages[0] = tranPages / tranDays;

  console.log(tranDays);
  console.log(tranPages);
  console.log(actPage);
  console.log(planPages);
  return planPages;
};

export { getAmountDays, getPlanPages, getActPages };
