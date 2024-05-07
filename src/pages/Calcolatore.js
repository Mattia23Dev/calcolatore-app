import React from 'react'
import './calcolatore.css'
import intro from '../imgs/intro.png'
import base from '../imgs/answer-1-1.png'
import AppInfo from '../context/AppInfo'
import { formatNumber, useAppContext } from '../context/AppContext'
import { FacebookShareButton, FacebookIcon, EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { FaArrowLeft } from 'react-icons/fa';

function SocialShare() {
    const shareUrl = 'http://example.com';
    const title = 'Check out this website!';
  
    return (
      <div className='social-container'>
        <EmailShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button">
          <EmailIcon size={52} round />
        </EmailShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button">
          <FacebookIcon size={52} round />
        </FacebookShareButton>
  
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button">
          <TwitterIcon size={52} round />
        </TwitterShareButton>
  
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="Demo__some-network__share-button">
          <LinkedinIcon size={52} round />
        </LinkedinShareButton>
      </div>
    );
  }
  
const Calcolatore = () => {
    const { currentStep, handleAnswer, totalCost, goBack, setCurrentStep, answers, handleRicomincia } = useAppContext();
    console.log(answers)
  return (
    <div className="calcolatore-container">
        {currentStep > 1 ? (totalCost > 0 && currentStep < 11) ? <p onClick={() => goBack()} className='calcolatore-indietro'><FaArrowLeft /> indietro</p> : <p onClick={() => handleRicomincia()} className='calcolatore-indietro'><FaArrowLeft /> Ricomincia</p> : null}
        {currentStep > 0 && currentStep < 11 && <p className='calcolatore-step'>{currentStep}/10</p>}
        {currentStep > 1 && totalCost > 0 && currentStep < 11 && <p className='calcolatore-prezzo'>{formatNumber(totalCost)}€</p>}
        {currentStep === 0 ? 
        <div className='calcolatore-intro'>
            <img alt='intro' src={intro} />
            <h1>Quanto costa sviluppare la mia app?</h1>
            <h4>Calcola rapidamente il costo per creare la tua app, rispondendo a queste semplici domande.</h4>
            <button onClick={() => setCurrentStep(1)} className='shiny-effect'>Calcolare</button>
        </div> :
        currentStep === 1 ?
        <div className='calcolatore-step-container'>
            <h2>Qual è la complessità dell'app che vuoi sviluppare?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(5000, 0, 'Base')}}>
                    <img alt='answer' src={base}/>
                    <p>Base (funzionalità limitate)</p>
                </div>
                <div onClick={() => {handleAnswer(7500, 0, 'Media')}}>
                    <img alt='answer' src={base}/>
                    <p>Media (con funzionalità interattive)</p>
                </div>
                <div onClick={() => {handleAnswer(12000, 0, 'Alta')}}>
                    <img alt='answer' src={base}/>
                    <p>Alta (con database e API complesse)</p>
                </div>
                <div onClick={() => {handleAnswer(15000, 0, 'Molto alta')}}>
                    <img alt='answer' src={base}/>
                    <p>Molto alta (include intelligenza artificiale, machine learning, ecc.)</p>
                </div>
            </div>
        </div> :
        currentStep === 2 ?
        <div className='calcolatore-step-container'>
            <h2>Qual è il tuo budget per lo sviluppo dell'app?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0, 'Meno di 5.000€')}}>
                    <img alt='answer' src={base}/>
                    <p>Meno di 5.000€</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'da 5.000€ a 20.000€')}}>
                    <img alt='answer' src={base}/>
                    <p>Da 5.000€ a 20.000€</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'da 20.000€ a 50.000€')}}>
                    <img alt='answer' src={base}/>
                    <p>Da 20.000€ a 50.000€</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'Oltre 50.000€')}}>
                    <img alt='answer' src={base}/>
                    <p>Oltre 50.000€</p>
                </div>
            </div>
        </div> :
        currentStep === 3 ?
        <div className='calcolatore-step-container'>
            <h2>Quale tipo di app stai cercando di sviluppare?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.2, 'App mobile nativa')}}>
                    <img alt='answer' src={base}/>
                    <p>Applicazione mobile nativa</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'App web')}}>
                    <img alt='answer' src={base}/>
                    <p>Applicazione web</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'App ibrida')}}>
                    <img alt='answer' src={base}/>
                    <p>Applicazione ibrida</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Altro')}}>
                    <img alt='answer' src={base}/>
                    <p>Altro</p>
                </div>
            </div>
        </div> :
        currentStep === 4 ?
        <div className='calcolatore-step-container'>
            <h2>Hai bisogno di un design personalizzato per l'app?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.25, 'Sì, completamente personalizzato')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, completamente personalizzato</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'No, un template standard va bene')}}>
                    <img alt='answer' src={base}/>
                    <p>No, un template standard va bene</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Solo alcune personalizzazioni')}}>
                    <img alt='answer' src={base}/>
                    <p>Solo alcune personalizzazioni</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.15, 'Non sono sicuro')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 5 ?
        <div className='calcolatore-step-container'>
            <h2>Quante lingue dovrebbe supportare l'app?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0, 'Solo una lingua')}}>
                    <img alt='answer' src={base}/>
                    <p>Solo una lingua</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Due lingue')}}>
                    <img alt='answer' src={base}/>
                    <p>Due lingue</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Tre a cinque lingue')}}>
                    <img alt='answer' src={base}/>
                    <p>Tre a cinque lingue</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.15, 'Più di cinque lingue')}}>
                    <img alt='answer' src={base}/>
                    <p>Più di cinque lingue</p>
                </div>
            </div>
        </div> :
        currentStep === 6 ?
        <div className='calcolatore-step-container'>
            <h2>Hai bisogno di integrare sistemi di pagamento nell'app?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.1, 'Sì, pagamenti in-app')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, pagamenti in-app</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Sì, pagamenti esterni (es. PayPal, Stripe)')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, pagamenti esterni (es. PayPal, Stripe)</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'Non sono previsti pagamenti')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono previsti pagamenti</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 7 ?
        <div className='calcolatore-step-container'>
            <h2>Quanto spesso prevedi di aggiornare l'app?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0, 'Raramente (una volta l\'anno)')}}>
                    <img alt='answer' src={base}/>
                    <p>Raramente (una volta l'anno)</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Occasionalmente (due o tre volte l\'anno)')}}>
                    <img alt='answer' src={base}/>
                    <p>Occasionalmente (due o tre volte l'anno)</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Frequentemente (ogni mese o trimestre)')}}>
                    <img alt='answer' src={base}/>
                    <p>Frequentemente (ogni mese o trimestre)</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.2, 'Continuamente (aggiornamenti continui e supporto)')}}>
                    <img alt='answer' src={base}/>
                    <p>Continuamente (aggiornamenti continui e supporto)</p>
                </div>
            </div>
        </div> :
        currentStep === 8 ?
        <div className='calcolatore-step-container'>
            <h2>L'applicazione dovrebbe avere un sistema di login?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.1, 'Sì, con autenticazione multi-fattore per maggiore sicurezza.')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, con autenticazione multi-fattore per maggiore sicurezza.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Sì, un semplice login con email e password')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, un semplice login con email e password.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'No, non è necessario un sistema di login')}}>
                    <img alt='answer' src={base}/>
                    <p>No, non è necessario un sistema di login</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro, vorrei discutere le opzioni di sicurezza')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono sicuro, vorrei discutere le opzioni di sicurezza</p>
                </div>
            </div>
        </div> :
        currentStep === 9 ?
        <div className='calcolatore-step-container'>
            <h2>L’applicazione dovrà essere integrata con un sito web?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.15, 'Sì, integrazione completa con il sito web esistente')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, integrazione completa con il sito web esistente.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Sì, ma solo per alcune funzionalità specifiche.')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, ma solo per alcune funzionalità specifiche.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'No, l\'applicazione funzionerà indipendentemente dal sito web')}}>
                    <img alt='answer' src={base}/>
                    <p>No, l'applicazione funzionerà indipendentemente dal sito web.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 10 ?
        <div className='calcolatore-step-container'>
            <h2>L'applicazione necessita di un pannello di amministrazione?</h2>
            <div className='step-answer-1'>
                <div onClick={() => {handleAnswer(0, 0.2, 'Sì, un pannello di amministrazione completo per gestire tutti gli aspetti dell\'app.')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, un pannello di amministrazione completo per gestire tutti gli aspetti dell'app.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Sì, ma solo con funzionalità limitate per aggiornamenti di base')}}>
                    <img alt='answer' src={base}/>
                    <p>Sì, ma solo con funzionalità limitate per aggiornamenti di base.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0, 'No, non è necessario un pannello di amministrazione')}}>
                    <img alt='answer' src={base}/>
                    <p>No, non è necessario un pannello di amministrazione.</p>
                </div>
                <div onClick={() => {handleAnswer(0, 0.1, 'Non sono sicuro, vorrei capire meglio le potenzialità di un pannello di amministrazione')}}>
                    <img alt='answer' src={base}/>
                    <p>Non sono sicuro, vorrei capire meglio le potenzialità di un pannello di amministrazione</p>
                </div>
            </div>
        </div> :
        <div className='calcolatore-fine'>
            <p>Bene, abbiamo finito!</p>
            <h5>Condividi se ti piace!</h5>
            <SocialShare />
            <h2>Il costo stimato per la tua app è</h2>
            <h3>{formatNumber(totalCost)} €</h3>
            <p>In Nova42 selezioniamo i migliori sviluppatori di app e siti web per i tuoi progetti. Pubblica il tuo progetto in Yeeply o guarda alcuni dei nostri casi di successo.</p>
            <button className='shiny-effect'>Crea il tuo progetto</button>
        </div>
        }
        <div className='calcolatore-fisso'>
            <AppInfo />
        </div>
    </div>
  )
}

export default Calcolatore