import history from './history';
import auth, { TOKEN_KEY } from './auth';
import getMetaTags from './metaTags';

const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'must be checked';
  }
  return null;
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function toHeaderName(str) {
  return str
    .split(/(?=[A-Z])/)
    .join(' ')
    .toUpperCase();
}

function runFunctionOnceTime(fn, context) {
  let result;
  return () => {
    if (fn) {
      // eslint-disable-next-line prefer-rest-params
      result = fn.apply(context || this, arguments);
      // eslint-disable-next-line no-param-reassign
      fn = null;
    }
    return result;
  };
}

const getFormValues = (formElement, fields) => {
  const sourceData = new FormData(formElement);
  const updatingSurchargeCode = {};
  fields.forEach(field => {
    updatingSurchargeCode[field] = sourceData.get(field);
  });

  return updatingSurchargeCode;
};

export {
  checked,
  history,
  auth,
  onlyUnique,
  TOKEN_KEY,
  toHeaderName,
  getFormValues,
  runFunctionOnceTime,
  getMetaTags,
};
