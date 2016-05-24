// javascript code
//
// script_name: Beats
//
// author: The EarSketch Team
//
// description: Counting beats and sub-beats in a measure.
//
//
//

//Setup Section
init();
setTempo(140);

for (var i = 0; i < 2; i++) {

fitMedia(DUBSTEP_BASS_WOBBLE_013, 1, 1, 2); // Each kick drum hit lasts a quarter note: 1/4 of a measure.
fitMedia(DUBSTEP_BASS_WOBBLE_016, 2, 1, 2);
fitMedia(DUBSTEP_DRUMLOOP_MAIN_001, 3, 1, 2);
fitMedia(TIGERVSBIRD_BE_FREE_MY_CHILDREN, 4, 1, 2);
//fitMedia(RD_EDM_HIT_LEAD_1, 5, 1, 2);
}//Music Section
//fitMedia(DUBSTEP_BASS_WOBBLE_013, 1, 1, 2); // Each kick drum hit lasts a quarter note: 1/4 of a measure.
//fitMedia(DUBSTEP_BASS_WOBBLE_016, 2, 1, 2);
//fitMedia(DUBSTEP_DRUMLOOP_MAIN_001, 3, 1, 2);

//Finish Section
finish();