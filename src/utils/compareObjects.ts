export default function CompareObjects (first:any,second:any){
    // @ts-ignore
    return Object.keys({ ...first, ...second }).every(key => first[key] === second[key]);
}