<template>
  <div class="wrap_add">
    <label
      for="file-upload-DB"
      class="file-upload-DB"
      @click="showUploadSuccess"
    >
      <img
        ref="all-upload-icon"
        src="/src/assets/upload.png"
        alt="All-upload"
        class="all_upload_icon"
        @click="uploadToDB"
        v-if="!showAudio"
      /> </label
    ><label v-if="!showSuccessMessage"> 點擊上傳至資料庫 </label>
    <div v-if="showSuccessMessage" class="success-message">上傳成功</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useMusicGenStore } from "../store/musicGenStore";
import { watch } from "vue";
import axios from "axios";
const file_finalname = ref("");
const file_finalfilepath = ref("");
const store = useMusicGenStore();
const showSuccessMessage = ref(false);

const showUploadSuccess = () => {
  console.log("上傳成功");
  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);
};

/*
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: String,
  prompt: String,
  genre: String,
});

const emit = defineEmits(["upload-success"]);
*/
const uploadToDB = async () => {
  // 在這裡模擬上傳到資料庫的操作
  // console.log("上傳到資料庫:", props.text, props.prompt, props.genre);
  const prompt = store.user_uploaded_music_prompt;
  const genre = store.user_selected_genre;
  const uploaded_file = store.user_uploaded_file;
  const formData = new FormData();
  const filename_withUUID = ref("");

  formData.append("prompt", prompt);
  console.log("prompt:", prompt);
  console.log(uploaded_file);
  formData.append("file", uploaded_file);
  try {
    const response = await axios.post(
      "http://127.0.0.1:9988/musicgen_generate_music/music_storage/upload/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response:", response.data);
    filename_withUUID.value = response.data.file_name;
    console.log("filename_withUUID:", filename_withUUID.value);
    console.log(prompt);
    const response2 = await renameFile(filename_withUUID.value, prompt);
    console.log(response2);
    console.log("now now now ");
    file_finalname.value = response2.new_file_name;
    file_finalfilepath.value = response2.new_file_path;
    console.log("file_finalname:", file_finalname.value);
    console.log("file_finalfilepath:", file_finalfilepath.value);
    createSemanticSearchData(genre, prompt).then((data) => {
      console.log("data:", data);
      store.fetchCollectionData();
    });

    // 处理成功上传的逻辑
  } catch (error) {
    console.error("Error:", error);
    // 处理上传失败的逻辑
  }
};

const createSemanticSearchData = async (genre, prompt) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:9988/musicgen_generate_music/create_semantic_search_data/?genre=${genre}&prompt=${prompt}&audiofile_path=${file_finalfilepath.value}&audiofile_name=${file_finalname.value}&duration=${store.user_uploaded_file_duration}`
    );
    console.log("API Response:", response.data);
    return response.data; // Return the response data if needed
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const renameFile = async (oldFileName, prompt) => {
  try {
    // console.log("oldFileName:", oldFileName);
    // console.log("prompt:", prompt);
    // const response = await axios.post(
    //   "http://127.0.0.1:9988/musicgen_generate_music/music_storage/rename/",
    //   {
    //     old_file_name: oldFileName,
    //     prompt: prompt,
    //   }
    // );
    const response = await axios.post(
      `http://127.0.0.1:9988/musicgen_generate_music/music_storage/rename/?old_file_name=${oldFileName}&prompt=${prompt}`
    );

    console.log(JSON.stringify(response.data));
    return response.data;

    // 处理成功响应
  } catch (error) {
    console.error(error);
    // 处理错误
  }
};
</script>
<style lang="scss">
.wrap_add {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: center;
  align-items: center; /* 水平置中 */
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.file-upload-DB {
  z-index: 1; /* 确保 file-upload 在顶部 */
  //opacity: 0; /* 隐藏 file-upload 的内容 */
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
  cursor: pointer;
}
.all_upload_icon {
  //transform: scale(0.7);
  max-width: 100px; /* 最大寬度 */
  max-height: 100px; /* 最大高度 */
  width: auto; /* 自動調整寬度 */
  height: auto; /* 自動調整高度 */
  object-fit: contain;
}
</style>
