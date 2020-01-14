import item from './item.js';


const items = [];
const hideCheckedItems = false;

const findById = function(id) {
   return items.find(item => item.id === id);
    };

const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    }
    catch(error){
        console.log(`Cannot add item: ${error.message}`);
    }
};

const findAndToggleChecked = function(id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(newName);
        findById(id).name = newName;
    }
    catch (error) {
        console.log(`Cannot update name: ${error.message}`)
    }
};

const findAndDelete = function(id) {
    let obj = findById(id);
    let index = items.findIndex(obj => obj.id === id);
    items.splice(index, 1);
};

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
} 

//store.items.find(item => item.id === id);

export default {

    items,
    hideCheckedItems,
    addItem,
    findById,
    findAndDelete,
    findAndToggleChecked,
    findAndUpdateName,
    toggleCheckedFilter
};


