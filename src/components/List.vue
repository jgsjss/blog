<template>
  <div class="container">
    <h5 class="mb-5">포스팅 게시판</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">글번호</th>
          <th scope="col">작성자</th>
          <th scope="col">글제목</th>
          <th scope="col">작성날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in Blogs" :key="i">
          <th scope="row">{{ Blogs[i].number }}</th>
          <td>{{ Blogs[i].writer }}</td>
<!--          <td @click="$router.push('/detail/' + i)">{{ Blogs[i].title }}</td>-->
         <router-link :to="`/detail/${i}`"> <td >{{ Blogs[i].title }}</td></router-link>
          <td>{{ Blogs[i].date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "list",
  props: { Blogs: Array },
};
</script>

<style>
</style>