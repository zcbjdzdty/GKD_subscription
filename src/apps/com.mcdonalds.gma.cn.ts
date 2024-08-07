import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '选择[取消]',
      activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
      rules: '[id="com.mcdonalds.gma.cn:id/tv_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/i/13259242',
    },
    {
      key: 2,
      name: '全屏广告-优惠券弹窗',
      desc: '自动关闭',
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
          matches: '[id="com.mcdonalds.gma.cn:id/iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13465873',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-关闭 [开通免密支付] 弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mcd.order.activity.OrderDetailActivity',
          matches: '@[vid="iv_close"] - * >2 [text*="免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb',
          snapshotUrls: 'https://i.gkd.li/i/14798873',
        },
      ],
    },
  ],
});
