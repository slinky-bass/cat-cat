class ListItemViewModel {
    constructor(listItem, itemImageSrc) {
        this.imageSrc = itemImageSrc;
        this.id = listItem.id;
        this.temperament = listItem.temperament;
        this.title = listItem.name;
        this.description = listItem.description;
    }
}

export default ListItemViewModel;