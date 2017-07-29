$(document).ready(function() {
  var lat;
  var long;
  
  var tempF;
  var tempC;
  var currentTemp;
  
  // Dark Sky API key and formatted URL
  var key = "b3de1e3c7dd2d8741ccf344b96b90285";
  var api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
  
  // retrieve location from browser
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        
        // Google Maps API URL with user latitude and longitude
        var geocoding = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "%2C" + long + "&language=en";
        
        // retrieve info from Google Maps API
        $.getJSON(geocoding).done(function(location) {
          var city = location.results[0].address_components[2].long_name;
          var state = location.results[0].address_components[4].long_name;
          var country = location.results[0].address_components[5].short_name;
          $("#location").html(city + ", " + state + ", " + country);
          
          // remove "Loading..." placeholder
          $("#loader").remove();
        })
     
      // Dark Sky API URL with added key, user longitude and latitude
      api += key + "/" + lat + "," + long;
      
      // retrieve info from Dark Sky API
      $.getJSON(api, function(data) {
        tempF = Math.round(data.currently.temperature);
        tempC = Math.round((tempF - 32) * (5/9));
        
        // display default Dark Sky temperature reading (in F) on page
        $("#temp").html(tempF + "°F");
        // numerical temperature reading stripped of extra symbols
        currentTemp = $("#temp").text().replace(/[^0-9]/g, '');
        $("#convert").append("C");
        
        // display weather summary on page
        $("#summary").html(data.currently.summary);
        
        // convert displayed temperature to Fahrenheit or Celsius
        function convertTemp(temp) {
          if (temp == tempF) {
            $("#temp").html(tempC + "°C");
            currentTemp = $("#temp").text().replace(/[^0-9]/g, '');
            $("#convert").html("Convert to °F");
          } else {
            $("#temp").html(tempF + "°F");
            currentTemp = $("#temp").text().replace(/[^0-9]/g, '');
            $("#convert").html("Convert to °C");
          }
        } 
      
        // display weather icons from Dark Sky
        var skycons = new Skycons({"color":"white"});
        skycons.add("icon", data.currently.icon);
        skycons.play();
        
        // button to convert temperature scale
        $("#convert").on("click", function () {
          convertTemp(currentTemp);
        }); 
        
        
      });
    });
    
    /* function addSkycon() {
      var skycons = new Skycons({"color":"white"});
      skycons.add("icon", data.currently.icon);
      skycons.play();
    } */
    
    
    // before url: https://cors-anywhere.herokuapp.com/, crossorigin.me
    // url format: https://api.darksky.net/forecast/[key]/[latitude],[longitude]
    // Dark Sky key: b3de1e3c7dd2d8741ccf344b96b90285
    // Google Maps api url: https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en'
    // Google Maps key: AIzaSyA_2Y1wkrqSlqiycIX54sNS--xLvzssw-E
    
    
}
  





});