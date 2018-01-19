import App from './templates/App.html'

import data from './data.json'

const app = new App({
	target: document.body,
	data: {
        	name: 'world',
        	modules: data.modules,
	}
});

export default app;