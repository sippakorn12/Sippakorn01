var wms_layers = [];


        var lyr_googlemap_0 = new ol.layer.Tile({
            'title': 'google map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_female_cleaned_1 = new ol.format.GeoJSON();
var features_female_cleaned_1 = format_female_cleaned_1.readFeatures(json_female_cleaned_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_female_cleaned_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_female_cleaned_1.addFeatures(features_female_cleaned_1);
var lyr_female_cleaned_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_female_cleaned_1, 
                style: style_female_cleaned_1,
                popuplayertitle: "female_cleaned",
                interactive: true,
                title: '<img src="styles/legend/female_cleaned_1.png" /> female_cleaned'
            });
var format_male_cleaned_2 = new ol.format.GeoJSON();
var features_male_cleaned_2 = format_male_cleaned_2.readFeatures(json_male_cleaned_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_male_cleaned_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_male_cleaned_2.addFeatures(features_male_cleaned_2);
var lyr_male_cleaned_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_male_cleaned_2, 
                style: style_male_cleaned_2,
                popuplayertitle: "male_cleaned",
                interactive: true,
                title: '<img src="styles/legend/male_cleaned_2.png" /> male_cleaned'
            });

lyr_googlemap_0.setVisible(true);lyr_female_cleaned_1.setVisible(true);lyr_male_cleaned_2.setVisible(true);
var layersList = [lyr_googlemap_0,lyr_female_cleaned_1,lyr_male_cleaned_2];
lyr_female_cleaned_1.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_male_cleaned_2.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'vaccine_ty': 'vaccine_ty', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_female_cleaned_1.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'lat': '', 'long': '', 'status': '', });
lyr_male_cleaned_2.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'vaccine_ty': '', 'lat': '', 'long': '', 'status': '', });
lyr_female_cleaned_1.set('fieldLabels', {'timestamp': 'no label', 'service': 'no label', 'reg_type': 'no label', 'prefix': 'no label', 'sex': 'no label', 'work': 'no label', 'income': 'no label', 'education': 'no label', 'year': 'no label', 'village_no': 'no label', 'village': 'no label', 'road': 'no label', 'alley': 'no label', 'district': 'no label', 'amphoe': 'no label', 'province': 'no label', 'zipcode': 'no label', 'congenital': 'no label', 'congenit_1': 'no label', 'disability': 'no label', 'disabili_1': 'no label', 'environmen': 'no label', 'treatment_': 'no label', 'treatmen_1': 'no label', 'requiremen': 'no label', 'requirem_1': 'no label', 'date_start': 'no label', 'date_end': 'no label', 'occupation': 'no label', 'relationsh': 'no label', 'ability': 'no label', 'vaccine': 'no label', 'num_vaccin': 'no label', 'lat': 'no label', 'long': 'no label', 'status': 'no label', });
lyr_male_cleaned_2.set('fieldLabels', {'timestamp': 'no label', 'service': 'no label', 'reg_type': 'no label', 'prefix': 'no label', 'sex': 'no label', 'work': 'no label', 'income': 'no label', 'education': 'no label', 'year': 'no label', 'village_no': 'no label', 'village': 'no label', 'road': 'no label', 'alley': 'no label', 'district': 'no label', 'amphoe': 'no label', 'province': 'no label', 'zipcode': 'no label', 'congenital': 'no label', 'congenit_1': 'no label', 'disability': 'no label', 'disabili_1': 'no label', 'environmen': 'no label', 'treatment_': 'no label', 'treatmen_1': 'no label', 'requiremen': 'no label', 'requirem_1': 'no label', 'date_start': 'no label', 'date_end': 'no label', 'occupation': 'no label', 'relationsh': 'no label', 'ability': 'no label', 'vaccine': 'no label', 'num_vaccin': 'no label', 'vaccine_ty': 'no label', 'lat': 'no label', 'long': 'no label', 'status': 'no label', });
lyr_male_cleaned_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});