function getArrayParams(...arr) {
  let avg;
  let min;
  let max;
  if (!arr.length) {
    console.log("Откорректируйте исходные данные");
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    const sum = arr.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
    avg = +(sum / arr.length).toFixed(2);
    return { min: min, max: max, avg: avg };
  }
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  } else {
    const sum = arr.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  } else {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  if (!arrOfArr.length) {
    return 0;
  } else {
    for (let i = 0; i < arrOfArr.length; i += 1) {
      let resultFunc = func(...arrOfArr[i]);
      if (resultFunc > maxWorkerResult) {
        maxWorkerResult = resultFunc;
      }
    }
  }
  return maxWorkerResult;
}
