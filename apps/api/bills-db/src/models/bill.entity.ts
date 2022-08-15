import {
    Column,
    Entity,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Service } from './service.entity';

@Entity('bill')
export class Bill extends BaseEntity {

    customerId: string;

    @Column({ type: 'varchar', length: 300 })
    customerName: string;

    @Column({ type: 'int' })
    number: number;

    @Column({ type: 'int' })
    contractNumber: number;

    @Column({ type: 'float' })
    totalPrice: number;

    @OneToMany(() => Service, (service) => service.bill, { cascade: true })
    services: Service[];

    @Column({ type: 'varchar', length: 64, nullable: true })
    postTrackingNumber?: string;

    @Column({ type: 'varchar', length: 32 })
    fromDate: string;
}
