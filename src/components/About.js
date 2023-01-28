import React from 'react';
import 'bootstrap'

function About() {
  return (
    <div>
        <h1 className='display-4'>About COVID-19</h1>
            <p className='text-light'>COVID-19, also known as the coronavirus, is a highly contagious respiratory illness caused by the SARS-CoV-2 virus. 
                      It was first identified in Wuhan, China in December 2019 and has since spread globally, leading to a worldwide pandemic. 
                      Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.
             </p>
          <h3 className='display-4'>SYMPTOMS</h3>
                <p className='text-light'>
                    People with COVID-19 have had a wide range of symptoms reported ranging from mild symptoms to severe illness. 
                    Symptoms may appear 2-14 days after exposure to the virus. 
                    Anyone can have mild to severe symptoms.
                </p>
    <div className='card'>
      <p>
        Possible symptoms include:
      </p>
      <ul>
        <li>Fever</li>
        <li>Cough</li>
        <li>Shortness of breath or difficulty breathing</li>
        <li>Fatigue</li>
        <li>Body aches</li>
        <li>Congestion or runny nose</li>
        <li>Muscle or body aches</li>
        <li>Nausea or vomiting</li>
        <li>Loss of taste or smell</li>
      </ul>
      </div>
      <h4 className='display-4'>HOW IT SPREADS</h4>
          <p className='text-light'>
The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
          </p>
      <h4 className='display-4'>PREVENTION</h4>
      <ul className='card text-bg-secondary mb-3'>
        <li>Washing hands frequently with soap and water for at least 20 seconds</li>
        <li>Avoiding close contact with people who are sick</li>
        <li>Wearing a mask in public settings where social distancing measures are difficult to maintain</li>
        <li>Staying home if you are feeling unwell</li>
        <li>Covering your nose and mouth with a tissue or elbow when you cough or sneeze</li>
        <li>Cleaning and disinfecting frequently-touched objects and surfaces daily</li>
      </ul>
    </div>
  );
}

export default About;