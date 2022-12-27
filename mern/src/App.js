import Button from './components/Button';
import Header from './components/Header'
import Navbar from './components/Navbar'
import TextInput from './components/TextInput'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <TextInput />
      <Button color='#0099CC' text='Suggest a Strain' /> 
      
    </div>
  );
}

export default App;
