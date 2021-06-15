const factory: Factory = new AccountFactory()

const account1 = factory('a')
const account2 = factory('b')
const account3 = factory('c')

account1.use()
account2.use()
account3.use()
