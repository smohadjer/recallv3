export default class Modal {
	constructor(options) {
		this.el = options.element;
		let self = this;

    self.init();
	}

	init() {

    console.log(this.el);
	}
}
