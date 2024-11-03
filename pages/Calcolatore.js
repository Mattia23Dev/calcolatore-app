import React from 'react'
import {images, lottieI} from '../context/images';
import AppInfo from '../context/AppInfo'
import { formatNumber, useAppContext } from '../context/AppContext'
import { FacebookShareButton, FacebookIcon, EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { FaArrowLeft } from 'react-icons/fa';
import Lottie from 'lottie-react';
import anim from './anim/1.json'
import anim2 from './anim/2.json'
import anim3 from './anim/3.json'
import anim4 from './anim/4.json'
import anim5 from './anim/5.json'
import anim6 from './anim/6.json'
import anim7 from './anim/7.json'
import anim8 from './anim/8.json'
import anim9 from './anim/9.json'
import anim10 from './anim/10.json'

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
  
const Calcolatore = ({setShowPopup}) => {
    const { currentStep, handleAnswer, totalCost, goBack, setCurrentStep, answers, handleRicomincia } = useAppContext();
    const isSelected = (answer) => {
        console.log(answer)
        return answers.some(a => a.answer == answer);
    };
    console.log(answers)

      const getDefaultOpt = (anim) => {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: anim,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        console.log(defaultOptions)
        return defaultOptions;
      }
  return (
    <div className="calcolatore-container">
        {currentStep > 1 ? (totalCost > 0 && currentStep < 11) ? <p onClick={() => goBack()} className='calcolatore-indietro'><FaArrowLeft /> indietro</p> : <p onClick={() => handleRicomincia()} className='calcolatore-indietro'><FaArrowLeft /> Ricomincia</p> : null}
        {currentStep > 0 && currentStep < 11 && <p className='calcolatore-step'>{currentStep}/10</p>}
        {currentStep > 0 && currentStep < 11 && <img src='/imgs/otc2.png' className='calcolatore-prezzo' />}
        {currentStep === 0 ? 
        <div className='calcolatore-intro'>
            <img onClick={() => window.open('https://otacon.it', '_blank')} className='logofixed' alt='intro' src={images.intro} />
            <h1>Quanto costa sviluppare la mia app?</h1>
            <h4>Calcola rapidamente il costo per creare la tua app, rispondendo a queste semplici domande.</h4>
            <button onClick={() => setCurrentStep(1)} className='shiny-effect'>Calcolare</button>
        </div> :
        currentStep === 1 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim} />    
            </div>
            <h2>Qual è la complessità dell'app che vuoi sviluppare?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Base') ? 'selected' : ''}`} onClick={() => {handleAnswer(5000, 0, 'Base')}}>
                    <p>Base (funzionalità limitate)</p>
                </div>
                <div className={`answer ${isSelected('Media') ? 'selected' : ''}`} onClick={() => {handleAnswer(7500, 0, 'Media')}}>
                    <p>Media (con funzionalità interattive)</p>
                </div>
                <div className={`answer ${isSelected('Alta') ? 'selected' : ''}`} onClick={() => {handleAnswer(12000, 0, 'Alta')}}>
                    <p>Alta (con database e API complesse)</p>
                </div>
                <div className={`answer ${isSelected('Molto alta') ? 'selected' : ''}`} onClick={() => {handleAnswer(15000, 0, 'Molto alta')}}>
                    <p>Molto alta (include intelligenza artificiale, machine learning, ecc.)</p>
                </div>
            </div>
        </div> :
        currentStep === 2 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim2} />    
            </div>
            <h2>Qual è il tuo budget per lo sviluppo dell'app?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Meno di 5.000€') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'Meno di 5.000€')}}>
                    <p>Meno di 5.000€</p>
                </div>
                <div className={`answer ${isSelected('da 5.000€ a 20.000€') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'da 5.000€ a 20.000€')}}>
                    <p>Da 5.000€ a 20.000€</p>
                </div>
                <div className={`answer ${isSelected('da 20.000€ a 50.000€') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'da 20.000€ a 50.000€')}}>
                    <p>Da 20.000€ a 50.000€</p>
                </div>
                <div className={`answer ${isSelected('Oltre 50.000€') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'Oltre 50.000€')}}>
                    <p>Oltre 50.000€</p>
                </div>
            </div>
        </div> :
        currentStep === 3 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim3} />    
            </div>
            <h2>Quale tipo di app stai cercando di sviluppare?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('App mobile nativa') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.2, 'App mobile nativa')}}>
                    <p>Applicazione mobile nativa</p>
                </div>
                <div className={`answer ${isSelected('App web') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'App web')}}>
                    <p>Applicazione web</p>
                </div>
                <div className={`answer ${isSelected('App ibrida') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'App ibrida')}}>
                    <p>Applicazione ibrida</p>
                </div>
                <div className={`answer ${isSelected('Altro') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Altro')}}>
                    <p>Altro</p>
                </div>
            </div>
        </div> :
        currentStep === 4 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim4} />    
            </div>
            <h2>Hai bisogno di un design personalizzato per l'app?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Sì, completamente personalizzato') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.25, 'Sì, completamente personalizzato')}}>
                    <p>Sì, completamente personalizzato</p>
                </div>
                <div className={`answer ${isSelected('No, un template standard va bene') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'No, un template standard va bene')}}>
                    <p>No, un template standard va bene</p>
                </div>
                <div className={`answer ${isSelected('Solo alcune personalizzazioni') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Solo alcune personalizzazioni')}}>
                    <p>Solo alcune personalizzazioni</p>
                </div>
                <div className={`answer ${isSelected('Non sono sicuro') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.15, 'Non sono sicuro')}}>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 5 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim5} />    
            </div>
            <h2>Quante lingue dovrebbe supportare l'app?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Solo una lingua') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'Solo una lingua')}}>
                    <p>Solo una lingua</p>
                </div>
                <div className={`answer ${isSelected('Due lingue') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Due lingue')}}>
                    <p>Due lingue</p>
                </div>
                <div className={`answer ${isSelected('Tre a cinque lingue') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Tre a cinque lingue')}}>
                    <p>Tre a cinque lingue</p>
                </div>
                <div className={`answer ${isSelected('Più di cinque lingue') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.15, 'Più di cinque lingue')}}>
                    <p>Più di cinque lingue</p>
                </div>
            </div>
        </div> :
        currentStep === 6 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim6} />    
            </div>
            <h2>Hai bisogno di integrare sistemi di pagamento nell'app?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Sì, pagamenti in-app') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Sì, pagamenti in-app')}}>
                    <p>Sì, pagamenti in-app</p>
                </div>
                <div className={`answer ${isSelected('Sì, pagamenti esterni (es. PayPal, Stripe)') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Sì, pagamenti esterni (es. PayPal, Stripe)')}}>
                    <p>Sì, pagamenti esterni (es. PayPal, Stripe)</p>
                </div>
                <div className={`answer ${isSelected('Non sono previsti pagamenti') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'Non sono previsti pagamenti')}}>
                    <p>Non sono previsti pagamenti</p>
                </div>
                <div className={`answer ${isSelected('Non sono sicuro') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro')}}>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 7 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim7} />    
            </div>
            <h2>Quanto spesso prevedi di aggiornare l'app?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Raramente (una volta l\'anno)') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'Raramente (una volta l\'anno)')}}>
                    <p>Raramente (una volta l'anno)</p>
                </div>
                <div className={`answer ${isSelected('Occasionalmente (due o tre volte l\'anno)') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Occasionalmente (due o tre volte l\'anno)')}}>
                    <p>Occasionalmente (due o tre volte l'anno)</p>
                </div>
                <div className={`answer ${isSelected('Frequentemente (ogni mese o trimestre)') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Frequentemente (ogni mese o trimestre)')}}>
                    <p>Frequentemente (ogni mese o trimestre)</p>
                </div>
                <div className={`answer ${isSelected('Continuamente (aggiornamenti continui e supporto)') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.2, 'Continuamente (aggiornamenti continui e supporto)')}}>
                    <p>Continuamente (aggiornamenti continui e supporto)</p>
                </div>
            </div>
        </div> :
        currentStep === 8 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim8} />    
            </div>
            <h2>L'applicazione dovrebbe avere un sistema di login?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Sì, con autenticazione multi-fattore per maggiore sicurezza.') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Sì, con autenticazione multi-fattore per maggiore sicurezza.')}}>
                    <p>Sì, con autenticazione multi-fattore per maggiore sicurezza.</p>
                </div>
                <div className={`answer ${isSelected('Sì, un semplice login con email e password') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Sì, un semplice login con email e password')}}>
                    <p>Sì, un semplice login con email e password.</p>
                </div>
                <div className={`answer ${isSelected('No, non è necessario un sistema di login') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'No, non è necessario un sistema di login')}}>
                    <p>No, non è necessario un sistema di login</p>
                </div>
                <div className={`answer ${isSelected('Non sono sicuro, vorrei discutere le opzioni di sicurezza') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro, vorrei discutere le opzioni di sicurezza')}}>
                    <p>Non sono sicuro, vorrei discutere le opzioni di sicurezza</p>
                </div>
            </div>
        </div> :
        currentStep === 9 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim9} />    
            </div>
            <h2>L’applicazione dovrà essere integrata con un sito web?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Sì, integrazione completa con il sito web esistente') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.15, 'Sì, integrazione completa con il sito web esistente')}}>
                    <p>Sì, integrazione completa con il sito web esistente.</p>
                </div>
                <div className={`answer ${isSelected('Sì, ma solo per alcune funzionalità specifiche.') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Sì, ma solo per alcune funzionalità specifiche.')}}>
                    <p>Sì, ma solo per alcune funzionalità specifiche.</p>
                </div>
                <div className={`answer ${isSelected('No, l\'applicazione funzionerà indipendentemente dal sito web') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'No, l\'applicazione funzionerà indipendentemente dal sito web')}}>
                    <p>No, l'applicazione funzionerà indipendentemente dal sito web.</p>
                </div>
                <div className={`answer ${isSelected('Non sono sicuro') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.05, 'Non sono sicuro')}}>
                    <p>Non sono sicuro</p>
                </div>
            </div>
        </div> :
        currentStep === 10 ?
        <div className='calcolatore-step-container'>
            <div className='animations'>
                <Lottie animationData={anim10} />    
            </div>
            <h2>L'applicazione necessita di un pannello di amministrazione?</h2>
            <div className='step-answer-1'>
                <div className={`answer ${isSelected('Sì, un pannello di amministrazione completo per gestire tutti gli aspetti dell\'app.') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.2, 'Sì, un pannello di amministrazione completo per gestire tutti gli aspetti dell\'app.')}}>
                    <p>Sì, un pannello di amministrazione completo per gestire tutti gli aspetti dell'app.</p>
                </div>
                <div className={`answer ${isSelected('Sì, ma solo con funzionalità limitate per aggiornamenti di base') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Sì, ma solo con funzionalità limitate per aggiornamenti di base')}}>
                    <p>Sì, ma solo con funzionalità limitate per aggiornamenti di base.</p>
                </div>
                <div className={`answer ${isSelected('No, non è necessario un pannello di amministrazione') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0, 'No, non è necessario un pannello di amministrazione')}}>
                    <p>No, non è necessario un pannello di amministrazione.</p>
                </div>
                <div className={`answer ${isSelected('Non sono sicuro, vorrei capire meglio le potenzialità di un pannello di amministrazione') ? 'selected' : ''}`} onClick={() => {handleAnswer(0, 0.1, 'Non sono sicuro, vorrei capire meglio le potenzialità di un pannello di amministrazione')}}>
                    <p>Non sono sicuro, vorrei capire meglio le potenzialità di un pannello di amministrazione</p>
                </div>
            </div>
        </div> :
        <div className='calcolatore-fine'>
            {/*<p>Bene, abbiamo finito!</p>
            <h5>Condividi se ti piace!</h5>
            <SocialShare />*/}
            <h2>Il costo stimato per la tua app è</h2>
            <h3>{formatNumber(totalCost)} €</h3>
            <p>Vuoi trasformare il tuo progetto in realtà? Clicca su "Prenota la tua consulenza" e scegli quando approfondire la tua idea con il nostro team di esperti!</p>
            <button onClick={() => setShowPopup(true)} className='shiny-effect'>Prenota la tua consulenza</button>
        </div>
        }
        <div className='calcolatore-fisso'>
            <AppInfo />
        </div>
    </div>
  )
}

export default Calcolatore