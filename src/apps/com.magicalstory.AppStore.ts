import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '软件详情页',
          fastQuery: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds: [
            'com.magicalstory.AppStore.appDetails.AppDetailsActivity',
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          ],
          matches:
            '@ImageView < FrameLayout[childCount=1] <3 [childCount=5] <<n [vid="bannerLayout"] + [vid="itemUser"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14771070',
            'https://i.gkd.li/i/14771175',
            'https://i.gkd.li/i/14771110', // 限定 visibleToUser, 防止误触
          ],
        },
        {
          key: 1,
          name: '搜索页面',
          activityIds: 'com.magicalstory.AppStore.search.searchActivity',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14771429',
        },
        {
          key: 2,
          name: '首页',
          fastQuery: true,
          activityIds: 'com.magicalstory.AppStore.main.MainActivity',
          matches: '[vid="button_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/14668408',
        },
        {
          key: 3,
          name: '评论区顶部',
          fastQuery: true,
          actionDelay: 300, // 没有此字段会导致误触
          activityIds:
            'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
          matches:
            '@ImageView < FrameLayout[childCount=1] <<n [vid="banner"] +2 [vid="title_browse"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14758809',
            'https://i.gkd.li/i/14783076',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-公告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.magicalstory.AppStore.main.MainActivity',
      rules: [
        {
          matches:
            '[text*="隐藏"][id="com.magicalstory.AppStore:id/btn_selectNegative"]',
          snapshotUrls: 'https://i.gkd.li/i/13437553',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-签到页-自动签到',
      desc: '签到页自动点击【签到】按钮',
      fastQuery: true,
      actionMaximum: 1,
      activityIds: 'com.magicalstory.AppStore.user.sign.signActivity',
      rules: '[text="签到"][vid="button"]',
      snapshotUrls: 'https://i.gkd.li/i/14168441',
    },
  ],
});
