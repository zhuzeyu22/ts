"use strict";
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "apple";
    Fruit["Banana"] = "banana";
    Fruit["Orange"] = "orange";
    Fruit["Pear"] = "pear";
})(Fruit || (Fruit = {}));
// 等同于
// type FruitSubsetWithRecord = {
//   Apple: Fruit.Apple;
//   Banana: Fruit.Banana;
// }
// console.log(FruitSubsetWithRecord)
//# sourceMappingURL=record.js.map