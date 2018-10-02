<div class="card-container manual-flip">
    <div class="col-md-12">
        <div class="bs-callout bs-callout-catalogue clearfix">
            <div class="icon">
                <i class="far fa-bookmark" aria-hidden="true"></i> 
            </div>
            <h4>Catalogue</h4>
            <p>Browse the list or use the dropdown filter to find an application that supports a specific activity.</p>
        </div>
        <div class="dropdown">
            <select id="filterText" class="btn btn-secondary dropdown-toggle btn-block" on:change="set({ filter: event.target.value })">
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
        <div class="card cataloguepane" data-spy="scroll">
            <div class="front">
                <ul class="list-group list-group-flush">
                    {{#each filteredCards as card}}
                    <a href="#" class="list-group-item list-group-item-action" on:click="store.set({ currentPage: 'card', currentCard: card.id })">
                        <div class="applist">
                            <h5><img style="display: inline; height: 1em; vertical-align: top;" src="{{ card.assets.logo.image }}"> {{ card.name }}</h5>
                            <p class="categories">
                                {{#each card.activities as activity}}
                                <span class="badge activity {{ activity.name }}">{{ activity.name }}</span>&nbsp;
                                {{/each}}
                            </p>
                            <p class="submittercatalogue"><small>Submitted by {{ card.submitter.name }} | {{ card.submitter.title }}</small></p>
                            <p class="appinfo">{{ card.tagline }}</p>
                        </div>
                    </a>
                    {{/each}}
                </ul>
            </div>
        </div>
    </div>
</div>

<script>
    export default {
        // Set the initial filter state to show all cards
        data() {
            return {
                filter: 'all'
            }
        },

        // Compute the filteredCards array so that it only contains cards matching the current filter
        computed: {
            filteredCards: ($cards, filter) => {
                if (filter === 'all') return $cards
                
                return $cards.filter(card => {
                    return card.activities.map(a => a.name).indexOf(filter) !== -1
                })
            }
        }
    }
</script>