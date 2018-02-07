import { Store } from 'svelte/store'

import App from './templates/App.html'
import cards from './cards.json'

const store = new Store({
	cards,
	currentCard: 'socrative',
})

const app = new App({
	target: document.body,
	store,
})

export default app;