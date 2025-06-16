import { IndexComponent } from '@/components/IndexComponent';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Bot UI - Next.js</h1>
        <p className="text-center mb-8 text-gray-600">
          This is a migrated chat interface from React to Next.js with Ant Design components.
        </p>
        <div className="w-full max-w-md mx-auto h-96">
          <IndexComponent />
        </div>
      </div>
    </div>
  );
}
