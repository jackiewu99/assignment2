
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

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let filterArr = [...this];
    for(let i = 0;i < filterArr.length;i++)
    {
        if(filterArr[i] === undefined) continue;

        if(callbackFn(filterArr[i],i, filterArr) === false)
        {
            filterArr.splice(i,1);
            i--;
        }
    }
    return filterArr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0;i < this.length;i++)
    {
        if(this[i] === undefined) continue;
        if(callbackFn(this[i],i, this) === true)
        {
            return true;
        }
        if(i === (this.length - 1))
        {
            return false;
        }
    }
};