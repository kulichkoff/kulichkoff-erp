import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {
    ExtractJwt,
    Strategy,
} from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'v%re$1%3432F',
        });
    }

    public async validate(payload) {
        return { id: payload.sub, username: payload.username };
    }
}
