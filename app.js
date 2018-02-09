const S = '2, JAY, ROB, CAT, DOG'
function solution(S) {
    let SArr = S.trim().split(',')
    let num = parseInt(SArr[0])
    console.log(SArr)
    console.log(num)
    if((SArr.length-1)/2 === num) {
        console.log('We\'ve to form ' + num + ' pairs');
    }
}

solution(S)

