import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderService } from 'src/orders/order.service';
import { UserService } from './user.service';
import Order from 'src/orders/order.model';
import User from './user.model';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(OrderService)
    private readonly orderService: OrderService
  ) { }

  @Get()
  async getUsers(): Promise<User[]> {
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
