import {
    Controller,
    Get,
} from '@nestjs/common';
import { BillService } from './bill.service';

@Controller('data/bill')
export class BillController {
    constructor(
        private readonly service: BillService,
    ) {}

    @Get()
    public async getAll() {
        return this.service.getAll();
    }
}
