import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          fastQuery: true,
          matches: '[id="com.cainiao.wireless:id/draw_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12914371',
            'https://i.gkd.li/i/13692758',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13042279',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: '[vid="dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13842492',
        },
        {
          key: 3,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: 'View[childCount=2][clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14033859',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-包裹页面-地图底部横条广告',
      activityIds: 'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: 'https://i.gkd.li/i/12914450',
    },
    {
      key: 4,
      name: '更新提示',
      fastQuery: true,
      activityIds:
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      rules: '[text="确认"] - [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13042207',
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      desc: '自动点击关闭。',
      fastQuery: true,
      activityIds:
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      rules: '[id="com.cainiao.wireless:id/gg_dialog_base_close"]',
      snapshotUrls: 'https://i.gkd.li/i/13068573',
    },
    {
      key: 6,
      name: '评价提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[text="取消"] + [text="好评"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13692761',
        'https://i.gkd.li/i/14969859',
      ],
    },
    {
      key: 7,
      name: '全屏广告-今日手气红包',
      desc: '点击右上角X',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[vid="dialog_full_image_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13842492',
        'https://i.gkd.li/i/13936362',
      ],
    },
    {
      key: 8,
      name: '功能类-询问[是否要查询包裹]弹窗',
      desc: '点击[立即查看]',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: '@[text="立即查看"] < * - * >2 [text="您是否要查询包裹"]',
          exampleUrls:
            'https://m.gkd.li/57941037/eb48e137-66c3-4777-b65e-8f4f6b3bc4ee',
          snapshotUrls: 'https://i.gkd.li/i/14913359',
        },
      ],
    },
  ],
});
