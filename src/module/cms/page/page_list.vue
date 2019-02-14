<template>
  <!--<div>
    测试页面显示...
  </div>-->
  <!--<div>
  &lt;!&ndash;编写页面静态部分，即view部分&ndash;&gt;
    <el-button type="primary" size="small">查询</el-button>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">

      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>

      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="test"
        label="测试列">
      </el-table-column>
    </el-table>
  </div>-->

  <div>

    <el-button type="primary" v-on:click="query" size="small">查询</el-button>

    <!--查询表单-->
    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名：<el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
      <router-link class="mui-tab-item" :to="{path:'/cms/page/add/'}">
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>
    </el-form>


    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="200">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="300">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="300">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" >
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="this.params.size"
      :total="total"
      @current-change="changePage"
      :current-page="this.params.page"
      style="float:right;">
    </el-pagination>
  </div>
</template>
<script>

  import * as cmsApi from '../api/cms'

  export default {
    data() {
      return {
        siteList:[],//站点列表
        list:[],
        total:0,
        params:{
          siteId:'',
          pageAliase:'',
          page:1,//页码
          size:10//每页显示个数
        }
      }
    },
    methods:{
      // 分页查询
      changePage:function (page) {
        this.params.page = page;
        this.query()
      },
      //查询
      query:function () {
        // alert("查询")
        // 调用服务端的接口
        cmsApi.page_list(this.params.page,this.params.size,this.params).then((result)=>{
          // 将结果数据赋值给数据模型对象
          console.log(result)
          this.list=result.queryResult.list;
          this.total=result.queryResult.total;

        })
      },
      //查询所有站点ID及名称
      querySiteList:function () {


      }
    },
  mounted(){
    // 当DOM元素渲染完成后调用query
    this.query();
    //初始化站点列表
    this.siteList=[
      {
        siteId: '5a751fab6abb5044e0d19ea1',
        siteName:'门户主站'
      }
    ]
  }
  }
</script>

<!--</template>
<script>
  /*编写页面静态部分，即model及vm部分。*/
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          test: 'test01'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>-->
<style>
  /*编写页面样式，不是必须*/
</style>
