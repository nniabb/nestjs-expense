import { Injectable } from '@nestjs/common';
import { ExpensesDto } from './expenses.dto';


@Injectable()
export class ExpenseService {
  private readonly expenses: ExpensesDto[] = [];

  find(id: string): ExpensesDto {
    for (const expense of this.expenses) {
      if (expense.id === id) {
        return expense; 
      }
    }
    return null; 
  }

  create(expensesDto: ExpensesDto): ExpensesDto {
    this.expenses.push(expensesDto)
    return expensesDto;
  }

  delete(id: string): string {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses.splice(index, 1)
      return "expense deleted"
    }
    return "not found"
  }
}