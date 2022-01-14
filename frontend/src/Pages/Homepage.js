import Card from './../components/Card';
function Homepage(){
    return (
        <div>
            <Card>
                <img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>
                <h1>React Popularity</h1>
                <p>React is one of the most popular front-end frameworks. According to Stack Overflows 2020 survey, React ranked as the second most popular web framework. 
                    React was used 36.8% of the time by professional developers, only behind jQuery which was used 43.3% of the time by professional developers. </p>
                <h1>Strengths of React</h1>
                
                <ul>
                    <li>
                        <p>One strength of React is it allows you to re-use components. Each React component has its own controls and logic that are specific to the 
                            component. These components can be re-used in other parts of the code. This is especially useful when you are working on larger projects. </p>
                    </li>

                    <li>
                        <p>Another advantage of React is that it is easy to learn. Developers who are already familiar with Javascript will be able to learn React in a 
                        few days. Also, the fact that React is open source means that developers can create tutorials to help new developers learn the framework.</p>
                    </li>

                    <li>
                        <p>Another advantage of React is its use of the virtual DOM. The issue with traditional DOM constructs is that it needs to process the entire DOM Tree 
                            when a change is made. The virtual DOM is more efficient since instead of rewriting the entire DOM tree when a change is made the virtual DOM 
                            only updates the elements being changed. This allows developers to create higher performance UI’s with React. </p>
                    </li>

                    <li>
                        <p>React is also SEO friendly and can be read by Google and other search engines.</p>
                    </li>
                </ul>

                <h1>Weaknesses of React</h1>
                <ul>
                    <li>
                        <p>One disadvantage of React is that the framework is constantly changing. This can be seen as a disadvantage since it makes it difficult for 
                            developers to constantly keep up with the new changes made to the framework. </p>
                    </li>

                    <li>
                        <p>Also, since React is constantly changing, resources and documentation covering the new changes can be difficult to find. </p>
                    </li>
                </ul>

                <h1>Who Uses React?</h1>

                <p>React is used mainly by web developers to design websites that require interactive UI’s. React is used by companies such as Bloomberg, Uber Eats, 
                    Airbnb, and Discord. All these websites require interactive UI’s which makes React an ideal framework to use.  </p>
            </Card>

            <Card>
                <img src="https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1"/>

                <h1>Node.js Popularity</h1>
                <p>According to the 2020 Stack Overflow survey Node.js was the most popular frameworks under the category “Other Frameworks, Libraries, and Tools”. 
                    According to the survey Node.js was used 51.9% by professional developers. Also, as of 2018 Node.js has 368,985,988 downloads and over 750 new 
                    contributors, making Node.js one of the most popular back-end frameworks. </p>

                <h1>Strengths of Node.js</h1>

                <ul>
                    <li>
                        <p>Node.js is easy to learn. Given that JavaScript is one of the most popular languages in front-end development, learning Node.js will be 
                            easy since it is based in JavaScript. </p>
                    </li>
                        
                    <li>
                        <p>Node.js also uses Google’s V8 JavaScript engine to compile JavaScript code directly into machine code, making applications faster and easier 
                            to implement. </p>
                    </li>
                        
                    <li>
                        <p>Using Node.js allows developers to use a single programming language for development. Using Node.js in combination with a front-end 
                            framework such as React or Vue allows developers to write both front-end and back-end code in JavaScript. </p>
                    </li>

                    <li>
                        <p>Node.js can handle multiple requests simultaneously unlike other backend languages like Ruby or Python. </p>
                    </li>

                    <li>
                        <p>Node.js has a large development and support community, meaning there are always people looking to improve Node.js</p>
                    </li>
                </ul>

                <h1>Weaknesses of Node.js</h1>

                <ul>
                    <li>
                        <p>Despite being single-threaded and event-driven, Node.js fails at executing heavy CPU based computing. </p>
                    </li>

                    <li>
                        <p>Node.js also has frequent API changes, which are usually backwards incompatible. As a result, developers must constantly be 
                            changing their code. </p>
                    </li>

                    <li>
                        <p>The biggest weakness of Node.js is callback hell. A callback is when a function takes some time to produce a result, for example reading 
                            a file or making a request to a server. Since a callback takes time to finish, the program cannot go to the next line since it might throw an 
                            error. So, we need to store the result and call back when it is complete. Callback hell occurs when there is a nested callback’s. In nested 
                            callback’s each callback takes an argument that is a result of a previous callback. </p>
                    </li>
                </ul>

                <h1>Who uses Node.js?</h1>
                <p>Node.js is used by backend developers to make the backend for a website. Node.js is useful for real-time applications that need to process a high volume 
                    of data in a short period of time. This is why companies like LinkedIn and Uber use Node.js for their applications. Node.js is also useful for 
                    applications that require the real time streaming of media or data. For example, Netflix uses Node.js for their streaming platform. </p>
            </Card>
        </div>
       
    )
}

export default Homepage;