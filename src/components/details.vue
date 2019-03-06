<template>
    <div>
        <div class="row">
            <div class="key"> Service </div>
            <div class="val">{{request.service_name}}</div>
        </div>
        <div class="row">
            <div class="key"> Address </div>
            <div class="val">{{request.address}}</div>
        </div>
        <div class="row">
            <div class="key"> Country </div>
            <div class="val">{{request.country}}</div>
        </div>
        <div class="row">
            <div class="key"> Amount </div>
            <div class="val">{{request.amount}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'details',
    props:['request'],
    mounted(){
        console.log(this.request);
    }
}
</script>
<style lang="scss" scoped>
.key{
    float: left;
    margin-left: 30%;
}
.val{
    float: right;
    margin-left:20%;
}
.row{
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

