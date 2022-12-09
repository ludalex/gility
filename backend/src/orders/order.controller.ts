import { Controller, Get, Param } from '@nestjs/common';
import Order from './order.model';
import { OrderService } from './order.service';

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
