import { defineConfig, loadEnv } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

const prodModule =
  process.env.NODE_ENV === 'development'
    ? []
    : [
        {
          resolve: '@medusajs/medusa/file',
          options: {
            providers: [
              {
                resolve: '@medusajs/medusa/file-s3',
                id: 's3',
                options: {
                  file_url: process.env.S3_FILE_URL,
                  access_key_id: process.env.S3_ACCESS_KEY_ID,
                  secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
                  region: process.env.S3_REGION,
                  bucket: process.env.S3_BUCKET,
                  endpoint: process.env.S3_ENDPOINT
                  // other options...
                }
              }
            ]
          }
        }
      ]

module.exports = defineConfig({
  admin: {
    backendUrl: process.env.BACKEND_URL,
    vite: () => {
      return {
        server: {
          allowedHosts: ['.railway.app']
        }
      }
    }
  },
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      // @ts-expect-error: vendorCors is not a valid config
      vendorCors: process.env.VENDOR_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || 'supersecret',
      cookieSecret: process.env.COOKIE_SECRET || 'supersecret'
    }
  },
  modules: [
    ...prodModule,
    { resolve: './src/modules/seller' },
    { resolve: './src/modules/marketplace' },
    { resolve: './src/modules/configuration' },
    { resolve: './src/modules/order-return-request' },
    { resolve: './src/modules/requests' },
    { resolve: './src/modules/reviews' },
    { resolve: './src/modules/brand' },
    { resolve: './src/modules/wishlist' },
    { resolve: './src/modules/split-order-payment' },
    { resolve: './src/modules/attribute' },
    {
      resolve: '@mercurjs/taxcode',
      options: {
        apiKey: process.env.STRIPE_SECRET_API_KEY
      }
    },
    { resolve: '@mercurjs/commission' },
    {
      resolve: '@mercurjs/payout',
      options: {
        apiKey: process.env.STRIPE_SECRET_API_KEY,
        webhookSecret: process.env.STRIPE_CONNECTED_ACCOUNTS_WEBHOOK_SECRET
      }
    },
    {
      resolve: '@mercurjs/algolia',
      options: {
        apiKey: process.env.ALGOLIA_API_KEY,
        appId: process.env.ALGOLIA_APP_ID
      }
    },
    {
      resolve: './src/modules/topic'
    },
    {
      resolve: '@medusajs/medusa/payment',
      options: {
        providers: [
          {
            resolve: '@mercurjs/payment-stripe-connect',
            id: 'stripe-connect',
            options: {
              apiKey: process.env.STRIPE_SECRET_API_KEY
            }
          }
        ]
      }
    },
    {
      resolve: '@medusajs/medusa/notification',
      options: {
        providers: [
          {
            resolve: '@mercurjs/resend',
            id: 'resend',
            options: {
              channels: ['email'],
              api_key: process.env.RESEND_API_KEY,
              from: process.env.RESEND_FROM_EMAIL
            }
          },
          {
            resolve: '@medusajs/medusa/notification-local',
            id: 'local',
            options: {
              channels: ['feed', 'seller_feed']
            }
          }
        ]
      }
    }
  ]
})
