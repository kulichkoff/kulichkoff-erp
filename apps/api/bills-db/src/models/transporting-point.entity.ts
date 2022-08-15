import { BaseEntity } from './base.entity';
import { Column } from 'typeorm';

export abstract class TransportingPoint extends BaseEntity {
    @Column({ type: 'varchar', length: 128 })
    point: string;

    @Column({ type: 'varchar', length: 32 })
    date: string;
}
