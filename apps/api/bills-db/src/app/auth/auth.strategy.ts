import { PassportStrategy } from '@nestjs/passport';
import {
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService,
    ) {
        super();
    }

    public async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
