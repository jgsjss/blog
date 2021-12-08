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
        <tr>
          <th scope="row">{{ Blogs[0].number }}</th>
          <td>{{ Blogs[0].writer }}</td>
          <td @click="$router.push('/detail/0')">{{ Blogs[0].title }}</td>
          <td>{{ Blogs[0].date }}</td>
        </tr>

        <tr>
          <th scope="row">{{ Blogs[1].number }}</th>
          <td>{{ Blogs[1].writer }}</td>
          <td @click="$router.push('/detail/1')">{{ Blogs[1].title }}</td>
          <td>{{ Blogs[1].date }}</td>
        </tr>
        <tr>
          <th scope="row">{{ Blogs[2].number }}</th>
          <td>{{ Blogs[2].writer }}</td>
          <td @click="$router.push('/detail/2')">{{ Blogs[2].title }}</td>
          <td>{{ Blogs[2].date }}</td>
        </tr>
        <tr>
          <th scope="row">{{ Blogs[3].number }}</th>
          <td>{{ Blogs[3].writer }}</td>
          <td @click="$router.push('/detail/3')">{{ Blogs[3].title }}</td>
          <td>{{ Blogs[3].date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "list",
  props: { Blogs: Array },
};
</script>

<style>
</style>