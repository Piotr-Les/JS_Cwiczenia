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
