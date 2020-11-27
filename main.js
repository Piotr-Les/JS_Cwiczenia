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
        this.width = window.innerWidth;
        this.height =0;
        this.imageInBoxNumber=0;
    }
    sizeSetter(){
        this.images.forEach((image)=>{
            if (image.height>this.height) this.height=image.height;
        })
        let width = 0;
        this.images.forEach((image)=>{
            if(image.width>width) width=image.width;
        })
        this.imageInBoxNumber = Math.floor(this.width/width);    
    }
    addImage=(image)=>this.images.push(image);
    addImages(images){
        images.forEach((image)=>this.addImage(image));
    }
    create(){
        let galleryContainer = document.createElement('div');
        galleryContainer.classList = 'pictureContainer';
        this.sizeSetter();
        galleryContainer.setAttribute('width',this.width);
        galleryContainer.setAttribute('height',this.height);
        // this.images.forEach((image) => galleryContainer.appendChild(image))
        return galleryContainer;
    }
}

const pictures = new RandomPicture().GetImages();
// documentMain.textContent='';
// documentMain.appendChild(pictures[0]);
// documentMain.appendChild(pictures[1]);
// documentMain.appendChild(pictures[2]);
// documentMain.appendChild(pictures[3]);
// documentMain.appendChild(pictures[4]);
// documentMain.appendChild(pictures[5]);

const gallery = new Gallery();
gallery.addImages(pictures);
documentMain.appendChild(gallery.create())