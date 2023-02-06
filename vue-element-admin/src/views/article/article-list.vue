<template>
  <div class="article-container">
    <div class="filter">
      <el-row>
        <el-col :span="4">
          <el-input placeholder="文章搜索" v-model='name' />
        </el-col>
        <el-col :span='2'>
          <el-select placeholder="选择品类" :value='filter.tab' @change='tabChange'>
            <el-option
              v-for="item in cates"
              :key="item.id"
              :label="item.label"
              :value="item.tab">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>

    <div class="table">
      <el-table
        :data="list"
        border
        style="width: 100%">

        <el-table-column
          label="ID"
          align='center'
          type="index"
          width="80">
        </el-table-column>

        <el-table-column
          prop="create_at"
          label="日期"
          align='center'
          width="180">
          <template slot-scope='scoped'>
            <div>{{scoped.row.create_at|ct}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="author"
          label="作者"
          align='center'
          width="180">
          <template slot-scope='scoped'>
            <div v-text='scoped.row.author.loginname'></div>
          </template>
        </el-table-column>

        <el-table-column
          prop="tab"
          label="品类"
          align='center'
          width="180">
          <template slot-scope='scoped'>
            <div>{{tab2Label(scoped.row.tab)}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>

        <el-table-column
          prop="handle"
          align='center'
          label="操作">
          <template slot-scope='scoped'>
            <el-button type='primary'>编辑</el-button>
            <el-button type='danger'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class='page'>
      <el-pagination
        @size-change="sizeChange"
        @current-change="pageChange"
        :current-page="filter.page"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="filter.limit"
        layout="sizes, prev, pager, next, jumper"
        :total='100'>
      </el-pagination>
    </div>

  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      name: '',
      filter: {
        tab: '',
        page: 1,
        limit: 10,
      },
      cates: [
        { id: 1, tab: '', label: '全部' },
        { id: 2, tab: 'good', label: '精华' },
        { id: 3, tab: 'share', label: '分享' },
        { id: 4, tab: 'ask', label: '问答' },
        { id: 5, tab: 'job', label: '招聘' }
      ]
    }
  },
  filters: {
    ct (val) {
      return moment(Date.parse(val)).format('YYYY年M月D日')
    }
  },
  computed: {
    ...mapState('article', ['list'])
  },
  watch: {
    filter: {
      handler() {
        this.init()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('article', ['getList']),
    tab2Label (tab) {
      const arr = this.cates.filter(ele=>ele.tab===tab)
      return arr[0] ? arr[0].label : ''
    },
    sizeChange (limit) {
      // this.limit = limit
      // this.page = 1
      const filter = {...this.filter}
      filter.page = 1
      filter.limit = limit
      this.filter = filter
    },
    tabChange (tab) {
      const filter = {...this.filter}
      filter.page = 1
      filter.tab = tab
      this.filter = filter
    },
    pageChange (page) {
      // this.page = page
      this.filter.page = page
    },
    init () {
      const params = this.filter
      this.getList(params)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  min-width: 900px;
}
.filter {
  box-sizing: border-box;
  margin:  20px;
  border-radius: 3px;
  background-color: white;
}
.table {
  margin: 20px;
  box-sizing: border-box;
}
.page {
  box-sizing: border-box;
  margin: 20px;
  // text-align: right;
}
</style>
