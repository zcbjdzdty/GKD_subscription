import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '消息中心-系统通知请求',
      desc: '自动点击关闭。',

      activityIds:
        'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
      rules: '[text="去开启"] + View > Image[text.length=0]',
      snapshotUrls: 'https://i.gkd.li/i/13458535',
    },
  ],
});
