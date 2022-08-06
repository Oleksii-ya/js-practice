// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function checkBrackets(str: string) {
  if (str.length % 2 !== 0) {
    return false
  }

  let work = str
  for (let i = 0; i < str.length / 2; i++) {
    work = work.split('()').join('').split('[]').join('').split('{}').join('')
    if (work===''){
      return true
    }
  }
  return false

}

console.log(checkBrackets("(){}[]"))
console.log(checkBrackets("([{}])"))
console.log(checkBrackets("(}"))
console.log(checkBrackets("[(])"))
console.log(checkBrackets("[({})](]"))

console.log(checkBrackets("()))"));
console.log(checkBrackets("())({}}{()][]["))