import Link from "next/link";
import styles from "../styles/Services.module.scss";

const services = [
  {
    title: "Sviluppo Software",
    description:
      "Offro servizi di sviluppo software su misura per le tue esigenze, utilizzando linguaggi come Java e C#. Creo applicazioni scalabili, performanti e sicure, garantendo un codice pulito e manutenibile.",
    icon: "code",
    emailSubject: "Richiesta%20Sviluppo%20Software",
  },
  {
    title: "Sviluppo di Siti Web",
    description:
      "Realizzo siti web moderni e responsive, utilizzando tecnologie come HTML, CSS, JavaScript e framework come Next.js. Garantisco performance elevate, ottimizzazione SEO e un design accattivante.",
    icon: "public",
    emailSubject: "Richiesta%20Sviluppo%20Siti%20Web",
  },
  {
    title: "Insegnante di Programmazione",
    description:
      "Condivido la mia esperienza insegnando programmazione a studenti e professionisti. Offro lezioni personalizzate su Java, C#, HTML, CSS, JavaScript e altre tecnologie, sia online che in presenza.",
    icon: "school",
    emailSubject: "Richiesta%20Lezioni%20di%20Programmazione",
  },
];

export default function ServicesPage() {
  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.title}>I miei Servizi</h2>
      <p className={styles.subtitle}>
        Offro competenze avanzate nello sviluppo software, creazione di siti web e formazione in programmazione.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <i className="material-icons">{service.icon}</i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link href={`mailto:dennisturco@gmail.com?subject=${service.emailSubject}`} target="_blank" className={styles.contactButton}> Contattami </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
