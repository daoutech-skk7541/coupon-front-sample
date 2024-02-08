<template>
  <div className="gcp-lost">
    <h1>gcp test</h1>
    <input type="file" id="fileInput" @change="handleFileUpload">
  </div>
  <div>미리보기</div>
  <img :src="img" v-if="img !== ''">
</template>

<script setup>
import {ref} from 'vue';

const img = ref('');

async function handleFileUpload() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  console.log(file);

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('http://localhost:8080/gcp/upload/sample', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.text();
    console.log('File uploaded successfully:', data);

    img.value = data; // 이미지 경로 업데이트
  } catch (error) {
    console.error('There was a problem with the file upload:', error);
  }
}
</script>