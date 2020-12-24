export const ValidateName = (name) => {
    let re = /Xxxx/;
        if (re.test(name) && name.length < 5) {
            return true
        } else if ((name.length > 0 && (!re.test(name))) || (name.length > 4 && (re.test(name)))){
            return false
        } 
        return true
}