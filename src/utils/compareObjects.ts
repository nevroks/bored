type FNProps={
    any:any
}

export default function CompareObjects (first:FNProps,second:FNProps){
    // @ts-ignore
    return Object.keys({ ...first, ...second }).every(key => first[key] === second[key]);
}