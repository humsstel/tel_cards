<div class="col-md-12">
	<div class="card mainCard">
		<div class="card-header" role="navigation">
			<ul class="nav nav-tabs card-header-tabs justify-content-center">
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'card' ? 'active' : ''}}" id="app-tab" href="#appgenerator" on:click="store.set({ currentPage: 'card' })"><i class="fa fa-magic" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'catalogue' ? 'active show' : ''}}" id="catalogue-tab" href="#catalogue" on:click="store.set({ currentPage: 'catalogue' })"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'contribute' ? 'active show' : ''}}" id="contribute-tab" href="#contribute" on:click="store.set({ currentPage: 'contribute' })"><i class="fa fa-plus-square-o" aria-hidden="true"></i></a>
				</li>
				<li class="nav-item">
					<a class="nav-link {{ $currentPage === 'about' ? 'active show' : ''}}" id="about-tab" href="#about" on:click="store.set({ currentPage: 'about' })"><i class="fa fa-info" aria-hidden="true"></i></a>
				</li>
			</ul>
		</div>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade {{ $currentPage === 'card' ? 'active show' : ''}}" id="appgenerator" role="tabpanel" aria-labelledby="app-tab">
				<Card :card />
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
	import "../css/mainmenu.css"
	import "../css/font-awesome-animation.min.css"

	import Card from './Card.svelte'
	import Catalogue from './Catalogue.svelte'
	import Contribute from './Contribute.svelte'
	import About from './About.svelte'

	export default {
		components: {
			Card,
			Catalogue,
			Contribute,
			About,
		},
		computed: {
			card: ($cards, $currentCard) => $cards.find(card => card.id === $currentCard)
		}
	}
</script>