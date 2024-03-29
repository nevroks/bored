

export default function CheckPassword (password:string) {
    const reg=/[0-9]{1}/;
    if (!reg.test(password)){
        return false
    }
    return password
};
