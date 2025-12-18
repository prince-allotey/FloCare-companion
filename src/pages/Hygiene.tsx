import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Trash2, AlertCircle, Clock, Droplets, Bath, School } from "lucide-react";

const products = [
  {
    name: "Sanitary Pads",
    description: "Most common menstrual product. Attached to underwear to absorb menstrual flow.",
    howToUse: [
      "Remove the backing and stick the pad to your underwear",
      "Wings (if any) fold around the sides of underwear",
      "Change every 4-6 hours, or sooner if needed",
      "Wrap used pad in wrapper/paper before disposing",
    ],
    pros: ["Easy to use", "Widely available", "Good for beginners"],
    cons: ["Can feel bulky", "May shift during activity", "Creates waste"],
  },
  {
    name: "Tampons",
    description: "Inserted into the vagina to absorb menstrual blood internally.",
    howToUse: [
      "Wash hands before insertion",
      "Find a comfortable position (sitting, standing with one leg up)",
      "Insert tampon at an angle toward your lower back",
      "Change every 4-8 hours maximum",
    ],
    pros: ["Discreet", "Good for swimming/sports", "No external feel"],
    cons: ["Requires practice to insert", "Risk of TSS if left too long", "Can be drying"],
  },
  {
    name: "Menstrual Cups",
    description: "Reusable silicone cups inserted to collect menstrual blood.",
    howToUse: [
      "Fold cup and insert into vagina",
      "Let it unfold to create a seal",
      "Empty every 8-12 hours",
      "Wash with water and mild soap, sterilize between cycles",
    ],
    pros: ["Reusable (lasts years)", "Eco-friendly", "Long wear time", "Cost-effective long-term"],
    cons: ["Learning curve", "Requires cleaning", "Initial cost higher"],
  },
  {
    name: "Period Underwear",
    description: "Special underwear with built-in absorbent layers.",
    howToUse: [
      "Wear like regular underwear",
      "Choose absorbency level based on your flow",
      "Rinse in cold water after use",
      "Machine wash and air dry",
    ],
    pros: ["Comfortable", "Reusable", "No insertion required"],
    cons: ["Higher initial cost", "May not be enough for heavy flow alone"],
  },
];

const hygieneRules = [
  {
    icon: Clock,
    title: "Change Regularly",
    description: "Change pads every 4-6 hours, tampons every 4-8 hours maximum. Don't wait until they're fully soaked.",
  },
  {
    icon: Bath,
    title: "Wash Daily",
    description: "Bathe or shower daily. Use plain water to clean your external genital area - no douching needed.",
  },
  {
    icon: Droplets,
    title: "Front to Back",
    description: "Always wipe from front to back after using the toilet to prevent bacteria from entering the vagina.",
  },
  {
    icon: Shield,
    title: "Wear Breathable Fabrics",
    description: "Choose cotton underwear and avoid tight synthetic clothing to allow air circulation.",
  },
  {
    icon: Trash2,
    title: "Dispose Properly",
    description: "Wrap used products and dispose in a bin. Never flush pads, tampons, or wrappers down the toilet.",
  },
  {
    icon: AlertCircle,
    title: "Watch for Signs of Infection",
    description: "Unusual smell, itching, or discharge outside your period may indicate an infection - see a doctor.",
  },
];

const Hygiene = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ovulation/20 rounded-full text-ovulation text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Hygiene Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Menstrual Hygiene & Self-Care
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Good hygiene during menstruation helps you stay healthy, comfortable, and confident. Learn about different products and best practices.
          </p>
        </div>

        {/* Menstrual Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Menstrual Products Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">How to Use:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.howToUse.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-medium">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-fertile/10 rounded-lg">
                      <h5 className="font-semibold text-fertile text-xs mb-1">Pros</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-period/10 rounded-lg">
                      <h5 className="font-semibold text-period text-xs mb-1">Cons</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hygiene Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Essential Hygiene Practices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {hygieneRules.map((rule, index) => (
              <Card key={index} className="shadow-card border-border/50">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <rule.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dos and Don'ts */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Vaginal Health Do's & Don'ts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card border-border/50 border-l-4 border-l-fertile">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-fertile text-lg mb-4">✓ Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Clean external area with plain water
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Wear clean, cotton underwear
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Change underwear daily
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Let your vagina breathe (avoid tight clothes all day)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    Understand that some discharge is normal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fertile mt-1">•</span>
                    See a doctor if something seems wrong
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50 border-l-4 border-l-period">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-period text-lg mb-4">✗ Don't</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't douche or use internal "cleaning" products
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't use scented products near your vagina
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't use soap inside the vagina
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't wear wet swimwear for extended periods
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't ignore unusual discharge, smell, or itching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-period mt-1">•</span>
                    Don't share personal hygiene items
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hygiene at School/Travel */}
        <section className="mb-12 max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-warm p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center">
                    <School className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl font-heading font-bold text-primary-foreground">
                    Hygiene Tips for School & Travel
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Prepared Period Kit</h3>
                    <p className="text-sm text-muted-foreground mb-3">Always carry a small pouch with:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Extra pads or tampons (2-3)</li>
                      <li>• Small plastic bags for disposal</li>
                      <li>• Wet wipes or tissues</li>
                      <li>• Extra underwear</li>
                      <li>• Pain relief medication (if needed)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-3">Quick Tips</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Use bathroom breaks to check and change products</li>
                      <li>• Wear dark-colored bottoms for peace of mind</li>
                      <li>• Tie a sweater around your waist if worried about leaks</li>
                      <li>• Don't be embarrassed to ask teachers or friends for help</li>
                      <li>• Track your cycle to be prepared</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Infections */}
        <section className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                    Common Infections & Prevention
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Poor menstrual hygiene can increase risk of infections. Watch for these signs:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Yeast Infection</h4>
                      <p className="text-xs text-muted-foreground">
                        <strong>Signs:</strong> Itching, thick white discharge, burning<br/>
                        <strong>Prevention:</strong> Keep dry, avoid scented products, wear cotton
                      </p>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Bacterial Vaginosis</h4>
                      <p className="text-xs text-muted-foreground">
                        <strong>Signs:</strong> Fishy odor, gray/white discharge<br/>
                        <strong>Prevention:</strong> Don't douche, practice safe sex
                      </p>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">UTI (Urinary Tract Infection)</h4>
                      <p className="text-xs text-muted-foreground">
                        <strong>Signs:</strong> Burning when urinating, frequent urination<br/>
                        <strong>Prevention:</strong> Wipe front to back, stay hydrated
                      </p>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">When to See a Doctor</h4>
                      <p className="text-xs text-muted-foreground">
                        See a healthcare provider if you experience any unusual symptoms, pain, or discharge. Don't self-diagnose - proper treatment is important.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Hygiene;
