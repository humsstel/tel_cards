import { Store } from 'svelte/store'

// Base templates
import App from './templates/App.svelte'
import Wall from './templates/Wall.svelte'

// data for all the cards
import cards from './cards.js'

// Define store that will comprise the card data and state of the app
class AppStore extends Store {

	// Method to load a random card (callable from any component)
	loadRandomCard(currentCardId) {
		// Remove current card so we don't randomly select it
		const cards = this.get('cards').filter(card => card.id !== currentCardId)
        const card = cards[Math.floor(Math.random() * cards.length)]
        this.set({
			currentCard: card.id,
		})
	}
}

// Expand each of the 'activities' for each card to include the full information for that activity
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

// Create the store with initial state
const store = new AppStore({
	cards,
	currentCard: cards[Math.floor(Math.random() * cards.length)].id,
	currentPage: 'card',
})

const searchParams = new URL(document.location).searchParams
const display = searchParams.get('display')

const BaseTemplate = display === 'wall' ? Wall : App

// Create the app using App as the default template and pass it the store
const app = new BaseTemplate({
	target: document.body,
	store,
})

export default app;