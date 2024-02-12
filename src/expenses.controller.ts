import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ExpenseService } from './expenses.service';
import { ExpensesDto } from './expenses.dto';



@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get(':id')
  find(@Param('id') id: string): ExpensesDto {
    return this.expenseService.find(id)
  }

  @Post()
  create(@Body() expensesDto: ExpensesDto): ExpensesDto {
    return this.expenseService.create(expensesDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    this.expenseService.delete(id)
    return "deleted"
  }
}
