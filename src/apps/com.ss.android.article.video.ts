import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13328430',
    },
    {
      key: 2,
      name: '通知弹窗',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules:
        '@TextView[id="com.ss.android.article.video:id/sj"][text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/i/13456568',
    },
    {
      key: 6,
      name: '红包弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.article.video.activity.SplashActivity',
      rules: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
      snapshotUrls: 'https://i.gkd.li/i/13620299',
    },
  ],
});
