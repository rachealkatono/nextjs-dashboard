import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Manage and view all customer information in your Acme Dashboard.',
};

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <p className="text-gray-700">
        Here you can find a list of all customers, their contact details, and account status.
      </p>
    </main>
  );
}