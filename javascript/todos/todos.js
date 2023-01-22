let list = []
let listItems = ''
// let list = 
// let remove = 

//while (true) {
while (listItems != 'quit') {
    let listItems = prompt('Add a todo')

    //if (listItems === 'quit') { break; }

    //    else
    if (listItems === 'new') {
        let itemAdded = prompt('Add next item')
        list.push(itemAdded)
        console.log(list)
    }

    else if (listItems === 'list') {
        for (let item of list) {
            console.log(`**${list.indexOf(item)}**${item}**`)
        }
    }

    else if (listItems === 'delete') {
        let indexDelete = prompt('write an index of the item to delete')
        if (indexDelete > -1) {
            list.splice(indexDelete, 1)
        }

    }

}









