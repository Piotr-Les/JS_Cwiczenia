class RImage {
	constructor(ImgWidth = '400', ImgHeight = '300') {
		this.width = ImgWidth;
		this.height = ImgHeight;
	}
	createImg(index) {
		const image = new Image(this.width, this.height);
		image.src = `https://picsum.photos/${this.width}/${this.height}?random=${index}`;
		return image;
	}
}
class ImgContainer {
	constructor(containerSelector, numberOfImgs) {
		this.container = containerSelector;
		this.numberOfImgs = numberOfImgs;
	}
	displayImg(i = 0) {
		if (i === this.numberOfImgs) return;
		let img = new RImage().createImg(i);
		img.addEventListener('load', () => {
			this.container.appendChild(img);
			this.displayImg(++i);
		});
	}
}
const container = document.querySelector('.container');
const gallery = new ImgContainer(container, 5);
gallery.displayImg();
// ----[START]----oddzielam, żeby się nie myliło----[START]----
class RandomPicture {
	constructor(width = '600', height = '600') {
		this.width = width;
		this.height = height;
	}
	RandomCategory() {
		const pictureCategory = [
			'abstract',
			'animals',
			'business',
			'cats',
			'city',
			'food',
			'nightlife',
			'fashion',
			'people',
			'nature',
			'sports',
			'technics',
			'transport',
		];
		let randomIndex = Math.floor(Math.random() * pictureCategory.length);
		return pictureCategory[randomIndex];
	}
	GetImage() {
		const image = new Image(this.width, this.height);
		image.src = `http://lorempixel.com/${this.width}/${
			this.height
		}/${this.RandomCategory()}/`;
		return image;
	}
}
class Gallery {
	constructor(addSelector, numberOfItems = 6) {
		this.galleryContainer = addSelector;
		this.numberOfItems = numberOfItems;
	}
	showImage(index = 0) {
		if (index === this.numberOfItems) return;
		let picture = new RandomPicture().GetImage();
		picture.addEventListener('load', () => {
			this.galleryContainer.appendChild(picture);
			this.showImage(++index);
		});
	}
}
const documentMain = document.querySelector('main');
documentMain.textContent = '';
const gallery = new Gallery(documentMain);
gallery.showImage();
// ----[KONIEC]----oddzielam, żeby się nie myliło----[KONIEC]----
//----[START]----Radek----[START]----

//----[KONIEC]----Radek----[KONIEC]----