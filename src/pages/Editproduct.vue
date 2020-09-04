<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Edit/Delete Product</h5>

  <div class="q-pa-md">
    <div class="q-gutter-sm row items-start">

      <q-uploader
        url="http://localhost:4444/upload"
        label="Batch upload"
        multiple
        batch
        style="max-width: 300px"
      />
    </div>
  </div>
  
  </q-page>
</template>

<script>
export default {

}
</script>
