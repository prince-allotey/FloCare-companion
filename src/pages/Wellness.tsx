import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Smile, Moon, Sparkles, Sun, Music, Users } from "lucide-react";

const moodPhases = [
  {
    phase: "Menstrual Phase (Days 1-5)",
    mood: "You might feel tired, withdrawn, or reflective",
    tips: [
      "Rest when your body asks for it",
      "Gentle activities like stretching or walking",
      "Journaling can help process emotions",
      "Allow yourself to slow down",
    ],
  },
  {
    phase: "Follicular Phase (Days 6-14)",
    mood: "Energy and mood often improve, feeling more social",
    tips: [
      "Great time to start new projects",
      "Socialize and connect with others",
      "Try more challenging workouts",
      "Be creative and productive",
    ],
  },
  {
    phase: "Ovulation (Around Day 14)",
    mood: "Often the most confident and energetic time",
    tips: [
      "Schedule important meetings or events",
      "Express yourself and communicate",
      "Enjoy social activities",
      "Channel your energy productively",
    ],
  },
  {
    phase: "Luteal Phase (Days 15-28)",
    mood: "PMS symptoms may appear - irritability, anxiety, or sadness",
    tips: [
      "Practice extra self-care",
      "Reduce caffeine and sugar",
      "Get enough sleep",
      "Be patient with yourself",
    ],
  },
];

const selfCareTips = [
  {
    icon: Moon,
    title: "Prioritize Sleep",
    description: "Aim for 7-9 hours. Your body needs extra rest during menstruation. Create a calming bedtime routine.",
  },
  {
    icon: Music,
    title: "Use Relaxation Techniques",
    description: "Try deep breathing, meditation, or gentle yoga. Even 5-10 minutes can reduce stress and ease cramps.",
  },
  {
    icon: Sun,
    title: "Stay Active",
    description: "Exercise releases endorphins that improve mood. Walking, swimming, or dancing - whatever feels good.",
  },
  {
    icon: Users,
    title: "Connect with Others",
    description: "Talk to friends, family, or a counselor. Sharing how you feel can lighten emotional burdens.",
  },
  {
    icon: Sparkles,
    title: "Practice Self-Compassion",
    description: "Your feelings are valid. Be kind to yourself during challenging days. It's okay to not be okay.",
  },
  {
    icon: Heart,
    title: "Do What Brings Joy",
    description: "Read, watch movies, take baths, be in nature. Pleasure and relaxation aren't luxuries - they're necessities.",
  },
];

const bodyPositivityMessages = [
  "Your body is doing something incredible every month.",
  "Menstruation is a sign of health, not weakness.",
  "Every body is different - and that's perfectly okay.",
  "Your worth is not defined by your productivity on any given day.",
  "Taking care of yourself is not selfish - it's necessary.",
  "You are strong, capable, and beautiful exactly as you are.",
];

const Wellness = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-safe/20 rounded-full text-safe text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            <span>Mental Wellness</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Mental & Emotional Health
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your mental health matters throughout your cycle. Learn about mood changes, self-care strategies, and embracing body positivity.
          </p>
        </div>

        {/* Mood Throughout Cycle */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Brain className="w-6 h-6 text-primary" />
            Mood Changes Throughout Your Cycle
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hormonal changes throughout your menstrual cycle can affect your mood, energy, and emotions. Understanding these patterns can help you plan and cope better.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {moodPhases.map((phase, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{phase.phase}</h3>
                  <p className="text-primary mb-4 text-sm">{phase.mood}</p>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Tips for this phase:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {phase.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Self-Care Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Self-Care Strategies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {selfCareTips.map((tip, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <tip.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stress Management */}
        <section className="mb-16 max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-sage p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-accent-foreground">
                    Managing Stress & Anxiety
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Stress can worsen PMS symptoms and make your period more uncomfortable. Here are some techniques to help:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Quick Relief Techniques</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        <strong>Box Breathing:</strong> Inhale 4 seconds, hold 4, exhale 4, hold 4
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        <strong>Grounding:</strong> Name 5 things you see, 4 you hear, 3 you feel
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        <strong>Movement:</strong> Shake your body, stretch, or take a short walk
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        <strong>Cold water:</strong> Splash on face to reset nervous system
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Daily Practices</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        Start a gratitude journal
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        Limit social media during vulnerable times
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        Set boundaries with others
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        Create a calm space in your home
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fertile">•</span>
                        Practice saying "no" without guilt
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Body Positivity */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Smile className="w-6 h-6 text-primary" />
            Body Positivity & Encouragement
          </h2>
          <Card className="shadow-card border-border/50 bg-gradient-warm overflow-hidden">
            <CardContent className="p-8">
              <p className="text-primary-foreground text-center mb-8">
                Menstruation is a natural, healthy process. Your body deserves love and respect throughout your entire cycle. Here are some affirmations to carry with you:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bodyPositivityMessages.map((message, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card/20 backdrop-blur-sm rounded-xl text-primary-foreground text-center font-medium"
                  >
                    "{message}"
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* When to Seek Help */}
        <section className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                    When to Seek Professional Help
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    While mood changes are normal, some symptoms may need professional attention. Consider speaking with a healthcare provider or counselor if you experience:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• Severe depression or hopelessness</li>
                    <li>• Anxiety that interferes with daily life</li>
                    <li>• Thoughts of self-harm</li>
                    <li>• Extreme mood swings every month</li>
                    <li>• Inability to function at work/school</li>
                    <li>• Symptoms that don't improve with self-care</li>
                  </ul>
                  <p className="mt-4 text-sm text-primary font-medium">
                    You deserve support. PMDD (Premenstrual Dysphoric Disorder) is a real condition that affects some women severely - treatment is available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Wellness;
