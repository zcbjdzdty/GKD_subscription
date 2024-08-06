import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.iflytek.womusicclient',
  name: '联通视频彩铃',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'android.womusic.com.songcomponent.MainActivity',
          matches: '[vid="iv_img"] + [vid="btn_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/64eb594e-f764-4080-a3e6-620e7174602f',
          snapshotUrls: 'https://i.gkd.li/i/14680681',
        },
      ],
    },
  ],
});
