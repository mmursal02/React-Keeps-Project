import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';



// const root = ReactDOM(documentGetElementById("root"))

// ReactDOM.createRoot(document.getElementById("root")).render(<h1>Test</h1>);



function App (){
    return (
       <div>
        <Header />
        <Note />
        <Footer />
        </div>
           )
}

export default App;
