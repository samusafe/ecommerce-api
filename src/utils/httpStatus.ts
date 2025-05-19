export const HttpStatus = {
  // Success
  OK: 200, // OK
  CREATED: 201, // Created
  ACCEPTED: 202, // Accepted
  NO_CONTENT: 204, // No Content

  // Redirection
  MOVED_PERMANENTLY: 301, // Moved Permanently
  FOUND: 302, // Found
  SEE_OTHER: 303, // See Other
  NOT_MODIFIED: 304, // Not Modified
  TEMPORARY_REDIRECT: 307, // Temporary Redirect
  PERMANENT_REDIRECT: 308, // Permanent Redirect

  // Client Errors
  BAD_REQUEST: 400, // Bad Request
  UNAUTHORIZED: 401, // Unauthorized
  PAYMENT_REQUIRED: 402, // Payment Required
  FORBIDDEN: 403, // Forbidden
  NOT_FOUND: 404, // Not Found
  METHOD_NOT_ALLOWED: 405, // Method Not Allowed
  NOT_ACCEPTABLE: 406, // Not Acceptable
  PROXY_AUTHENTICATION_REQUIRED: 407, // Proxy Authentication Required
  REQUEST_TIMEOUT: 408, // Request Timeout
  CONFLICT: 409, // Conflict
  GONE: 410, // Gone
  LENGTH_REQUIRED: 411, // Length Required
  PRECONDITION_FAILED: 412, // Precondition Failed
  PAYLOAD_TOO_LARGE: 413, // Payload Too Large
  URI_TOO_LONG: 414, // URI Too Long
  UNSUPPORTED_MEDIA_TYPE: 415, // Unsupported Media Type
  RANGE_NOT_SATISFIABLE: 416, // Range Not Satisfiable
  EXPECTATION_FAILED: 417, // Expectation Failed
  IM_A_TEAPOT: 418, // Status code unofficial, more commonly used for Easter eggs
  MISDIRECTED_REQUEST: 421, // Misdirected Request
  UNPROCESSABLE_ENTITY: 422, // Unprocessable Entity
  LOCKED: 423, // Locked
  FAILED_DEPENDENCY: 424, // Failed Dependency
  TOO_EARLY: 425, // Too Early
  UPGRADE_REQUIRED: 426, // Upgrade Required
  PRECONDITION_REQUIRED: 428, // Precondition Required
  TOO_MANY_REQUESTS: 429, // Too Many Requests
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // Request Header Fields Too Large
  UNAVAILABLE_FOR_LEGAL_REASONS: 451, // Unavailable for Legal Reasons

  // Server Errors
  INTERNAL_SERVER_ERROR: 500, // Internal Server Error
  NOT_IMPLEMENTED: 501, // Not Implemented
  BAD_GATEWAY: 502, // Bad Gateway
  SERVICE_UNAVAILABLE: 503, // Service Unavailable
  GATEWAY_TIMEOUT: 504, // Gateway Timeout
  HTTP_VERSION_NOT_SUPPORTED: 505, // HTTP Version Not Supported
  VARIANT_ALSO_NEGOTIATES: 506, // Variant Also Negotiates
  INSUFFICIENT_STORAGE: 507, // Insufficient Storage
  LOOP_DETECTED: 508, // Loop Detected
  NOT_EXTENDED: 510, // Not Extended
  NETWORK_AUTHENTICATION_REQUIRED: 511, // Network Authentication Required
};
