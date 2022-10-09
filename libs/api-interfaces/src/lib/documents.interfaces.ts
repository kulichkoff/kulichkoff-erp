import { ICustomer } from './customer.interfaces';

export interface IFile {
    name: string;
    type: string;
    uploadPath: string;
}

export interface IDocument {
    file: IFile;
    fromDate: string;
    documentType: string;
}

export interface ICargoTransportationBill extends IDocument {
    id: any,
    customer: ICustomer;
    number: number;
    contractNumber: number;
    contractFromDate: string;
    services: {
        type: string;
        description: string;
        count: number;
        price: number;
        sending: { point: string, date: string}[];
        unloading: { point: string, date: string}[];
    }[];
    postTrackingNumber?: string;
    totalPrice: number;
}
