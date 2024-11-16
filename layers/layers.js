var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2 = new ol.format.GeoJSON();
var features_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2 = format_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.readFeatures(json_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.addFeatures(features_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2);
var lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2, 
                style: style_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2,
                popuplayertitle: "Desa_Tambi_shp_uid_a7a00bd0-3881-4796-a250-1bb4e064c5f4 — Desa_Tambi_line.shp",
                interactive: true,
                title: '<img src="styles/legend/Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.png" /> Desa_Tambi_shp_uid_a7a00bd0-3881-4796-a250-1bb4e064c5f4 — Desa_Tambi_line.shp'
            });
var format_gadm41_IDNADM_ADM_4_3 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_3 = format_gadm41_IDNADM_ADM_4_3.readFeatures(json_gadm41_IDNADM_ADM_4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_3.addFeatures(features_gadm41_IDNADM_ADM_4_3);
var lyr_gadm41_IDNADM_ADM_4_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_3, 
                style: style_gadm41_IDNADM_ADM_4_3,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_3.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_RW_4 = new ol.format.GeoJSON();
var features_RW_4 = format_RW_4.readFeatures(json_RW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_4.addFeatures(features_RW_4);
var lyr_RW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_4, 
                style: style_RW_4,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_4_0.png" /> RW 001<br />\
    <img src="styles/legend/RW_4_1.png" /> RW 002<br />\
    <img src="styles/legend/RW_4_2.png" /> <br />'
        });
var format_RT_5 = new ol.format.GeoJSON();
var features_RT_5 = format_RT_5.readFeatures(json_RT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_5.addFeatures(features_RT_5);
var lyr_RT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_5, 
                style: style_RT_5,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_5_0.png" /> <br />\
    <img src="styles/legend/RT_5_1.png" /> RT 001 / RW 001<br />\
    <img src="styles/legend/RT_5_2.png" /> RT 002 / RW 001<br />\
    <img src="styles/legend/RT_5_3.png" /> RT 003 / RW 001<br />\
    <img src="styles/legend/RT_5_4.png" /> RT 004 / RW 001<br />\
    <img src="styles/legend/RT_5_5.png" /> RT 005 / RW 001<br />\
    <img src="styles/legend/RT_5_6.png" /> RT 006 / RW 001<br />\
    <img src="styles/legend/RT_5_7.png" /> RT 007 / RW 001<br />\
    <img src="styles/legend/RT_5_8.png" /> RT 008 / RW 002<br />\
    <img src="styles/legend/RT_5_9.png" /> RT 009 / RW 002<br />\
    <img src="styles/legend/RT_5_10.png" /> RT 010 / RW 002<br />\
    <img src="styles/legend/RT_5_11.png" /> RT 011 / RW 002<br />'
        });
var format_Clipped_6 = new ol.format.GeoJSON();
var features_Clipped_6 = format_Clipped_6.readFeatures(json_Clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_6.addFeatures(features_Clipped_6);
var lyr_Clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_6, 
                style: style_Clipped_6,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_6.png" /> Clipped'
            });
var format_jalantrobosanclipped_7 = new ol.format.GeoJSON();
var features_jalantrobosanclipped_7 = format_jalantrobosanclipped_7.readFeatures(json_jalantrobosanclipped_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalantrobosanclipped_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalantrobosanclipped_7.addFeatures(features_jalantrobosanclipped_7);
var lyr_jalantrobosanclipped_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalantrobosanclipped_7, 
                style: style_jalantrobosanclipped_7,
                popuplayertitle: "jalan trobosan — clipped",
                interactive: true,
                title: '<img src="styles/legend/jalantrobosanclipped_7.png" /> jalan trobosan — clipped'
            });
var format_jalanrumahclipped_8 = new ol.format.GeoJSON();
var features_jalanrumahclipped_8 = format_jalanrumahclipped_8.readFeatures(json_jalanrumahclipped_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanrumahclipped_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanrumahclipped_8.addFeatures(features_jalanrumahclipped_8);
var lyr_jalanrumahclipped_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanrumahclipped_8, 
                style: style_jalanrumahclipped_8,
                popuplayertitle: "jalan rumah — clipped",
                interactive: true,
                title: '<img src="styles/legend/jalanrumahclipped_8.png" /> jalan rumah — clipped'
            });
var format_Rumah_9 = new ol.format.GeoJSON();
var features_Rumah_9 = format_Rumah_9.readFeatures(json_Rumah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_9.addFeatures(features_Rumah_9);
var lyr_Rumah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_9, 
                style: style_Rumah_9,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_9.png" /> Rumah'
            });
var format_Rumah_10 = new ol.format.GeoJSON();
var features_Rumah_10 = format_Rumah_10.readFeatures(json_Rumah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_10.addFeatures(features_Rumah_10);
var lyr_Rumah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_10, 
                style: style_Rumah_10,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_10.png" /> Rumah'
            });
var format_Rumah_11 = new ol.format.GeoJSON();
var features_Rumah_11 = format_Rumah_11.readFeatures(json_Rumah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_11.addFeatures(features_Rumah_11);
var lyr_Rumah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_11, 
                style: style_Rumah_11,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_11.png" /> Rumah'
            });
var format_Sawah_12 = new ol.format.GeoJSON();
var features_Sawah_12 = format_Sawah_12.readFeatures(json_Sawah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_12.addFeatures(features_Sawah_12);
var lyr_Sawah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_12, 
                style: style_Sawah_12,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_12.png" /> Sawah'
            });
var format_TPU_13 = new ol.format.GeoJSON();
var features_TPU_13 = format_TPU_13.readFeatures(json_TPU_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPU_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPU_13.addFeatures(features_TPU_13);
var lyr_TPU_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPU_13, 
                style: style_TPU_13,
                popuplayertitle: "TPU",
                interactive: true,
                title: '<img src="styles/legend/TPU_13.png" /> TPU'
            });
var format_Pendidikan_14 = new ol.format.GeoJSON();
var features_Pendidikan_14 = format_Pendidikan_14.readFeatures(json_Pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_14.addFeatures(features_Pendidikan_14);
var lyr_Pendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_14, 
                style: style_Pendidikan_14,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_14.png" /> Pendidikan'
            });
var format_PemerintahanDesa_15 = new ol.format.GeoJSON();
var features_PemerintahanDesa_15 = format_PemerintahanDesa_15.readFeatures(json_PemerintahanDesa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemerintahanDesa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemerintahanDesa_15.addFeatures(features_PemerintahanDesa_15);
var lyr_PemerintahanDesa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemerintahanDesa_15, 
                style: style_PemerintahanDesa_15,
                popuplayertitle: "Pemerintahan Desa",
                interactive: true,
                title: '<img src="styles/legend/PemerintahanDesa_15.png" /> Pemerintahan Desa'
            });
var format_DinasKesehatan_16 = new ol.format.GeoJSON();
var features_DinasKesehatan_16 = format_DinasKesehatan_16.readFeatures(json_DinasKesehatan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DinasKesehatan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DinasKesehatan_16.addFeatures(features_DinasKesehatan_16);
var lyr_DinasKesehatan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DinasKesehatan_16, 
                style: style_DinasKesehatan_16,
                popuplayertitle: "Dinas Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/DinasKesehatan_16.png" /> Dinas Kesehatan'
            });
var format_TempatIbadah_17 = new ol.format.GeoJSON();
var features_TempatIbadah_17 = format_TempatIbadah_17.readFeatures(json_TempatIbadah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_17.addFeatures(features_TempatIbadah_17);
var lyr_TempatIbadah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_17, 
                style: style_TempatIbadah_17,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_17.png" /> Tempat Ibadah'
            });
var format_TitikPoint_18 = new ol.format.GeoJSON();
var features_TitikPoint_18 = format_TitikPoint_18.readFeatures(json_TitikPoint_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPoint_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPoint_18.addFeatures(features_TitikPoint_18);
var lyr_TitikPoint_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPoint_18, 
                style: style_TitikPoint_18,
                popuplayertitle: "Titik Point ",
                interactive: true,
                title: '<img src="styles/legend/TitikPoint_18.png" /> Titik Point '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.setVisible(true);lyr_gadm41_IDNADM_ADM_4_3.setVisible(true);lyr_RW_4.setVisible(true);lyr_RT_5.setVisible(true);lyr_Clipped_6.setVisible(true);lyr_jalantrobosanclipped_7.setVisible(true);lyr_jalanrumahclipped_8.setVisible(true);lyr_Rumah_9.setVisible(true);lyr_Rumah_10.setVisible(true);lyr_Rumah_11.setVisible(true);lyr_Sawah_12.setVisible(true);lyr_TPU_13.setVisible(true);lyr_Pendidikan_14.setVisible(true);lyr_PemerintahanDesa_15.setVisible(true);lyr_DinasKesehatan_16.setVisible(true);lyr_TempatIbadah_17.setVisible(true);lyr_TitikPoint_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2,lyr_gadm41_IDNADM_ADM_4_3,lyr_RW_4,lyr_RT_5,lyr_Clipped_6,lyr_jalantrobosanclipped_7,lyr_jalanrumahclipped_8,lyr_Rumah_9,lyr_Rumah_10,lyr_Rumah_11,lyr_Sawah_12,lyr_TPU_13,lyr_Pendidikan_14,lyr_PemerintahanDesa_15,lyr_DinasKesehatan_16,lyr_TempatIbadah_17,lyr_TitikPoint_18];
lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_gadm41_IDNADM_ADM_4_3.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_RW_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RT_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Clipped_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalantrobosanclipped_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalanrumahclipped_8.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Rumah_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', });
lyr_Rumah_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TPU_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_PemerintahanDesa_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_DinasKesehatan_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TitikPoint_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.set('fieldImages', {'osm_id': '', 'osm_type': '', 'depth': '', 'railway': '', 'blockage': '', 'amenity': '', 'name': '', 'width': '', 'public_tra': '', 'bridge': '', 'smoothness': '', 'landuse': '', 'covered': '', 'diameter': '', 'aeroway': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'water': '', 'highway': '', 'surface': '', 'pump': '', 'oneway': '', 'layer': '', 'natural': '', });
lyr_gadm41_IDNADM_ADM_4_3.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_RW_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Clipped_6.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jalantrobosanclipped_7.set('fieldImages', {'fid': '', 'osm_id': '', 'osm_type': '', 'depth': '', 'railway': '', 'blockage': '', 'amenity': '', 'name': '', 'width': '', 'public_tra': '', 'bridge': '', 'smoothness': '', 'landuse': '', 'covered': '', 'diameter': '', 'aeroway': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'water': '', 'highway': '', 'surface': '', 'pump': '', 'oneway': '', 'layer': '', 'natural': '', });
lyr_jalanrumahclipped_8.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Rumah_9.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_Rumah_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TPU_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_PemerintahanDesa_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_DinasKesehatan_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TitikPoint_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Desa_Tambi_shp_uid_a7a00bd038814796a2501bb4e064c5f4Desa_Tambi_lineshp_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_gadm41_IDNADM_ADM_4_3.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_RW_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RT_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Clipped_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_jalantrobosanclipped_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_jalanrumahclipped_8.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Rumah_9.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', });
lyr_Rumah_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sawah_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TPU_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_PemerintahanDesa_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_DinasKesehatan_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TempatIbadah_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TitikPoint_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TitikPoint_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});