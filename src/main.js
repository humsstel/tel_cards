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

cards.forEach(card => {
	const activities = [
		{ name: "create", description: "Build learning resources, from scratch or remixing existing materials." },
		{ name: "captivate", description: "Create interactive learning opportunities that engage." },
		{ name: "check", description: "Gauge students understanding." },
		{ name: "connect", description: "Communicate with students in real time or asynchronously." },
		{ name: "collaborate", description: "A platform for collaboration and co-creation." },
		{ name: "curate", description: "Collect, organise and share content." },
		{ name: "capture", description: "Record an event, activity or artefact." },
	]
	card.activities = card.activities.map(name => activities.find(activity => activity.name === name))
})

const store = new AppStore({
	cards,
	currentCard: 'socrative',
	currentPage: 'cards',
})

const app = new App({
	target: document.body,
	store,
})

export default app;