const p = console.log;
const I = " ".repeat(2);

function p0(str) {
  return `console.log(${str});`;
}

function pg(str) {
  const output = document.getElementById("CodeShowArea");
  output.innerText = str;
}

function s(str, sep = " ") {
  return str.split(sep);
}

function n(ls, newline = 1) {
  return ls.join("\n".repeat(newline));
}

function r(...args) {
  const isArr = (ele) => Array.isArray(ele);
  const getLen = (arr) => arr.length;
  const arrOfLen = args.filter(isArr).map(getLen);
  const allArrHaveSameLen = arrOfLen.every((value, i, arr) => value === arr[0]);

  if (!allArrHaveSameLen)
    throw new Error("Not all arrays have the same size: " + arrOfLen);

  let joinarr = JSON.parse(JSON.stringify(args));
  let ls_col = args.reduce((a, e, i) => {
    if (isArr(e)) a.push(i);
    return a;
  }, []);
  let result = [];

  for (let row = 0; row < arrOfLen[0]; row++) {
    for (let col of ls_col) {
      joinarr[col] = String(args[col][row]);
    }
    result.push(joinarr.join(""));
  }
  return result;
}

function g(array, ...args) {
  const accessArr = [];
  for (const index of args) {
    if (typeof index === "number") {
      accessArr.push(array[index]);
    } else if (Array.isArray(index)) {
      accessArr.push(...array.slice(...index));
    } else {
      throw new Error("Unknown subscript");
    }
  }
  return accessArr;
}

function mkv(keyArr, valueArr) {
  if (
    keyArr.length != valueArr.length ||
    keyArr.length == 0 ||
    valueArr.length == 0
  ) {
    return null;
  }
  let obj = {};

  keyArr.forEach((k, i) => {
    obj[k] = valueArr[i];
  });
  return obj;
}

function mpatch(keyArr, ...args) {
  if (keyArr.length !== args.length) {
    throw new Error(
      `Key size(${keyArr.length}) does not equal to value size(${args.length})`
    );
  }

  const zip = (...rows) =>
    [...rows[0]].map((_, c) => rows.map((row) => row[c]));
  const transposeArgs = zip(...args);
  const objects = transposeArgs.map((line) => {
    return line.reduce(
      (object, value, index) => ({
        ...object,
        [keyArr[index]]: value,
      }),
      // Initial value (empty JS object)
      {}
    );
  });
  return objects;
}

function jpath(arr, value = "null") {
  return JSON.parse(
    r('{"', arr, '":').join("") + value + "}".repeat(arr.length)
  );
}

function data(elementId = "text") {
  return document.getElementById(elementId).value;
}
