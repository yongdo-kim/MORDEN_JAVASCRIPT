/*
     1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!! 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!! 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
      1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!! 1!!!!!!!!!!!!!!!!!!!!!!!!!!!!워닝!!!!!!
    js 공식문서 사용하지 않고, 코딩앙마 버전 사용 중.. 여기는 스킵 
*/

// [async]
// async function getName(){ //async를 앞에 붙이면 Promise 객체를 반환. 
// 	return 'Mike';
// }

// getName.then((name)=>console.log(name));

// [await]
function getName(name){
	return new Promise((res,rej) => {
		setTimeout(()=>{
			res(name);
		},1000);
	});
}

async function showName(){ //async가 있어야 await을 쓸 수 있음. 
	const result = await getName("mike");
	console.log(result);
}

showName();

// [16번 강좌]
async function order(){
	try{
		const result1 = await f1();
		const result2 = await f2(result1); //await 실패시 catch문으로 빠짐. 
		const result3 = await f3(result2);
	}catch(e){
		console.log(e);
	}
}

async function order(){
	try{
		const result = await Promise.all([f1(),f2(),f3()]);
	}catch(e){
		console.log(e);
	}
}
