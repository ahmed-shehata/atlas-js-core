const mergePlainOptsWithDefault = (opts = {}, defaultPlainOpts = {}, pathToPlain = null) => {
  if (!opts || !defaultPlainOpts) {
    throw new Error('options and default options values are mandatory');
  }

  const plainOpts = pathToPlain ? opts[pathToPlain] : opts;

  if (!plainOpts) {
    return defaultPlainOpts;
  }

  return Object.assign({}, defaultPlainOpts, plainOpts);
};

export {
  mergePlainOptsWithDefault
};
