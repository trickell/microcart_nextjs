"use client"
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  return (
    <div>
      <h1>Shop</h1>
      <p>Shop page content</p>
      <p>Product ID: {id}</p>
    </div>
  );
}