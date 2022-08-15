import { BaseEntity } from './base.entity';
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { Bill } from './bill.entity';
import { SendingPoint } from './sending-point.entity';
import { UnloadingPoint } from './unloading-point.entity';

@Entity('service')
export class Service extends BaseEntity {
    @ManyToOne(() => Bill, (bill) => bill.services)
    bill: Bill;

    @Column({ type: 'varchar', length: 64 })
    type: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'int' })
    count: number;

    @Column({ type: 'float' })
    price: number;

    @OneToMany(() => SendingPoint, (point) => point.service)
    sending: SendingPoint[];

    @OneToMany(() => UnloadingPoint, (point) => point.service)
    unloading: UnloadingPoint[];
}
