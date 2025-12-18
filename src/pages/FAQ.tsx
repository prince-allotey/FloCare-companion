import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, AlertCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Your Period",
    questions: [
      {
        q: "At what age should I expect my first period?",
        a: "Most girls get their first period between ages 10-15, with 12 being the average. However, getting it earlier (as young as 8) or later (up to 16) can be normal. If you haven't started by age 16, or haven't shown any signs of puberty by age 14, it's a good idea to see a doctor.",
      },
      {
        q: "What are the signs that my period is coming?",
        a: "Signs include breast development (usually 2-3 years before your period), pubic and underarm hair, growth spurt, white vaginal discharge, and mood changes. Some girls also experience cramps or bloating a few days before their first period.",
      },
      {
        q: "Is it normal for periods to be irregular at first?",
        a: "Yes! It's very common for periods to be irregular for the first 1-2 years. Your body is still adjusting. Cycles can range from 21-45 days initially. If they haven't become more regular after 2-3 years, talk to a healthcare provider.",
      },
    ],
  },
  {
    category: "During Your Period",
    questions: [
      {
        q: "Can I bathe or shower during my period?",
        a: "Absolutely yes! Bathing and showering are not only safe but important for hygiene during menstruation. The blood flow doesn't stop in water - it just slows due to water pressure. A warm bath can even help relieve cramps.",
      },
      {
        q: "Can I exercise during my period?",
        a: "Yes, exercise is generally beneficial during your period. It can help reduce cramps, improve mood, and boost energy. Listen to your body - lighter exercise might feel better on heavy days. Swimming is also fine (use a tampon or menstrual cup).",
      },
      {
        q: "Is it normal to have blood clots?",
        a: "Small blood clots (smaller than a coin) are normal, especially on heavier days. They're simply pieces of the uterine lining. However, if you regularly pass clots larger than a coin, or have very heavy bleeding, consult a healthcare provider.",
      },
      {
        q: "Why does my period blood change color?",
        a: "Period blood can range from bright red to dark brown, and this is normal. Bright red is fresh blood, while darker blood has taken longer to leave the body. Brown or darker blood often appears at the beginning or end of your period.",
      },
    ],
  },
  {
    category: "Skipped or Missing Periods",
    questions: [
      {
        q: "Is it normal to skip a period?",
        a: "Occasional missed periods can happen due to stress, illness, significant weight changes, excessive exercise, or travel. However, if you're sexually active and miss a period, pregnancy is a possibility. If you miss 3 or more periods in a row (and aren't pregnant), see a doctor.",
      },
      {
        q: "What can cause irregular periods?",
        a: "Many things: stress, weight changes, excessive exercise, hormonal imbalances (like PCOS), thyroid problems, certain medications, and approaching menopause. Irregular periods in the first few years are normal while your body adjusts.",
      },
    ],
  },
  {
    category: "Pain and Discomfort",
    questions: [
      {
        q: "Are period cramps normal?",
        a: "Mild to moderate cramps are normal and experienced by most people who menstruate. They're caused by the uterus contracting. However, severe pain that interferes with daily activities is not normal and should be evaluated by a doctor.",
      },
      {
        q: "What can help with cramps?",
        a: "Heat (heating pad or warm bath), over-the-counter pain relievers (ibuprofen works well as it reduces prostaglandins), gentle exercise, staying hydrated, and certain teas (ginger, chamomile). If nothing helps, see a doctor for other options.",
      },
      {
        q: "Why do I get headaches during my period?",
        a: "Menstrual headaches are caused by the drop in estrogen levels before and during your period. Staying hydrated, maintaining regular sleep, avoiding triggers (alcohol, caffeine excess), and sometimes taking pain relievers preventatively can help.",
      },
    ],
  },
  {
    category: "Products and Hygiene",
    questions: [
      {
        q: "How often should I change my pad or tampon?",
        a: "Pads should be changed every 4-6 hours (or sooner if soaked). Tampons should be changed every 4-8 hours - never leave one in longer than 8 hours due to risk of Toxic Shock Syndrome (TSS). Change more frequently on heavy flow days.",
      },
      {
        q: "Can tampons get lost inside me?",
        a: "No, tampons cannot get lost inside your body. The cervix at the top of the vagina has only a tiny opening, so nothing can go further. If you can't find the string, you can reach in with clean fingers to remove it, or see a healthcare provider if you need help.",
      },
      {
        q: "Are menstrual cups safe?",
        a: "Yes, menstrual cups are safe when used correctly. They're made of medical-grade silicone, can be worn for up to 12 hours, and are reusable for years. They need to be cleaned regularly and sterilized between cycles.",
      },
    ],
  },
  {
    category: "Health Concerns",
    questions: [
      {
        q: "Does menstruation mean I'm sick?",
        a: "No! Menstruation is a completely normal and healthy biological process. It's a sign that your reproductive system is functioning. While you might feel some discomfort, having your period is not an illness.",
      },
      {
        q: "Can I get pregnant during my period?",
        a: "While less likely, yes, you can get pregnant if you have sex during your period. Sperm can survive in the body for up to 5 days, and if you have a shorter cycle, ovulation could occur soon after your period ends. Always use contraception if you want to avoid pregnancy.",
      },
      {
        q: "What is PMS?",
        a: "PMS (Premenstrual Syndrome) refers to physical and emotional symptoms that occur 1-2 weeks before your period. Symptoms include mood swings, bloating, breast tenderness, food cravings, fatigue, and irritability. Most people experience some PMS symptoms.",
      },
      {
        q: "What is PMDD and how is it different from PMS?",
        a: "PMDD (Premenstrual Dysphoric Disorder) is a severe form of PMS that significantly impacts daily life. It involves intense mood symptoms like depression, anxiety, or anger. Unlike regular PMS, PMDD is a medical condition that may require treatment. See a doctor if your symptoms are severe.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ & Myths</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about menstruation. Knowledge is power - understanding your body helps you take better care of it.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex}>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                  {catIndex + 1}
                </span>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${catIndex}-${qIndex}`}
                    className="border border-border/50 rounded-xl px-4 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="text-foreground font-medium pr-4">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        {/* Still Have Questions */}
        <section className="mt-16 max-w-3xl mx-auto">
          <Card className="shadow-card border-border/50 bg-gradient-warm overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-card/20 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-primary-foreground text-xl mb-3">
                Still Have Questions?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                If you have questions not covered here, or if you're experiencing symptoms that concern you, please talk to a trusted adult, school nurse, or healthcare provider.
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Remember: No question about your body is "silly" or "embarrassing." Healthcare providers have heard it all and are there to help you.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Quick Myth Busters */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Quick Myth Busters
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { myth: "You can't touch plants during your period", truth: "Plants don't care about your cycle! This is an old superstition with no basis in science." },
              { myth: "Period blood is dirty or toxic", truth: "Menstrual blood is just blood mixed with uterine lining tissue. It's not dirty or harmful." },
              { myth: "You shouldn't cook during your period", truth: "There's no reason you can't cook. Your period doesn't affect your food-making abilities!" },
              { myth: "Everyone has a 28-day cycle", truth: "Cycles can range from 21-35 days and still be completely normal. Everyone's body is different." },
              { myth: "Severe period pain is just part of being a woman", truth: "While some discomfort is normal, severe pain that disrupts your life is not. See a doctor." },
              { myth: "You lose a lot of blood during your period", truth: "Most people lose only 30-40ml (about 2-3 tablespoons) of blood per period." },
            ].map((item, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-4">
                  <p className="text-period font-medium text-sm mb-2">❌ Myth: {item.myth}</p>
                  <p className="text-fertile text-sm">✓ Truth: {item.truth}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
