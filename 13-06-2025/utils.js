const add = () => {
    const a = 5;
    const b = 10;
    return a + b;
}
const captlize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export { captlize, add }