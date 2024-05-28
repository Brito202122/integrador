function initMap() {
    // Verifica se o navegador suporta geolocalização
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 20,
                center: userLocation
            });

            const marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Você está aqui!'
            });

            // Destino exemplo (modifique conforme necessário)
            const destination = {};
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            const request = {
                origin: userLocation,
                destination: destination,
                travelMode: 'WALKING'
            };

            directionsService.route(request, (result, status) => {
                if (status == 'OK') {
                    directionsRenderer.setDirections(result);
                } else {
                    console.error('Erro ao calcular rota:', status);
                }
            });
        }, () => {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow({
        map: map
    });
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu navegador não suporta geolocalização.');
}
