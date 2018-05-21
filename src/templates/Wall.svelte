<div id="wall">
    <div class="wall-filter">
        <div class="selector">
            <select id="filterText" class="btn btn-secondary dropdown-toggle btn-lg btn-block" on:change="set({ filter: event.target.value })">
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
    </div>

    <div class="wall-cards">
        <div class="row">    
            {{#each filteredCards as card}}
                <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                    <Card :card />
                </div>
            {{/each}}
        </div>
    </div>

    <div class="wall-misc">
        <div class="container">
            <div class="east-nav">
                <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="contribute-tab" data-toggle="pill" href="#contribute" role="tab" aria-controls="Contribute" aria-selected="true"><i class="fa fa-plus-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Contribute</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="support-tab" data-toggle="pill" href="#support" role="tab" aria-controls="Support" aria-selected="false"><i class="fa fa-comments-o" aria-hidden="true"></i>&nbsp;&nbsp;Support</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="about-tab" data-toggle="pill" href="#about" role="tab" aria-controls="About" aria-selected="false"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;&nbsp;About</a>
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