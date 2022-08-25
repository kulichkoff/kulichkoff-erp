import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthStrategy } from './auth.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: 'v%re$1%3432F',
            signOptions: { expiresIn: '7d' },
        }),
    ],
    providers: [
        UserService,
        AuthService,
        AuthStrategy,
        JwtStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {
}
