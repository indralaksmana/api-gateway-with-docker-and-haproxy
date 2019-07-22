exports.HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  REQUEST_TOO_LARGE: 413,
  SERVER_ERROR: 500,
  BAD_REQUEST: 400,
}
exports.HTTP_MESSAGE = {
  NOT_FOUND: 'message.not_found',
  UNAUTHORIZED: 'message.unauthorized',
  INVALID_LOGIN: 'message.invalid_login',
  USER_NOT_FOUND: 'message.user_not_found',
  SUSPENDED: 'message.account_suspended',
  NOT_VERIFIED: 'message.account_unverified',
  SERVER_ERROR: 'message.server_error',
  REQUEST_TOO_LARGE: 'message.request_too_large',
  BAD_REQUEST: 'message.bad_request',
  VERIFIED_TWICE: 'message.verified_twice',
  FILE_TYPE: 'message.bad_file_type',
  PAYMENT_IS_LESSER: 'message.payment_is_lesser_than_total_invoice',
}
