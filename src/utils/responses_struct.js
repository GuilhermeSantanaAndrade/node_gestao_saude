export function prepareSuccess200(data) {
  return {
    status: 200,
    message: "OK",
    data: data
  };
}

export function throwError(res, err) {
  const data = {
    status: 500,
    message: err.message || err
  };
  res.status(500).json(data);
}

export function throwRefuse401(res, msg) {
  const data = {
    status: 401,
    message: msg
  };
  res.status(401).json(data);
}
