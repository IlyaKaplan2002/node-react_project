import { isBefore, eachDayOfInterval, isSameDay } from 'date-fns';
import { cardTypes } from 'constants';

export const getLabels = (training, isCurrent) => {
  if (training && isCurrent) {
    return eachDayOfInterval({
      start: new Date(training.start),
      end: new Date(training.end),
    });
  }
  return [];
};

export const getDaysAmount = (training, isCurrent) => {
  if (training && isCurrent)
    return getLabels(training, isCurrent).reduce(acc => acc + 1, 0);
  else return 0;
};

export const getLatestDaysAmount = (training, isCurrent) => {
  if (training && isCurrent) {
    return (
      eachDayOfInterval({
        start: new Date(training.start),
        end: new Date(),
      }).reduce(acc => acc + 1, 0) - 1
    );
  }
  return 0;
};

export const getAllPages = books =>
  books.reduce((acc, book) => (acc += book.pages), 0);

export const getUniqStats = stats => {
  let result = [];

  stats.forEach(stat => {
    const same = result.find(item =>
      isSameDay(new Date(item.date), new Date(stat.date))
    );
    if (same) {
      const pages = same.pages + stat.pages;
      result = result.map(item => {
        if (item.date === same.date) return { ...item, pages };
        return { ...item };
      });
      return;
    }
    result.push(stat);
  });

  return [...result].sort((a, b) => {
    if (isBefore(new Date(a.date), new Date(b.date))) return -1;
    return 1;
  });
};

export const getAllDatesStat = (training, isCurrent, stats) => {
  const uniq = getUniqStats(stats);
  const dates = getLabels(training, isCurrent);
  const allDatesStat = dates.map(date => {
    const stat = uniq.find(item => {
      return isSameDay(new Date(item.date), new Date(date));
    });

    if (!stat) return { date, pages: 0 };
    return { ...stat, pages: stat.pages };
  });

  return allDatesStat;
};

export const getActData = (training, isCurrent, stats) => {
  if (training && isCurrent) {
    const allDatesStat = getAllDatesStat(training, isCurrent, stats);
    const lastDaysStat = allDatesStat.slice(
      0,
      getLatestDaysAmount(training, isCurrent) + 1
    );

    return lastDaysStat.map(item => {
      return item.pages;
    });
  }

  return [1];
};

export const getPagesTodayRead = (training, isCurrent, stats) => {
  if (isCurrent) {
    const { books } = training;
    const notRead = books.find(book => book.status !== cardTypes.alreadyRead);
    if (!notRead) return 0;
    const uniq = getUniqStats(stats);

    const today = uniq.find(stat => isSameDay(new Date(), new Date(stat.date)));
    if (today) return today.pages;
  }
  return 0;
};

export const getSumOfLatestDays = (number, allDaysStat) => {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (!isSameDay(new Date(), new Date(allDaysStat[i].date)))
      result += allDaysStat[i].pages;
  }
  return result;
};

export const getPlannedData = (stats, training, isCurrent) => {
  if (!training || !isCurrent || !training?.books) {
    return [0];
  }

  const sumOfPages = getAllPages(training.books);
  const daysAmount = getDaysAmount(training, isCurrent);
  const allDatesStat = getAllDatesStat(training, isCurrent, stats);
  const latestDays = getLatestDaysAmount(training, isCurrent);

  const data = [];

  for (let i = 0; i < daysAmount; i++) {
    if (i === 0) {
      const result = sumOfPages / daysAmount;
      data.push(Math.round(result));
      continue;
    }
    if (i >= latestDays) {
      const result =
        (sumOfPages - getSumOfLatestDays(allDatesStat.length, allDatesStat)) /
        (daysAmount - latestDays);
      data.push(Math.round(result));
      continue;
    }
    const result =
      (sumOfPages - getSumOfLatestDays(i, allDatesStat)) / (daysAmount - i);

    data.push(Math.round(result));
  }

  return data;
};
