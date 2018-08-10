<div class="col-md-12">
	<div class="card mainCard">
		<div class="card-header" role="navigation">
			<ul class="nav nav-tabs card-header-tabs justify-content-center">
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'card' ? 'active' : ''}}" id="app-tab" href="#appgenerator" on:click="store.set({ currentPage: 'card' })"><i class="fas fa-magic" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'catalogue' ? 'active show' : ''}}" id="catalogue-tab" href="#catalogue" on:click="store.set({ currentPage: 'catalogue' })"><i class="far fa-bookmark" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'contribute' ? 'active show' : ''}}" id="contribute-tab" href="#contribute" on:click="store.set({ currentPage: 'contribute' })"><i class="far fa-plus-square" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'about' ? 'active show' : ''}}" id="about-tab" href="#about" on:click="store.set({ currentPage: 'about' })"><i class="fas fa-info" aria-hidden="true"></i></a>
				</li>
			</ul>
		</div>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade {{ $currentPage === 'card' ? 'active show' : ''}}" id="appgenerator" role="tabpanel" aria-labelledby="app-tab">
				<div class="container">
					<Card :card />
				</div>
			</div>
			<div class="tab-pane fade {{ $currentPage === 'catalogue' ? 'active show' : ''}}" id="catalogue" role="tabpanel" aria-labelledby="catalogue-tab">
				<Catalogue />
			</div>
			<div class="tab-pane fade {{ $currentPage === 'contribute' ? 'active show' : ''}}" id="contribute" role="tabpanel" aria-labelledby="contribute-tab">
				<Contribute />
			</div>
			<div class="tab-pane fade {{ $currentPage === 'about' ? 'active show' : ''}}" id="about" role="tabpanel" aria-labelledby="about-tab">
				<About />
			</div>
		</div>
	</div>
</div>

<script>
	// All the sub-templates
	import Card from './Card.svelte'
	import Catalogue from './Catalogue.svelte'
	import Contribute from './Contribute.svelte'
	import About from './About.svelte'

	export default {
		oncreate() {
			// Child is positioned absolutely, so this forces container to fill height of child
			//const childHeight = document.querySelector('.card').scrollHeight
			//document.querySelector('#appgenerator').style.height = `${childHeight}px`
		},

		// Expose the templates as components that can be referened in this template
		components: {
			Card,
			Catalogue,
			Contribute,
			About,
		},

		// Compute the card object by indexing the currentCard in the cards array
		computed: {
			card: ($cards, $currentCard) => $cards.find(card => card.id === $currentCard)
		}
	}
</script>