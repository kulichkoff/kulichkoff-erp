import {
    Body,
    Controller,
    Get,
    Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ICustomer } from '@app/api-interfaces';

@Controller('data/customer')
export class CustomerController {

    constructor(
        private readonly service: CustomerService,
    ) {}

    @Get()
    public async getAll() {
        return await this.service.getAll();
    }

    @Post()
    public async createOne(@Body() customerData: ICustomer) {
        return await this.service.createOne(customerData);
    }
}
