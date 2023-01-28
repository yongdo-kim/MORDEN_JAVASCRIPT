/*
    프로퍼티 플래그와 설명자
        - 객체엔 프로퍼티가 저장
        - Object.getOwnPropertyDescriptor을 사용한다 정도면 ok
*/

/*
    프로퍼티 getter와 setter
        - 객체의 프로퍼티는 두 종류
            - 데이터 프로퍼티 (속성값)
            - 접근자 프로퍼티 (get ,set )
*/
let user = {
    //get이 만들어지면 name에 일반적으로 대입이 불가능
    get name() {
      return this._name; //_를 사용해서 Private 
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  console.log(user.name); // Pete
  
  user.name = ""; // 너무 짧은 이름을 할당하려 함
