# The Solutions App

The Solutions app is an open education resource (OER) that has been built to capture, showcase and develop digital practice amongst educators and students.

At [Keele University](https://www.keele.ac.uk), Solutions is being used to demonstrate how digital tools are helping tutors to create engaging learning experiences. Inspired by microlearning resources such as [#1minuteCPD](https://1minutecpd.wordpress.com/) (Manchester Metropolitan University), and incorporating the [3e Framework](https://staff.napier.ac.uk/services/vice-principal-academic/academic/TEL/TechBenchmark/Pages/Introduction.aspx) (Edinburgh Napier University), the Solutions app addresses the overwhelming availability of technologies available for learning and teaching, and curates them in collaboration with educators who have adopted such tools. The app categorises each technology, providing users with suggestions (or just-in-time solutions) along pedagogic themes. 

Solutions comes in 2 formats; a single card view and a card wall. Both have been designed responsively, so work across most screen sizes and devices (Google Chrome and Mozilla Firefox browsers recommended).  

### Single Card View

The single card view displays 1 digital tool at a time and has been for smaller online spaces, for example, a shared section of a virtual learning environment (VLE). 

### Card Wall

The card wall presents all available tools in a grid-like layout and can exist as a webpage in its own right, or as part of a larger online space (e.g. a VLE tab).  

![Screenshot of Solutions card wall](https://github.com/humsstel/tel_cards/blob/master/screenshots/solutions_app_wall.jpg)

## Setting up your own Solutions app

The steps below detail how to set up and maintain your own instance of the Solutions app, ready to populate with content.

### Run the application with hot-reloading (launches dev server)
Use `yarn start` or if you don't have yarn, `npm run start`.

A local development server will now be running at http://localhost:1234. To see the wall display view, navigate to http://localhost:1234?display=wall.

### Compile production app to dist
Use `yarn build` or if you don't have yarn, `npm run build`.

### Deploy the built bundle and assets to GitHub Pages
Use `yarn deploy` or if you don't have yarn, `npm run deploy`.

### Embedding the Solutions App using GitHub Pages
Both the single card view and card wall can be embedded directly, however, if you intend to embed the Solutions app within the Blackboard VLE, you may need to reference the included iframe pages for it to appear. For example:

* To embed the single card view using an iframe within Blackboard, you should reference the iframe_index.html file.

* To embed the card wall using an iframe, you should reference the iframe_wall.html file .

This application uses the [Svelte](https://svelte.technology/) framework to compile templates to vanilla JS. 

## Further Information

For more information about the development of this project, please see our presentation from the OER18 conference at https://goo.gl/1W1GgE. 

## License

All code and content is released under a Creative Commons licence and openly published via GitHub to encourage reuse, adoption and collaboration.
