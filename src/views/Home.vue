<template>
    <div class="homepage-container">
        <a-layout>
            <a-layout-header>
                <div class="page-title">
                    zhang-lego
                </div>
            </a-layout-header>

            <a-layout-content>
                <div class="content-container">
                    <TemplateList/>
                </div>
            </a-layout-content>

            <a-layout-footer>
                <div>
                    © 1996-2020, zhang-lego.com, Inc. or its affiliates
                </div>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import TemplateList from '../components/TemplateList.vue';
export default defineComponent({
  name: 'App',
  components:{
    TemplateList,
  },
});
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-title {
  color: #fff;
}
.footer{
    background-color: rgb(241, 53, 53);
}
</style>