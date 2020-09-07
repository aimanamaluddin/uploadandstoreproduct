<template>
  

  <q-btn flat dense round @click="takePicture">
    <q-icon name="camera" />
  </q-btn>

 
</template>

<script>
  import { EventBus } from "../services/event-bus.js";

  export default {
  

    methods: {
      takePicture() {
        EventBus.$emit('takePicture')
      }
    }
  }
  </script>