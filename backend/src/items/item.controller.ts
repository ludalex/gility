import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import Item from './item.model';
import { ItemService } from './item.service';

@UseGuards(JwtAuthGuard)
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItems(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  @Get(':id')
  async getItem(@Param('id') id: string): Promise<Item[]> {
    return await this.itemService.findById(id);
  }
}
