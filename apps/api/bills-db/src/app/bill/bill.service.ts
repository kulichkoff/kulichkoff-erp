import { Injectable } from '@nestjs/common';
import { Bill } from '../../models/bill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BillService {

    constructor(
        @InjectRepository(Bill) private readonly repo: Repository<Bill>,
    ) {}

    public async getAll(): Promise<Bill[]> {
        return await this.repo.find();
    }
}
