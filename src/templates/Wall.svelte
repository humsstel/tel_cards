<div id="wall">
    <div class="ui-layout-north">
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

    <div class="ui-layout-center">
        <div class="container">
            <div class="row">    
                {{#each filteredCards as card}}
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <Card :card />
                    </div>
                {{/each}}
            </div>
        </div>
    </div>

    <div class="ui-layout-east">
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
        </div>
    </div>
</div>

<style>
    .card-container {
        height: 840px;
    }
</style>
    
<script>
    // All the sub-templates
	import Card from './Card.svelte'
	import Contribute from './Contribute.svelte'
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