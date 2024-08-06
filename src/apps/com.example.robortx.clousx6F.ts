import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.robortx.clousx6F',
  name: 'Clousx6',
  groups: [
    {
      key: 1,
      name: '功能类-公告弹窗',
      fastQuery: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        '[vid="tv_next"][text="下一条"] <<n LinearLayout - [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14571096',
    },
  ],
});
