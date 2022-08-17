import {
    HttpException,
    HttpStatus,
    Injectable,
    Logger,
} from '@nestjs/common';
import { Bill } from '../../models/bill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICargoTransportationBill } from '@app/api-interfaces';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class BillService {

    constructor(
        @InjectRepository(Bill) private readonly repo: Repository<Bill>,
        private readonly customerService: CustomerService,
    ) {}

    public async getAll(): Promise<Bill[]> {
        return await this.repo.createQueryBuilder('bill')
            .leftJoinAndSelect('bill.customer', 'customer')
            .leftJoinAndMapMany('bill.services', 'service', 's', 's.billId = bill.id')
            .leftJoinAndMapMany('s.sending', 'sending_point', 's_p', 's_p.serviceId = s.id')
            .leftJoinAndMapMany('s.unloading', 'unloading_point', 'u_p', 'u_p.serviceId = s.id')
            .getMany();
    }

    public async createOne(billData: ICargoTransportationBill): Promise<Bill> {
        try {
            const customer = await this.customerService.find({ name: billData.customer.name });

            const completedObject = {
                ...billData,
                totalPrice: this.getTotalPrice(billData.services),
                customer,
            };

            return await this.repo.save(completedObject);
        } catch (e) {
            Logger.error(e);
            throw new HttpException((e as Error).message, HttpStatus.BAD_REQUEST);
        }
    }

    private getTotalPrice(services: ICargoTransportationBill['services']): number {
        let totalPrice = 0;
        for (const service of services) {
            totalPrice += service.price;
        }

        return totalPrice;
    }
}
