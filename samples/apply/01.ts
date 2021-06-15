const Girl = function () {
  this.name = '女の子'
  this.enterToilet = function () {
    console.log(`女子トイレに${this.name}が入る`)
  }
}

const Boy = function () {
  this.name = '男の子'
}

new Girl().enterToilet.apply(new Boy())
