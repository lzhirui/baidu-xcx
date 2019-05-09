/**
 * @file app.js
 * @author swan
 */

/* globals swan */

App({
    onLaunch(options) {
        // do something when launch
        // 添加到我的小程序引导，参见文档： http://smartprogram.baidu.com/docs/design/component/guide_add/
        this.getUserInfo();
        if (swan.canIUse('showFavoriteGuide')) {
            swan.showFavoriteGuide({
                type: 'bar',
                content: '一键添加到我的小程序',
                success(res) {
                    console.log('添加成功：', res);
                },
                fail(err) {
                    console.log('添加失败：', err);
                }
            });
        }
    },
    getUserInfo() {
        swan.login({
            success: (res) => {
                swan.request({
                    url: 'https://xxx/xxx', // 开发者服务器地址
                    data: {
                        code: res.code
                    },
                    success:(res)=>{
                        swan.getUserInfo({
                            success: (res) => {
                                this.setData({
                                    userInfo: res.userInfo,
                                    hasUserInfo: true
                                });
                            },
                            fail: () => {
                                this.setData({
                                    userInfo: e.detail.userInfo,
                                    hasUserInfo: true
                                });
                            }
                        });
                    }
                });
                
            },
            fail: (err) => {
                swan.showModal({
                    title: '未登录',
                    showCancel: false
                });
            }
        });
    },
    onShow(options) {
        // do something when show
    },
    onHide() {
        // do something when hide
    }
});
