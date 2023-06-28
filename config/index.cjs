/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx88b5460813337cc8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b7182697302652aee0233f719fd68ae5',

  PROVINCE: '北京',
  CITY: '海淀',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小苏苏',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ohcUr65K3iK7xs051pxOyrdYEjG8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小苏苏', year: '1996', date: '10-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '陈老师', year: '1988', date: '09-07',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-11',
        },
      ],
      // 我们相识已经有xxxx天了的配置
      customizedDateList: [
        // 相识纪念日
        { keyword: 'acquaint_day', date: '2023-04-11' },
        // 相见纪念日
        { keyword: 'meet_day', date: '2023-04-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'PFw5VFdfk57v5lsD_v_hQRVN87aNv_4fBa8meSJEKrQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohcUr65K3iK7xs051pxOyrdYEjG8',
    }
  ],

}

module.exports = USER_CONFIG

