// ----[START]----oddzielam, żeby się nie myliło----[START]----
class RandomPicture{
    constructor(width = '600', height = '600'){
        this.width=width;
        this.height=height;
    }
    RandomCategory(){
        const pictureCategory = [
            'abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'];
        let randomIndex = Math.floor(Math.random()*pictureCategory.length);
        return pictureCategory[randomIndex];
    }
    GetImage(){
        const image = new Image(this.width, this.height);
        image.src = `http://lorempixel.com/${this.width}/${this.height}/${this.RandomCategory()}/`;
        return image;
    }
}
class Gallery {
    constructor(addSelector, numberOfItems=6){
        this.images = [];
        this.galleryContainer=addSelector;
        this.numberOfItems=numberOfItems;
    }
    addImage=(image, container = this.temporaryContainer)=>container.push(image);
    showImage(index=0){
        if (index===this.numberOfItems) return
        let picture = new RandomPicture().GetImage();
        picture.addEventListener('load',()=>{
            this.galleryContainer.appendChild(picture);
            this.showImage(++index);
        })
    }
}
const documentMain = document.querySelector('main');
documentMain.textContent='';
const gallery = new Gallery(documentMain);
gallery.showImage();
// ----[KONIEC]----oddzielam, żeby się nie myliło----[KONIEC]----