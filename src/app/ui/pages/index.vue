<template>
<div>
<router-view></router-view>
</div>
</template>

<script>
export default {
    created(){
        const date = new Date()
        this.$store.dispatch("ticket/getTicket")
        this.$store.dispatch("itemorder/getSumItemOrderByDate",date.toISOString().split('T')[0])
    },
    data() {
        return {
            
        }
    }

}
</script>

<style>

</style>