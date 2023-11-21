// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

global.fetch = require('node-fetch')

/**
 * @see https://playwright.dev/docs/test-configuration
