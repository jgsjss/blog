<template>
      <div>  
      <h5 @click="$router.push('/detail/0')">{{Blogs[0].title}}</h5>
      <p>{{Blogs[0].content}}</p>
      </div>
      <div>
      <h5 @click="$router.push('/detail/1')">{{Blogs[1].title}}</h5>
      <p>{{Blogs[1].content}}</p>
      </div>
      <div>
      <h5 @click="$router.push('/detail/2')">{{Blogs[2].title}}</h5>
      <p>{{Blogs[2].content}}</p>
      </div>
  
</template>

<script>
export default {
    name : 'list',
    props : { Blogs : Array,
    },
};
</script>

<style>

</style>