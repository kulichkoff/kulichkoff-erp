import {
    Body,
    Controller,
    Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Controller('templates')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('bills')
    public createBillsReport(@Body() billsData: ICargoTransportationBill) {
        return this.appService.createBillsReport(billsData);
    }
}
