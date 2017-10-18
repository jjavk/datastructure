function MyStack () {
    this.dataStore = [];    //初始化为空
    this.top = 0;           //记录栈顶位置
}

MyStack.prototype.pop = pop;         //出栈
MyStack.prototype.push = push;       //入栈
MyStack.prototype.peek = peek;       //查看栈顶元素
MyStack.prototype.length = length;   //查看栈内元素总数
MyStack.prototype.clear = clear;     //清空栈

function push( element ){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    if( this.top > 0 ) return this.dataStore[this.top-1];
    else return 'Empty';
}

function length(){
    return this.top;
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}

//初始化一个栈
var stack = new MyStack();
console.log( stack.peek() );    // Empty

//入栈
stack.push('Apple');
stack.push('Banana');
stack.push('Pear');

//查看当前栈顶元素
console.log( stack.peek() );    // Pear
console.log( stack.pop() );     // Pear

//案例1：实现数制间的相互转换
//进制转换（2-9）
function mulBase ( num , base ) {
    var s = new MyStack();
    do{
        s.push( num % base );
        num = Math.floor( num /= base );
    }while ( num > 0 );

    var converted = '';
    while (s.length() > 0){
        converted += s.pop();
    }
    return converted;
}

console.log( mulBase( 125 , 2 ) );      // 1111101
console.log( mulBase( 125 , 8 ) );      // 175

//回文判断
//案列2：判断一个字符串是不是回文
function isPalindrome ( word ) {
    var s = new MyStack();
    for( var i = 0 ; i < word.length ; i ++ ){
        s.push( word[i] );
    }
    var rword = '';
    while( s.length() > 0 ){
        rword += s.pop();
    }

    if( word == rword ){
        return true;
    }else{
        return false;
    }
}

console.log( isPalindrome('level') )    // true
console.log( isPalindrome('1001') )     // true
console.log( isPalindrome('word') )     // false
