import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from '../../models/bill.entity';
import { Service } from '../../models/service.entity';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { SendingPoint } from '../../models/sending-point.entity';
import { UnloadingPoint } from '../../models/unloading-point.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bill, Service, SendingPoint, UnloadingPoint]),
    ],
    providers: [
        BillService,
    ],
    controllers: [
        BillController,
    ]
})
export class BillModule {
}
