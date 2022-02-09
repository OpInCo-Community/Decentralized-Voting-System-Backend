// Add various api Response calls along with the status code
const successResponse = function (res, msg) {
  const data = {
    status: 1,
    message: msg,
  };
  return res.status(200).json(data);
};

// eg successResponseWithData, ErrorResponse, notFoundResponse, validationErrorWithData, unauthorizedResponse