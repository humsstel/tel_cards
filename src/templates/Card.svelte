<div class="card-container manual-flip {{flipped ? 'hover' : ''}}">
    <style type="text/css">
        .cardflipper, .smalllogo, .nextcard:hover {
            background-color: {{ card.colour }}
        }
    </style>
    <div class="col-md-12">
        <div class="card noborder">
            <div class="front">
                <div class="cardflipper" role="button" on:click="rotateCard()">
                    <i class="fa fa-repeat" aria-hidden="true"></i> Flip card
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
                    <div class="blooms-pills-main">
                        <h5>
                            {{#each card.activities as activity}}
                            <span class="badge activity {{ activity.name }}" data-toggle="tooltip" data-placement="top" title="{{ activity.description }}" aria-hidden="true">{{ activity.name }}</span>&nbsp;
                            {{/each}}
                            <i class="fa fa-question-circle-o" data-toggle="tooltip" data-placement="top" title="Activities this app can support" aria-hidden="true"></i>
                        </h5>
                    </div>
                    <div class="blooms-pills-sub">
                        {{#each card.uses as use}}
                        <span class="badge sub">{{ use }} </span>&nbsp;
                        {{/each}} 
                        <i class="fa fa-question-circle-o" data-toggle="tooltip" data-placement="top" title="Examples of how this app can be used" aria-hidden="true"></i>
                    </div>
                    <div class="submitter">
                        <div class="submitterimg">
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                        </div>
                        <div class="submitterinfo">
                            <p class="small"><b>Submitted by</b><br>{{ card.submitter.name }}<span class="submitterschool">&nbsp;| {{ card.submitter.title }}</span></p>
                        </div>
                    </div>
                </div>
                <div class="nextcard faa-parent animated-hover" role="button" on:click="store.loadRandomCard()">
                    <i class="fa fa-magic faa-shake animated-hover" aria-hidden="true"></i>&nbsp;&nbsp;Try another app
                </div>
            </div><!-- End front panel -->

            <div class="back">
                <div class="cardflipper" role="button" on:click="rotateCard()">
                    <i class="fa fa-repeat" aria-hidden="true"></i> Flip back
                </div>
                <div class="mediabackground">
                    <div class="videocontainer">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item youtube" src="{{ card.videoURL }}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="frameworkheading">
                    <div class="frameworktext1">
                        <p><strong>Level</strong></p>
                    </div>
                    <div class="frameworktext2">
                        <p><strong>Example Activities</strong></p>
                    </div>
                </div>
                <div class='card-body framework'>
                    <div class="thermometer thermometer1">
                        <h2><i class="fa fa-thermometer-0 usesimage" aria-hidden="true"></i></h2>
                        <p><strong>Enhance</strong></p>
                    </div>
                    <div class="usestext usestext1">
                        <p>{{ card.framework.enhance }}</p>
                    </div>
                    <div class="thermometer thermometer2">
                        <h2><i class="fa fa-thermometer-2" aria-hidden="true"></i></h2>
                        <p><strong>Empower</strong></p>
                    </div>
                    <div class="usestext usestext2">
                        <p>{{ card.framework.empower }}</p>
                    </div>
                    <div class="thermometer thermometer3">
                        <h2><i class="fa fa-thermometer-4 usesimage" aria-hidden="true"></i></h2>
                        <p><strong>Extend</strong></p>
                    </div>
                    <div class="usestext usestext3">
                        <p>{{ card.framework.extend }}</p>
                    </div>
                </div>
                <div class="nextcard faa-parent animated-hover" role="button" on:click="store.loadRandomCard(card.id)">
                    <i class="fa fa-magic faa-shake animated-hover" aria-hidden="true"></i>&nbsp;&nbsp;Try another app
                </div>
            </div> <!-- End back panel -->
        </div> <!-- End of card -->
    </div> <!-- End of column -->
</div> <!-- End of child card container -->

<script>
    import "../css/card.css"

    export default {
        oncreate() {
            // Whenever the current card changes make sure the card is in the unflipped state
            this.store.observe('currentCard', res => {
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