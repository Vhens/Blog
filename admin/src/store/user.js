import { observable, runInAction, action } from 'mobx';

class User {

  @observable username

  constructor () {
    this.username = "vhen"
  }
  @action.bound login () {
    runInAction(() => {
      this.username = 'ddd'
    })
  }
}

const user = new User();
export {
  user as default,
  user
}