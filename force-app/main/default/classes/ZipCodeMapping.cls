public class ZipCodeMapping {

    // Method to retrieve city name based on zip code
    @InvocableMethod(callout=true)
    public static List<String> getCityForZipCode(List<Integer> zipCode) {
        String endpoint = 'http://api.zippopotam.us/US/' + zipCode[0];

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('GET');

        HttpResponse res = http.send(request);
        String cityName = null;
        String placeName;
        if (res.getStatusCode() == 200) {
            Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            List<Object> places = (List<Object>) jsonResponse.get('places');
            
            if (!places.isEmpty()) {
                Map<String, Object> placeInfo = (Map<String, Object>) places[0];
                 placeName = (String) placeInfo.get('place name');
                System.debug('Place Name: ' + placeName);
            } else {
                System.debug('No places found in the JSON data.');
            }
           // cityName = (String) jsonResponse.get('place name');
        }

        return new List<String> {placeName};
    }
}