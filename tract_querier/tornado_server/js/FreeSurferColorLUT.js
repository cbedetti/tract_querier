initializeFreesurferLabels = function (container) { 
  container.labels = {
          "Unknown": 0,
          "Left Cerebral Exterior": 1,
          "Left Cerebral White Matter": 2,
          "Left Cerebral Cortex": 3,
          "Left Lateral Ventricle": 4,
          "Left Inf Lat Vent": 5,
          "Left Cerebellum Exterior": 6,
          "Left Cerebellum White Matter": 7,
          "Left Cerebellum Cortex": 8,
          "Left Thalamus": 9,
          "Left Thalamus Proper": 10,
          "Left Caudate": 11,
          "Left Putamen": 12,
          "Left Pallidum": 13,
          "3rd Ventricle": 14,
          "4th Ventricle": 15,
          "Brain Stem": 16,
          "Left Hippocampus": 17,
          "Left Amygdala": 18,
          "Left Insula": 19,
          "Left Operculum": 20,
          "Line 1": 21,
          "Line 2": 22,
          "Line 3": 23,
          "CSF": 24,
          "Left Lesion": 25,
          "Left Accumbens area": 26,
          "Left Substancia Nigra": 27,
          "Left VentralDC": 28,
          "Left undetermined": 29,
          "Left vessel": 30,
          "Left choroid plexus": 31,
          "Left F3orb": 32,
          "Left lOg": 33,
          "Left aOg": 34,
          "Left mOg": 35,
          "Left pOg": 36,
          "Left Stellate": 37,
          "Left Porg": 38,
          "Left Aorg": 39,
          "Right Cerebral Exterior": 40,
          "Right Cerebral White Matter": 41,
          "Right Cerebral Cortex": 42,
          "Right Lateral Ventricle": 43,
          "Right Inf Lat Vent": 44,
          "Right Cerebellum Exterior": 45,
          "Right Cerebellum White Matter": 46,
          "Right Cerebellum Cortex": 47,
          "Right Thalamus": 48,
          "Right Thalamus Proper": 49,
          "Right Caudate": 50,
          "Right Putamen": 51,
          "Right Pallidum": 52,
          "Right Hippocampus": 53,
          "Right Amygdala": 54,
          "Right Insula": 55,
          "Right Operculum": 56,
          "Right Lesion": 57,
          "Right Accumbens area": 58,
          "Right Substancia Nigra": 59,
          "Right VentralDC": 60,
          "Right undetermined": 61,
          "Right vessel": 62,
          "Right choroid plexus": 63,
          "Right F3orb": 64,
          "Right lOg": 65,
          "Right aOg": 66,
          "Right mOg": 67,
          "Right pOg": 68,
          "Right Stellate": 69,
          "Right Porg": 70,
          "Right Aorg": 71,
          "5th Ventricle": 72,
          "Left Interior": 73,
          "Right Interior": 74,
          "Left Lateral Ventricles": 75,
          "Right Lateral Ventricles": 76,
          "WM hypointensities": 77,
          "Left WM hypointensities": 78,
          "Right WM hypointensities": 79,
          "non WM hypointensities": 80,
          "Left non WM hypointensities": 81,
          "Right non WM hypointensities": 82,
          "Left F1": 83,
          "Right F1": 84,
          "Optic Chiasm": 85,
          "Corpus_Callosum": 86,
          "Left Amygdala Anterior": 96,
          "Right Amygdala Anterior": 97,
          "Dura": 98,
          "Left wm intensity abnormality": 100,
          "Left caudate intensity abnormality": 101,
          "Left putamen intensity abnormality": 102,
          "Left accumbens intensity abnormality": 103,
          "Left pallidum intensity abnormality": 104,
          "Left amygdala intensity abnormality": 105,
          "Left hippocampus intensity abnormality": 106,
          "Left thalamus intensity abnormality": 107,
          "Left VDC intensity abnormality": 108,
          "Right wm intensity abnormality": 109,
          "Right caudate intensity abnormality": 110,
          "Right putamen intensity abnormality": 111,
          "Right accumbens intensity abnormality": 112,
          "Right pallidum intensity abnormality": 113,
          "Right amygdala intensity abnormality": 114,
          "Right hippocampus intensity abnormality": 115,
          "Right thalamus intensity abnormality": 116,
          "Right VDC intensity abnormality": 117,
          "Epidermis": 118,
          "Conn Tissue": 119,
          "SC Fat_Muscle": 120,
          "Cranium": 121,
          "CSF SA": 122,
          "Muscle": 123,
          "Ear": 124,
          "Adipose": 125,
          "Spinal Cord": 126,
          "Soft Tissue": 127,
          "Nerve": 128,
          "Bone": 129,
          "Air": 130,
          "Orbital Fat": 131,
          "Tongue": 132,
          "Nasal Structures": 133,
          "Globe": 134,
          "Teeth": 135,
          "Left Caudate": 136,
          "Right Caudate": 137,
          "Left Claustrum": 138,
          "Right Claustrum": 139,
          "Cornea": 140,
          "Diploe": 142,
          "Vitreous Humor": 143,
          "Lens": 144,
          "Aqueous Humor": 145,
          "Outer Table": 146,
          "Inner Table": 147,
          "Periosteum": 148,
          "Endosteum": 149,
          "R": 150,
          "Iris": 151,
          "SC Adipose": 152,
          "SC Tissue": 153,
          "Orbital Adipose": 154,


          "Left hippocampal_fissure": 193,
          "Left CADG head": 194,
          "Left subiculum": 195,
          "Left fimbria": 196,
          "Right hippocampal_fissure": 197,
          "Right CADG head": 198,
          "Right subiculum": 199,
          "Right fimbria": 200,
          "alveus": 201,
          "perforant_pathway": 202,
          "parasubiculum": 203,
          "presubiculum": 204,
          "subiculum": 205,
          "CA1": 206,
          "CA2": 207,
          "CA3": 208,
          "CA4": 209,
          "GC DG": 210,
          "HATA": 211,
          "fimbria": 212,
          "lateral_ventricle": 213,
          "molecular_layer_HP": 214,
          "hippocampal_fissure": 215,
          "entorhinal_cortex": 216,
          "molecular_layer_subiculum": 217,
          "Amygdala": 218,
          "Cerebral_White_Matter": 219,
          "Cerebral_Cortex": 220,
          "Inf_Lat_Vent": 221,
          "Ectorhinal": 222,
          "Perirhinal": 222,
          "Cerebral_White_Matter_Edge": 223,
          "fMRI_Background": 224,


// lymph node and vascular labels
          "Aorta": 331,
          "Left Common IliacA": 332,
          "Right Common IliacA": 333,
          "Left External IliacA": 334,
          "Right External IliacA": 335,
          "Left Internal IliacA": 336,
          "Right Internal IliacA": 337,
          "Left Lateral SacralA": 338,
          "Right Lateral SacralA": 339,
          "Left ObturatorA": 340,
          "Right ObturatorA": 341,
          "Left Internal PudendalA": 342,
          "Right Internal PudendalA": 343,
          "Left UmbilicalA": 344,
          "Right UmbilicalA": 345,
          "Left Inf RectalA": 346,
          "Right Inf RectalA": 347,
          "Left Common IliacV": 348,
          "Right Common IliacV": 349,
          "Left External IliacV": 350,
          "Right External IliacV": 351,
          "Left Internal IliacV": 352,
          "Right Internal IliacV": 353,
          "Left ObturatorV": 354,
          "Right ObturatorV": 355,
          "Left Internal PudendalV": 356,
          "Right Internal PudendalV": 357,
          "Pos Lymph": 358,
          "Neg Lymph": 359,

          "V1": 400,
          "V2": 401,
          "BA44": 402,
          "BA45": 403,
          "BA4a": 404,
          "BA4p": 405,
          "BA6": 406,
          "BA2": 407,
          "BAun1": 408,
          "BAun2": 409,

// Below is the color table for the cortical labels of the seg volume
// created by mri_aparc2aseg in which the aseg cortex label is replaced
// by the labels in the aparc. It also supports wm labels that will
// eventually be created by mri_aparc2aseg. Otherwise, the aseg labels
// do not change from above. The cortical lables are the same as in
// colortable_desikan_killiany.txt, except that left hemisphere has
// 1000 added to the index and the right has 2000 added.  The label
// names are also prepended with ctx lh or ctx rh. The white matter
// labels are the same as in colortable_desikan_killiany.txt, except
// that left hemisphere has 3000 added to the index and the right has
// 4000 added. The label names are also prepended with wm lh or wm rh.
// Centrum semiovale is also labled with 5001 (left) and 5002 (right).
// Even further below is the color table for aparc.a2005s.

          "ctx lh unknown": 1000,
          "ctx lh bankssts": 1001,
          "ctx lh caudalanteriorcingulate": 1002,
          "ctx lh caudalmiddlefrontal": 1003,
          "ctx lh corpuscallosum": 1004,
          "ctx lh cuneus": 1005,
          "ctx lh entorhinal": 1006,
          "ctx lh fusiform": 1007,
          "ctx lh inferiorparietal": 1008,
          "ctx lh inferiortemporal": 1009,
          "ctx lh isthmuscingulate": 1010,
          "ctx lh lateraloccipital": 1011,
          "ctx lh lateralorbitofrontal": 1012,
          "ctx lh lingual": 1013,
          "ctx lh medialorbitofrontal": 1014,
          "ctx lh middletemporal": 1015,
          "ctx lh parahippocampal": 1016,
          "ctx lh paracentral": 1017,
          "ctx lh parsopercularis": 1018,
          "ctx lh parsorbitalis": 1019,
          "ctx lh parstriangularis": 1020,
          "ctx lh pericalcarine": 1021,
          "ctx lh postcentral": 1022,
          "ctx lh posteriorcingulate": 1023,
          "ctx lh precentral": 1024,
          "ctx lh precuneus": 1025,
          "ctx lh rostralanteriorcingulate": 1026,
          "ctx lh rostralmiddlefrontal": 1027,
          "ctx lh superiorfrontal": 1028,
          "ctx lh superiorparietal": 1029,
          "ctx lh superiortemporal": 1030,
          "ctx lh supramarginal": 1031,
          "ctx lh frontalpole": 1032,
          "ctx lh temporalpole": 1033,
          "ctx lh transversetemporal": 1034,

          "ctx rh unknown": 2000,
          "ctx rh bankssts": 2001,
          "ctx rh caudalanteriorcingulate": 2002,
          "ctx rh caudalmiddlefrontal": 2003,
          "ctx rh corpuscallosum": 2004,
          "ctx rh cuneus": 2005,
          "ctx rh entorhinal": 2006,
          "ctx rh fusiform": 2007,
          "ctx rh inferiorparietal": 2008,
          "ctx rh inferiortemporal": 2009,
          "ctx rh isthmuscingulate": 2010,
          "ctx rh lateraloccipital": 2011,
          "ctx rh lateralorbitofrontal": 2012,
          "ctx rh lingual": 2013,
          "ctx rh medialorbitofrontal": 2014,
          "ctx rh middletemporal": 2015,
          "ctx rh parahippocampal": 2016,
          "ctx rh paracentral": 2017,
          "ctx rh parsopercularis": 2018,
          "ctx rh parsorbitalis": 2019,
          "ctx rh parstriangularis": 2020,
          "ctx rh pericalcarine": 2021,
          "ctx rh postcentral": 2022,
          "ctx rh posteriorcingulate": 2023,
          "ctx rh precentral": 2024,
          "ctx rh precuneus": 2025,
          "ctx rh rostralanteriorcingulate": 2026,
          "ctx rh rostralmiddlefrontal": 2027,
          "ctx rh superiorfrontal": 2028,
          "ctx rh superiorparietal": 2029,
          "ctx rh superiortemporal": 2030,
          "ctx rh supramarginal": 2031,
          "ctx rh frontalpole": 2032,
          "ctx rh temporalpole": 2033,
          "ctx rh transversetemporal": 2034,

          "wm lh unknown": 3000,
          "wm lh bankssts": 3001,
          "wm lh caudalanteriorcingulate": 3002,
          "wm lh caudalmiddlefrontal": 3003,
          "wm lh corpuscallosum": 3004,
          "wm lh cuneus": 3005,
          "wm lh entorhinal": 3006,
          "wm lh fusiform": 3007,
          "wm lh inferiorparietal": 3008,
          "wm lh inferiortemporal": 3009,
          "wm lh isthmuscingulate": 3010,
          "wm lh lateraloccipital": 3011,
          "wm lh lateralorbitofrontal": 3012,
          "wm lh lingual": 3013,
          "wm lh medialorbitofrontal": 3014,
          "wm lh middletemporal": 3015,
          "wm lh parahippocampal": 3016,
          "wm lh paracentral": 3017,
          "wm lh parsopercularis": 3018,
          "wm lh parsorbitalis": 3019,
          "wm lh parstriangularis": 3020,
          "wm lh pericalcarine": 3021,
          "wm lh postcentral": 3022,
          "wm lh posteriorcingulate": 3023,
          "wm lh precentral": 3024,
          "wm lh precuneus": 3025,
          "wm lh rostralanteriorcingulate": 3026,
          "wm lh rostralmiddlefrontal": 3027,
          "wm lh superiorfrontal": 3028,
          "wm lh superiorparietal": 3029,
          "wm lh superiortemporal": 3030,
          "wm lh supramarginal": 3031,
          "wm lh frontalpole": 3032,
          "wm lh temporalpole": 3033,
          "wm lh transversetemporal": 3034,
          "wm rh unknown": 4000,
          "wm rh bankssts": 4001,
          "wm rh caudalanteriorcingulate": 4002,
          "wm rh caudalmiddlefrontal": 4003,
          "wm rh corpuscallosum": 4004,
          "wm rh cuneus": 4005,
          "wm rh entorhinal": 4006,
          "wm rh fusiform": 4007,
          "wm rh inferiorparietal": 4008,
          "wm rh inferiortemporal": 4009,
          "wm rh isthmuscingulate": 4010,
          "wm rh lateraloccipital": 4011,
          "wm rh lateralorbitofrontal": 4012,
          "wm rh lingual": 4013,
          "wm rh medialorbitofrontal": 4014,
          "wm rh middletemporal": 4015,
          "wm rh parahippocampal": 4016,
          "wm rh paracentral": 4017,
          "wm rh parsopercularis": 4018,
          "wm rh parsorbitalis": 4019,
          "wm rh parstriangularis": 4020,
          "wm rh pericalcarine": 4021,
          "wm rh postcentral": 4022,
          "wm rh posteriorcingulate": 4023,
          "wm rh precentral": 4024,
          "wm rh precuneus": 4025,
          "wm rh rostralanteriorcingulate": 4026,
          "wm rh rostralmiddlefrontal": 4027,
          "wm rh superiorfrontal": 4028,
          "wm rh superiorparietal": 4029,
          "wm rh superiortemporal": 4030,
          "wm rh supramarginal": 4031,
          "wm rh frontalpole": 4032,
          "wm rh temporalpole": 4033,
          "wm rh transversetemporal": 4034,
          "wm lh centrum semiovale": 5001,
          "wm rh centrum semiovale": 5002,

// Below is the color table for the cortical labels of the seg volume
// created by mri_aparc2aseg (with   a2005 flag) in which the aseg
// cortex label is replaced by the labels in the aparc.a2005. The
// cortical lables are the same as in Simple_surface_labels2005.txt,
// except that left hemisphere has 1100 added to the index and the
// right has 2100 added.  The label names are also prepended with
// ctx lh or ctx rh.

          "ctx lh Unknown": 1100,
          "ctx lh Corpus_callosum": 1101,
          "ctx lh G_and_S_Insula_ONLY_AVERAGE": 1102,
          "ctx lh G_cingulate Isthmus": 1103,
          "ctx lh G_cingulate Main_part": 1104,
          "ctx lh G_cuneus": 1105,
          "ctx lh G_frontal_inf Opercular_part": 1106,
          "ctx lh G_frontal_inf Orbital_part": 1107,
          "ctx lh G_frontal_inf Triangular_part": 1108,
          "ctx lh G_frontal_middle": 1109,
          "ctx lh G_frontal_superior": 1110,
          "ctx lh G_frontomarginal": 1111,
          "ctx lh G_insular_long": 1112,
          "ctx lh G_insular_short": 1113,
          "ctx lh G_and_S_occipital_inferior": 1114,
          "ctx lh G_occipital_middle": 1115,
          "ctx lh G_occipital_superior": 1116,
          "ctx lh G_occipit temp_lat Or_fusiform": 1117,
          "ctx lh G_occipit temp_med Lingual_part": 1118,
          "ctx lh G_occipit temp_med Parahippocampal_part": 1119,
          "ctx lh G_orbital": 1120,
          "ctx lh G_paracentral": 1121,
          "ctx lh G_parietal_inferior Angular_part": 1122,
          "ctx lh G_parietal_inferior Supramarginal_part": 1123,
          "ctx lh G_parietal_superior": 1124,
          "ctx lh G_postcentral": 1125,
          "ctx lh G_precentral": 1126,
          "ctx lh G_precuneus": 1127,
          "ctx lh G_rectus": 1128,
          "ctx lh G_subcallosal": 1129,
          "ctx lh G_subcentral": 1130,
          "ctx lh G_temporal_inferior": 1131,
          "ctx lh G_temporal_middle": 1132,
          "ctx lh G_temp_sup G_temp_transv_and_interm_S": 1133,
          "ctx lh G_temp_sup Lateral_aspect": 1134,
          "ctx lh G_temp_sup Planum_polare": 1135,
          "ctx lh G_temp_sup Planum_tempolare": 1136,
          "ctx lh G_and_S_transverse_frontopolar": 1137,
          "ctx lh Lat_Fissure ant_sgt ramus_horizontal": 1138,
          "ctx lh Lat_Fissure ant_sgt ramus_vertical": 1139,
          "ctx lh Lat_Fissure post_sgt": 1140,
          "ctx lh Medial_wall": 1141,
          "ctx lh Pole_occipital": 1142,
          "ctx lh Pole_temporal": 1143,
          "ctx lh S_calcarine": 1144,
          "ctx lh S_central": 1145,
          "ctx lh S_central_insula": 1146,
          "ctx lh S_cingulate Main_part_and_Intracingulate": 1147,
          "ctx lh S_cingulate Marginalis_part": 1148,
          "ctx lh S_circular_insula_anterior": 1149,
          "ctx lh S_circular_insula_inferior": 1150,
          "ctx lh S_circular_insula_superior": 1151,
          "ctx lh S_collateral_transverse_ant": 1152,
          "ctx lh S_collateral_transverse_post": 1153,
          "ctx lh S_frontal_inferior": 1154,
          "ctx lh S_frontal_middle": 1155,
          "ctx lh S_frontal_superior": 1156,
          "ctx lh S_frontomarginal": 1157,
          "ctx lh S_intermedius_primus Jensen": 1158,
          "ctx lh S_intraparietal and_Parietal_transverse": 1159,
          "ctx lh S_occipital_anterior": 1160,
          "ctx lh S_occipital_middle_and_Lunatus": 1161,
          "ctx lh S_occipital_superior_and_transversalis": 1162,
          "ctx lh S_occipito temporal_lateral": 1163,
          "ctx lh S_occipito temporal_medial_and_S_Lingual": 1164,
          "ctx lh S_orbital H_shapped": 1165,
          "ctx lh S_orbital_lateral": 1166,
          "ctx lh S_orbital_medial Or_olfactory": 1167,
          "ctx lh S_paracentral": 1168,
          "ctx lh S_parieto_occipital": 1169,
          "ctx lh S_pericallosal": 1170,
          "ctx lh S_postcentral": 1171,
          "ctx lh S_precentral Inferior part": 1172,
          "ctx lh S_precentral Superior part": 1173,
          "ctx lh S_subcentral_ant": 1174,
          "ctx lh S_subcentral_post": 1175,
          "ctx lh S_suborbital": 1176,
          "ctx lh S_subparietal": 1177,
          "ctx lh S_supracingulate": 1178,
          "ctx lh S_temporal_inferior": 1179,
          "ctx lh S_temporal_superior": 1180,
          "ctx lh S_temporal_transverse": 1181,

          "ctx rh Unknown": 2100,
          "ctx rh Corpus_callosum": 2101,
          "ctx rh G_and_S_Insula_ONLY_AVERAGE": 2102,
          "ctx rh G_cingulate Isthmus": 2103,
          "ctx rh G_cingulate Main_part": 2104,
          "ctx rh G_cuneus": 2105,
          "ctx rh G_frontal_inf Opercular_part": 2106,
          "ctx rh G_frontal_inf Orbital_part": 2107,
          "ctx rh G_frontal_inf Triangular_part": 2108,
          "ctx rh G_frontal_middle": 2109,
          "ctx rh G_frontal_superior": 2110,
          "ctx rh G_frontomarginal": 2111,
          "ctx rh G_insular_long": 2112,
          "ctx rh G_insular_short": 2113,
          "ctx rh G_and_S_occipital_inferior": 2114,
          "ctx rh G_occipital_middle": 2115,
          "ctx rh G_occipital_superior": 2116,
          "ctx rh G_occipit temp_lat Or_fusiform": 2117,
          "ctx rh G_occipit temp_med Lingual_part": 2118,
          "ctx rh G_occipit temp_med Parahippocampal_part": 2119,
          "ctx rh G_orbital": 2120,
          "ctx rh G_paracentral": 2121,
          "ctx rh G_parietal_inferior Angular_part": 2122,
          "ctx rh G_parietal_inferior Supramarginal_part": 2123,
          "ctx rh G_parietal_superior": 2124,
          "ctx rh G_postcentral": 2125,
          "ctx rh G_precentral": 2126,
          "ctx rh G_precuneus": 2127,
          "ctx rh G_rectus": 2128,
          "ctx rh G_subcallosal": 2129,
          "ctx rh G_subcentral": 2130,
          "ctx rh G_temporal_inferior": 2131,
          "ctx rh G_temporal_middle": 2132,
          "ctx rh G_temp_sup G_temp_transv_and_interm_S": 2133,
          "ctx rh G_temp_sup Lateral_aspect": 2134,
          "ctx rh G_temp_sup Planum_polare": 2135,
          "ctx rh G_temp_sup Planum_tempolare": 2136,
          "ctx rh G_and_S_transverse_frontopolar": 2137,
          "ctx rh Lat_Fissure ant_sgt ramus_horizontal": 2138,
          "ctx rh Lat_Fissure ant_sgt ramus_vertical": 2139,
          "ctx rh Lat_Fissure post_sgt": 2140,
          "ctx rh Medial_wall": 2141,
          "ctx rh Pole_occipital": 2142,
          "ctx rh Pole_temporal": 2143,
          "ctx rh S_calcarine": 2144,
          "ctx rh S_central": 2145,
          "ctx rh S_central_insula": 2146,
          "ctx rh S_cingulate Main_part_and_Intracingulate": 2147,
          "ctx rh S_cingulate Marginalis_part": 2148,
          "ctx rh S_circular_insula_anterior": 2149,
          "ctx rh S_circular_insula_inferior": 2150,
          "ctx rh S_circular_insula_superior": 2151,
          "ctx rh S_collateral_transverse_ant": 2152,
          "ctx rh S_collateral_transverse_post": 2153,
          "ctx rh S_frontal_inferior": 2154,
          "ctx rh S_frontal_middle": 2155,
          "ctx rh S_frontal_superior": 2156,
          "ctx rh S_frontomarginal": 2157,
          "ctx rh S_intermedius_primus Jensen": 2158,
          "ctx rh S_intraparietal and_Parietal_transverse": 2159,
          "ctx rh S_occipital_anterior": 2160,
          "ctx rh S_occipital_middle_and_Lunatus": 2161,
          "ctx rh S_occipital_superior_and_transversalis": 2162,
          "ctx rh S_occipito temporal_lateral": 2163,
          "ctx rh S_occipito temporal_medial_and_S_Lingual": 2164,
          "ctx rh S_orbital H_shapped": 2165,
          "ctx rh S_orbital_lateral": 2166,
          "ctx rh S_orbital_medial Or_olfactory": 2167,
          "ctx rh S_paracentral": 2168,
          "ctx rh S_parieto_occipital": 2169,
          "ctx rh S_pericallosal": 2170,
          "ctx rh S_postcentral": 2171,
          "ctx rh S_precentral Inferior part": 2172,
          "ctx rh S_precentral Superior part": 2173,
          "ctx rh S_subcentral_ant": 2174,
          "ctx rh S_subcentral_post": 2175,
          "ctx rh S_suborbital": 2176,
          "ctx rh S_subparietal": 2177,
          "ctx rh S_supracingulate": 2178,
          "ctx rh S_temporal_inferior": 2179,
          "ctx rh S_temporal_superior": 2180,
          "ctx rh S_temporal_transverse": 2181,

          "wm lh Unknown": 3100,
          "wm lh Corpus_callosum": 3101,
          "wm lh G_and_S_Insula_ONLY_AVERAGE": 3102,
          "wm lh G_cingulate Isthmus": 3103,
          "wm lh G_cingulate Main_part": 3104,
          "wm lh G_cuneus": 3105,
          "wm lh G_frontal_inf Opercular_part": 3106,
          "wm lh G_frontal_inf Orbital_part": 3107,
          "wm lh G_frontal_inf Triangular_part": 3108,
          "wm lh G_frontal_middle": 3109,
          "wm lh G_frontal_superior": 3110,
          "wm lh G_frontomarginal": 3111,
          "wm lh G_insular_long": 3112,
          "wm lh G_insular_short": 3113,
          "wm lh G_and_S_occipital_inferior": 3114,
          "wm lh G_occipital_middle": 3115,
          "wm lh G_occipital_superior": 3116,
          "wm lh G_occipit temp_lat Or_fusiform": 3117,
          "wm lh G_occipit temp_med Lingual_part": 3118,
          "wm lh G_occipit temp_med Parahippocampal_part": 3119,
          "wm lh G_orbital": 3120,
          "wm lh G_paracentral": 3121,
          "wm lh G_parietal_inferior Angular_part": 3122,
          "wm lh G_parietal_inferior Supramarginal_part": 3123,
          "wm lh G_parietal_superior": 3124,
          "wm lh G_postcentral": 3125,
          "wm lh G_precentral": 3126,
          "wm lh G_precuneus": 3127,
          "wm lh G_rectus": 3128,
          "wm lh G_subcallosal": 3129,
          "wm lh G_subcentral": 3130,
          "wm lh G_temporal_inferior": 3131,
          "wm lh G_temporal_middle": 3132,
          "wm lh G_temp_sup G_temp_transv_and_interm_S": 3133,
          "wm lh G_temp_sup Lateral_aspect": 3134,
          "wm lh G_temp_sup Planum_polare": 3135,
          "wm lh G_temp_sup Planum_tempolare": 3136,
          "wm lh G_and_S_transverse_frontopolar": 3137,
          "wm lh Lat_Fissure ant_sgt ramus_horizontal": 3138,
          "wm lh Lat_Fissure ant_sgt ramus_vertical": 3139,
          "wm lh Lat_Fissure post_sgt": 3140,
          "wm lh Medial_wall": 3141,
          "wm lh Pole_occipital": 3142,
          "wm lh Pole_temporal": 3143,
          "wm lh S_calcarine": 3144,
          "wm lh S_central": 3145,
          "wm lh S_central_insula": 3146,
          "wm lh S_cingulate Main_part_and_Intracingulate": 3147,
          "wm lh S_cingulate Marginalis_part": 3148,
          "wm lh S_circular_insula_anterior": 3149,
          "wm lh S_circular_insula_inferior": 3150,
          "wm lh S_circular_insula_superior": 3151,
          "wm lh S_collateral_transverse_ant": 3152,
          "wm lh S_collateral_transverse_post": 3153,
          "wm lh S_frontal_inferior": 3154,
          "wm lh S_frontal_middle": 3155,
          "wm lh S_frontal_superior": 3156,
          "wm lh S_frontomarginal": 3157,
          "wm lh S_intermedius_primus Jensen": 3158,
          "wm lh S_intraparietal and_Parietal_transverse": 3159,
          "wm lh S_occipital_anterior": 3160,
          "wm lh S_occipital_middle_and_Lunatus": 3161,
          "wm lh S_occipital_superior_and_transversalis": 3162,
          "wm lh S_occipito temporal_lateral": 3163,
          "wm lh S_occipito temporal_medial_and_S_Lingual": 3164,
          "wm lh S_orbital H_shapped": 3165,
          "wm lh S_orbital_lateral": 3166,
          "wm lh S_orbital_medial Or_olfactory": 3167,
          "wm lh S_paracentral": 3168,
          "wm lh S_parieto_occipital": 3169,
          "wm lh S_pericallosal": 3170,
          "wm lh S_postcentral": 3171,
          "wm lh S_precentral Inferior part": 3172,
          "wm lh S_precentral Superior part": 3173,
          "wm lh S_subcentral_ant": 3174,
          "wm lh S_subcentral_post": 3175,
          "wm lh S_suborbital": 3176,
          "wm lh S_subparietal": 3177,
          "wm lh S_supracingulate": 3178,
          "wm lh S_temporal_inferior": 3179,
          "wm lh S_temporal_superior": 3180,
          "wm lh S_temporal_transverse": 3181,

          "wm rh Unknown": 4100,
          "wm rh Corpus_callosum": 4101,
          "wm rh G_and_S_Insula_ONLY_AVERAGE": 4102,
          "wm rh G_cingulate Isthmus": 4103,
          "wm rh G_cingulate Main_part": 4104,
          "wm rh G_cuneus": 4105,
          "wm rh G_frontal_inf Opercular_part": 4106,
          "wm rh G_frontal_inf Orbital_part": 4107,
          "wm rh G_frontal_inf Triangular_part": 4108,
          "wm rh G_frontal_middle": 4109,
          "wm rh G_frontal_superior": 4110,
          "wm rh G_frontomarginal": 4111,
          "wm rh G_insular_long": 4112,
          "wm rh G_insular_short": 4113,
          "wm rh G_and_S_occipital_inferior": 4114,
          "wm rh G_occipital_middle": 4115,
          "wm rh G_occipital_superior": 4116,
          "wm rh G_occipit temp_lat Or_fusiform": 4117,
          "wm rh G_occipit temp_med Lingual_part": 4118,
          "wm rh G_occipit temp_med Parahippocampal_part": 4119,
          "wm rh G_orbital": 4120,
          "wm rh G_paracentral": 4121,
          "wm rh G_parietal_inferior Angular_part": 4122,
          "wm rh G_parietal_inferior Supramarginal_part": 4123,
          "wm rh G_parietal_superior": 4124,
          "wm rh G_postcentral": 4125,
          "wm rh G_precentral": 4126,
          "wm rh G_precuneus": 4127,
          "wm rh G_rectus": 4128,
          "wm rh G_subcallosal": 4129,
          "wm rh G_subcentral": 4130,
          "wm rh G_temporal_inferior": 4131,
          "wm rh G_temporal_middle": 4132,
          "wm rh G_temp_sup G_temp_transv_and_interm_S": 4133,
          "wm rh G_temp_sup Lateral_aspect": 4134,
          "wm rh G_temp_sup Planum_polare": 4135,
          "wm rh G_temp_sup Planum_tempolare": 4136,
          "wm rh G_and_S_transverse_frontopolar": 4137,
          "wm rh Lat_Fissure ant_sgt ramus_horizontal": 4138,
          "wm rh Lat_Fissure ant_sgt ramus_vertical": 4139,
          "wm rh Lat_Fissure post_sgt": 4140,
          "wm rh Medial_wall": 4141,
          "wm rh Pole_occipital": 4142,
          "wm rh Pole_temporal": 4143,
          "wm rh S_calcarine": 4144,
          "wm rh S_central": 4145,
          "wm rh S_central_insula": 4146,
          "wm rh S_cingulate Main_part_and_Intracingulate": 4147,
          "wm rh S_cingulate Marginalis_part": 4148,
          "wm rh S_circular_insula_anterior": 4149,
          "wm rh S_circular_insula_inferior": 4150,
          "wm rh S_circular_insula_superior": 4151,
          "wm rh S_collateral_transverse_ant": 4152,
          "wm rh S_collateral_transverse_post": 4153,
          "wm rh S_frontal_inferior": 4154,
          "wm rh S_frontal_middle": 4155,
          "wm rh S_frontal_superior": 4156,
          "wm rh S_frontomarginal": 4157,
          "wm rh S_intermedius_primus Jensen": 4158,
          "wm rh S_intraparietal and_Parietal_transverse": 4159,
          "wm rh S_occipital_anterior": 4160,
          "wm rh S_occipital_middle_and_Lunatus": 4161,
          "wm rh S_occipital_superior_and_transversalis": 4162,
          "wm rh S_occipito temporal_lateral": 4163,
          "wm rh S_occipito temporal_medial_and_S_Lingual": 4164,
          "wm rh S_orbital H_shapped": 4165,
          "wm rh S_orbital_lateral": 4166,
          "wm rh S_orbital_medial Or_olfactory": 4167,
          "wm rh S_paracentral": 4168,
          "wm rh S_parieto_occipital": 4169,
          "wm rh S_pericallosal": 4170,
          "wm rh S_postcentral": 4171,
          "wm rh S_precentral Inferior part": 4172,
          "wm rh S_precentral Superior part": 4173,
          "wm rh S_subcentral_ant": 4174,
          "wm rh S_subcentral_post": 4175,
          "wm rh S_suborbital": 4176,
          "wm rh S_subparietal": 4177,
          "wm rh S_supracingulate": 4178,
          "wm rh S_temporal_inferior": 4179,
          "wm rh S_temporal_superior": 4180,
          "wm rh S_temporal_transverse": 4181,
  };
};