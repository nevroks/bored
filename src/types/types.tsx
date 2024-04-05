export interface ITodo {
    "activity":string,
    "accessibility":number,
    "type":"cooking" | "education" | "recreational" | "social" | "diy" | "charity" | "relaxation" | "music" | "busywork" | "",
    "participants": number,
    "price":number,
    "favorite":boolean,
    "key":number
}
export interface IUser {
    name:string,
    password:string

}