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
    customerId: string;
    customerName: string;
    number: number;
    contractNumber: number;
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
