import { ArgumentsHost, HttpException } from "@nestjs/common";

export type ErrorInterceptorModuleConfig = {

  /**
   * A map of errors that should return a specific error status code.
   */

  customErrorToStatusCodeMap?: Map<Error, number>;

  /**
   * A flag that indicates whether application errors should be logged.
   */
  shouldLogErrors?: boolean;

  /**
 * A flag that indicates whether failures should be logged.
 */
  shouldLogFailures?: boolean;

  /**
   * A function that is called when an unauthorized exception is thrown.
   * 
   * @param exception Defines the base Nest HTTP exception, which is handled by the default Exceptions Handler.
   * @param host Provides methods for retrieving the arguments being passed to a handler. Allows choosing the appropriate execution context (e.g., Http, RPC, or WebSockets) to retrieve the arguments from.
   * @returns Promise<void> | void
   */
  onUnauthorized?: (exception: HttpException, host: ArgumentsHost) => Promise<void> | void;
};