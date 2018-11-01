# The Solutions App

The Solutions app is an open education resource (OER) that has been built to capture, showcase and develop digital practice amongst educators and students.

At [Keele University](https://www.keele.ac.uk), Solutions is being used to demonstrate how digital tools are helping tutors to create engaging learning experiences. Inspired by microlearning resources such as [#1minuteCPD](https://1minutecpd.wordpress.com/) (Manchester Metropolitan University), and incorporating the [3e Framework](https://staff.napier.ac.uk/services/vice-principal-academic/academic/TEL/TechBenchmark/Pages/Introduction.aspx) (Edinburgh Napier University), the Solutions app addresses the overwhelming availability of technologies available for learning and teaching, and curates them in collaboration with educators who have adopted such tools. The app categorises each technology, providing users with suggestions (or just-in-time solutions) along pedagogic themes. 

Solutions comes in 2 formats; a single card view and a card wall. Both have been designed responsively, so work across most screen sizes and devices (Google Chrome and Mozilla Firefox browsers recommended).  

## Single Card View

The single card view displays 1 digital tool at a time and was designed for embedding within smaller online spaces, such as a shared section of a virtual learning environment (VLE). 

## Card Wall

The card wall presents all available digital tools in a grid-like layout and can exist as its own webpage, or embedded as part of a larger online space (e.g. VLE tab).  

## Embedding the Solutions App within Blackboard Using GitHub Pages

Both the single card view and card wall can be linked to directly (e.g. https://humsstel.github.io/tel_cards/index.html), however, if you intend the embed the Solutions app within Blackboard, you may need to reference the included iframe version for it to appear.

To embed the single card view using an iframe, you should reference the iframe_index.html file (e.g. https://humsstel.github.io/tel_cards/iframe_index.html).

To embed the card wall using an iframe, you should reference the iframe_wall.html file (e.g. https://humsstel.github.io/tel_cards/iframe_wall.html).

This application uses the [Svelte](https://svelte.technology/) framework to compile templates to vanilla JS. 

## Run the application with hot-reloading (launches dev server)
`yarn start` or if you don't have yarn, `npm run start`

The development server will now be running at http://localhost:1234. To see wall display view, navigate to http://localhost:1234?display=wall

## Compile production app to dist
`yarn build` or if you don't have yarn, `npm run build`

## Deploy the built bundle and assets to github pages
`yarn deploy` or if you don't have yarn, `npm run deploy`

## Further Information

For more information about the development of this project, please see our presentation from the OER18 conference at https://goo.gl/1W1GgE. 

## License

All code and content is released under a Creative Commons licence and openly published via GitHub to encourage reuse, adoption and collaboration. 
