# Dojo Weather API
## Objectives:
* Practice using Angular routing to display different components
* Practice making http requests to an API and displaying the data received
* Create an app which presents the user with 6 different views (using the router-outlet) each different url/view should present the user with a Dojo city. Within each of these views, present the user with the current weather information. This assignment will require you to retrieve an API key from https://openweathermap.org/api

Additionally, show an image of each of the cities, you can use https://www.pexels.com/ for royalty free images.

Use the following URL pattern for each city:

Default (root) url - 'http://localhost:4200/' should immediately redirect us to your local Dojo url. 

Seattle, WA - 'http://localhost:4200/seattle'

San Jose, CA - 'http://localhost:4200/sanjose'

Burbank, CA - 'http://localhost:4200/burbank'

Dallas, TX - 'http://localhost:4200/dallas'

Washington D.C. - 'http://localhost:4200/dc'

Chicago, IL - 'http://localhost:4200/chicago'

REMINDER: When building applications which include forms and http requests, be sure to import the 'FormsModule' and 'HttpClientModule' in your AppModule file ('HttpClientModule' is referenced in the 'Fetch Data' chapter, 'Service' module).
