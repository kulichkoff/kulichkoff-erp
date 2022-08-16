import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
} from 'typeorm';
import { Bill } from './bill.entity';

@Entity('customer')
export class Customer extends BaseEntity {

    @OneToMany(() => Bill, (bill) => bill.customer)
    bills: Bill[];

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @Column({ type: 'varchar', length: 64 })
    inn: string;

    @Column({ type: 'varchar', length: 64 })
    city: string;
}
