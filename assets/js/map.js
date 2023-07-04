var map = L.map('map', {
    center: [-12.787923, -74.973051],
    zoom: 14,
    minZoom: 8,
    maxZoom: 20,
    maxBounds: [[-14.3201,-76.3848], [-12.088,-74.0557]]
    });

    L.control.scale({
        imperial: false
        }).addTo(map);
        
    var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
        });
        basemapOSM.addTo(map);
        
        var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'] });
        googleSat.addTo(map);
        
        var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'] });
        googleHybrid.addTo(map);
        
        var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3'] }); 
        googleTerrain.addTo(map);
    

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:bancos", //gisweb:bancos_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
bancos.addTo(map);

var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:clinicas", //gisweb:clinicas_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
clinicas.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:colegios", //gisweb:colegios_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
colegios.addTo(map);

var comisarias = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "	webhuancavelica:comisarias", //gisweb:comisarias_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
comisarias.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:farmacias", //gisweb:farmacias_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:hoteles", //gisweb:hoteles_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webhuancavelica/wms?", {
layers: "webhuancavelica:mercados", //gisweb:mercados_huancavelica
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercados.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Base Satelite": googleSat,
    "Base Hybrid:":googleHybrid,
    "Base Terrain:":googleTerrain
    };

    var overlayMaps = {
    "bancos huancavelica": bancos,
    "clinicas huancavelica": clinicas,
    "colegios huancavelica": colegios,
    "comisarias huancavelica": comisarias,
    "farmacias huancavelica": farmacias,
    "hoteles huancavelica": hoteles,
    "mercados huancavelica": mercados
    };
    L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);

    