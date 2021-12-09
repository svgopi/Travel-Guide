var locations = [
    ['Charminar, Hyderabad - The Charminar lit four minarets constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India', 17.3616, 78.4747,1],
    ['Anantagiri Hills - Ananthagiri Hills is located in Vikarabad district, Telangana, India. The water flows from these hills to Usman Sagar is also known as (Gandipet) and Himayathsagar. It is one of the dense forests in Telangana. Ananthagiri Temple is located in this forested area. It is the Birthplace of Musi river, also called as Muchkunda River, which flows through Hyderabad, 5 km from Vikarabad.', 17.3120, 77.8636,14],
    ['Thousand Pillar Temple - The Thousand Pillar Temple or Rudreswara Swamy Temple is a historic Hindu temple located in the town of Hanamakonda, Telangana State, India. It is dedicated to Lord Shiva, Vishnu and Surya.', 18.0037, 79.5747,13],
    ['Medak Church - Medak Cathedral at Medak in Telangana, India, is one of the largest churches in India and has been the cathedral church of the Diocese of Medak of the Church of South India since 1947.', 18.053661, 78.267159,12],
    ['Taj Falaknuma Palace - Falaknuma is a palace in Hyderabad, Telangana, India. It originally belonged to the Paigah family, and was later owned by the Nizam of Hyderabad It is on a hillock and covers a 13-hectare (32-acre) area in Falaknuma, 5 kilometres from Charminar.', 17.3315, 78.4675,11],
    ['CARE Hospitals, Banjara Hills - CARE Hospitals is a chain of multi-specialty healthcare hospitals with 14 hospitals in 6 cities across 5 states of India.', 17.4126, 78.4503,10],
    ['Udupi, karnataka - Udupi, otherwise spelt Udipi and also known as Odipu, is a city in the Indian state of Karnataka. Udupi is situated about 55 km north of the educational, commercial and industrial hub of Mangalore and about 422 km west of state capital Bangalore by road.',13.3409, 74.7421,9],
    ['Jog Falls', 14.2004, 74.7922,8],
    ['Mysuru',12.2958, 76.6394,7],
    ['Bengaluru', 12.9716, 77.5946,6],
    ['Karnataka Vidhana Soudha',12.9797, 77.5912,5],
    ['Puri', 19.8135, 85.8312,4],
    ['Konark Sun Temple',19.8876, 86.0945,3],
    ['Bhubaneswar',20.2961, 85.8245,2],
    ['Sanaghagara Waterfall',21.6328, 85.5570,1],
    ['Meenakshi Amma Temple',9.9195, 78.1193,1],
	['Kodaikanal Lake',10.2344, 77.4863,5],
	['Marina Beach',13.0500, 80.2824,3],
	['Phoenix Marketcity',12.9958, 77.6964,2],
	['chennai',13.0827, 80.2707,4]
    ['Chhatrapati Shivaji Maharaj Terminus',18.9398, 72.8354,2],
	['mumbai',19.0760, 72.8777,5],
	['Tarkarli Beach',16.0137, 73.4898,3],
	['Ajanta Caves',20.5519, 75.7033,1],
	['Seasons Mall',18.5196, 73.9313,6],
	['Vajrai Waterfall',17.7086, 73.8151,4],
    ["Mahakaleshwar Jyotirlinga",23.1827,75.7682],
	["Gwalior Fort",26.2313,78.1695],
	["Omkareshwar",22.2481,76.1421],
	["Kanha Tiger Reserve",22.3345,80.6115], 
	["Hawa Mahal",26.9239,75.8267],
	["Ranthambore National Park",26.0173,76.5026],
	["Pink city",26.9124,75.7873],
	["Jaisalmer War Museum",26.9408,71.0266],
	["Dal Lake",34.1106,74.8683],
	['Vaishno Devi',33.0308,74.9490],
	['Shri Amarnath Cave Temple',34.2157,75.5041],
	['Indira Gandhi Memorial Tulip Garden',34.0960,74.8784],
	['Srinagar - Gulmarg Road',34.0960,74.8784],
	['Chandra Taal',32.4824,77.6157],
	['Key Gompa (Key Monastery)',32.2978,78.0119],
	["Hadimba Devi Temple",32.2483,77.1808],
	['Army Heritage Museum',31.1095,77.1592],
 	["Sri Harmandir Sahib",31.6200,74.8765],
	["Jallianwala Bagh",31.6206,74.8801],
	["Rose garden Bathinda",30.2327,74.9395],
	["Virasat-e-Khalsa",31.2342,76.5075],
	["DELHI",28.7041,77.1025],
	["Kaziranga National Park",26.5775,93.1711],
	["Nabagraha Temple",26.1909,91.7644],
 	["Tam Dil",23.7386,92.9529],
	["Lushai Hills",23.1667,92.8333],
	["Unakoti Rock Carvings",24.3170,92.0669], 
	["Clouded leopard National park Tripura",23.6690,91.3194],
	["War Cemetry",24.8223,93.9467],
	["Kangla Fort",24.8075,93.9428],
	["Taj Mahal",27.1751,78.0421],
	["Keetham Lake",27.2509,77.8464],
	["Shri Krishna Janmasthan Temple",27.5047,77.6698],
	["Jim Corbett National Park",29.5300, 78.7747],
	["Golden Pagoda",17.4816,97.0982],
	["Pangsau Pass",27.2500,96.1667],
	["Valley of Flowers National Park",30.7280,79.6053],
	["Har Ki Pauri Ghat Haridwar",29.9567,78.1710],
	["Kedarnath Temple",30.7352,79.0669],
	["Elephant Falls",25.5361,91.8225]
];
var map;
var markers = [];

function initMap(){
map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 4,
    center: new google.maps.LatLng(19.3522816, 69.2045216),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var num = locations.length;
for (var i = 0; i < num; i++) { 

    markers[i] = new google.maps.Marker({
    position: {lat:locations[i][1], lng:locations[i][2]},
    map: map,
    html: locations[i][0],
    id: i,
});

google.maps.event.addListener(markers[i], 'click', function(){
var infowindow = new google.maps.InfoWindow({
    id: this.id,
    content:this.html,
    position:this.getPosition()
});
google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
    markers[this.id].setVisible(true);
});
    this.setVisible(false);
    infowindow.open(map);
});
}
}
