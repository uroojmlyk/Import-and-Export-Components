// 1. IMPORT COMPONENTS
import MyHeader from './components/layout/MyHeader';
import MyButton from './components/common/MyButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      
      {/* 2. USE HEADER COMPONENT */}
      <MyHeader />
      
      <main className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
           Components Created
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Component 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                Button Component
              </h3>
              <p className="text-gray-600 mb-6">
                This button is created in:<br />
                <code className="bg-gray-100 px-2 py-1 rounded">src/components/common/MyButton.jsx</code>
              </p>
              <MyButton />
            </div>
            
            {/* Component 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-green-600">
                MyHeader Component
              </h3>
              <p className="text-gray-600 mb-6">
                This header is created in:<br />
                <code className="bg-gray-100 px-2 py-1 rounded">src/components/layout/MyHeader.jsx</code>
              </p>
              <div className="text-sm text-gray-500">
                <strong>Structure created:</strong>
                <pre className="mt-2 bg-gray-900 text-green-300 p-4 rounded-lg">
{`src/
├── components/
│   ├── common/
│   │   └── MyButton.jsx
│   └── layout/
│       └── MyHeader.jsx
└── App.jsx`}
                </pre>
              </div>
            </div>
            
          </div>
          
          {/* Summary */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              🎯 What You Achieved:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Created proper React folder structure</li>
              <li>Made components in separate files</li>
              <li>Used Import/Export correctly</li>
              <li>Styled with Tailwind CSS</li>
              <li>Organized code in common/ and layout/ folders</li>
            </ul>
          </div>
          
        </div>
      </main>
      
      <footer className="mt-12 text-center text-gray-500 text-sm p-6">
        <p>Built with React + Tailwind CSS | Folder Structure Practice</p>
      </footer>
      
    </div>
  );
}

// 3. EXPORT APP
export default App;