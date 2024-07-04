import React from 'react';
import RootLayout from './layout';
import Home from './pages/home/page';





function App() {
  return (
    <RootLayout>...
    
    </RootLayout>
  );
};

export async function getStaticPaths() {
  return {
    props: {
      title: "Home",
      description: "Home page",
    },
  };
}

export default App;
