// ----[START]----oddzielam, żeby się nie myliło----[START]----
const documentMain = document.querySelector('main');
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
    GetImages(imagesNumber = 6){
        const images = [];
        for (let i=0;i<imagesNumber;i++){
            images.push(this.GetImage())
        }
        return images;
    }
}
class Gallery {
    constructor(){
        this.images = [];
        this.isLoaded = [];
        this.width = 0;
        this.height =0;
        this.galleryContainer;
    }
    sizeSetter(){
        this.images.forEach((image)=>{
            if (image.height>this.height) this.height=image.height;
        })
        this.images.forEach((image)=>this.width+=image.width);  
    }
    addImage=(image)=>this.images.push(image);
    addImages(images){
        images.forEach((image)=>this.addImage(image));
    }
    create(){
        let galleryContainer = document.createElement('div');
        galleryContainer.classList = 'pictureContainer';
        this.sizeSetter();
        galleryContainer.setAttribute('width',this.width + 'px');
        galleryContainer.setAttribute('height',this.height + 'px');
        this.galleryContainer=galleryContainer;
        return galleryContainer;
    }
    showImage(index=0){
        if (index===this.images.length) return
        this.images[index].addEventListener('load',(event)=>{
            this.galleryContainer.appendChild(this.images[index]);
            this.showImage(++index);
        })
    }
}
const pictures = new RandomPicture().GetImages();
documentMain.textContent='';
const gallery = new Gallery();
gallery.addImages(pictures);
documentMain.appendChild(gallery.create());
gallery.showImage();
// ----[KONIEC]----oddzielam, żeby się nie myliło----[KONIEC]----