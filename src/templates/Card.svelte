<div class="manual-flip {{flipped ? 'hover' : ''}}">
    <style type="text/css">
        .{{ card.id }} .cardflipper, .nextcard:hover {
            background-color: {{ card.colour }};
        }
        .{{ card.id }} .titlebarfront {
            background: linear-gradient(
                rgba(52, 58, 64, 0.9) 0%, 
                rgba(52, 58, 64, 0.9) 95%
            ), url({{card.assets.cover.image }});
            {{ card.assets.cover.styles }}
        }
        .{{ card.id }} .smalllogo {
            background-image: url({{ card.assets.logo.image }});
            {{ card.assets.logo.styles }}
        }
    </style>
    <div class="card-container">
        <div class="app-card card noborder {{ card.id }}">
            <div class="front face">
                <div class="cardflipper" role="button" on:click="rotateCard()">
                    <div><i class="fas fa-redo-alt faa-spin animated-hover" aria-hidden="true"></i> Flip card</div>
                </div>
                <div class="titlebarfront">
                    <a class="smalllogo faa-tada animated-hover" href="{{ card.url }}" target="_blank">
                    </a>
                    <div class="apptitle">
                    <h5>{{ card.name }}</h5>
                    <h6>{{ card.tagline }}</h6>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ card.description }}</p>
                    <a class="tool-link" href="{{ card.url }}" target="_blank">{{ card.url }}</a>
                </div>
                <div class="details">
                    <div class="pills-main">
                        <h5>
                            {{#each card.activities as activity}}
                            <span class="badge activity {{ activity.name }}" data-toggle="tooltip" data-placement="top" title="{{ activity.description }}" aria-hidden="true">{{ activity.name }}</span>&nbsp;
                            {{/each}}
                            <i class="fa fa-question-circle-o" data-toggle="tooltip" data-placement="top" title="Activities this app can support" aria-hidden="true"></i>
                        </h5>
                    </div>
                    <div class="pills-sub">
                        {{#each card.uses as use}}
                        <span class="badge sub">{{ use }} </span>&nbsp;
                        {{/each}} 
                        <i class="fa fa-question-circle-o" data-toggle="tooltip" data-placement="top" title="Examples of how this app can be used" aria-hidden="true"></i>
                    </div>
                    <div class="submitter">
                        <div class="submitterimg">
                            <i class="far fa-user" aria-hidden="true"></i>
                        </div>
                        <div class="submitterinfo">
                            <p class="small"><b>Submitted by</b><br>{{ card.submitter.name }}<span class="submitterschool">&nbsp;| {{ card.submitter.title }}</span></p>
                        </div>
                    </div>
                </div>
                <div class="nextcard" role="button" on:click="store.loadRandomCard(card.id)">
                    <div><i class="fas fa-magic" aria-hidden="true"></i>&nbsp;&nbsp;Try another app</div>
                </div>
            </div><!-- End front panel -->

            <div class="back face">
                <div class="cardflipper" role="button" on:click="rotateCard()">
                    <div><i class="fa faa-spin fa-repeat" aria-hidden="true"></i> Flip back</div>
                </div>
                <div class="mediabackground">
                    <div class="videocontainer">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item youtube" src="{{ card.videoURL }}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="frameworkheading">
                    <p class="frameworktext1">Level</p>
                    <p class="frameworktext2">Example Activities</p>
                </div>
                <div class='card-body framework'>
                    <div class="thermometer thermometer1">
                        <h2><i class="fas fa-thermometer-quarter usesimage" aria-hidden="true"></i></h2>
                        <p><strong>Enhance</strong></p>
                    </div>
                    <div class="usestext usestext1">
                        <p>{{ card.framework.enhance }}</p>
                    </div>
                    <div class="thermometer thermometer2">
                        <h2><i class="fas fa-thermometer-half" aria-hidden="true"></i></h2>
                        <p><strong>Empower</strong></p>
                    </div>
                    <div class="usestext usestext2">
                        <p>{{ card.framework.empower }}</p>
                    </div>
                    <div class="thermometer thermometer3">
                        <h2><i class="fas fa-thermometer-full usesimage" aria-hidden="true"></i></h2>
                        <p><strong>Extend</strong></p>
                    </div>
                    <div class="usestext usestext3">
                        <p>{{ card.framework.extend }}</p>
                    </div>
                </div>
                <div class="nextcard" role="button" on:click="store.loadRandomCard(card.id)">
                    <div><i class="fas fa-magic" aria-hidden="true"></i>&nbsp;&nbsp;Try another app</div>
                </div>
            </div> <!-- End back panel -->
        </div> <!-- End of card -->
    </div> <!-- End of column -->
</div> <!-- End of child card container -->

<script>
    export default {
        oncreate() {
            // What the currentCard variable for changes
            this.store.observe('currentCard', res => {
                // Child is positioned absolutely, so this forces container to fill height of child on re-render
                setTimeout(() => {
                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip()
                    })
                }, 20)

                // When the current card changes make sure the card is in the unflipped state
                this.set({ flipped: false })
            })
        },
        
        data() {
            return {
                // Set the card to unflipped state by default
                flipped: false,
            }
        },

        methods: {
            rotateCard() {
                this.set({ flipped: !this.get('flipped') })
            },
        }
    }
</script>