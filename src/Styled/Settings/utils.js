export const getBreakPointValue = (breakName, breakpoints) => parseInt(breakpoints[breakName]
  .replace('px', ''), 10);
