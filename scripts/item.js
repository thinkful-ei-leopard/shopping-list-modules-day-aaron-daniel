

const validateName = function(name) {
    if (name === ""){
        throw new TypeError ('Name must not be blank!');
    }
    
};

const create = function(name) {
    const item= {
        id: cuid (),
        name: name,
        checked: false,
    }
    return item;
}

export default {
    validateName,
    create,
};