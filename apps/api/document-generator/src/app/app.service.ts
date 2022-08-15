import {
    Injectable,
    Logger,
    StreamableFile,
} from '@nestjs/common';
import * as fs from 'fs';
import { ICargoTransportationBill } from '@app/api-interfaces';
import createReport from 'docx-templates';
import * as path from 'path';
import { convert as convertNumberToWordsRu } from 'number-to-words-ru';


@Injectable()
export class AppService {

    private _template = fs.readFileSync(path.join(__dirname, 'assets/templates/bills-template.docx'));

    public async createBillsReport(billData: ICargoTransportationBill): Promise<StreamableFile> {
        const totalPrice = this.getTotalPrice(billData.services);
        const buffer = await createReport({
            template: this._template,
            data: {
                ...billData,
                date: new Date().toLocaleDateString('ru-RU'),
                totalPrice: totalPrice,
                totalPriceNumeral: convertNumberToWordsRu(totalPrice),
            },
            cmdDelimiter: ['{{', '}}'],
        });

        const filePath = path.join(__dirname, 'assets', 'report.docx');
        fs.writeFileSync(filePath, buffer);
        Logger.log(`Saved a [BILL] Report to ${filePath}`);
        const file = fs.createReadStream(filePath);
        return new StreamableFile(file);
    }

    private getTotalPrice(services: ICargoTransportationBill['services']): number {
        let totalPrice = 0;
        for (const service of services) {
            totalPrice += service.price;
        }

        return totalPrice;
    }
}
