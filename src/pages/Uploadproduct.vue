<template>


<div>
  <input 
  style="display: none" 
  type="file" 
  @change="onFileSelected"
  ref="fileInput">
  <button @click="$refs.fileInput.click()"
>Pick File</button>
  <button @click="onUpload"> Upload </button>
</div>
  
</template>

<script>

import axios from 'axios';
export default {

  name: 'HelloWorld',
  data () {
    return{
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event){
      console.log(event)
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload() {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post('https://us-central1-quasar-cloud-functions.cloudfunctions.net/uploadFile', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
        }
      })
      .then(res =>
      {console.log(res)
      })
      console.log( this.selectedFile, "hahaha")
    }
  }
}

</script>
