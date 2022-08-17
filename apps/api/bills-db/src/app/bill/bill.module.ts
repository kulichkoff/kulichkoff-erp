import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from '../../models/bill.entity';
import { Service } from '../../models/service.entity';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { SendingPoint } from '../../models/sending-point.entity';
import { UnloadingPoint } from '../../models/unloading-point.entity';
import { Customer } from '../../models/customer.entity';
import { CustomerService } from '../customer/customer.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Bill,
            Service,
            SendingPoint,
            UnloadingPoint,

            Customer,
        ]),
    ],
    providers: [
        BillService,
        CustomerService,
    ],
    controllers: [
        BillController,
    ],
})
export class BillModule {
}
