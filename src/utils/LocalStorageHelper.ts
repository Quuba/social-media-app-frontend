class LocalStorageHelper{

    static getFromStorage = (name:string) =>{
        const t_item =localStorage.getItem(name);

        let res:string;

        if(t_item != null){
            res = t_item;
        }else {
             res = 'null';
        }
        return res
    }

}
export {LocalStorageHelper}