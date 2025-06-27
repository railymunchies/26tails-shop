import React from 'react';

const products = [
  {
    name: "Premium Tuna Delight",
    description: "80g can - ฿45",
    image: "/images/tuna.jpg",
  },
  {
    name: "Chicken Supreme",
    description: "80g pouch - ฿42",
    image: "/images/chicken.jpg",
  },
  {
    name: "Salmon & Rice Formula",
    description: "400g bag - ฿160",
    image: "/images/salmon.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Our Cat Food Products</h1>
      <p>We offer a variety of healthy, vet-approved meals for rescued cats. Choose the best for your furry friends!</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3 style={{ margin: '0.5rem 0' }}>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}