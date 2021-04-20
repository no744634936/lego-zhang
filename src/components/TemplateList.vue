<template lang="">
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
            <a-card hoverable>
                <template v-slot:cover>
                    <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                </template>
                <a-card-meta title="Europe Street beat">
                <template v-slot:description>
                    www.instagram.com
                </template>
                </a-card-meta>
            </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </a-col>
      
    </a-row>
  </div>
</template>
<script>
export default {
    
};
</script>
<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>