import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus.canary',
  name: 'MT管理器Pro',
  groups: [
    {
      key: 2,
      name: '版本更新',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'bin.mt.plus.Main',
      rules: 'LinearLayoutCompat @[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/i/13561226',
    },
  ],
});
