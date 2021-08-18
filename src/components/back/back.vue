<template>
    <div class="header-back">
        <div class="back" @click="back">
            <i class="back-icon"></i>
            <h4 class="title">{{column}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name:'Back',
    data(){
        return{
        }
    },
    props:{
        column:{
            type:String,
            default:''
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
.header-back{
    position: relative;
    padding-bottom: 100px;
}
.back{
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 40px;
    cursor: pointer;
}
.title{
    font-size: 16px;
    margin-left: .25rem;
    color: #fff;
    line-height: .4rem;
}
.back-icon{
    width: .4rem;
    height: .4rem;
    display: flex;
    // justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    &::before{
        content: '';
        display: block;
        width: .1rem;
        height: .1rem;
        border-left: 2px solid #00a3ff;
        border-top: 2px solid #00a3ff;
        @include webkit(transform,rotate(-45deg))
    }
}
</style> 