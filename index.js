import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <div>
            {/* Other HTML content */}
            <ContactForm />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
