import {
    Body,
    Controller,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../../models/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('data/auth')
export class AuthController {

    constructor(
        private service: AuthService,
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post()
    public login(@Body() user: User) {
        return this.service.login(user);
    }

}
