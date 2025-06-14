const str1 = "hello i am king";
function firstIndex(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
    .join(" ");
}
const result = str1.charAt(0).toLocaleUpperCase() + str1.slice(1);



const result2 = firstIndex(str1);

console.log(result, result2);