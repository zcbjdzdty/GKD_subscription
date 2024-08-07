import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hpbr.bosszhipin',
  name: 'BOSS直聘',
  groups: [
    {
      key: 0,
      name: '通知权限授权弹窗',
      activityIds: [
        'com.hpbr.bosszhipin.module.main.activity.MainActivity',
        'com.hpbr.bosszhipin.module.launcher.WelcomeActivity',
      ],
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: '@ImageView[id="com.hpbr.bosszhipin:id/iv_cancle"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13440781',
            'https://i.gkd.li/i/13623476',
          ],
        },
      ],
    },
  ],
});
