export interface IFile {
    name: string;
    size: number;
    lastModified: number;
    type: string;
    uploadPath: string;
}

export interface IDocument {
    file: IFile;
    fromDate: number;
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
        sending: { point: string, date: number }[];
        unloading: { point: string, date: number }[];
    };
    postTrackingNumber?: string;
    totalPrice: number;
}
