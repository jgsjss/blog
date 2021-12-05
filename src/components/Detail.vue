<template>
    
    <div>
        <h4>상세페이지</h4>
        <h5>{{Blogs[$route.params.id].title}}</h5>
        <p>{{Blogs[$route.params.id].content}}</p>
    </div>
</template>

<script>
export default {
    props : { Blogs : Array,
    },
}
</script>

<style>

</style>