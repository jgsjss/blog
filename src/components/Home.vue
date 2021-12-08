<template>
  <div class="profile-user-img">
    <img
      src="../assets/다운로드.jpg"
      alt="profile-user-img"
      class="profile-user-img-img"
    />
  </div>
  <div class="container mt-4">
    <h5>Vue 개발자 jk123의 연습용 블로그 입니다.</h5>
    <p>-- vue로 개발중입니다. --</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profile-user-img {
  width: 70px;
  height: 70px;
  border-radius: 30%;
  overflow: hidden;
}
.profile-user-img-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>