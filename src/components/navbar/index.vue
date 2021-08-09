<template>
     <div class="Navbar-content">
         <ul>
             <li><i class="icon icon-help"></i></li>
             <li><i class="icon icon-search"></i></li>
             <li>
                 <a href="javascript:void(0)" class="select-car-btn">选择车辆</a>
             </li>
             <li><i class="icon icon-location"></i></li>
             <li><i class="icon icon-mi"></i></li>
         </ul>
     </div>
</template>
<script>
export default {
    name:'Navbar'
}
</script>

<style lang="scss" scoped>
.Navbar-content{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 86px;
    z-index:10;
    text-align: center;
    li{
         display: inline-block;
    }
    .icon{
        margin: 0 17px 10px 17px;
        vertical-align: middle;
        cursor: pointer;
    }
    .select-car-btn{
        display: inline-block;
        width: 200px;
        height: 68px;
        border-radius: 100px;
        margin: 0 17px;
        line-height: 68px;
        text-align: center;
        color: #fff;
        font-size: 26px;
        font-weight: 300;
        background-color: $color-main;
    }
}
</style>