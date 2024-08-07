import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      // 全局规则无效，单独规则有效
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14927422',
        },
      ],
    },
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13227328', // com.android.thememanager.module.detail.view.ThemeDetailActivity
        'https://i.gkd.li/i/13255751', // com.android.thememanager.ThemeResourceProxyTabActivity
      ],
    },
  ],
});
