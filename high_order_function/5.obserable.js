// 被观察者
class Subject {
  constructor(name) {
    this.name = name;
    this._arr = [];
    this.state = "happy";
  }

  // 挂在方法
  attch(observer) {
    this._arr.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this._arr.forEach((observer) => observer.update(this));
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 更新方法
  update(subject) {
    console.log(this.name + ":" + subject.state);
  }
}

const father = new Observer("father");
const mather = new Observer("mather");

const subject = new Subject("baby");
subject.attch(father);
subject.attch(mather);

subject.setState("unhappy");
