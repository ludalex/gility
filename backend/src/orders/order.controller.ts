import { Controller, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import Order from './order.model';
import { OrderService } from './order.service';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders() {
    return await this.orderService.findAll();
  }

  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Order[]> {
    return await this.orderService.findById(id);
  }
}
