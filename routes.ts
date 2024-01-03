/**
 * An a array of routes that are accessible to the public
 * There route do not require authentication
 * @type {string[]}
 */
export const publicRoute = ["/"];

/**
 * An a array of routes that are used for authentication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication route
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect after authentication login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
