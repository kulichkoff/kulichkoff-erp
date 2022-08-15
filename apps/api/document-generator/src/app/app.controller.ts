import {
    Body,
    Controller,
    Header,
    Post,
    Res,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Controller('templates')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('bills')
    @Header('Content-Type', 'application/msword')
    @Header('Content-Disposition', 'attachment; filename=report.docx')
    public async createBillsReport(@Body() billsData: ICargoTransportationBill) {
        return await this.appService.createBillsReport(billsData);
    }
}
