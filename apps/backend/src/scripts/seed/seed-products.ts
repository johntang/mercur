import { ProductStatus } from '@medusajs/framework/utils'

import { CATEGORY } from './data'

export const productsToInsert = [
  {
    category: CATEGORY.beauty,
    title: '貓貓咖啡拉花 隨身鏡',
    handle: 'mirror-1',
    subtitle: '',
    description: '貓貓咖啡拉花 隨身鏡',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/Ip8uCcB.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 55,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/Ip8uCcB.jpg'
      }
    ]
  },
  {
    category: CATEGORY.beauty,
    title: '貓貓麵包 隨身鏡',
    handle: 'mirror-2',
    subtitle: '',
    description: '貓貓麵包 隨身鏡',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/hnnhWjm.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 55,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/hnnhWjm.jpg'
      }
    ]
  },
  {
    category: CATEGORY.accessary,
    title: '矮乜乜 髮圈',
    handle: 'hair-tie-1',
    subtitle: '',
    description: '矮乜乜 髮圈',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/iPcv54X.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/iPcv54X.jpg'
      }
    ]
  },
  {
    category: CATEGORY.accessary,

    title: '醒醒 髮圈',
    handle: 'hair-tie-2',
    subtitle: '',
    description: '醒醒 髮圈',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/lT4ZoQa.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/lT4ZoQa.jpg'
      }
    ]
  },
  {
    category: CATEGORY.accessary,

    title: '多雲 髮圈',
    handle: 'hair-tie-3',
    subtitle: '',
    description: '多雲 髮圈',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/f58vrgh.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/f58vrgh.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '矮乜乜 扣針',
    handle: 'pin-1',
    subtitle: '',
    description: '矮乜乜 扣針',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/xVVjLxt.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/xVVjLxt.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '醒醒 扣針',
    handle: 'pin-2',
    subtitle: '',
    description: '醒醒 扣針',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/riFsgeh.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/riFsgeh.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '多雲 扣針',
    handle: 'pin-3',
    subtitle: '',
    description: '多雲 扣針',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/DE6C1eL.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/DE6C1eL.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '醒醒 金屬徽章',
    handle: 'badge-1',
    subtitle: '',
    description: '醒醒 金屬徽章',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/f1m5AW2.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 50,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/f1m5AW2.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '貓貓咖啡拉花 鎖匙扣',
    handle: 'badge-2',
    subtitle: '',
    description: '貓貓咖啡拉花 鎖匙扣',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/k13EY68.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 40,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/k13EY68.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '貓貓麵包 鎖匙扣',
    handle: 'badge-3',
    subtitle: '',
    description: '貓貓麵包 鎖匙扣',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/oU7qT0V.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 40,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/oU7qT0V.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '月亮 鎖匙扣',
    handle: 'badge-4',
    subtitle: '',
    description: '月亮 鎖匙扣',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/0fwh44r.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 40,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/0fwh44r.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'あたり?! 抽獎雪條 明信片',
    handle: 'postcard-1',
    subtitle: '',
    description: 'あたり?! 抽獎雪條 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/Qm3xt9f.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/Qm3xt9f.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Happy Birthday to Meow 明信片',
    handle: 'postcard-2',
    subtitle: '',
    description: 'Happy Birthday to Meow 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/ahWPypZ.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/ahWPypZ.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '檸檬方包 明信片',
    handle: 'postcard-3',
    subtitle: '',
    description: '檸檬方包 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/EMiG4mk.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/EMiG4mk.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '休息一下 牛角包 明信片',
    handle: 'postcard-4',
    subtitle: '',
    description: '休息一下 牛角包 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/fJjJkUB.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/fJjJkUB.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '幸福水果三文治 明信片',
    handle: 'postcard-5',
    subtitle: '',
    description: '幸福水果三文治 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/VkO44Ik.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/VkO44Ik.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '蜜瓜梳打 明信片',
    handle: 'postcard-6',
    subtitle: '',
    description: '蜜瓜梳打 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/tFjUzUU.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/tFjUzUU.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '波子汽水梳打 明信片',
    handle: 'postcard-7',
    subtitle: '',
    description: '波子汽水梳打 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/mSt566J.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/mSt566J.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '櫻花開學 明信片',
    handle: 'postcard-8',
    subtitle: '',
    description: '櫻花開學 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/gxKgAPZ.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/gxKgAPZ.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '賞櫻 野餐 明信片',
    handle: 'postcard-9',
    subtitle: '',
    description: '賞櫻 野餐 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/jg1ijxz.jpg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/jg1ijxz.jpg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '草莓蛋糕 明信片',
    handle: 'postcard-10',
    subtitle: '',
    description: '草莓蛋糕 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/KQzcC61.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/KQzcC61.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '青提撻 明信片',
    handle: 'postcard-11',
    subtitle: '',
    description: '青提撻 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/tXWnprX.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/tXWnprX.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '醒醒繪馬 明信片',
    handle: 'postcard-12',
    subtitle: '',
    description: '醒醒繪馬 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/48XzyT3.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/48XzyT3.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Stars are Always There 明信片',
    handle: 'postcard-13',
    subtitle: '',
    description: 'Stars are Always There 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/Ks2c66E.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/Ks2c66E.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '咩都招 招財貓 明信片',
    handle: 'postcard-14',
    subtitle: '',
    description: '咩都招 招財貓 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/az7tLUF.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/az7tLUF.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Sing with the Sky 明信片',
    handle: 'postcard-15',
    subtitle: '',
    description: 'Sing with the Sky 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/A2jd3i5.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/A2jd3i5.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Chat with the Sky 明信片',
    handle: 'postcard-16',
    subtitle: '',
    description: 'Chat with the Sky 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/RNp3Dsq.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/RNp3Dsq.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Draw with the Sky 明信片',
    handle: 'postcard-17',
    subtitle: '',
    description: 'Draw with the Sky 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/JvuNj2W.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/JvuNj2W.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Lets Play Together 明信片',
    handle: 'postcard-18',
    subtitle: '',
    description: 'Lets Play Together 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/tluhjEH.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/tluhjEH.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Stationery Playground Map 明信片',
    handle: 'postcard-19',
    subtitle: '',
    description: 'Stationery Playground Map 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/CTknOMZ.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/CTknOMZ.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'My Dearest Friend 明信片',
    handle: 'postcard-20',
    subtitle: '',
    description: 'My Dearest Friend 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/8qtSCpu.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/8qtSCpu.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Live with Dreams 明信片',
    handle: 'postcard-21',
    subtitle: '',
    description: 'Live with Dreams 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/0w843df.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/0w843df.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Cloudy 貼紙包',
    handle: 'sticker-1',
    subtitle: '',
    description: 'Cloudy 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/36hpJPf.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/36hpJPf.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Little Pea & Friends 貼紙包',
    handle: 'sticker-2',
    subtitle: '',
    description: 'Little Pea & Friends 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/8HTBzPW.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/8HTBzPW.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: 'Stationery Playground 貼紙包',
    handle: 'sticker-3',
    subtitle: '',
    description: 'Stationery Playground 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/8MK5xN8.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/8MK5xN8.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '肉球 貼紙包',
    handle: 'sticker-4',
    subtitle: '',
    description: '肉球 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/sOQkxub.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/sOQkxub.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '友達 貼紙包',
    handle: 'sticker-5',
    subtitle: '',
    description: '友達 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/18bqKgI.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/18bqKgI.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '咲く花 貼紙包',
    handle: 'sticker-6',
    subtitle: '',
    description: '咲く花 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/t6wz6e2.png',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/t6wz6e2.png'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '日式咖啡店 貼紙包',
    handle: 'sticker-7',
    subtitle: '',
    description: '日式咖啡店 貼紙包',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/Rn9TmGq.jpeg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 20,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/Rn9TmGq.jpeg'
      }
    ]
  },
  {
    category: CATEGORY.stationary,

    title: '多雲 雲朵 明信片',
    handle: 'sticker-8',
    subtitle: '',
    description: '多雲 雲朵 明信片',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/Jc1xFMU.jpeg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 25,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/Jc1xFMU.jpeg'
      }
    ]
  },
  {
    category: CATEGORY.accessary,

    title: '多雲 雲朵 扣針',
    handle: 'sticker-9',
    subtitle: '',
    description: '多雲 雲朵 扣針',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/sjsaxa6.jpeg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 50,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/sjsaxa6.jpeg'
      }
    ]
  },
  {
    category: CATEGORY.accessary,
    title: '多雲 蜜瓜梳打 扣針',
    handle: 'sticker-10',
    subtitle: '',
    description: '多雲 蜜瓜梳打 扣針',
    is_giftcard: false,
    status: ProductStatus.PUBLISHED,
    thumbnail: 'https://i.imgur.com/59Z6V6y.jpeg',
    discountable: true,
    options: [
      {
        title: 'Default',
        values: ['Default']
      }
    ],
    variants: [
      {
        title: 'Default',
        allow_backorder: false,
        manage_inventory: false,
        prices: [
          {
            amount: 30,
            currency_code: 'hkd'
          }
        ],
        options: {
          Default: 'Default'
        }
      }
    ],
    images: [
      {
        url: 'https://i.imgur.com/59Z6V6y.jpeg'
      }
    ]
  }
]
