import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useMusicGenStore = defineStore("musicgen", () => {
  const prompt = ref("");
  const duration = ref(15);
  const latest_generated_music_path = ref("");
  const latest_audiofile_name = ref("");
  const play_button_activated = ref("");
  const searchHelper_submitPrompt = ref("");
  const uploadMusicFile_genreDetect = ref("");
  const uploadMusicFile_prompt = ref("");
  const user_selected_genre = ref("");
  const user_uploaded_music_title = ref("");
  const user_uploaded_music_prompt = ref("");
  const user_uploaded_file = ref("");
  const uploaded_summited = ref(false);
  const historyItems = ref([]);
  const user_uploaded_file_duration = ref(0);
  const searchResults = ref([]);
  const showDummy = ref(true);
  const update_showDummy = (value) => {
    showDummy.value = value;
    console.log("showDummy updated to", value);
  };

  const dummyAudioSearchResult = [
    {
      name: "Elegant Baroque",
      file_name: "classical.00001.wav",
      prompt: "A baroque piece with a touch of elegance.",
    },
    {
      name: "Morning Symphony",
      file_name: "classical.00002.wav",
      prompt:
        "A symphonic piece that captures the essence of a sunny morning, with gentle strings and a soft horn section",
    },
    {
      name: "Solo Piano Melancholy",
      file_name: "classical.00003.wav",
      prompt:
        "A solo piano piece that expresses deep melancholy and reflection through slow and tender melodies",
    },
    {
      name: "Classical Guitar Reverie",
      file_name: "classical.00004.wav",
      prompt:
        "A peaceful classical guitar solo that evokes a dreamy, contemplative mood",
    },
    {
      name: "Venetian Opera",
      file_name: "classical.00005.wav",
      prompt:
        "A short operatic piece with dramatic soprano vocals set in the historical backdrop of Venice",
    },
  ];

  function update_searchResults(value) {
    searchResults.value = value;
    console.log("searchResults updated to", value);
  }

  function update_user_uploaded_file_duration(value) {
    user_uploaded_file_duration.value = value;
    console.log("user_uploaded_file_duration updated to", value);
  }

  async function fetchCollectionData() {
    try {
      // 这里的URL需要替换成实际的MongoDB Atlas的API endpoint
      const response = await axios.get(
        "http://127.0.0.1:9988/musicgen_generate_music/music_storage/all"
      );
      console.log("response.data", response.data);
      historyItems.value = response.data;
      console.log(historyItems.value.length);
      console.log("History items fetched:", response.data);
    } catch (error) {
      console.error("Error fetching collection data:", error);
    }
  }

  function update_uploaded_summited(value) {
    uploaded_summited.value = value;
    console.log("uploaded_summited updated to", value);
  }

  function update_user_uploaded_file(value) {
    user_uploaded_file.value = value;
    console.log("user_uploaded_file updated to", value);
  }

  function update_user_uploaded_music_title(value) {
    user_uploaded_music_title.value = value;
    console.log("user_uploaded_music_title updated to", value);
  }
  function update_user_uploaded_music_prompt(value) {
    user_uploaded_music_prompt.value = value;
    console.log("user_uploaded_music_prompt updated to", value);
  }

  function update_user_selected_genre(value) {
    user_selected_genre.value = value;
    console.log("user_selected_genre updated to", value);
  }

  function update_uploadMusicFile_prompt(value) {
    uploadMusicFile_prompt.value = value;
    console.log("uploadMusicFile_prompt updated to", value);
  }

  function update_uploadMusicFile_genreDetect(value) {
    uploadMusicFile_genreDetect.value = value;
    console.log("uploadMusicFile_genreDetect updated to", value);
  }

  function update_searchHelper_submitPrompt(value) {
    searchHelper_submitPrompt.value = value;
    console.log("searchHelper_submitPrompt updated to", value);
  }

  function update_play_button_activated(value) {
    play_button_activated.value = value;
    console.log("play_button_activated updated to", value);
  }

  function update_duration(value) {
    duration.value = value;
    console.log("duration updated to", value);
  }

  function update_prompt(value) {
    prompt.value = value;
    console.log("prompt updated to", value);
  }

  function update_latest_generated_music_path(value) {
    latest_generated_music_path.value = value;
    console.log("latest_generated_music_path updated to", value);
  }

  function update_latest_audiofile_name(value) {
    latest_audiofile_name.value = value;
    console.log("latest_audiofile_name updated to", value);
    console.log("value", value);
    console.log(value == "classical.00000.wav");
    if (value == "classical.00000.wav") {
      searchResults.value = dummyAudioSearchResult;
      showDummy.value = false;
    }
  }

  function get_latest_generated_music_path() {
    return latest_generated_music_path.value;
  }

  return {
    showDummy,
    update_showDummy,
    searchResults,
    update_searchResults,
    user_uploaded_file_duration,
    update_user_uploaded_file_duration,
    historyItems,
    fetchCollectionData,
    uploaded_summited,
    update_uploaded_summited,
    user_uploaded_file,
    update_user_uploaded_file,
    user_uploaded_music_title,
    update_user_uploaded_music_title,
    user_uploaded_music_prompt,
    update_user_uploaded_music_prompt,
    user_selected_genre,
    update_user_selected_genre,
    uploadMusicFile_prompt,
    update_uploadMusicFile_prompt,
    uploadMusicFile_genreDetect,
    update_uploadMusicFile_genreDetect,
    searchHelper_submitPrompt,
    update_searchHelper_submitPrompt,
    play_button_activated,
    update_play_button_activated,
    prompt,
    duration,
    update_duration,
    update_prompt,
    update_latest_generated_music_path,
    get_latest_generated_music_path,
    latest_generated_music_path,
    latest_audiofile_name,
    update_latest_audiofile_name,
  };
});
