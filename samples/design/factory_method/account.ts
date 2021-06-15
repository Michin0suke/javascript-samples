import { Product } from './product'

export class Account extends Product {
  constructor (owner: string) {
    super()
    this.owner = owner
  }

  private owner: string;

  public use () {

  }
}
