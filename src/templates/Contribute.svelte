<div class="card-container manual-flip">
    <div class="col-md-12">
        <div class="bs-callout bs-callout-contribute clearfix">
            <div class="icon">
                <i class="fa fa-plus-square-o" aria-hidden="true"></i>
            </div>
            <h4>Contribute</h4>
            <p>Help others discover new technologies by telling us about the apps you use.</p>
            <p class="instruction">Complete the form below and we'll be in touch to discuss creating a custom card for your suggestion.</p>
        </div>
        <div class="bs-callout bs-thanks clearfix" id="thankyou_message">
            <div class="icon">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 
            </div>
            <p><strong>Alright! </strong>Thanks for making a suggestion. <a href="#" on:click="resetForm()">Click here to make another.</a></p>
        </div>
        <form id="gform" on:submit="submitForm(event)">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="">
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="">
            </div>
            <div class="form-group">
            <label for="location">School/Faculty/Directorate:</label>
            <input class="form-control" id="location" name="location" aria-describedby="emailHelp" placeholder="">
            </div>
            <div class="form-group">
                <label for="message">App suggestion:</label>
                <textarea class="form-control" id="message" name="message" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label class="sr-only">Keep this field blank</label>
                <input id="honeypot" type="text" name="honeypot" value="" />
            </div>
            <button type="submit" class="btn btn-block submitbutton">
                Submit
            </button>
        </form>                        
    </div>
</div>

<script>
    export default {
        // Custom methods that can be called in the template
        methods: {

            // Resets the form to a fresh state
            resetForm() {
                document.getElementById('gform').style.display = 'block'; // show form
                document.getElementById('thankyou_message').style.display = 'none'; // hide thank you message
                document.getElementById('gform').reset(); // resets form
            },

            // Submits the form data to be captured by google doc
            submitForm(event) {
                const remoteURL = "https://script.google.com/macros/s/AKfycbwdPK1Xn_XdIKYYnMLltp6u51nGpuRltLkwPvMUyLmMY1biPhpz/exec"

                const isValidEmail = email => {
                    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                    return re.test(email)
                }

                const isBot = honeypot => honeypot

                const getFormData = () => {
                    const elements = document.getElementById("gform").elements // all form elements
                    const fields = Object.keys(elements).map(k => {
                        if (elements[k].name !== undefined) {
                            return elements[k].name
                        // special case for Edge's html collection
                        } else if(elements[k].length > 0) {
                            return elements[k].item(0).name
                        }
                    }).filter((item, pos, self) => {
                        return self.indexOf(item) == pos && item
                    })
                    
                    const data = {}
                    fields.forEach((k) => {
                        data[k] = elements[k].value
                        let str = "" // declare empty string outside of loop to allow
                                     // it to be appended to for each item in the loop
                        if (elements[k].type === "checkbox") { // special case for Edge's html collection
                            str = str + elements[k].checked + ", "  // take the string and append 
                                                                    // the current checked value to 
                                                                    // the end of it, along with 
                                                                    // a comma and a space
                            data[k] = str.slice(0, -2)  // remove the last comma and space 
                                                        // from the  string to make the output 
                                                        // prettier in the spreadsheet
                        } else if (elements[k].length) {
                            for (let i = 0; i < elements[k].length; i++) {
                                if (elements[k].item(i).checked) {
                                    str = str + elements[k].item(i).value + ", " // same as above
                                    data[k] = str.slice(0, -2)
                                }
                            }
                        }
                    })

                    return data;
                }

                const handleFormSubmission = event => {
                    event.preventDefault()      // we are submitting via xhr below
                    const data = getFormData()  // get the values submitted in the form

                    if (isBot(data.honeypot)) return false  //if honeypot field is filled, form will not be submitted

                    if (!isValidEmail(data.email)) {   // if email is not valid show error
                        document.getElementById("Email").style.display = 'block'
                        return false
                    } else {
                        const xhr = new XMLHttpRequest()
                        xhr.open('POST', remoteURL)
                        // xhr.withCredentials = true
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                        xhr.onreadystatechange = function() {
                            //console.log(xhr.status, xhr.statusText)
                            //console.log(xhr.responseText);
                            document.getElementById('gform').style.display = 'none' // hide form
                            document.getElementById('thankyou_message').style.display = 'block'
                            return
                        }
                        // url encode form data for sending as post data
                        const encoded = Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&')
                        xhr.send(encoded)
                    }
                }

                handleFormSubmission(event)
            }
        }
    }
</script>