/**
 * @typedef TaskType
 *
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} dueDate
 * @property {string} attachments
 * @property {TeacherType} teacher
 *
 */

/**
 * @typedef TeacherType
 *
 * @property {string} name
 * @property {string} profileUrl
 */

/**
 * @callback AuthenticationStateSetupCallback
 *
 * @property {string} token
 * @returns {void}
 */

/**
 * @typedef ActionType
 *
 * @property {string} type
 * @property {any} payload
 */

/**
 * @callback DispatcherCallback
 *
 * @param {ActionType} action
 * @returns {any | void}
 */
