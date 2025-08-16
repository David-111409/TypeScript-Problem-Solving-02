let st = "elzero";

console.log(st.slice(0, 1).toUpperCase() + st.slice(1));
console.log(st.at(0).toUpperCase() + st.slice(1));
console.log(st[0].toUpperCase() + st.slice(1));
console.log(st.substring(0, 1).toUpperCase() + st.substring(1));

let [first, ...res] = [...st];
console.log(first.toUpperCase() + res.join(""));

console.log(
    [...st]
        .map((v, ind) => {
            if (ind === 0) {
                return v.toLocaleUpperCase();
            }
            return v;
        })
        .join("")
);

console.log(
    [...st].reduce((cur, l, ind) => {
        if (ind === 0) return cur + l.toUpperCase();
        return cur + l;
    }, "")
);

console.log(st.replace(/^./, (m) => m.toUpperCase()));
