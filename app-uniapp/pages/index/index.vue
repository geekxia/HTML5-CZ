<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<input class='ipt' type="text" v-model='task' @confirm='addTask' />
		<view v-for='item in list' :key='item.id' @tap='skipTo(item)'>
			<text v-text='item.id'></text>
			---
			<text v-text='item.task'></text>
		</view>
		<view v-text='count'></view>
		<u-button text="自增" type='primary' @tap='add'></u-button>

		<button open-type='openSetting'>打开授权页面</button>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
				task: '',
				list: []
			}
		},
		computed: {
			...mapState('cnode', ['count'])
		},
		onReady () {
			console.log('--this store', this.$store)
		},
		methods: {
			...mapMutations('cnode', ['setCount']),
			addTask () {
				console.log('--', this.task)
				this.list.push({id:Date.now(),task:this.task})
				this.task = ''
			},
			skipTo (item) {
				console.log('----')
				uni.navigateTo({
					url: `detail?id=${item.id}`,
					fail: err => console.log('---', err)
				})
			},
			add () {
				this.setCount(5)
			}
		}
	}
</script>

<style>
	.ipt {
		border: 1rpx solid red;
	}
</style>
