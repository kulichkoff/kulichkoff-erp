import {
    Injectable,
    Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private repo: Repository<User>,
    ) {
        this.init().then();
    }

    private async init() {
        if (!(await this.repo.findOne())) {
            const randomPass = Math.random().toString(36).slice(-8);
            const user = this.repo.create({
                username: 'admin',
                password: randomPass,
            });
            await this.repo.save(user);
            Logger.log(`User [admin] was created with password: ${randomPass}`);
        }
    }

    public async findOne(username: string): Promise<User | undefined> {
        return await this.repo.findOne({
            where: {
                username,
            },
        });
    }
}
