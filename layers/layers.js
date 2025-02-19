var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JanuariIJ_1 = new ol.format.GeoJSON();
var features_JanuariIJ_1 = format_JanuariIJ_1.readFeatures(json_JanuariIJ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JanuariIJ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JanuariIJ_1.addFeatures(features_JanuariIJ_1);
var lyr_JanuariIJ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JanuariIJ_1, 
                style: style_JanuariIJ_1,
                popuplayertitle: "Januari (IJ)",
                interactive: true,
    title: 'Januari (IJ)<br />\
    <img src="styles/legend/JanuariIJ_1_0.png" /> Overoroteksi Ringan<br />\
    <img src="styles/legend/JanuariIJ_1_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/JanuariIJ_1_2.png" /> Terproteksi<br />\
    <img src="styles/legend/JanuariIJ_1_3.png" /> Tidak Ada Data<br />'
        });
var format_Januari_2 = new ol.format.GeoJSON();
var features_Januari_2 = format_Januari_2.readFeatures(json_Januari_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Januari_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Januari_2.addFeatures(features_Januari_2);
var lyr_Januari_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Januari_2, 
                style: style_Januari_2,
                popuplayertitle: "Januari",
                interactive: true,
    title: 'Januari<br />\
    <img src="styles/legend/Januari_2_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Januari_2_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Januari_2_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Januari_2_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Januari_2_4.png" /> Tidak Terproteksi<br />'
        });
var format_FebruariIJ_3 = new ol.format.GeoJSON();
var features_FebruariIJ_3 = format_FebruariIJ_3.readFeatures(json_FebruariIJ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FebruariIJ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FebruariIJ_3.addFeatures(features_FebruariIJ_3);
var lyr_FebruariIJ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FebruariIJ_3, 
                style: style_FebruariIJ_3,
                popuplayertitle: "Februari (IJ)",
                interactive: true,
    title: 'Februari (IJ)<br />\
    <img src="styles/legend/FebruariIJ_3_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/FebruariIJ_3_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/FebruariIJ_3_2.png" /> Terproteksi<br />\
    <img src="styles/legend/FebruariIJ_3_3.png" /> Tidak Ada Data<br />'
        });
var format_Februari_4 = new ol.format.GeoJSON();
var features_Februari_4 = format_Februari_4.readFeatures(json_Februari_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Februari_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Februari_4.addFeatures(features_Februari_4);
var lyr_Februari_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Februari_4, 
                style: style_Februari_4,
                popuplayertitle: "Februari",
                interactive: true,
    title: 'Februari<br />\
    <img src="styles/legend/Februari_4_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Februari_4_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Februari_4_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Februari_4_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Februari_4_4.png" /> Tidak Terproteksi<br />'
        });
var format_Maret_5 = new ol.format.GeoJSON();
var features_Maret_5 = format_Maret_5.readFeatures(json_Maret_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maret_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maret_5.addFeatures(features_Maret_5);
var lyr_Maret_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maret_5, 
                style: style_Maret_5,
                popuplayertitle: "Maret",
                interactive: true,
    title: 'Maret<br />\
    <img src="styles/legend/Maret_5_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Maret_5_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Maret_5_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Maret_5_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Maret_5_4.png" /> Tidak Terproteksi<br />'
        });
var format_MaretIJ_6 = new ol.format.GeoJSON();
var features_MaretIJ_6 = format_MaretIJ_6.readFeatures(json_MaretIJ_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaretIJ_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaretIJ_6.addFeatures(features_MaretIJ_6);
var lyr_MaretIJ_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaretIJ_6, 
                style: style_MaretIJ_6,
                popuplayertitle: "Maret (IJ)",
                interactive: true,
    title: 'Maret (IJ)<br />\
    <img src="styles/legend/MaretIJ_6_0.png" /> Over Proteksi Rigan<br />\
    <img src="styles/legend/MaretIJ_6_1.png" /> Over Proteksi Tinggi<br />\
    <img src="styles/legend/MaretIJ_6_2.png" /> Terproteksi<br />\
    <img src="styles/legend/MaretIJ_6_3.png" /> Tidak Ada Data<br />'
        });
var format_April_7 = new ol.format.GeoJSON();
var features_April_7 = format_April_7.readFeatures(json_April_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April_7.addFeatures(features_April_7);
var lyr_April_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_April_7, 
                style: style_April_7,
                popuplayertitle: "April",
                interactive: true,
    title: 'April<br />\
    <img src="styles/legend/April_7_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/April_7_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/April_7_2.png" /> Terproteksi<br />\
    <img src="styles/legend/April_7_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/April_7_4.png" /> Tidak Terproteksi<br />'
        });
var format_AprilIJ_8 = new ol.format.GeoJSON();
var features_AprilIJ_8 = format_AprilIJ_8.readFeatures(json_AprilIJ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AprilIJ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AprilIJ_8.addFeatures(features_AprilIJ_8);
var lyr_AprilIJ_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AprilIJ_8, 
                style: style_AprilIJ_8,
                popuplayertitle: "April (IJ)",
                interactive: true,
    title: 'April (IJ)<br />\
    <img src="styles/legend/AprilIJ_8_0.png" /> Over Proteksi Rigan<br />\
    <img src="styles/legend/AprilIJ_8_1.png" /> Over Proteksi Tinggi<br />\
    <img src="styles/legend/AprilIJ_8_2.png" /> Terproteksi<br />\
    <img src="styles/legend/AprilIJ_8_3.png" /> Tidak Ada Data<br />'
        });
var format_MeiIJ_9 = new ol.format.GeoJSON();
var features_MeiIJ_9 = format_MeiIJ_9.readFeatures(json_MeiIJ_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeiIJ_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeiIJ_9.addFeatures(features_MeiIJ_9);
var lyr_MeiIJ_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeiIJ_9, 
                style: style_MeiIJ_9,
                popuplayertitle: "Mei (IJ)",
                interactive: true,
    title: 'Mei (IJ)<br />\
    <img src="styles/legend/MeiIJ_9_0.png" /> Over Proteksi Rigan<br />\
    <img src="styles/legend/MeiIJ_9_1.png" /> Over Proteksi Tinggi<br />\
    <img src="styles/legend/MeiIJ_9_2.png" /> Terproteksi<br />\
    <img src="styles/legend/MeiIJ_9_3.png" /> Tidak Ada Data<br />'
        });
var format_Mei_10 = new ol.format.GeoJSON();
var features_Mei_10 = format_Mei_10.readFeatures(json_Mei_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mei_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mei_10.addFeatures(features_Mei_10);
var lyr_Mei_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mei_10, 
                style: style_Mei_10,
                popuplayertitle: "Mei",
                interactive: true,
    title: 'Mei<br />\
    <img src="styles/legend/Mei_10_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Mei_10_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Mei_10_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Mei_10_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Mei_10_4.png" /> Tidak Terproteksi<br />'
        });
var format_Juni_11 = new ol.format.GeoJSON();
var features_Juni_11 = format_Juni_11.readFeatures(json_Juni_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juni_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juni_11.addFeatures(features_Juni_11);
var lyr_Juni_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juni_11, 
                style: style_Juni_11,
                popuplayertitle: "Juni",
                interactive: true,
    title: 'Juni<br />\
    <img src="styles/legend/Juni_11_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Juni_11_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Juni_11_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Juni_11_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Juni_11_4.png" /> Tidak Terproteksi<br />'
        });
var format_JuniIJ_12 = new ol.format.GeoJSON();
var features_JuniIJ_12 = format_JuniIJ_12.readFeatures(json_JuniIJ_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuniIJ_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuniIJ_12.addFeatures(features_JuniIJ_12);
var lyr_JuniIJ_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JuniIJ_12, 
                style: style_JuniIJ_12,
                popuplayertitle: "Juni (IJ)",
                interactive: true,
    title: 'Juni (IJ)<br />\
    <img src="styles/legend/JuniIJ_12_0.png" /> Over Proteksi Rigan<br />\
    <img src="styles/legend/JuniIJ_12_1.png" /> Terproteksi<br />\
    <img src="styles/legend/JuniIJ_12_2.png" /> Tidak Ada Data<br />'
        });
var format_Juli_13 = new ol.format.GeoJSON();
var features_Juli_13 = format_Juli_13.readFeatures(json_Juli_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juli_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juli_13.addFeatures(features_Juli_13);
var lyr_Juli_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juli_13, 
                style: style_Juli_13,
                popuplayertitle: "Juli",
                interactive: true,
    title: 'Juli<br />\
    <img src="styles/legend/Juli_13_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Juli_13_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Juli_13_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Juli_13_3.png" /> Tidak Ada Data<br />\
    <img src="styles/legend/Juli_13_4.png" /> Tidak Terproteksi<br />'
        });
var format_JuliIJ_14 = new ol.format.GeoJSON();
var features_JuliIJ_14 = format_JuliIJ_14.readFeatures(json_JuliIJ_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuliIJ_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuliIJ_14.addFeatures(features_JuliIJ_14);
var lyr_JuliIJ_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JuliIJ_14, 
                style: style_JuliIJ_14,
                popuplayertitle: "Juli (IJ)",
                interactive: true,
    title: 'Juli (IJ)<br />\
    <img src="styles/legend/JuliIJ_14_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/JuliIJ_14_1.png" /> Terproteksi<br />\
    <img src="styles/legend/JuliIJ_14_2.png" /> Tidak Ada Data<br />'
        });
var format_AgustusIJ_15 = new ol.format.GeoJSON();
var features_AgustusIJ_15 = format_AgustusIJ_15.readFeatures(json_AgustusIJ_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgustusIJ_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgustusIJ_15.addFeatures(features_AgustusIJ_15);
var lyr_AgustusIJ_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgustusIJ_15, 
                style: style_AgustusIJ_15,
                popuplayertitle: "Agustus (IJ)",
                interactive: true,
    title: 'Agustus (IJ)<br />\
    <img src="styles/legend/AgustusIJ_15_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/AgustusIJ_15_1.png" /> Terproteksi<br />\
    <img src="styles/legend/AgustusIJ_15_2.png" /> Tidak Ada Data<br />'
        });
var format_Agustus_16 = new ol.format.GeoJSON();
var features_Agustus_16 = format_Agustus_16.readFeatures(json_Agustus_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agustus_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agustus_16.addFeatures(features_Agustus_16);
var lyr_Agustus_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agustus_16, 
                style: style_Agustus_16,
                popuplayertitle: "Agustus",
                interactive: true,
    title: 'Agustus<br />\
    <img src="styles/legend/Agustus_16_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Agustus_16_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Agustus_16_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Agustus_16_3.png" /> Tidak Ada Data<br />'
        });
var format_SeptemberIJ_17 = new ol.format.GeoJSON();
var features_SeptemberIJ_17 = format_SeptemberIJ_17.readFeatures(json_SeptemberIJ_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeptemberIJ_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeptemberIJ_17.addFeatures(features_SeptemberIJ_17);
var lyr_SeptemberIJ_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeptemberIJ_17, 
                style: style_SeptemberIJ_17,
                popuplayertitle: "September (IJ)",
                interactive: true,
    title: 'September (IJ)<br />\
    <img src="styles/legend/SeptemberIJ_17_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/SeptemberIJ_17_1.png" /> Terproteksi<br />\
    <img src="styles/legend/SeptemberIJ_17_2.png" /> Tidak Ada Data<br />'
        });
var format_September_18 = new ol.format.GeoJSON();
var features_September_18 = format_September_18.readFeatures(json_September_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_September_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_September_18.addFeatures(features_September_18);
var lyr_September_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_September_18, 
                style: style_September_18,
                popuplayertitle: "September",
                interactive: true,
    title: 'September<br />\
    <img src="styles/legend/September_18_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/September_18_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/September_18_2.png" /> Terproteksi<br />\
    <img src="styles/legend/September_18_3.png" /> Tidak Ada Data<br />'
        });
var format_OktoberIJ_19 = new ol.format.GeoJSON();
var features_OktoberIJ_19 = format_OktoberIJ_19.readFeatures(json_OktoberIJ_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OktoberIJ_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OktoberIJ_19.addFeatures(features_OktoberIJ_19);
var lyr_OktoberIJ_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OktoberIJ_19, 
                style: style_OktoberIJ_19,
                popuplayertitle: "Oktober (IJ)",
                interactive: true,
    title: 'Oktober (IJ)<br />\
    <img src="styles/legend/OktoberIJ_19_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/OktoberIJ_19_1.png" /> Terproteksi<br />\
    <img src="styles/legend/OktoberIJ_19_2.png" /> Tidak Ada Data<br />'
        });
var format_Oktober_20 = new ol.format.GeoJSON();
var features_Oktober_20 = format_Oktober_20.readFeatures(json_Oktober_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oktober_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oktober_20.addFeatures(features_Oktober_20);
var lyr_Oktober_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oktober_20, 
                style: style_Oktober_20,
                popuplayertitle: "Oktober",
                interactive: true,
    title: 'Oktober<br />\
    <img src="styles/legend/Oktober_20_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Oktober_20_1.png" /> Terproteksi<br />\
    <img src="styles/legend/Oktober_20_2.png" /> Tidak Ada Data<br />'
        });
var format_NovmberIJ_21 = new ol.format.GeoJSON();
var features_NovmberIJ_21 = format_NovmberIJ_21.readFeatures(json_NovmberIJ_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovmberIJ_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovmberIJ_21.addFeatures(features_NovmberIJ_21);
var lyr_NovmberIJ_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovmberIJ_21, 
                style: style_NovmberIJ_21,
                popuplayertitle: "Novmber (IJ)",
                interactive: true,
    title: 'Novmber (IJ)<br />\
    <img src="styles/legend/NovmberIJ_21_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/NovmberIJ_21_1.png" /> Terproteksi<br />\
    <img src="styles/legend/NovmberIJ_21_2.png" /> Tidak Ada Data<br />'
        });
var format_November_22 = new ol.format.GeoJSON();
var features_November_22 = format_November_22.readFeatures(json_November_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_November_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_November_22.addFeatures(features_November_22);
var lyr_November_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_November_22, 
                style: style_November_22,
                popuplayertitle: "November",
                interactive: true,
    title: 'November<br />\
    <img src="styles/legend/November_22_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/November_22_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/November_22_2.png" /> Terproteksi<br />\
    <img src="styles/legend/November_22_3.png" /> Tidak Ada Data<br />'
        });
var format_DesemberIJ_23 = new ol.format.GeoJSON();
var features_DesemberIJ_23 = format_DesemberIJ_23.readFeatures(json_DesemberIJ_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesemberIJ_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesemberIJ_23.addFeatures(features_DesemberIJ_23);
var lyr_DesemberIJ_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesemberIJ_23, 
                style: style_DesemberIJ_23,
                popuplayertitle: "Desember (IJ)",
                interactive: true,
    title: 'Desember (IJ)<br />\
    <img src="styles/legend/DesemberIJ_23_0.png" /> Terproteksi<br />\
    <img src="styles/legend/DesemberIJ_23_1.png" /> Tidak Ada Data<br />'
        });
var format_Desember_24 = new ol.format.GeoJSON();
var features_Desember_24 = format_Desember_24.readFeatures(json_Desember_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desember_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desember_24.addFeatures(features_Desember_24);
var lyr_Desember_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desember_24, 
                style: style_Desember_24,
                popuplayertitle: "Desember",
                interactive: true,
    title: 'Desember<br />\
    <img src="styles/legend/Desember_24_0.png" /> Overproteksi Ringan<br />\
    <img src="styles/legend/Desember_24_1.png" /> Overproteksi Tinggi<br />\
    <img src="styles/legend/Desember_24_2.png" /> Terproteksi<br />\
    <img src="styles/legend/Desember_24_3.png" /> Tidak Ada Data<br />'
        });
var group_Desember2024 = new ol.layer.Group({
                                layers: [lyr_DesemberIJ_23,lyr_Desember_24,],
                                fold: "open",
                                title: "Desember 2024"});
var group_November2024 = new ol.layer.Group({
                                layers: [lyr_NovmberIJ_21,lyr_November_22,],
                                fold: "open",
                                title: "November 2024"});
var group_Oktober2024 = new ol.layer.Group({
                                layers: [lyr_OktoberIJ_19,lyr_Oktober_20,],
                                fold: "open",
                                title: "Oktober 2024"});
var group_September2024 = new ol.layer.Group({
                                layers: [lyr_SeptemberIJ_17,lyr_September_18,],
                                fold: "open",
                                title: "September 2024"});
var group_Agustus2024 = new ol.layer.Group({
                                layers: [lyr_AgustusIJ_15,lyr_Agustus_16,],
                                fold: "open",
                                title: "Agustus 2024"});
var group_Juli2024 = new ol.layer.Group({
                                layers: [lyr_Juli_13,lyr_JuliIJ_14,],
                                fold: "open",
                                title: "Juli 2024"});
var group_Juni2024 = new ol.layer.Group({
                                layers: [lyr_Juni_11,lyr_JuniIJ_12,],
                                fold: "open",
                                title: "Juni 2024"});
var group_Mei2024 = new ol.layer.Group({
                                layers: [lyr_MeiIJ_9,lyr_Mei_10,],
                                fold: "open",
                                title: "Mei 2024"});
var group_April2024 = new ol.layer.Group({
                                layers: [lyr_April_7,lyr_AprilIJ_8,],
                                fold: "open",
                                title: "April 2024"});
var group_Maret2024 = new ol.layer.Group({
                                layers: [lyr_Maret_5,lyr_MaretIJ_6,],
                                fold: "open",
                                title: "Maret 2024"});
var group_Februari2024 = new ol.layer.Group({
                                layers: [lyr_FebruariIJ_3,lyr_Februari_4,],
                                fold: "open",
                                title: "Februari 2024"});
var group_Januari2024 = new ol.layer.Group({
                                layers: [lyr_JanuariIJ_1,lyr_Januari_2,],
                                fold: "open",
                                title: "Januari 2024"});

lyr_GoogleSatellite_0.setVisible(true);lyr_JanuariIJ_1.setVisible(true);lyr_Januari_2.setVisible(true);lyr_FebruariIJ_3.setVisible(true);lyr_Februari_4.setVisible(true);lyr_Maret_5.setVisible(true);lyr_MaretIJ_6.setVisible(true);lyr_April_7.setVisible(true);lyr_AprilIJ_8.setVisible(true);lyr_MeiIJ_9.setVisible(true);lyr_Mei_10.setVisible(true);lyr_Juni_11.setVisible(true);lyr_JuniIJ_12.setVisible(true);lyr_Juli_13.setVisible(true);lyr_JuliIJ_14.setVisible(true);lyr_AgustusIJ_15.setVisible(true);lyr_Agustus_16.setVisible(true);lyr_SeptemberIJ_17.setVisible(true);lyr_September_18.setVisible(true);lyr_OktoberIJ_19.setVisible(true);lyr_Oktober_20.setVisible(true);lyr_NovmberIJ_21.setVisible(true);lyr_November_22.setVisible(true);lyr_DesemberIJ_23.setVisible(true);lyr_Desember_24.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Januari2024,group_Februari2024,group_Maret2024,group_April2024,group_Mei2024,group_Juni2024,group_Juli2024,group_Agustus2024,group_September2024,group_Oktober2024,group_November2024,group_Desember2024];
lyr_JanuariIJ_1.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Januari_2.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_FebruariIJ_3.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Februari_4.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Maret_5.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_MaretIJ_6.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_April_7.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_AprilIJ_8.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_MeiIJ_9.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Mei_10.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Juni_11.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_JuniIJ_12.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi Ha': 'Kondisi Ha', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Juli_13.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi P': 'Proteksi P', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_JuliIJ_14.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi P': 'Proteksi P', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_AgustusIJ_15.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Agustus_16.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_SeptemberIJ_17.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_September_18.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_OktoberIJ_19.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Oktober_20.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_NovmberIJ_21.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_November_22.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_DesemberIJ_23.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_Desember_24.set('fieldAliases', {'Tagging Ti': 'Tagging Ti', 'Nama Tiang': 'Nama Tiang', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Jarak (m)': 'Jarak (m)', 'Sistem Pro': 'Sistem Pro', 'Arus Anoda': 'Arus Anoda', 'Proteksi 1': 'Proteksi 1', 'Proteksi 2': 'Proteksi 2', 'Anoda Pote': 'Anoda Pote', 'Natural Po': 'Natural Po', 'Kondisi': 'Kondisi', 'Bulan': 'Bulan', 'Tahun': 'Tahun', 'Keterangan': 'Keterangan', });
lyr_JanuariIJ_1.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Januari_2.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_FebruariIJ_3.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Februari_4.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Maret_5.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_MaretIJ_6.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_April_7.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AprilIJ_8.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_MeiIJ_9.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Mei_10.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Juni_11.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JuniIJ_12.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi Ha': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Juli_13.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi P': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JuliIJ_14.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi P': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AgustusIJ_15.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Agustus_16.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_SeptemberIJ_17.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_September_18.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_OktoberIJ_19.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Oktober_20.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_NovmberIJ_21.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_November_22.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_DesemberIJ_23.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Desember_24.set('fieldImages', {'Tagging Ti': 'TextEdit', 'Nama Tiang': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Jarak (m)': 'TextEdit', 'Sistem Pro': 'TextEdit', 'Arus Anoda': 'TextEdit', 'Proteksi 1': 'TextEdit', 'Proteksi 2': 'TextEdit', 'Anoda Pote': 'TextEdit', 'Natural Po': 'TextEdit', 'Kondisi': 'TextEdit', 'Bulan': 'TextEdit', 'Tahun': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JanuariIJ_1.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Januari_2.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_FebruariIJ_3.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Februari_4.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Maret_5.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_MaretIJ_6.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_April_7.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_AprilIJ_8.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_MeiIJ_9.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Mei_10.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Juni_11.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_JuniIJ_12.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi Ha': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Juli_13.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi P': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_JuliIJ_14.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi P': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_AgustusIJ_15.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Agustus_16.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_SeptemberIJ_17.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_September_18.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_OktoberIJ_19.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Oktober_20.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_NovmberIJ_21.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_November_22.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_DesemberIJ_23.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Desember_24.set('fieldLabels', {'Tagging Ti': 'no label', 'Nama Tiang': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Jarak (m)': 'no label', 'Sistem Pro': 'no label', 'Arus Anoda': 'no label', 'Proteksi 1': 'no label', 'Proteksi 2': 'no label', 'Anoda Pote': 'no label', 'Natural Po': 'no label', 'Kondisi': 'no label', 'Bulan': 'no label', 'Tahun': 'no label', 'Keterangan': 'no label', });
lyr_Desember_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});