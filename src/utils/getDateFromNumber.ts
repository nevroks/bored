export default function GetDateFromNumber (time:number) {
    let date = new Date(time);
    let options: Intl.DateTimeFormatOptions = {  day: 'numeric', year: 'numeric', month: 'numeric'  };
    return(date.toLocaleDateString("en-US", options));
};