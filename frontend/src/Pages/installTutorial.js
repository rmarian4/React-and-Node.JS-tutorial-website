import Card from './../components/Card';

function InstallTutorial(){
    return (
        <>
            <Card>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7Q-cVdn2--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/ebjuhtw80jwrgkf3d1er.jpg"/>
                <h1>How to Install Node.js and React</h1>
                <p>In order to get Node running on your computer you need to download Node.js. In order to get React up and running you need to install a package manager.
                    The Node package manager (npm) is a popular package manager used for React. Luckily npm automatically installs when you download Node.js, therefore in 
                    order to install React and Node we only need to install Node.js. To install Node.js follow the steps below: 
                </p>

                <ol>
                    <li>
                        <p><a href="https://nodejs.org/en/">Click here</a> to go to the homepage of the Node.js website.</p>
                    </li>

                    <li>
                        <p>Navigate to the downloads page and download the installer for your machine.</p>
                    </li>

                    <li>
                        Follow the steps provided in the installer and agree to the license agreement and click the next button.
                    </li>

                    <li>
                        <ul>
                            <li><p>Once Node.js has been installed open a terminal and type the following command: npm -v</p> </li>
                             <li><p>If the npm -v command returns the version, then that means that Node.js has been successfully installed.</p></li>
                        </ul>
                    </li>
                    <li>
                       <p>Finally, we need to update the npm, to do so run the following command on your terminal: npm install npm --global </p> 
                    </li>
                    
                </ol>

            </Card>
        </>
        )
}

export default InstallTutorial;