import {
    Injectable,
    Logger,
} from '@nestjs/common';
import * as fs from 'fs';
import { ICargoTransportationBill } from '@app/api-interfaces';
import createReport from 'docx-templates';
import * as path from 'path';

@Injectable()
export class AppService {
    private _template = fs.readFileSync(path.join(__dirname, 'assets/templates/bills-template.docx'));

    public async createBillsReport(billData: ICargoTransportationBill) {
        const buffer = await createReport({
            template: this._template,
            data: {
                ...billData,
                date: new Date().toLocaleDateString('ru-RU'),
            },
            cmdDelimiter: ['{{', '}}'],
        });

        const filePath = path.join(__dirname, 'assets', 'report.docx');
        fs.writeFileSync(filePath, buffer);
        Logger.log(`Saved a [BILL] Report to ${filePath}`);
    }
}
