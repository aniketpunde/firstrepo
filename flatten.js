function flatten(ary, ret = []) {
    return ary.reduce((ret, entry) => {
        console.log("=====123=====", entry)
        if (Array.isArray(entry)) {
            console.log("=====456=====", entry)
            flatten(entry, ret);
        } else {
            console.log("=====789=====", entry)
            ret.push(entry);
        }
        return ret;
    }, ret);
}
console.log(flatten([12, 23, 34, 45, [1, 2, [12, 89]]]));