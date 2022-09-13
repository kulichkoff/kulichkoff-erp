import {
    HttpException,
    HttpStatus,
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
        try {
            const totalPrice = this.getTotalPrice(billData.services);

            const nameTextSplit = billData.customer.name
                .replace('ИНН', '')
                .split(', ');

            let customer = nameTextSplit.length === 3 && {
                name: nameTextSplit[0].trim(),
                city: nameTextSplit[1].trim(),
                inn: nameTextSplit[2].trim(),
            };

            if (!customer) {
                customer = billData.customer;
            }

            const buffer = await createReport({
                template: this._template,
                data: {
                    ...billData,
                    customer,
                    date: billData.fromDate,
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
        } catch (e) {
            Logger.error(e, 'AppService');
            throw new HttpException((e as Error).message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private getTotalPrice(services: ICargoTransportationBill['services']): number {
        let totalPrice = 0;
        for (const service of services) {
            totalPrice += service.price;
        }

        return totalPrice;
    }
}
