import React from 'react';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Cat Food Products</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '1rem',
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            background: 'white',
          }}>
            <img
              src={p.image}
              alt={p.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '0.5rem' }}>
              <h2 style={{ margin: '0 0 0.5rem' }}>{p.name}</h2>
              <p style={{ margin: 0 }}>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
