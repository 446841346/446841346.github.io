import _ from 'lodash';
import './style.less';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';

	// var myIcon = new Image();
	// myIcon.src = Icon;

	// element.appendChild(myIcon);
	btn.onclick = e => { 
		return import(/* webpackChunkName: "print" */ './print').then(module => {
			var print = module.default;
			print();
	})}
	// console.log(data);
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());