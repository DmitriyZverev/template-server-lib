import {fn, FnArgs, FnResult} from './index.js';

const cases: [FnArgs, FnResult][] = [[[], undefined]];

test.each(cases)('%#', (args, result) => {
    expect(fn(...args)).toBe(result);
});
