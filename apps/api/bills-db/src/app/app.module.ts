import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../config/config.service';
import { BillModule } from './bill/bill.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.typeOrmOptions),
        BillModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
