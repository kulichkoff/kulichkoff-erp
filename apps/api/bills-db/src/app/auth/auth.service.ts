import {
    HttpException,
    HttpStatus,
    Injectable,
    Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    public async login(user: User): Promise<{ access_token: string }> {
        const payload = { username: user.username, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    public async validateUser(username: string, pass: string): Promise<Omit<User, 'password' | 'hashPassword'>> {
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new HttpException('Wrong username', HttpStatus.FORBIDDEN);
        }
        Logger.log(`Starting authorization for user -- ${username} --`, 'AuthService');
        if (await this.checkPass(user.password, pass)) {
            const { password, ...result } = user;
            return result;
        } else {
            throw new HttpException('Wrong password', HttpStatus.FORBIDDEN);
        }
    }

    private async checkPass(hashedPass: string, plainPass: string): Promise<boolean> {
        return await bcrypt.compare(plainPass, hashedPass);
    }

}
