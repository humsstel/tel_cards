import { Store } from 'svelte/store'

import App from './templates/App.html'
import data from './data.json'

const store = new Store({
	name: 'world',
	cards: data.modules,
})

const app = new App({
	target: document.body,
	store
});

export default app;