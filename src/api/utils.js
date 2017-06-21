/**
 * A utility internal function which merges plain options with defaults, e.g.
 * opts = { reco_id: '123 '}, defaults = { reco_id: '', tracking_string: ''} should be resulted in
 * { reco_id: '123 ', tracking_string: ''}.
 * If opts or defaults are null or undefined the Error will be thown.
 * Sometimes there are nested options we want to merge. In that case 'pathToPlain' should be provided
 * referring to the part of options we want to merge with defaults.
 * @param {Object} opts - options to merge
 * @param {Object} defaultPlainOpts -
 * @param {String} pathToPlain - path to get plain options
 * @return {Object} merged options
 * @ignore
 */
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
