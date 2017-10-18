//构造函数
function MySet() {
    this.dataStore = []; // 数据存储
}

MySet.prototype.add = add; // 添加成员
MySet.prototype.remove = remove; // 删除成员
MySet.prototype.size = size; // 集合元素个数
MySet.prototype.union = union; // 集合求并集
MySet.prototype.intersect = intersect; // 集合求交集
MySet.prototype.subset = subset; // 判断一个集合是否是另一集合的子集
MySet.prototype.difference = difference; // 集合求补集
MySet.prototype.contains = contains; // 判断某成员是否属于该集合
MySet.prototype.show = show; // 显示当前集合

//添加元素
function add(data) {
    //判断元素是否存在集合当中
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        console.warn('Can not add ' + data + ', must already be in set');
        return false;
    }
}

//删除元素
function remove(data) {
    //判断元素是否存在集合当中
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        console.warn(data + ' is not in set');
        return false;
    }
}


// 显示集合成员
function show() {
    console.log(this.dataStore);
    //return this.dataStore;
}

//判断元素是否属于该集合
function contains (data) {
    if( this.dataStore.indexOf(data) > -1 ){
        return true;
    }else{
        return false;
    }
}

//求集合的并集
function union ( set ) {
    var tempSet = new MySet();
    for( var i = 0 ; i < this.dataStore.length ; i++ ){
        tempSet.add(this.dataStore[i]);
    }
    for( var i = 0 ; i< set.dataStore.length ; i++ ){
        if( !tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

//求集合的交集
function intersect (set) {
    var tempSet = new MySet();
    for(var i = 0 ; i < this.dataStore.length ; i++ ){
        if( set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

//子集判断
function subset (set) {
    if( this.size() > set.size() ){
        console.log('not a subset');
        return false;
    }else{
        for ( var i = 0 ; i < this.dataStore.length ; i++ ){
            if( !set.contains(this.dataStore[i])){
                console.log('not a subset');
                return false;
            }
        }
    }
    console.log(' a subset');
    return true;
}

//返回集合长度
function size () {
    return this.dataStore.length;
}

//补集
function difference (set) {
    var tempSet = new  MySet();
    for( var i = 0 ; i < this.dataStore.length ; i ++ ){
        if( !set.contains(this.dataStore[i])){
            tempSet.dataStore.push( this.dataStore[i] );
        }
    }
    return tempSet;
}
