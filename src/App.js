import 'bulma/css/bulma.css';
import ProfileCrad from "./ProfileCrad";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App(){
    return(
        <div>
            <div>
            <section className = "hero is-primary">
                <div className = "hero-boby">
                    <p classsName = "title">Personal Digital Assitant</p>
                </div>
            </section>
            </div>
            
            <div className = "container">
                <section classssName ="section" >
                    <div className = "columns">

                        <div className = "column is-3">
                            <ProfileCrad 
                            title="Alexa"
                             handle="@alexa99"
                             image={AlexaImage}
                             description ="Alexa was created by Amazon and helps you buy things"
                             />
                        </div>

                        <div className = "column is-3">
                            <ProfileCrad 
                            title="Cortana"
                             handle="@cortana32"
                             image={CortanaImage}
                             description = "Cortana was made by Microsoft.Who knows what it does?."
                             />

                        </div>

                        <div className = "column is-3">
                            <ProfileCrad
                            title="Siri"
                            handle="@siri01"
                            image={SiriImage}
                            description = "Siri was made by apple and is pharsed out."  
                              />
                        </div>
                    </div>
                </section>
            </div>

            
           
            
            
            
        </div>
          


            

    );
}
export default App;