<template>
      <div>  
      <h5>{{Blogs[0].title}}</h5>
      <p>{{Blogs[0].content}}</p>
      </div>
      <div>
      <h5>{{Blogs[1].title}}</h5>
      <p>{{Blogs[1].content}}</p>
      </div>
      <div>
      <h5>{{Blogs[2].title}}</h5>
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