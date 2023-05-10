import { ModificationNote } from "../common/model";

export interface IProduct {
    _id?: String;
    name: String;
    discription: String;
    price: Number;
    is_deleted?: Boolean;
    modification_notes: ModificationNote[]
}