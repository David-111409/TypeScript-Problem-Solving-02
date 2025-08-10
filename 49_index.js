function preventChanges(obj) {
    // write your code here
    // don't use a return statement
    // DON'T CHANGE OR REMOVE THE LINES BELOW
    Object.freeze(obj);
    obj.noChanges = false;
    obj.signature = "whatever";
    return obj;
}

console.log(preventChanges({ noChanges: true, signature: "so so so so" }));
