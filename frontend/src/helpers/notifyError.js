import { Notify } from 'notiflix';

const notifyError = error => {
  if (typeof error === 'string') Notify.failure(error);
  else {
    const message = error?.response?.data?.message;
    if (!message) {
      return;
    }
    Notify.failure(message);
  }
};

export default notifyError;
