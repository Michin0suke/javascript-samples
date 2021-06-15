import { Account } from './account'
import { Factory } from './factory'
import { Product } from './product'

export class AccountFactory extends Factory {
  private owners: Product[] = []

  protected createProduct (owner: string): Product {
    return new Account(owner)
  }

  protected registerProduct (product: Product): void {

  }
}
