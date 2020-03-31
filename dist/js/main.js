// 1  số những method của array trong js

// toString() : nối các phần tử trong mảng lại vs nhau bằng dấu ,
// join(seperator) : nối các pt trong mảng kí tự bất kì
// push : thêm 1 pt vào cuối mảng và trả về số lượng pt (length)
// pop : lấy 1 pt ở cuối mảng và trả về pt đó
// unshift : thêm 1 pt vào đầu mảng và trả về số lượng pt (length)
// shift : lấy 1 pt ở đầu mảng và trả về pt đó
// splice : cho phép thêm hoặc xoá các pt trong mảng
// slice : lấy số lượng các pt trong mảng từ vị trí index
// concat : nối 2 array lại với nhau và trả về 1 array mới
const str1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus omnis amet sapiente soluta alias vero nulla numquam, veniam recusandae accusamus aliquam. Quos eius iste magni repellendus voluptatum pariatur esse.";
const str2 = "hello word";
truncateString(str1, 10); // Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus...
truncateString(str2, 10); // hello word
truncateString(str2, 1); // hello...
