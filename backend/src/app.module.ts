import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ItemModule } from './items/item.module';
import { OrderModule } from './orders/order.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [OrderModule, ItemModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
