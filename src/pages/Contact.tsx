import { useState } from 'react'
import styles from './Contact.module.css'

const steps = [
  { id: 1, label: 'Contato' },
  { id: 2, label: 'Pessoal' },
]

const WHATSAPP_NUMBER = '5511948803773'

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showError, setShowError] = useState(false)
  const [form, setForm] = useState({
    nome: '', sobrenome: '', telefone: '', email: '',
    mensagem: '', nascimento: '', estadoCivil: '',
    endereco: '', comoConheceu: ''
  })

  const step1Valid =
    form.nome.trim() !== '' &&
    form.sobrenome.trim() !== '' &&
    form.telefone.trim() !== '' &&
    form.email.trim() !== '' &&
    form.mensagem.trim() !== ''

  const step2Valid =
    form.nascimento !== '' &&
    form.estadoCivil !== '' &&
    form.endereco.trim() !== '' &&
    form.comoConheceu !== ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setShowError(false)
  }

  const next = () => {
    if (!step1Valid) { setShowError(true); return }
    setShowError(false)
    setCurrentStep(prev => prev + 1)
  }

  const prev = () => {
    setShowError(false)
    setCurrentStep(prev => prev - 1)
  }

  const submit = () => {
    if (!step2Valid) { setShowError(true); return }

    const mensagem = `
*Contato pelo site - Igreja Família SBC*

*INFORMACOES DE CONTATO*
Nome: ${form.nome} ${form.sobrenome}
Telefone: ${form.telefone}
E-mail: ${form.email}
Mensagem: ${form.mensagem}

*INFORMACOES PESSOAIS*
Nascimento: ${form.nascimento}
Estado Civil: ${form.estadoCivil}
Endereco: ${form.endereco}
Como nos conheceu: ${form.comoConheceu}
    `.trim()

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
    setCurrentStep(2)
  }

  const currentStepValid = currentStep === 0 ? step1Valid : step2Valid

  return (
    <section className={styles.contactPage}>

      <div className={styles.hero}>
        <span className={styles.heroTag}>● FALE CONOSCO</span>
        <h1 className={styles.heroTitle}>
          Entre em <span className={styles.highlight}>Contato</span>
        </h1>
        <p className={styles.heroSub}>
          Estamos aqui para ouvir você. Preencha o formulário e nossa equipe retornará em breve.
        </p>
        <div className={styles.heroDivider} />
      </div>

      <div className={styles.contactWrapper}>

        <div className={styles.stepper}>
          {steps.map((step, i) => (
            <div key={step.id} className={styles.stepItem}>
              <div className={`${styles.step} ${currentStep === i ? styles.active : ''} ${currentStep > i ? styles.done : ''}`}>
                <div className={styles.stepCircle}>{currentStep > i ? '✓' : i + 1}</div>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`${styles.stepLine} ${currentStep > i ? styles.done : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.formBody}>

          {currentStep === 0 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>PASSO 1</span>
                <h2>Informações de Contato</h2>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Nome <span className={styles.required}>*</span></label>
                  <input name="nome" value={form.nome} onChange={handleChange} placeholder="João" />
                </div>
                <div className={styles.formGroup}>
                  <label>Sobrenome <span className={styles.required}>*</span></label>
                  <input name="sobrenome" value={form.sobrenome} onChange={handleChange} placeholder="Silva" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Telefone <span className={styles.required}>*</span></label>
                  <input name="telefone" type="tel" value={form.telefone} onChange={handleChange} placeholder="(11) 99999-9999" />
                </div>
                <div className={styles.formGroup}>
                  <label>E-mail <span className={styles.required}>*</span></label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="exemplo@gmail.com" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Mensagem <span className={styles.required}>*</span></label>
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Deixe sua mensagem aqui..." />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionTag}>PASSO 2</span>
                <h2>Informações Pessoais</h2>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Data de Nascimento <span className={styles.required}>*</span></label>
                  <input name="nascimento" type="date" value={form.nascimento} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Estado Civil <span className={styles.required}>*</span></label>
                  <select name="estadoCivil" value={form.estadoCivil} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Endereço <span className={styles.required}>*</span></label>
                  <input name="endereco" value={form.endereco} onChange={handleChange} placeholder="Rua, número, bairro" />
                </div>
                <div className={styles.formGroup}>
                  <label>Como nos conheceu? <span className={styles.required}>*</span></label>
                  <select name="comoConheceu" value={form.comoConheceu} onChange={handleChange}>
                    <option value="">Selecione</option>
                    <option value="instagram">Instagram</option>
                    <option value="amigo">Indicação de amigo</option>
                    <option value="youtube">YouTube</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className={`${styles.formSection} ${styles.success}`}>
              <div className={styles.successIcon}>✓</div>
              <h2>Mensagem enviada!</h2>
              <p>Obrigado por entrar em contato. Em breve nossa equipe retornará.</p>
            </div>
          )}

        </div>

        {currentStep < 2 && (
          <div className={styles.formActions}>
            {showError && !currentStepValid && (
              <span className={styles.errorMsg}>Preencha todos os campos</span>
            )}
            {currentStep === 1 && <button className={styles.btnBack} onClick={prev}>← Voltar</button>}
            {currentStep === 0 && (
              <button
                className={`${styles.btnNext} ${!step1Valid ? styles.btnDisabled : ''}`}
                onClick={next}
              >
                Próximo →
              </button>
            )}
            {currentStep === 1 && (
              <button
                className={`${styles.btnNext} ${!step2Valid ? styles.btnDisabled : ''}`}
                onClick={submit}
              >
                Enviar via WhatsApp
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  )
}
