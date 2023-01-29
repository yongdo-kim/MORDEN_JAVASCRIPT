/*
    클래스와 기본 문법
        - class로 만든 함수엔 특수 내부 프로퍼티인 [[IsClassConstructor]]: true
        - 클래스는 항상 엄격 모드로 실행


*/

class UserByClass {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
  }
  
  // 클래스는 함수입니다.
  console.log(typeof UserByClass); // function
  
  // 정확히는 생성자 메서드와 동일합니다.
  console.log(UserByClass === UserByClass.prototype.constructor); // true
  
  // 클래스 내부에서 정의한 메서드는 UserByClass.prototype에 저장됩니다.
  console.log(UserByClass.prototype.sayHi); // console.log(this.name);
  
  // 현재 프로토타입에는 메서드가 두 개입니다.
  console.log(Object.getOwnPropertyNames(UserByClass.prototype)); // constructor, sayHi



  class User {

    constructor(name) {
      // setter를 활성화합니다.
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("이름이 너무 짧습니다.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("보라");
  console.log(user.name); // 보라
  
  user = new User(""); // 이름이 너무 짧습니다.


  /*
    클래스 상속 
        - extends는 프로토타입을 기반으로 동작
        - Rabbit.prototype.[[Prototype]] -> Animal.prototype으로 설정
        - 화살표 함수엔 super가 없습니다.

  */

        class Animal {

            constructor(name) {
              this.speed = 0;
              this.name = name;
            }
          
            run(speed) {
              this.speed = speed;
              console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`);
            }
          
            stop() {
              this.speed = 0;
              console.log(`${this.name}가 멈췄습니다.`);
            }
          
          }
          
          class Rabbit extends Animal {

            constructor(name, earLength) {
                //constructor가 없다면 부모의 constructor를 자동호출 
                //커스텀으로 constructor을 호출하려면 super를 우선 호출 
                super(name);
                this.earLength = earLength;
              }

              
            hide() {
              console.log(`${this.name}가 숨었습니다!`);
            }
          
            stop() {
              //super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
              //arrow function을 쓰면 super가 없으므로, 이 super는 외부에서 찾게 됨(상위)
              setTimeout(() => super.stop(), 100); // 0.1초 후에 부모 stop을 호출합니다.
              
              this.hide(); // 숨습니다.
            }
          }
          
          let rabbit = new Rabbit("흰 토끼",10);
          console.log(rabbit.name); // 흰 토끼
          console.log(rabbit.earLength); // 10
          rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
          rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!


/*
        정적 메서드와 정적 프로퍼티  
          - 정적 메서드는 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일한 일을 합니다.
 */

          class Article {
            constructor(title, date) {
              this.title = title;
              this.date = date;
            }
            static publisher = "Ilya Kantor";
            static compare(articleA, articleB) {
              return articleA.date - articleB.date;
            }
          }
          
          // 사용법
          let articles = [
            new Article("HTML", new Date(2019, 1, 1)),
            new Article("CSS", new Date(2019, 0, 1)),
            new Article("JavaScript", new Date(2019, 11, 1))
          ];
          
          articles.sort(Article.compare);
          
          console.log( articles[0].title ); // CSS