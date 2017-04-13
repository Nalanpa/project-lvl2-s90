const getJson = diffs =>
  ({ diffs: diffs
      .map(({ action, key, before, after, children }) =>
      ((children) ? { key, action, childern: getJson(children) } : { key, action, before, after }),
    ),
  });

export default diffs => JSON.stringify(getJson(diffs), null, 2);
