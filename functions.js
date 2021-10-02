const arr = [6,10,50,30,5];
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

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0;i < this.length;i++)
    {
        if(this[i] === undefined) continue;
        if(callbackFn(this[i],i, this) === false)
        {
            return false;
        }
        if(i === (this.length - 1))
        {
            return true;
        }
    }
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn,prev) {
    let sum = 0;
    if (prev === undefined)
    {
        sum = 0;
    }
    else
    {
        sum = 0 + prev;
    }
    for(let i = 0;i < this.length;i++)
    {
        if(this[i] === undefined) continue;
        sum = callbackFn(sum,this[i]);
    }
    return sum;
};

// INCLUDES //
Array.prototype.myIncludes = function(value,index) {
    let i = 0;
    if (index === undefined)
    {
        i = 0;
    }
    else
    {
        i = 0 + index;
    }
    for(i;i < this.length;i++)
    {
        if(this[i] === undefined) continue;
        if(this[i] === value)
        {
            return true;
        }
        if(i === this.length - 1)
        {
            return false;
        }
    }
};

console.log("myIncludes: ")
console.log(arr.myIncludes(6,1));

console.log("includes: ")
console.log(arr.includes(6,1));

// INDEXOF //
Array.prototype.myIndexOf = function(value) {
    for(let i = 0;i < this.length;i++)
    {
        if(this[i] === value)
        {
            return i;
        }
    }
    return -1;
};


// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    
        for(let i = length; i < length + args.length;i++)
        {
            this[i] = args[arg_i];
            arg_i++;
        }   
        return this.length
    };

    // LASTINDEXOF //
Array.prototype.myLastIndexOf = function(value) {
    for(let i = this.length - 1;i > 0;i--)
    {
        if(this[i] === value)
        {
            return i;
        }
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
    const myArr = [];
    for (let name in obj)
        myArr.push(name);
    return myArr;
};

// VALUES // 
Object.grabValues = function(obj) {
    const myArr = [];
    for (let name in obj)
        myArr.push(obj[name]);
    return myArr;
};