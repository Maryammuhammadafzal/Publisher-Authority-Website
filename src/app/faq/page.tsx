import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQPage = () => {
    const faq_question = [
        {
            question: 'Do I need technical skills?',
            answer: 'No. Publisher Authority is designed for all creators, with zero coding required.'
        },
        {
            question: 'Can I keep my current ads?',
            answer: 'Yes, our system works alongside your existing setup.'
        },
        {
            question: 'How do I get paid?',
            answer: 'Earnings are transferred directly to your PayPal or bank account.'
        },
    ]
    return (
        <section className='faq bg-background w-full h-auto flex justify-center items-center lg:py-20 md:py-14 py-8 relative'>
            {/* <div className='w-[200px] h-[200px] absolute right-0 top-0 bg-green-300/30 blur-[200]'></div> */}
            <div className='lg:w-[90%] flex flex-col gap-8 text-center justify-center items-center'>
                <h2 className='text-6xl font-medium text-center leading-20'>
                    Have a question? <br />
                    We are here to answer.
                </h2>
                {/* Faq */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {
                        faq_question.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index+1}`}>
                                <AccordionTrigger>FAQ</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                       {faq.question}
                                    </p>
                                    <p>
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }

                </Accordion>
            </div>
        </section>
    )
}

export default FAQPage
