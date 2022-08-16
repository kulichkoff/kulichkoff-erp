import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../../models/customer.entity';
import { ICustomer } from '@app/api-interfaces';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer) private readonly repo: Repository<Customer>,
    ) {}

    public async createOne(customerData: ICustomer): Promise<Customer> {
        return await this.repo.save(customerData);
    }

    public async getAll(): Promise<Customer[]> {
        return await this.repo.find();
    }

}
