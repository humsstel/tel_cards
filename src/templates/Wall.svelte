<div id="wall" class="mainwall">

    <div class="wall-filter">
        <div class="selector">
            <select id="filterText" class="btn btn-secondary dropdown-toggle btn-lg btn-block transformer" on:change="set({ filter: event.target.value })">
                <option selected value="all">Find an app to...</option>
                <option value="create">...create learning resources</option>
                <option value="connect">...communicate with students electronically</option>
                <option value="collaborate">...act as a platform for collaboration</option>
                <option value="curate">...collect, organise and share content</option>
                <option value="capture">...record an event or artefact</option>
                <option value="captivate">...create interactive learning opportunities</option>
                <option value="check">...gauge students understanding</option>
                <option value="all">All apps</option>
            </select>
        </div>
        <button class="btn btn-lg btn-outline-secondary" id="collapser" type="button" onclick="document.getElementsByClassName('wall-misc')[0].classList.toggle('collapsed'); document.getElementsByClassName('fa-chevron-right')[0].classList.toggle('fa-rotate-180');"><i class="fas fa-chevron-right" id="collapser-icon"></i></button>
    </div>

    <div class="instructions">
        <i class="fas fa-map-signs" aria-hidden="true"></i>&nbsp;<p>Browse the wall to find out what technologies are available for learning and teaching. <strong>Found something you're interested in?</strong> Use the <strong>Support</strong> tab for details on who to speak to for ideas and support.</p>
    </div>

    <div class="wall-cards">
        <!-- <div class="row">     -->
            {{#each filteredCards as card}}
                <div class="card-item">
                    <Card :card />
                </div>
            {{/each}}
        <!-- </div> -->
    </div>

    <div class="wall-misc">
        <div class="container">
            <div class="east-nav">
                <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="contribute-tab" data-toggle="pill" href="#contribute" role="tab" aria-controls="Contribute" aria-selected="true"><i class="far fa-plus-square" aria-hidden="true"></i><br>Contribute</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="support-tab" data-toggle="pill" href="#support" role="tab" aria-controls="Support" aria-selected="false"><i class="far fa-comments" aria-hidden="true"></i><br>Support</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="about-tab" data-toggle="pill" href="#about" role="tab" aria-controls="About" aria-selected="false"><i class="fas fa-info" aria-hidden="true"></i><br>About</a>
                    </li>
                </ul>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="contribute" role="tabpanel" aria-labelledby="contribute-tab">
                    <Contribute />
                </div>
                <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <About />
                </div>
                <div class="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
                    <Support />
                </div>
            </div>
        </div>
    </div>
</div>
    
<script>
    // All the sub-templates
	import Card from './Card.svelte'
	import Contribute from './Contribute.svelte'
    import Support from './Support.svelte'
	import About from './About.svelte'

    export default {
        
        // Set the initial filter state to show all cards
        data() {
            return {
                filter: 'all'
            }
        },

        // Expose the templates as components that can be referened in this template
		components: {
			Card,
			Contribute,
            Support,
			About,
		},

        // Compute the filteredCards array so that it only contains cards matching the current filter
        computed: {
            filteredCards: ($cards, filter) => {
                console.log(filter)

                if (filter === 'all') return $cards
                
                return $cards.filter(card => {
                    return card.activities.map(a => a.name).indexOf(filter) !== -1
                })
            }
        }
    }



</script>