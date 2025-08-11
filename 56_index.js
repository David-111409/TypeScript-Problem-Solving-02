function signYourName(obj) {
    Object.preventExtensions(obj);
    obj.yourSignature = "Whatever";
    // obj.yourSignature = "who-ever";
    obj.spouseSignature = "Nice Try";
  
    return obj;
}

console.log(signYourName({yourSignature: ""}), {yourSignature: "Whatever"})
