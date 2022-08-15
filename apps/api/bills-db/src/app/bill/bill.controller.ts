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

    @Post()
    public async createOne(@Body() billData: ICargoTransportationBill) {
        return await this.service.createOne(billData);
    }
}
