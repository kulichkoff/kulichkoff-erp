import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../config/config.service';
import { BillModule } from './bill/bill.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.typeOrmOptions),
    BillModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
