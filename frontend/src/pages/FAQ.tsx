import { useTranslation } from 'react-i18next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: "How do I register as a migrant worker?",
      answer: "Click on 'Register' in the navigation menu, select 'Worker' and fill out the registration form with your personal details and Worker ID."
    },
    {
      question: "How can I access my health records?",
      answer: "After logging in with your Worker ID, you can view all your health records, vaccination history, and generate your digital health ID QR code."
    },
    {
      question: "What if I forget my Worker ID?",
      answer: "Contact your employer or the local health office. They can help you retrieve your Worker ID using your personal information."
    },
    {
      question: "How do doctors add health records?",
      answer: "Doctors can search for workers by ID, view their history, and add new health records including diagnoses, prescriptions, and vital signs."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, all health data is encrypted and protected. Only authorized healthcare providers and you can access your records."
    },
    {
      question: "Can I download my health records?",
      answer: "Yes, you can download your complete health history as a PDF from your dashboard for personal records or sharing with other healthcare providers."
    }
  ];

  return (
    <div
  className="min-h-[80vh] py-16"
  style={{ backgroundColor: "#FFFDF5" }}
>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Common questions about KerMedix Health system
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-sm px-6"
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;