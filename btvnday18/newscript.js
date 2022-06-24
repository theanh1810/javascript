//bai1
function capitalize(str) {
    let newstr = (str.charAt(0).toUpperCase() + str.slice(1)).trim()
    console.log(newstr)
}
capitalize("the anh  ")
//bai2 loi

//bai3
function protectEmail(str) {
    let t = str.length - 12
    const p = str.substr(2, t)
    let str1 = str.replace(p, "...") 
    console.log(str1)
}
protectEmail("theanh1810@gmail.com")
//bai4
function reverse(str) {
    console.log("The original string is: " + str);
    let splitStr = str.split(""); 
    let reversedArr = splitStr.reverse();
    let reversedStr = reversedArr.join("");
    console.log("The reversed string is: " + reversedStr);

}
reverse("The Anh")
//bai5
function countVowel(str) {
    let count = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" ||str[i] === "E" ||str[i] === "I" ||str[i] === "O" ||str[i] === "U") {
            count++
        }
    }
    console.log(count)
}
countVowel("the anh")
//bai6
function reverseWords(str) {
    console.log("The original string is: " + str);
    let splitStr = str.split(" ");
    let reversedArr = splitStr.reverse();
    let reversedStr = reversedArr.join(" ");
    console.log("The reversed string is: " + reversedStr);
}
reverseWords("The Anh La Ai")
//bai7
function randomHex() {
    var letters = "0123456789abcdef"
    var color = "#"
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
}
randomHex()
//bai8
function parameterize(str) {
    let spliturl = str.split(" ");
    let joinurl = spliturl.join("-");
    console.log(joinurl)
}
parameterize("Day la ai zi")
//bai9 tham khao a son
function isPalindrome(str) {
     let regex = /\s/g;

     str = str.replace(regex, "").toLowerCase();

     let arrayStr = str.split("");
     let reverseArray = arrayStr.slice().reverse();
     let reverseStr = reverseArray.join("");

    if (str === reverseStr) {
        console.log(true)
    }
    else {
        console.log(false)
     }            
}
isPalindrome("Race car")
isPalindrome("Ba");

//bai1 tham khao a son
//Viết hàm mostCommonCharacter(str) tìm và trả về ký tự xuất hiện nhiều lần nhất trong chuỗi, nếu có nhiều ký tự có số lần xuất hiện giống nhau thì trả về ký tự đứng trước theo bảng alphabe
function mostCommonCharacter(str) {
  let result = [];
  let regex = /\s/g;
  str = str.replace(regex, "").toLowerCase();
  let arrayStr = str.split("");
  let count = {};
  arrayStr.forEach(function (c){
    count[c] = (count[c] || 0) + 1;
  });
  for (let k in count) {
    if (count[k] == 1) {
      delete count[k];
    }
  }
  return count;
}

console.log(mostCommonCharacter("Hello WorLdo"));
console.log(mostCommonCharacter("Ba Nguyen"));       
//
//bai 2 chua lam dc
const students = [
 { name: "Hoàng Thị Ngọc Linh", point: 0 },
 { name: "Bùi Lan Nhi", point: 0 },
    { name: "Nguyễn Ba", point: 10 }
];
function sortByName(students) {
    let newname = students.split(" ");
    students.sort(function (a, b){
        if (a.name.substr(name.length, "").toLowerCase() < b.name.substr(name.length, "").toLowerCase()) return -1
        else if (a.name.substr(name.length, "").toLowerCase() > b.name.substr(name.length, "").toLowerCase())
            return 1
        else return 0
    })
    return students.sort();
}
