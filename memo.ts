// function memoized(function) => function // мемоизация
// Example: memoized(fibSeq)(100) doesn’t exceed maximum stack size

interface IPastParams {
  numberCalls: number
}

function memoized(foo: (...data: any[]) => any): (data: any[]) => any {
  const pastParams: IPastParams = { numberCalls: 0 }

  return function (...args: any[]): any {
    const keyArguments: any = JSON.stringify(arguments)
    if (pastParams[keyArguments]) {
      return pastParams[keyArguments]
    }

    let result: any = foo(...args)
    pastParams.numberCalls += 1
    pastParams[keyArguments] = result
    return result
  }
}