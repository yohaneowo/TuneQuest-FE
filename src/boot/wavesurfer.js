import WaveSurfer from "wavesurfer.js";
export default ({ Vue }) => {
  Vue.prototype.$wavesurfer = WaveSurfer.create({
    container: "#wavesurfer-container",
    // 這裡可以加入更多 WaveSurfer 的配置選項
  });
};
