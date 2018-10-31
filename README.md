# Solutions App

The Solutions app is an open education resource (OER) that has been built to capture and develop digital practice at Keele University by demonstrating how technologies are being used to engage students. Inspired by microlearning resources such as [#1minuteCPD](https://1minutecpd.wordpress.com/) (Manchester Metropolitan University),  and incorporating the 3e Framework (Edinburgh Napier University), the project addresses the overwhelming availability of technologies for learning and teaching, curating them in collaboration with educators who have adopted such tools. The app also categorises each technology, providing users with suggestions (or just-in-time solutions) based on pedagogic themes. 

All code and content is released under a Creative Commons licence and openly published via GitHub to encourage reuse, adoption and collaboration. 

For more information about the development of this project, please see our presentation from the OER18 conference at https://goo.gl/1W1GgE. 

## Embedding the tool within a VLE

To load the standard single card view, you should reference the iframe_index.html file.

To load the wall display view, you should reference the iframe_wall.html file.

This application uses the [Svelte](https://svelte.technology/) framework to compile templates to vanilla JS. 

## Run the application with hot-reloading (launches dev server)
`yarn start` or if you don't have yarn, `npm run start`

The development server will now be running at http://localhost:1234. To see wall display view, navigate to http://localhost:1234?display=wall

## Compile production app to dist
`yarn build` or if you don't have yarn, `npm run build`

## Deploy the built bundle and assets to github pages
`yarn deploy` or if you don't have yarn, `npm run deploy`
