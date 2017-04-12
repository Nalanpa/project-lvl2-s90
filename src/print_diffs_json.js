const getJson = diffs =>
  ({ diffs: diffs
      .map(({ status, key, before, after, object }) =>
      ((object) ? { key, status, object: getJson(object) } : { key, status, before, after }),
    ),
  });

export default diffs => JSON.stringify(getJson(diffs), null, 2);
