import { Controller, Get, Inject, Param } from '@nestjs/common';
import Order from 'src/orders/order.model';
import { OrderService } from 'src/orders/order.service';
import User from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(OrderService)
    private readonly orderService: OrderService
    ) {}

  @Get()
  async getUsers() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User[]> {
    return await this.userService.findById(id);
  }

  @Get(':id/orders')
  async getOrderByUser(@Param('id') id: string): Promise<Order[]> {
    return await this.orderService.findByUser(id);
  }
}
