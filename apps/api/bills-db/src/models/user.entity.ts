import { BaseEntity } from './base.entity';
import {
    BeforeInsert,
    Column,
    Entity,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User extends BaseEntity {
    @Column({ type: 'varchar', nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
