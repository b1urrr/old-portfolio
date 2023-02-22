import weatherapp from '../../assets/projects/weatherapp.png';
import twitter from '../../assets/projects/twitter.png';

const projectItem = [
        {
          "imgurl": weatherapp,
          "url": "https://weather-app-kg.web.app/",
          "name": "Simple Weather App",
          "desc": "Minimalistic use of an API. Displays the current weather in a city using OpenWeatherMap APIs.",
          "stack": "React.js",                
          "id": 1
        },
        {
          "imgurl": twitter,
          "url": "https://github.com/b1urrr/twitter-bot",
          "name": "Twitter Complaint Bot",
          "desc": "Checks internet speed via speedtest.net and complaints on twitter if certain speeds aren't met.",
          "stack": "Python + Selenium WebDriver",                
          "id": 2
        },
]

export default projectItem;