import storageService from "../js/storage-service.js"


class ListLists {
    constructor(lists) {
        this.lists = lists;
    }

    add(newList) {
        this.lists =[...this.lists, newList]  ;

    }

}

const lists = JSON.parse(storageService.get("lists"));

const listLists = new ListLists( lists|| []);

export default listLists;