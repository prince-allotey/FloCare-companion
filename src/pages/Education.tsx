import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Droplets, Clock, AlertCircle, ThumbsUp, Stethoscope } from "lucide-react";

const Education = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Education</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Understanding Menstruation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn everything you need to know about menstruation, from the basics to common symptoms and when to seek medical help.
          </p>
        </div>

        {/* What is Menstruation */}
        <section className="mb-12">
          <Card className="shadow-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-warm p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-primary-foreground">
                    What is Menstruation?
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-foreground">
                  Menstruation, commonly known as a "period," is the monthly shedding of the lining of the uterus (womb). It's a natural biological process that occurs in people with female reproductive systems, typically starting between ages 10-15 (called menarche) and continuing until menopause (usually around ages 45-55).
                </p>
                <p className="text-muted-foreground">
                  During menstruation, blood and tissue from the uterus exit through the vagina. A typical period lasts between 3-7 days, and the menstrual cycle (from the first day of one period to the first day of the next) averages 28 days, though anywhere between 21-35 days is considered normal.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Does It Happen */}
        <section className="mb-12">
          <Card className="shadow-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-fertile p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-accent-foreground">
                    Why Does Menstruation Happen?
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-foreground">
                  Menstruation is part of the body's preparation for a possible pregnancy. Each month, the body goes through a cycle controlled by hormones:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-secondary rounded-xl">
                    <h4 className="font-heading font-bold text-foreground mb-2">1. Follicular Phase</h4>
                    <p className="text-sm text-muted-foreground">
                      The body prepares an egg for release. Estrogen levels rise, causing the uterine lining to thicken.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <h4 className="font-heading font-bold text-foreground mb-2">2. Ovulation</h4>
                    <p className="text-sm text-muted-foreground">
                      An egg is released from the ovary, typically around day 14 of a 28-day cycle. This is the most fertile time.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <h4 className="font-heading font-bold text-foreground mb-2">3. Luteal Phase</h4>
                    <p className="text-sm text-muted-foreground">
                      If the egg isn't fertilized, hormone levels drop. The uterine lining begins to break down.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-xl">
                    <h4 className="font-heading font-bold text-foreground mb-2">4. Menstruation</h4>
                    <p className="text-sm text-muted-foreground">
                      The uterine lining sheds through the vagina. This is your period. Then the cycle begins again.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Symptoms */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-primary" />
            Common Symptoms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Cramps",
                description: "Mild to moderate pain in the lower abdomen caused by uterine contractions. Very common and usually manageable with heat or pain relievers.",
              },
              {
                title: "Mood Changes",
                description: "Feeling irritable, anxious, or emotional due to hormonal fluctuations. This is normal and usually temporary.",
              },
              {
                title: "Bloating",
                description: "A feeling of fullness or swelling in the abdomen due to water retention. Usually resolves after your period ends.",
              },
              {
                title: "Breast Tenderness",
                description: "Breasts may feel sore, swollen, or sensitive. This is caused by hormonal changes and is temporary.",
              },
              {
                title: "Headaches",
                description: "Some experience headaches or migraines around their period due to changing hormone levels.",
              },
              {
                title: "Fatigue",
                description: "Feeling more tired than usual is common. Rest, good nutrition, and gentle exercise can help.",
              },
            ].map((symptom, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-4">
                  <h3 className="font-heading font-bold text-foreground mb-2">{symptom.title}</h3>
                  <p className="text-sm text-muted-foreground">{symptom.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Normal vs Abnormal */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
            <ThumbsUp className="w-6 h-6 text-primary" />
            Normal vs. Abnormal Periods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card border-border/50 border-l-4 border-l-fertile">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-4">✓ What's Normal</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Cycles between 21-35 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Periods lasting 3-7 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Mild to moderate cramps
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Some clotting (small clots are normal)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Slight variations month to month
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    PMS symptoms a week before
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50 border-l-4 border-l-period">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-4">✗ When to Be Concerned</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Periods longer than 7 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Very heavy bleeding (soaking through a pad/tampon hourly)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Severe pain that interferes with daily life
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Large clots (bigger than a coin)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    No period for 3+ months (if not pregnant)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Bleeding between periods
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Myths & Facts */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
            Myths vs. Facts
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                myth: "You can't exercise during your period",
                fact: "Exercise is actually beneficial! It can help reduce cramps and improve mood. Listen to your body and do what feels comfortable.",
              },
              {
                myth: "You shouldn't bathe or shower during your period",
                fact: "Bathing and showering are perfectly safe and important for hygiene during menstruation. Warm baths can even help relieve cramps.",
              },
              {
                myth: "Periods sync up when women live together",
                fact: "This is a popular belief, but scientific studies haven't found strong evidence for menstrual synchrony.",
              },
              {
                myth: "You can't get pregnant during your period",
                fact: "While less likely, pregnancy can occur if you have sex during your period, especially if you have a shorter cycle.",
              },
              {
                myth: "PMS is all in your head",
                fact: "PMS is caused by real hormonal changes and can cause physical and emotional symptoms. It's not imaginary.",
              },
              {
                myth: "Tampons can get lost inside you",
                fact: "Tampons cannot get lost. The cervix prevents anything from going beyond the vaginal canal. If you can't find the string, you can reach in to remove it or see a healthcare provider.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="text-primary">Myth:</span>
                    <span className="text-foreground">{item.myth}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <span className="font-medium text-fertile">Fact: </span>
                  {item.fact}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* When to See a Doctor */}
        <section>
          <Card className="shadow-card border-border/50 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                    When to See a Doctor
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    While menstruation is normal, you should consult a healthcare provider if you experience:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• Severe pain not relieved by over-the-counter medication</li>
                    <li>• Very heavy bleeding or flooding</li>
                    <li>• Periods that suddenly become irregular</li>
                    <li>• No period by age 15-16</li>
                    <li>• Periods that stop for several months</li>
                    <li>• Fever or unusual discharge during your period</li>
                    <li>• Signs of anemia (extreme fatigue, dizziness)</li>
                    <li>• Symptoms that significantly impact your daily life</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Education;
