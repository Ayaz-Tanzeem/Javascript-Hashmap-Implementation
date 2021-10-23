const initialSize = 100;
let hashmap = new Array(initialSize);
let count = 0;
let size = initialSize;

function getIdx(key) {
    return key % size;
}

function getNewIdx(key, newSize) {
    return key % newSize;
}

function resize() {
    
    let newSize = 2*size;
    let tempHashmap = new Array(newSize);
    
    for(let i=0; i < size; i++) {
        
        if(hashmap[i]) {
            for(let value of hashmap[i]) {
                let newIdx = getNewIdx(value[0], newSize);
                if(!tempHashmap[newIdx]) tempHashmap[newIdx] = [];
                tempHashmap[newIdx].push(value);
            }
        }
    }
    
    size = newSize;
    hashmap = tempHashmap;
    delete tempHashmap;
}

function set(key, val) {
    
    count++;
    
    if(count == size) resize();
    
    let idx = getIdx(key);
    
    if(!hashmap[idx]) hashmap[idx] = []
    
    hashmap[idx].push([key, val]);
    
}

function get(key) {
    
    let idx = getIdx(key);
    
    if(!hashmap[idx]) return undefined;
    
    for(let value of hashmap[idx]) {
        if(value[0]==key) return value[1] 
    }    
    
}
