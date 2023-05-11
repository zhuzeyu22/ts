enum Fruit {
    Apple = 'apple',
    Banana = 'banana',
    Orange = 'orange',
    Pear = 'pear',
}

type FruitSubset = Pick<typeof Fruit, 'Apple' | 'Banana'>;
// 等同于
// type FruitSubset = {
//   Apple: Fruit.Apple;
//   Banana: Fruit.Banana;
// }
type FruitSubsetWithRecord = Record<keyof FruitSubset, FruitSubset[keyof FruitSubset]>;
// 等同于
// type FruitSubsetWithRecord = {
//   Apple: Fruit.Apple;
//   Banana: Fruit.Banana;
// }

// console.log(FruitSubsetWithRecord)