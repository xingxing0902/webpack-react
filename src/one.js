import Two from './two.js'
const test = (num) => {
    console.log("test函数哈哈" + num);
}
test(Two.y);
function testable(target) {
    target.isTestable = true;
    }
    @testable
    class MyTestableClass {}
    console.log("装饰器语法",MyTestableClass.isTestable) // true
    

