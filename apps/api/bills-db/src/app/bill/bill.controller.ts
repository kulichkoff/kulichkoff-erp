import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';
import { BillService } from './bill.service';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Controller('data/bill')
export class BillController {
    constructor(
        private readonly service: BillService,
    ) {}

    @Get()
    public async getAll() {
        return await this.service.getAll();
    }

    @Get('last')
    public async getLastNumber() {
        return await this.service.getLastBillNumber();
    }

    @Post()
    public async createOne(@Body() billData: ICargoTransportationBill) {
        return await this.service.createOne(billData);
    }
}
