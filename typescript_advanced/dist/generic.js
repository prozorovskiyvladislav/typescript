"use strict";
// const cars1: string[] = ['bmw', 'audi'];
// const cars2: Array<string> = ['ffs', 'fdf']
// const promise = new Promise<number>(resolve => {
//   setTimeout(() => {
//     resolve(42)
//   }, 2000)
// })
// promise.then(data => {
//   console.log(data.toFixed())
// })
// function mergeObjects<T extends object, R extends object>(a: T, b: R) {
//   return Object.assign({}, a, b)
// }
// const merged = mergeObjects({ name: "Vladislav" }, { age: 25 });
// const merged2 = mergeObjects({ a: 'aaa' }, { age: 'bbbb' })
// console.log(merged.age)
//======
// interface ILength {
//   length: number
// }
// function withCount<T extends ILength>(value: T): { value: T, count: string } {
//   return {
//     value,
//     count: `In this object ${value.length} symbols`
//   }
// }
// console.log(withCount("Hello typescript"));
// //-------------
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key]
// }
// const person = {
//   name: "Vladislav",
//   age: 25,
//   job: "Javascript"
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))
//===================
// class Collection<T extends string | boolean | number> {
//   constructor(private _items: T[] = []) {
//   }
//   add(item: T) {
//     this._items.push(item)
//   }
//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item)
//   }
//   get items(): T[] {
//     return this._items
//   }
// }
// const strings = new Collection(["I", "Am", "Strings"]);
// strings.add("!");
// strings.remove("Am")
// console.log(strings.items)
// const numbers = new Collection([1, 2, 3]);
// numbers.add(1);
// numbers.remove(3)
// console.log(numbers.items)
//But I can get an error if:
// const objs = new Collection([{ a: 1 }, { b: 2 }])
// objs.remove({ a: 2 });
// console.log(objs.items);
//I need to add primitive types in generic
//============
// interface Car {
//   model: string,
//   year: number
// }
// function createAndValidateCar(model: string, year: number): Car {
//   const car: Partial<Car> = {};
//   if (model.length > 3) {
//     car.model = model
//   }
//   if (year > 2000) {
//     car.year = year
//   }
//   return car as Car
// }
// //===================
// // const cars: Readonly<Array<string>> = ["Ford", "Audi"]
// // cars.shift()
