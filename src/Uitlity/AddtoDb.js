

const getStoredRedlist = ()=> {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return []
    }
}


const addToStoreReadLiat = (id) => {
    const storedList = getStoredRedlist()
    if(storedList.includes(id)){
        //already exists. do not add list
        console.log(id, 'already exists in the read list');
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem("read-list", storedListStr)
    }
}

export {addToStoreReadLiat}

