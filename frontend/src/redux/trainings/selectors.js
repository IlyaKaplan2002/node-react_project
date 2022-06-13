const getTraining = state => state.trainings.training;
const getIsCurrent = state => state.trainings.isCurrent;
const getSelectedBooks = state =>
  state.trainings?.selectedTraining?.books || [];
const getSelectedTraining = state => state.trainings.selectedTraining;

const selectors = {
  getTraining,
  getIsCurrent,
  getSelectedBooks,
  getSelectedTraining,
};

export default selectors;
