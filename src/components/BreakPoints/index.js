// https://github.com/mg901/styled-breakpoints/blob/master/src/utils/index.js
// https://blog.hinablue.me/css-media-query-tips/
// max-，表示這個數字以下（包含）的都適用。
// min-，表示這個數字以上（包含）的都適用。

const withMinMedia = (minWidth) => `@media (min-width: ${minWidth})`;
const withMaxMedia = (maxWidth) => `@media (max-width: ${maxWidth})`;
const withMinAndMaxMedia = (
  minWidth,
  maxWidth,
) => `@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`;

export const down = (breakName) => ({ theme }) => withMaxMedia(theme.breakpoints[breakName]);
export const up = (breakName) => ({ theme }) => withMinMedia(theme.breakpoints[breakName]);
export const between = (minBreakName, maxBreakName) => ({ theme }) => withMinAndMaxMedia(
  theme.breakpoints[minBreakName],
  theme.breakpoints[maxBreakName],
);
export const only = (breakName) => ({ theme }) => withMinAndMaxMedia(
  theme.breakpoints[breakName],
  theme.breakpoints[breakName],
);
