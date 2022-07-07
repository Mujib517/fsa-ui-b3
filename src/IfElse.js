function IfElse({ cond, children }) {
    if (!children || !Array.isArray(children)) throw new Error("If Else component should have two children");
    // if (!children) children = [null, null];
    const [first, second] = children;
    // false, 0, "", NaN, null, undefined
    return cond ? first : second;
}

export default IfElse;