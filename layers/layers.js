var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RagamDataHasilPengujianprofiltps3r_1 = new ol.format.GeoJSON();
var features_RagamDataHasilPengujianprofiltps3r_1 = format_RagamDataHasilPengujianprofiltps3r_1.readFeatures(json_RagamDataHasilPengujianprofiltps3r_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RagamDataHasilPengujianprofiltps3r_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RagamDataHasilPengujianprofiltps3r_1.addFeatures(features_RagamDataHasilPengujianprofiltps3r_1);
var lyr_RagamDataHasilPengujianprofiltps3r_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RagamDataHasilPengujianprofiltps3r_1, 
                style: style_RagamDataHasilPengujianprofiltps3r_1,
                popuplayertitle: 'Ragam Data Hasil Pengujian profil tps 3r',
                interactive: true,
    title: 'Ragam Data Hasil Pengujian profil tps 3r<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_0.png" /> BOGOR BARAT<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_1.png" /> BOGOR SELATAN<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_2.png" /> BOGOR TENGAH<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_3.png" /> BOGOR TIMUR<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_4.png" /> BOGOR UTARA<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_5.png" /> TANAH SAREAL<br />\
    <img src="styles/legend/RagamDataHasilPengujianprofiltps3r_1_6.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_RagamDataHasilPengujianprofiltps3r_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RagamDataHasilPengujianprofiltps3r_1];
lyr_RagamDataHasilPengujianprofiltps3r_1.set('fieldAliases', {'nama': 'nama', 'nomor_sk': 'nomor_sk', 'lat': 'lat', 'lang': 'lang', 'alamat': 'alamat', 'kelurahan': 'kelurahan', 'kecamatan': 'kecamatan', 'tahun_pendirian': 'tahun_pendirian', 'luas_bangunan': 'luas_bangunan', 'jumlah_layanan': 'jumlah_layanan', 'ketua_ksm': 'ketua_ksm', 'jumlah_pengurus': 'jumlah_pengurus', });
lyr_RagamDataHasilPengujianprofiltps3r_1.set('fieldImages', {'nama': 'TextEdit', 'nomor_sk': 'TextEdit', 'lat': 'TextEdit', 'lang': 'TextEdit', 'alamat': 'TextEdit', 'kelurahan': 'TextEdit', 'kecamatan': 'TextEdit', 'tahun_pendirian': 'Range', 'luas_bangunan': 'Range', 'jumlah_layanan': 'Range', 'ketua_ksm': 'TextEdit', 'jumlah_pengurus': 'Range', });
lyr_RagamDataHasilPengujianprofiltps3r_1.set('fieldLabels', {'nama': 'inline label - always visible', 'nomor_sk': 'inline label - always visible', 'lat': 'inline label - always visible', 'lang': 'inline label - always visible', 'alamat': 'inline label - always visible', 'kelurahan': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'tahun_pendirian': 'inline label - always visible', 'luas_bangunan': 'inline label - always visible', 'jumlah_layanan': 'inline label - always visible', 'ketua_ksm': 'inline label - always visible', 'jumlah_pengurus': 'inline label - always visible', });
lyr_RagamDataHasilPengujianprofiltps3r_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});