<div class="card-container manual-flip">
    <div class="col-md-12">
        <div class="bs-callout bs-callout-catalogue clearfix">
            <div class="icon">
                <i class="fa fa-bookmark-o" aria-hidden="true"></i> 
            </div>
            <h4>Catalogue</h4>
            <p>Browse the list or use the dropdown filter to find an application that supports a specific activity.</p>
        </div>
        <div class="dropdown">
            <select id="filterText" class="btn btn-secondary dropdown-toggle btn-block" onchange='filterText();'>
                <option selected value="all">Find an app to...</option>
                <option value="Create">...create learning resources</option>
                <option value="Connect">...communicate with students electronically</option>
                <option value="Collaborate">...act as a platform for collaboration</option>
                <option value="Curate">...collect, organise and share content</option>
                <option value="Capture">...record an event or artefact</option>
                <option value="Captivate">...create interactive learning opportunities</option>
                <option value="Check">...gauge students understanding</option>
                <option value="">All apps</option>
            </select>
        </div>
        <div class="card cataloguepane" data-spy="scroll">
            <div class="front">
                <ul class="list-group list-group-flush">
                    {{#each $cards as card}}
                    <a href="#" class="list-group-item list-group-item-action" on:click="store.set({ currentPage: 'card', currentCard: card.id })">
                        <div class="applist">
                            <h5><img style="display: inline; height: 1em; vertical-align: top;" src="{{ card.assets.logo.image }}"> {{ card.name }}</h5>
                            <p class="categories">
                                {{#each card.activities as activity}}
                                <span class="badge activity {{ activity.name }}">{{ activity.name }}</span>&nbsp;
                                {{/each}}
                            </p>
                            <p class="submitter"><small>Submitted by {{ card.submitter.name }} | {{ card.submitter.title }}</small></p>
                            <p class="appinfo">{{ card.tagline }}</p>
                        </div>
                    </a>
                    {{/each}}
                </ul>
            </div>
        </div>
    </div>
</div>