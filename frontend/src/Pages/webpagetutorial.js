import { propTypes } from 'react-bootstrap/esm/Image';
import Card from './../components/Card';

function WebpageTutorial(){
    return (
        
        <Card>
            <h1>How to create a website with React and Node.js</h1>
            <h2>How to create a new React project</h2>
                <ul>
                    <li>
                        <p>To create a new React project type in the following command to the terminal: npx create-react-app my-app</p>
                    </li>
                    <li><p>Note: my-app should be replaced with whatever you choose to name your project.</p></li>
                    <li><p>Move into the project directory by executing the following command on the terminal: cd my-app</p></li>
                    <li><p>Finally, to open your React app type the following command on the terminal: npm start</p></li>
                </ul>

                <img src="https://cps530-demo-backend.herokuapp.com/api/reactcommands.png"/>

                <h2>Creating the website:</h2>
                <ol>
                    <li>
                        <p>Once you have created a React project React will install a bunch of files, however we do not need most of these files.</p>
                    </li>

                    <li>
                        <p>Head over to the public folder. Delete the following files: logo192.png and logo512.png</p>
                    </li>
                    <li>
                        <p>Next head over to the src folder and delete the following files: App.test.js, logo.svg, reportWebVitals.js, setupTests.js</p>
                    </li>
                    <li>
                        <p>Head over to the index.js file located in the src folder and delete the line "reportWebVitals();". This should be the last line in the file.</p>
                    </li>
                    <li>
                        <p>Also delete the line "import reportWebVitals from './reportWebVitals';" from the file index.js. This line should be one of the first few lines of the file.</p>
                    </li>
                    <li>
                        <p>Next head over to the App.js file located in the src folder and delete the line "import logo from './logo.svg';" this line should be the first line in the file.</p>
                    </li>
                    <li>
                        <p>While still in the App.js file replace everything inside return with an empty div tag</p>
                    </li>
                    <li>
                        <p>If you have followed the above steps properly then your React app should just be a blank web page</p>
                    </li>
                    <li>
                        <p>
                        Now that we have removed the unneeded files that React installed we can begin making the website. Inside the src file create a folder called components.
                        Then inside the components folder create a file called Header.js
                        </p>
                    </li>

                    <li>
                        <p>Inside Header.js type function Header() followed by open and closing curly braces. Inside the function just type return. 
                            Below the function type: export default Homepage;
                        </p>
                        <p>Your Header.js file should look like this:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_5.png"/>
                    </li>

                    <li>
                        <p>Next create a file inside the components file called Header.module.css</p>
                        <p>Inside the file apply the following styles to an "a" tag and also create a class called header and in it apply the following stlyes:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_16.png"/>
                    </li>

                    <li>
                        <p>Next, go back to the Header.js file and import the css file by typing import classes from './Header.module.css';</p>
                        <p>Inside the Header function create a div tag. Inside the div tag create an "a" tag and inside the "a" tag type "Places to see in Canada". 
                            Then assign the class header we made in the css file to the div element. Your Header.js file should look like this now:
                        </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_14.png"/>
                    </li>

                    <li>
                        <p>Inside the components folder also create a file called Layout.js</p>
                        <p>Inside the file import the Header.js file and also create a function called Layout. Have the Layout function take in an argument called props.
                            Inside the Layout function input a Header that we created in the Header.js file, then below that type props.children in between a pair of curly braces.
                            Also below the Layout function type export default Layout. Your Layout.js file should look like this now:
                        </p>

                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_10.png"/>
                    </li>

                    <li>
                        <p>Next create another folder inside the src folder called pages. Inside pages create a file called Homepage.js</p>
                    </li>
                   
                    <li>
                        <p>Inside the Homepage.js file create a function called Homepage. To do this type "function Homepage()" followed by open and closing curly braces.
                            Inside the Homepage function type "return" followed by opening and closing div tags for now. Next, below the Homepage function type "export default Homepage;"
                        </p>

                        <p>Your Homepage.js file should look like this:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_11.png"/>

                    </li>

                    <li>
                        <p>Next go to the App.js file located in the src folder and import the Homepage.js file and Layout.js that were created from before.</p>
                        <p>Create a Layout tag and inside the Layout tag create a Homepage tag. Your file should look like this:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_12.png"/>
                    </li>

                    <li> 
                        <p>Now we need to create a Node project so we can have a backend for the website. To do this create a new folder called backEnd 
                            (you can name the folder something else if you want). Then navigate to inside the folder and open a terminal. Once you have a terminal open
                            run the command npm init
                        </p>
                        <p>Once the command is done running you should find a single json file in the folder.</p>
                    </li>

                    <li>
                        <p>Next run the command "npm install express" on the terminal. Next create a file called index.js.</p>
                        <p>Once you have done this go to the package.json file and change the start key to "node index.js" </p>
                        <p>Your package.json file should look like this: </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_41.png"/>
                    </li>
                    <li>
                        <p>Next create a file called index.js and copy the code below into it:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_15.png"/>
                    </li>
                    <li>
                        <p>Next, download the image found at the url below and name it homepagePic and place it the backEnd folder</p>
                        <p>
                            https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80
                        </p>
                        <p>Try putting the following url into your browser http://localhost:3004/api/homePage.avif if you have followed the previous steps properly the image should show up.</p>
                    </li>
                        
                    
                    <li>
                    <p>Next, head back over to the React project and inside the pages folder create a file called Homepage.module.css. Inside the css file create a class called
                        homepagebackground and another class called headerstyle. 
                    </p>
                    <p>Fill each class with the following css code:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_27.png"/>
                    </li>

                    <li>
                        <p>Next, go back to the Homepage.js file and at the top type import './Homepage.module.css' to import the css file created in the previous step. </p>
                    </li>

                    <li>
                        <p>Also inside the Homepage.js file, inside the div tags that we placed before, make a h1 tag that says the following: "Most Beautiful Places to see in Canada".
                            Assign the class headerstyle to the h1 tag and the class homepagebackground to the div tag. 
                            By now your Homepage.js file should look like this:
                        </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_28.png"/>
                    </li>
                    <li>
                        <p>Next download the images found at the following links (if you want to use other pictures you are free to do so):</p>
                        <p>Banff National Park (name file banffNationalPark):</p>
                        <p>https://themilepost.com/wp-content/uploads/2020/11/banff-4368838_1920.jpg</p>
                        <p>Whitehorse Region (name file whitehorse):</p>
                        <p>https://railfan.com/wp-content/uploads/2020/07/wpyrr.jpg</p>
                        <p>Glacier National Park (name file glacierpark):</p>
                        <p>https://wallpapercave.com/wp/wp2177923.jpg</p>
                        <p>Great Bear Rainforest (name file greatBear):</p>
                        <p>https://www.naturalworldsafaris.com/media/2291/nws-st-canada-grizzly-in-the-forest.jpg</p>
                        <p>Yoho National Park (name file yohopark):</p>
                        <p>https://wallpapercave.com/wp/wp4579841.jpg</p>
                        <p>CN Tower (name file CNtower):</p>
                        <p>https://img1.goodfon.com/wallpaper/nbig/3/73/kanada-toronto-ozero-ontario-1256.jpg</p>
                        <p>Prince Edward Island National Park (name file PEIPark):</p>
                        <p>https://i.natgeofe.com/n/f331f708-0740-4c64-90ca-567bfd99b7f4/36740_16x9.jpg?w=1200</p>
                        <p>Victoria-by-the-Sea (name file vicBySea):</p>
                        <p>https://www.tourismpei.com/search/assets/images/common/7816-1628083601.jpg</p>
                        <p>Old Montreal (name file oldMontreal):</p>
                        <p>https://cdn.getyourguide.com/img/location/5cd17e22499b8.jpeg/88.jpg</p>
                        <p>Great Slave Lake (name file greatSlaveLake):</p>
                        <p>https://c1.wallpaperflare.com/preview/902/408/62/clouds-coastline-great-slave-lake-lakeshore.jpg</p>
                    </li>

                    <li>
                        <p>Download each image above and place them in the folder that contains the Node project.</p>
                    </li>


                    <li>
                        <p>Next type into the terminal npm install react-router-dom</p>
                        <p>Once you have installed react-router-dom go to the index.js file located in the public folder and import BrowserRouter from react-router-dom.</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_20.png"/>
                    </li>

                    <li>
                        <p>
                            Next, replace the React.StrictMode tags with BrowseRouter tags. Your index.js file should now look like this:
                        </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_21.png"/>
                    </li>

                    <li>
                        <p>Now go to App.js also located in the public folder and import Route and Routes from react-router-dom.</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_30.png"/>
                    </li>

                    <li>
                        <p>Change the code inside the App.js file so that it looks like the following code:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_29.png"/>
                    </li>

                    <li>
                        <p>Now go to the Header.js file and import Link from react-router-dom.</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_25.png"/>
                    </li>

                    <li>
                        <p>Change the Header function so that it matches the following code:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_31.png" />
                    </li>

                    <li>
                        <p>
                            Next, go to the pages folder and create a file called slide1.js. In the file create a function called Slide1 and have it return just and empty div tag for now.
                            Below the function type export default Slide1. 
                        </p>
                        <p>Your slide1.js file should look this:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_32.png"/>
                    </li>

                    <li>
                        <p>Next, go to the App.js file and input another Route tag. Make the path be "/slide1" and the element be Slide1. Next import the slide1.js file into the App.js file.</p>
                        <p>Your App.js file should now look like this:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_33.png"/>
                    </li>

                    <li>
                        <p>Next, go to the Header.js file and create another Link tag to the the slide1.js file. </p>
                        <p>Here is what the file should look like:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_34.png"/>
                    </li>

                    <li>
                        <p>Next open the terminal and type the command "npm install react-icons" this command will install the react icons library. </p>
                    </li>

                    <li>
                        <p>Next, go back to the slide1.js and import the BsFillArrowRightCircleFill and the BsFillArrowLeftCircleFill from the react icons library. 
                            Also import Link from react-router-dom. </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_35.png"/>
                    </li>

                    <li>
                        <p>Next create a file inside the pages folder called slide1.module.css and in it create the following classes with the following code:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_36.png"/>

                    </li>

                    <li>
                        <p>Link the css file to the slide1.js file by typing at the top of the file import classes from './slide1.module.css'</p>
                    </li>
                    <li>
                        <p>Next head back over to the slide1.js file and in it assign the empty div tags the class backgroundimage. Create an h1 tag and in it
                            type Banff National Park, Alberta. Assign the class header to the h1 tag. Also create a new div tag, in the div tag create a new Link tag and 
                            have it Link to slide10 (be aware that this file does not exist yet as we still need to create it). Inside the Link tag place a BsFillArrowLeftCircleFill
                            icon. Then assign the class leftIcon to the div tag. Next create another div element and in it also put a Link tag, have the Link tag link to slide2 (slide2 also 
                            doesn't exist yet) and inside the Link tag place a BsFillArrowRightCircleFill icon. Assign the rightIcon class to the div element.
                        </p>
                        <p>Your slide1.js file should look like this now:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_37.png"/>
                    </li>

                    <li>
                        <p>In total we need 10 slide pages, now we need to create slides 2 through 10. The process is similar to creating slide1.js with only minor differences
                            like changing the files the page links to and changing the background image. I have attached my code for each slide file and its corresponding css
                            file below for you to follow.
                        </p>
                    </li>

                    <li>
                        <p>Code for slide2.js (note: the background image for this page is CNTower.jpg):</p>
                        <p>slide2.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide2.png"/>
                        <p>slide2.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide2css.png"/>
                    </li>

                    <li>
                        <p>Code for slide3.js (note: the background image for this page is glacierpark.jpg):</p>
                        <p>slide3.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide3.png"/>
                        <p>slide3.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide3css.png"/>
                    </li>

                    <li>
                        <p>Code for slide4.js (note: the background image for this page is greatBear.jpg):</p>
                        <p>slide4.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide4.png"/>
                        <p>slide4.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide4css.png"/>
                    </li>

                    <li>
                        <p>Code for slide5.js (note: the background image for this page is greatSlaveLake.webp):</p>
                        <p>slide5.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide5.png"/>
                        <p>slide5.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide5css.png"/>
                    </li>

                    <li>
                        <p>Code for slide6.js (note: the background image for this page is oldMontreal.jpg):</p>
                        <p>slide6.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide6.png"/>
                        <p>slide6.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide6css.png"/>
                    </li>

                    <li>
                        <p>Code for slide7.js (note: the background image for this page is PEIPark.jpg):</p>
                        <p>slide7.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide7.png"/>
                        <p>slide7.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide7css.png"/>
                    </li>

                    <li>
                        <p>Code for slide8.js (note: the background image for this page is vicBySea.webp):</p>
                        <p>slide8.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide8.png"/>
                        <p>slide8.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide8css.png"/>
                    </li>

                    <li>
                        <p>Code for slide9.js (note: the background image for this page is whitehorse.jpg):</p>
                        <p>slide9.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide9.png"/>
                        <p>slide9.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide9css.png"/>
                    </li>

                    <li>
                        <p>Code for slide10.js (note: the background image for this page is yohopark.jpg):</p>
                        <p>slide10.js:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide10.png"/>
                        <p>slide10.module.css:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/slide10css.png"/>
                    </li>

                    <li>
                        <p>Once we have created all the slide files we need to go to the App.js file and import all the slide files that we have created. To do this type 
                            at the top of the file:
                        </p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_38.png"/>
                    </li>

                    <li>
                        <p>Next we need to create a Route to each slide element that we have created. To do this type the following inside the App function located in the App.js file:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_39.png"/>
                    </li>

                    <li>
                        <p>Your App.js file should look like this now:</p>
                        <img src="https://cps530-demo-backend.herokuapp.com/api/Screenshot_40.png"/>
                    </li>

                    <li>
                        <p>Once you have completed the above steps you should end up with a website that looks like <a href="https://cps530-demo-page.herokuapp.com/">this</a></p>
                    </li>

                </ol>
        </Card>)
}

export default WebpageTutorial;