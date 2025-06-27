import React from 'react';

export default function ProductsPage() {
  const products = [
    {
      name: "Premium Tuna Delight",
      desc: "80g can – ฿45",
      image: "https://via.placeholder.com/150?text=Tuna"
    },
    {
      name: "Chicken Supreme",
      desc: "80g pouch – ฿42",
      image: "https://via.placeholder.com/150?text=Chicken"
    },
    {
      name: "Salmon & Rice Formula",
      desc: "400g bag – ฿160",
      image: "https://via.placeholder.com/150?text=Salmon"
    }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Our Cat Food Products</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        We offer a variety of healthy, vet-approved meals for rescued cats. Choose the best for your furry friends!
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img src={item.image} alt={item.name} style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }} />
            <h2 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{item.name}</h2>
            <p>{item.desc}</p>
            <button style={{
              marginTop: '0.5rem',
              background: '#ff6f00',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
