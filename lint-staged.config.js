/**
 * @author Aniket Kolekar
 * @email aniketkolekar47@gmail.com
 * @create date 2021-07-16 16:41:00
 * @modify date 2021-07-16 16:42:02
 * @desc The config file for the lint-staged module.
 */

module.exports = {
  '*.(js|jsx)': ['npm run prettify', 'npm run lint'],
  '*.(html|css|scss|json)': ['npm run prettify'],
};
