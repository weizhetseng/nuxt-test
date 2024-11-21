<script setup></script>

<template>
  <VForm action="">
    <label for="user">姓名</label>
    <VField
      id="user"
      name="username"
      type="text"
      placeholder="請輸入使用者姓名"
      rules="required|username"
    />
    <VError name="username" />
    <button type="reset">清除</button>
    <button type="submit">送出</button>
  </VForm>
</template>

