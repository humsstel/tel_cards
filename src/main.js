import { Store } from 'svelte/store'

import App from './templates/App.html'
import cards from './cards.json'

class AppStore extends Store {
	loadRandomCard(currentCardId) {
		const cards = this.get('cards').filter(card => card.id !== currentCardId)
        const card = cards[Math.floor(Math.random() * cards.length)]
        this.set({
			currentCard: card.id,			
		})
	}
}

const store = new AppStore({
	cards,
	currentCard: 'socrative',
})

const app = new App({
	target: document.body,
	store,
})

export default app;