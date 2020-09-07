<script>
import { EventBus } from "../services/event-bus";
  import cordovaCamera from "../services/cordova-camera";
  
  export default {
    name: "PageIndex",
    mounted() {
      EventBus.$off("takePicture");
      EventBus.$on("takePicture", this.uploadImageFromCamera);
    },
    methods: {
      async uploadImageFromCamera() {
        let base64 = await cordovaCamera.getBase64FromCamera();
        console.log("base64", base64)
      }
    }
  };
</script>