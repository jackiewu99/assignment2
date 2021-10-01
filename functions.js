
//For each//
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0;i < this.length;i++)
    {
        if(this[i] === undefined) continue;
        callbackFn(this[i],i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let arrMap = [...this];
    for(let i = 0;i < arrMap.length;i++)
    {
        if(arrMap[i] === undefined) continue;
        arrMap[i] = callbackFn(this[i],i, this);
    }
    return arrMap;
};