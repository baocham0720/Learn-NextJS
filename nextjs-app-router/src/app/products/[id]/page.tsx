import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ProductDetail',
    description: 'ProductDetail description'
  }
// Server Component
export default function ProductDetailPage({ params }: { params: { id: string } }) {
    console.log('params', params);
    return <h1>Hello, ProductDetailPage</h1>
}