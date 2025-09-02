import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FAQPage = () => {
    const faq_question = [
        {
            question: 'What is Publisher Authority and how does it work?',
            answer: 'Publisher Authority is a platform designed to help individuals, businesses, and publishers build credibility in the digital world. We focus on showcasing your expertise through professional publishing strategies, optimized profiles, and content placement. By highlighting your authority, we ensure your brand earns trust, recognition, and visibility online.'
        },
        {
            question: 'Who can benefit the most from Publisher Authority?',
            answer: 'Our platform is ideal for authors, entrepreneurs, freelancers, publishers, and businesses who want to establish a strong reputation. Whether you are an individual looking to become a thought leader or a company aiming to build brand authority, Publisher Authority provides the tools and strategies to boost your online presence.'
        },
        {
            question: 'Do I need technical knowledge to use Publisher Authority?',
            answer: 'No, you don’t need any technical or coding skills. Publisher Authority is built to be user-friendly and accessible for everyone. Our team manages the technical setup, publishing, and optimization for you, so you can focus on your work while we handle the process of building and maintaining your credibility.'
        },
        {
            question: 'How long does it take to see results with Publisher Authority?',
            answer: 'Results vary depending on your goals and industry, but most users start noticing improvements in their visibility and authority within a few weeks. Since credibility and recognition grow steadily, the longer you use our platform, the stronger your online presence becomes. It’s a long-term investment in trust and authority.'
        },
        {
            question: 'What kind of support does Publisher Authority provide?',
            answer: 'We believe in offering complete guidance to our users. Our support team is available to assist you with queries, publishing processes, and technical help. Beyond that, we provide strategic advice to ensure you maximize results. Whether you’re a beginner or an experienced professional, our support ensures a smooth journey.'
        },
    ]
    return (
        <section className='faq bg-background w-full h-auto flex justify-center items-center lg:py-20 md:py-14 py-8 relative'>
            <div className='w-[70%] h-[70%] absolute left-0 top-0 bg-gradient-to-tl from-white/20 to-green-200 rounded-full blur-[200px]'>
            </div>
            <div className='lg:w-[90%] max-w-4xl flex flex-col gap-8  h-full z-10 text-center justify-center items-center'>
                <h2 className='text-6xl font-medium text-center leading-20'>
                    Have a question? <br />
                    We are here to answer.
                </h2>
                {/* Faq */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full border bg-white border-primary/20 shadow-md rounded-2xl p-6"
                    defaultValue={faq_question.length > 0 ? 'item-1' : undefined}
                >
                    {
                        faq_question.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index+1}`}>
                                <AccordionTrigger className='text-lg'>{faq.question}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 pt-3 pb-8 pr-10 leading-5 text-left">
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
