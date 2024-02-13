<template>
  <!-- 툴바는 원하는 내용으로 채울 수 있음 https://quilljs.com/docs/modules/toolbar/ -->
  <!-- module 을 이용하여 에디터에 추가 기능을 넣을 수 있음 https://vueup.github.io/vue-quill/guide/modules.html -->
  <div>
    <quill-editor theme="snow" toolbar="full" v-model:content="content" content-type="html"></quill-editor>
  </div>
  <div>{{ content }}</div>
  <button @click="consoleOut(content)">콘솔에 출력</button>
</template>

<script setup>

// 필요하면 main.js에서 전역 등록
// 테마는 snow, bubble 두 개가 공식 지원됨.
import {QuillEditor} from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import {ref} from "vue";

const content = ref("글을 작성해주세요.");

function consoleOut(content) {
  console.log(content);
}

</script>