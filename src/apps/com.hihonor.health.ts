import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.health',
  name: '荣耀运动健康',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.hihonor.health.main.MainActivity',
          fastQuery: true,
          matches: '[id="com.hihonor.health:id/iv_close_filled"]',
          snapshotUrls: 'https://i.gkd.li/i/13759407',
        },
      ],
    },
  ],
});
