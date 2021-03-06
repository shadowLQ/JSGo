// 引入其他模块
/*
* 在node种，通过require()函数引入外部的模块
* require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
* 这里路径 如果使用相对路径必须以.或..开头
*使用require() 引入模块后，该函数返回一个对象，这个对象代表的是引入的模块
*
*
*
*我们在使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
*
* -模块分成两大类
* 核心模块
*       -由node引擎提供
*       -核心模块的标识就是模块的名称
*
* 文件模块
*       -由用户自己创建的模块
*       -文件模块的标识就是文件的路径
* */

var h = require("./helloworld");
let fs = require("fs");
console.log(h.a)
console.log(h.x)
h.call();
console.log(arguments.callee)

let r = require("./mode.exports和exports");
console.log(r.name)
console.log(r)
r.add()
