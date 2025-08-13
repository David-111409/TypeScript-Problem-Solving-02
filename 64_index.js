if (window.location.hash) {
    // if (window.location.hash.indexOf("chat") === 1) {
    //     console.log("Chat hash is found");
    // }
    // if (window.location.hash.slice(1) === "chat"){
    //     console.log("Chat hash is founded");

    // }
    if (window.location.hash.substring(1) === "chat"){
        console.log("Chat hash is founde");

    }
} else {
    console.log("There is no hash in the link");
}
