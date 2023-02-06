<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// app启动时调用（小程序）
			uni.getSetting({
				success (res) {
					console.log('res', res)
					if (!res.authSetting['scope.useLocation']) {
						// 自动弹出授权框
						uni.authorize({
							scope: 'scope.userLocation',
						    success(res) {
									console.log('用户同意地理位置授权')
						      uni.getLocation()
						    },
								fail(err) {
									console.log('用户拒绝了地理位置授权')
								}
						})
					}
				}
			})


		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
