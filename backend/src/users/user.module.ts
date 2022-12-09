import { Module } from '@nestjs/common';
import { OrderModule } from 'src/orders/order.module';
import { OrderService } from 'src/orders/order.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [OrderModule],
  controllers: [UserController],
  providers: [UserService, OrderService],
})
export class UserModule {}
