export const partial = (fn,...arg) => (...restArg) => fn.apply(this,arg.concat(restArg));

export const pipe = (...fns) => fns.reverse().reduce((res,fn) => fn(res));

export const compose = (...fns) => {
    const [first,...funs] =  fns.reverse();
    return (...args) => funs.reduce((res,fn) => fn(res),first(args));
}