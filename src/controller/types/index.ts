/**
 * Basic JSON Response for Controllers
 */

export type BasicResponse = {
  message: string;
};

/**
 * Goodbye JSON response for Controllers
 */
export type GoodbyeResponse = {
  message: string;
  Date: string;
};
/**
 * Error JSON Response for Controllers
 */

export type ErrorResponse = {
  error: string;
  message: string;
};
