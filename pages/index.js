import Calcolatore from './Calcolatore';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa'
import { useAppContext } from '../context/AppContext';

function Home() {
  async function sendSheet(data) {
    const response = await fetch('https://sheet.best/api/sheets/f3df6e4f-5a11-47cd-9523-14aba2a33de3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        Nome: data.fullName, 
        Email: data.email,
        Cellulare: data.phone,
        ['Nome azienda']: data.companyName,
        Progetto: data.projectSummary,
        ["Qual è la complessità dell'app che vuoi sviluppare?"]: answers[1].answer,
        ["Qual è il tuo budget per lo sviluppo dell'app?"]: answers[2].answer,
        ["Quale tipo di app stai cercando di sviluppare?"]: answers[3].answer,
        ["Hai bisogno di un design personalizzato per l'app?"]: answers[4].answer,
        ["Quante lingue dovrebbe supportare l'app?"]: answers[5].answer,
        ["Hai bisogno di integrare sistemi di pagamento nell'app?"]: answers[6].answer,
        ["Quanto spesso prevedi di aggiornare l'app?"]: answers[7].answer,
        ["L'applicazione dovrebbe avere un sistema di login?"]: answers[8].answer,
        ["L’applicazione dovrà essere integrata con un sito web?"]: answers[9].answer,
        ["L'applicazione necessita di un pannello di amministrazione?"]: answers[10].answer,
        Prezzo: totalCost,
      })
    });
    if (response.ok) {
      window.alert('Dati inviati con successo!');
    } else {
      window.alert('Errore durante l\'invio dei dati');
    }
  }
  const { leadData, setLeadData, answers, totalCost } = useAppContext();
  const [showPopup, setShowPopup] = useState(false)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhoneNumber(phone) {
    const re = /^\+?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;
    return re.test(String(phone));
  }

  console.log(leadData)
  const handleSend = async () => {
    if(leadData.fullName === "" || leadData.email === "" || leadData.phone === ""){
      window.alert("Compila i campi obbligatori: Nome, Email e Cellulare")
      return
    }
    if (!validateEmail(leadData.email)){
      window.alert("Inserisci una email valida")
      return
    }
    if (!validatePhoneNumber(leadData.phone)){
      window.alert('Inserisci un numero valido')
      return
    }
    if (!leadData.accept){
      window.alert("Accetta i termini e condizioni")
      return
    }
    try {
      await sendSheet(leadData)
      console.log(leadData)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
    {showPopup && 
    <div className='shadow-popup'>
      <div className='popup-lead'>
        <FaTimes onClick={() => setShowPopup(false)} className='icon-close' size={30} />
        <h2>Per finire ci piacerebbe sapere qualcosa in più su di te.</h2>
        <div className='form-popup'>
          <div>
            <label>Nome e Cognome</label>
            <input type='text' placeholder='Inserisci il nome completo' value={leadData.fullName} onChange={(e) => setLeadData({...leadData, fullName: e.target.value})} />
          </div>
          <div>
            <label>Email</label>
            <input type='text' placeholder='Email' value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} />
          </div>
          <div>
            <label>Numero di telefono</label>
            <input type='text' placeholder='Cellulare' value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} />
          </div>
          <div>
            <label>Nome azienda</label>
            <input type='text' placeholder='Nome azienda' value={leadData.companyName} onChange={(e) => setLeadData({...leadData, companyName: e.target.value})} />
          </div>
          <div>
            <label>Breve descrizione del progetto (opzionale)</label>
            <textarea type='text' placeholder='Descrivi il tuo progetto' value={leadData.projectSummary} onChange={(e) => setLeadData({...leadData, projectSummary: e.target.value})} />
          </div>
          <div>
            <input id="acceptTerms" type='checkbox' value={leadData.accept} onChange={(e) => setLeadData({...leadData, accept: e.target.checked})} />
            <label htmlFor="acceptTerms">Ho letto e accetto i termini e condizioni d'uso e letto l'informativa privacy</label>
          </div>
        </div>
        <button onClick={handleSend}>Salva e continua</button>
      </div>
    </div>}
    <Calcolatore setShowPopup={setShowPopup} />
    </>
  );
}

export default Home;
