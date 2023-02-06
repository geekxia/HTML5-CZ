<template>
  <div class="good-list">
    <div v-permission='["admin", "editor"]'>辞退</div>
    <div class='filter'>
      <!-- 一行 -->
      <el-row type='flex' align='middle'>
        <el-col :span='2'><span>商品名称：</span></el-col>
        <el-col :span="4">
          <el-input placeholder='商品搜索' clearable v-model='filter.name' />
        </el-col>
        <el-col :span='2'><span>品类：</span></el-col>
        <el-col :span="4">
          <!-- :value='filter.cate' + @input='filter.cate=$event' -->
          <cate-select v-model='filter.cate' />
        </el-col>
        <el-col :span='2'><span>日期：</span></el-col>
        <el-col :span="6">
          <!-- :value='date' @input='date=$event' -->
          <date-picker v-model='date' />
        </el-col>
      </el-row>
      <el-row style='marginTop:20px;'>
        <el-col :offset='2'>
          <el-button
            type="primary"
            @click='$router.push({name:"GoodAdd"})'
            icon='el-icon-edit'>
            新增
          </el-button>
          <el-button type="primary" icon='el-icon-download'>导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class='table'>
      <el-table
        :data="list"
        :highlight-current-row='false'
        row-key='id'
        style="width: 100%">
          <el-table-column
            align='center'
            type="index">
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品"
            align='center'>
            <template slot-scope='scope'>
              <div class='good'>
                <img :src='imgBase+scope.row.img' />
                <div v-text='scope.row.name'></div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="cate"
            label="品类"
            align='center'>
            <template slot-scope='{row}'>
              <div v-text='cate2zh(row.cate)'></div>
            </template>
          </el-table-column>
          <el-table-column
            prop="price"
            align='center'
            :sort-method='(a,b)=>(a-b)'
            sortable
            label="价格">
            <template slot-scope='scope'>
              <div>{{ scope.row.price | rmb }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="rank"
            align='center'
            label="排名">
          </el-table-column>
          <el-table-column
            prop="hot"
            align='center'
            label="是否热销">
            <template slot-scope='scope'>
              <div v-text='(scope.row.hot?"是":"否")'></div>
            </template>
          </el-table-column>
          <el-table-column
            prop="status"
            align='center'
            label="状态">
            <template slot-scope='scope'>
              <div v-text='(scope.row.status?"正常":"已下架")'></div>
            </template>
          </el-table-column>
          <el-table-column
            prop="create_time"
            align='center'
            label="发布时间">
            <template slot-scope='scope'>
              <div>{{ scope.row.create_time | ymd }}</div>
              <div>{{ scope.row.create_time | hms }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" width='150' align='center'>
            <template slot-scope="{row}">
              <el-button
                size="mini"
                @click="rowHandle(row, 1)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="rowHandle(row, 0)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>

    <div style='textAlign:right;'>
      <!-- 用你同事封装的组件，往往是没有API文档 -->
      <pagination
        :total='total'
        :limit='ps.size'
        :page='ps.page'
        auto-scroll
        :page-sizes='[2,5,10,15]'
        @pagination='paginationChange'
      />
    </div>
  </div>
</template>

<script>
import CateSelect from './components/CateSelect.vue'
import DatePicker from './components/DatePicker.vue'
import { Pagination } from '@/components'
import { fetchGoodList, fetchGoodDel } from '@/api/good'
import { mapState } from 'vuex'

export default {
  name: 'GoodList',
  components: {
    CateSelect,
    DatePicker,
    Pagination
  },
  data () {
    return {
      imgBase: process.env.VUE_APP_BASE_IMG,
      list: [],  // 商品列表
      total: 0,
      // 它是商品列表接口的入参
      // 可用的入参 name, cate, page, size, min_price, max_price
      filter: {
        name: '',
        cate: '',
        start_date: '',
        end_date: ''
      },
      // 分页器
      ps: {
        page: 1,
        size: 2,
      }
    }
  },
  computed: {
    ...mapState('good', ['cates']),
    date: {
      get () {
        const f = this.filter
        return [f.start_date, f.end_date]
      },
      set (arr) {
        console.log('arr', arr)
        this.filter.start_date = arr[0]
        this.filter.end_date = arr[1]
      }
    }
  },
  watch: {
    // 监听上面的筛选变化（重置page=1）
    filter: {
      handler () {
        if (this.ps.page===1) {
          this.init()
        } else {
          this.ps.page = 1 // 回到第一页
        }
      },
      deep: true
    },
    // 监听分页器的变化
    ps: {
      handler () { this.init() },
      deep: true
    }
  },
  created () { this.init() },
  // 因为当前页面被keep-alive包裹了
  activated () {
    this.init()
  },
  methods: {
    // 本质这个cate2zh相当于一个过滤器方法
    cate2zh (cate) {
      // 因为cates是异步数据
      if (this.cates.length > 0) {
        const ele = this.cates.find(ele=>ele.cate===cate)
        // console.log('---', ele)
        return ele.cate_zh
      }
    },
    init () {
      const params = {...this.filter, ...this.ps}
      fetchGoodList(params).then(res=>{
        console.log('商品列表', res)
        if (res.err === 0) {
          this.list = res.data.list
          // 实现分页功能，后端必须给total
          this.total = res.data.total
        }
      })
    },
    paginationChange (ev) {
      const { page, limit } = ev
      this.ps.page = page
      this.ps.size = limit
    },
    rowHandle (row, flag) {
      if (flag) {
        // 跳转编辑页面（动态路由传参）
        this.$router.push(`/good/edit/${row._id}`)
      } else {
        // 删除
        const ids = row._id
        this.$confirm(`你确定要删除 ${row.name} 吗？`, '危险', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          fetchGoodDel(ids).then(()=>{
            this.$message({
              type: 'success',
              message: '删除成功!',
              duration: 1000,
              onClose: () => {
                this.init()
              }
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list {
  font-size: 14px;
  min-width: 1050px;
  .el-col-2>span {
    display: block;
    text-align: right;
    padding-right: 3px;
  }
  .filter {
    box-sizing: border-box;
    margin: 25px;
    padding: 20px;
    background: rgba(252,252,250,1);
  }
  .table {
    box-sizing: border-box;
    padding: 0 25px;
    .good {
      img {
        display: inline-block;
        width: 60px;
        height: 60px;
      }
      text-align: center;
    }
  }
}
</style>
