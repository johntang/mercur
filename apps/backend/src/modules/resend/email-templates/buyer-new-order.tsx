interface EmailTemplateProps {
  data: {
    user_name: string,
    order_address: string,
    order_id: string,
    order: {
      display_id: string,
      items: any[],
      currency_code: string,
      shipping_methods: {
        amount: number,
        name: string
      }[],
      total: number,
      email: string,
      shipping_address: {
        first_name: string,
        last_name: string,
        company: string,
        address_1: string,
        address_2: string,
        city: string,
        province: string,
        postal_code: string,
        phone: string
      }
    }
  }
}

export const BuyerNewOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
  const { order } = data;

  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#222',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>
        感謝你的訂單, {data.user_name}!<br />
        訂單 #{order.display_id} 已成功下單!
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        訂單 #{order.display_id}.<br />
      </p>
      {/* <div style={{ marginBottom: 24 }}>
        <a
          href={data.order_address}
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: '#222',
            color: '#fff',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: 8
          }}
        >
          訂單資訊
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          If you can’t click the button, here’s your link: <br />
          <span style={{ color: '#0070f3' }}>{data.order_address}</span>
        </div>
      </div> */}
      <h3 style={{ marginTop: 32, marginBottom: 12 }}>訂單如下:</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #eee' }}>商品</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>單價</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>數量</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>總數</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item: any, index: number) => (
            <tr key={index} style={{ borderBottom: '1px solid #f3f3f3' }}>
              <td style={{ padding: '12px 8px', verticalAlign: 'top' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail of ${item.product_title}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      marginRight: '10px',
                      borderRadius: '4px',
                      border: '1px solid #eee'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.product_title}</div>
                    <div style={{ fontSize: '12px', color: '#555' }}>
                      產品: {item.variant_title}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price} {order.currency_code}
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price * item.quantity} {order.currency_code}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><b>運費:</b></td>
            <td colSpan={3}>
              {order.shipping_methods[0].amount} {order.currency_code}
            </td>
          </tr>
          <tr>
            <td><b>總計:</b></td>
            <td colSpan={3}>
              {order.total} {order.currency_code}
            </td>
          </tr>
        </tfoot>
      </table>
      <div style={{ marginBottom: 24 }}>
        <div>
          <p style={{ marginBottom: 4 }}>
            <strong>送貨地址:</strong><br />
            {order.shipping_address.first_name} {order.shipping_address.last_name},<br />
            {order.shipping_address?.company ? `${order.shipping_address.company}, ` : ''}
            {order.shipping_address.address_1}
            {order.shipping_address.address_2 && `, ${order.shipping_address.address_2}`}, {order.shipping_address.postal_code} {order.shipping_address.city}
            {order.shipping_address.province ? `, ${order.shipping_address.province}` : ''}
            <br />
            {order.email}, {order.shipping_address.phone}
          </p>
        </div>
        <div>
          <p>
            <strong>送貨方式:</strong><br />
            {order.shipping_methods[0].name}
          </p>
        </div>
      </div>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        {/* You received this email because you made a purchase or sale on the Mercur marketplace.<br /> */}
        如你有任何疑問，請聯絡我們
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>StarrYan</div>
        {/* <div style={{ color: '#888', marginTop: 4 }}>mercurjs.com</div> */}
      </div>
    </div>
  )
}