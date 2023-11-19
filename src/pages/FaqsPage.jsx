import styles from './FaqsPage.module.css';
import FaqsComponent from '../components/FaqsComponent';
import ModalNav from '../components/ModalNav';

const FaqsPage = () => {
  return (
    <div className={styles.faqsContainer}>
      <ModalNav />
      <div className={styles.faqsContent}>
        <h1>FAQs</h1>
        <div className={styles.faqsContentContainer}>
          <FaqsComponent
            question="What is CWallet?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="What Services does CWallet Provide? "
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Do I need anything special to use it? "
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="What  are the requirements to open a CWallet Account?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="How long does it take to verify my CWallet Account?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Pharetra diam sit amet nisl suscipit adipiscing?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Pharetra diam sit amet nisl suscipit adipiscing?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
          <FaqsComponent
            question="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
          />
        </div>
      </div>
    </div>
  );
};

export default FaqsPage;
