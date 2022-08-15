import { Injectable } from '@nestjs/common';
import { Bill } from '../../models/bill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICargoTransportationBill } from '@app/api-interfaces';

@Injectable()
export class BillService {

    constructor(
        @InjectRepository(Bill) private readonly repo: Repository<Bill>,
    ) {}

    public async getAll(): Promise<Bill[]> {
        return await this.repo.find();
    }

    public async createOne(billData: ICargoTransportationBill): Promise<Bill> {
        return await this.repo.save(billData);
    }
}
