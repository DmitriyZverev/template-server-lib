export type FnArgs = [];

export type FnResult = undefined;

export type Fn = (...args: FnArgs) => FnResult;

export const fn: Fn = () => {
    return undefined;
};
