import { observable, computed, action } from 'mobx';

export class Service {

      /**
   * 设置一个 StatusBar Item
   * @param id
   * @param entry
   */
    @action
    fuckof(entryId: string, entry: string){
        console.log(entryId, entry)
    }
}

const test= new Service()
console.log(test.fuckof('qwe','qwe'))


// 写一个 command 的装饰器