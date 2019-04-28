class ListItemViewModel {
    constructor(listItem) {
        this.imageSrc = "";
        this.id = listItem.id;
        this.title = listItem.name;
        this.description = listItem.description;
    }
}

export default ListItemViewModel;