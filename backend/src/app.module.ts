import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './items/item.module';
import { OrderModule } from './orders/order.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [OrderModule, ItemModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
