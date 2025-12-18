import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Apple, Droplet, Leaf, Fish, AlertTriangle, Coffee, Cookie, Salad } from "lucide-react";

const foodCategories = {
  before: {
    title: "Before Your Period",
    description: "Foods to reduce PMS symptoms and prepare your body",
    icon: Leaf,
    color: "bg-fertile",
    foods: {
      recommended: [
        {
          name: "Leafy Greens",
          examples: "Spinach, kale, sukuma wiki, amaranth leaves",
          benefit: "Rich in iron and calcium to prevent deficiency",
        },
        {
          name: "Whole Grains",
          examples: "Brown rice, oats, millet, sorghum",
          benefit: "Stabilize blood sugar and reduce mood swings",
        },
        {
          name: "Fruits",
          examples: "Bananas, oranges, mangoes, papaya",
          benefit: "Natural sugars and vitamins to boost energy",
        },
        {
          name: "Nuts & Seeds",
          examples: "Groundnuts, sunflower seeds, pumpkin seeds",
          benefit: "Healthy fats and magnesium for cramp relief",
        },
        {
          name: "Water-Rich Foods",
          examples: "Watermelon, cucumber, oranges",
          benefit: "Help reduce bloating through hydration",
        },
        {
          name: "Legumes",
          examples: "Beans, lentils, cowpeas, chickpeas",
          benefit: "Protein and fiber for sustained energy",
        },
      ],
      avoid: [
        { name: "Excessive Salt", reason: "Can worsen bloating and water retention" },
        { name: "Caffeine", reason: "May increase anxiety and breast tenderness" },
        { name: "Alcohol", reason: "Can worsen PMS symptoms and dehydration" },
        { name: "Processed Foods", reason: "High in sodium and unhealthy fats" },
      ],
    },
  },
  during: {
    title: "During Your Period",
    description: "Nourishing foods to support your body during menstruation",
    icon: Droplet,
    color: "bg-period",
    foods: {
      recommended: [
        {
          name: "Iron-Rich Foods",
          examples: "Red meat, liver, beans, fortified cereals",
          benefit: "Replace iron lost through menstrual blood",
        },
        {
          name: "Omega-3 Rich Foods",
          examples: "Omena (silver fish), sardines, flaxseeds",
          benefit: "Natural anti-inflammatory to reduce cramps",
        },
        {
          name: "Dark Chocolate",
          examples: "70% cocoa or higher",
          benefit: "Magnesium and mood-boosting compounds",
        },
        {
          name: "Ginger & Turmeric",
          examples: "Fresh ginger tea, turmeric in food",
          benefit: "Natural pain relief and anti-inflammation",
        },
        {
          name: "Warm Soups",
          examples: "Vegetable soup, bone broth, lentil soup",
          benefit: "Soothing, hydrating, and easy to digest",
        },
        {
          name: "Water & Herbal Teas",
          examples: "Plain water, chamomile, peppermint tea",
          benefit: "Reduce bloating and stay hydrated",
        },
      ],
      avoid: [
        { name: "Sugary Foods", reason: "Can cause energy crashes and worsen cramps" },
        { name: "Fried Foods", reason: "May increase inflammation and discomfort" },
        { name: "Very Spicy Foods", reason: "Can upset stomach during sensitive time" },
        { name: "Cold Drinks", reason: "Some believe it worsens cramps (listen to your body)" },
      ],
    },
  },
  after: {
    title: "After Your Period",
    description: "Restore your energy and rebuild nutrients",
    icon: Apple,
    color: "bg-safe",
    foods: {
      recommended: [
        {
          name: "Protein-Rich Foods",
          examples: "Eggs, fish, chicken, beans, lentils",
          benefit: "Rebuild tissue and restore energy",
        },
        {
          name: "Iron Boosters",
          examples: "Beef, liver, spinach with vitamin C foods",
          benefit: "Replenish iron stores after blood loss",
        },
        {
          name: "Vitamin C Foods",
          examples: "Oranges, tomatoes, bell peppers, guava",
          benefit: "Helps body absorb iron better",
        },
        {
          name: "B-Vitamin Foods",
          examples: "Eggs, milk, fortified cereals, green vegetables",
          benefit: "Support energy production and mood",
        },
        {
          name: "Complex Carbs",
          examples: "Sweet potatoes, cassava, plantains, brown rice",
          benefit: "Sustained energy release",
        },
        {
          name: "Probiotic Foods",
          examples: "Yogurt, fermented porridge, mursik",
          benefit: "Support gut health and immunity",
        },
      ],
      avoid: [
        { name: "Excessive Caffeine", reason: "Can interfere with iron absorption" },
        { name: "Empty Calories", reason: "Focus on nutrient-dense foods for recovery" },
      ],
    },
  },
};

const Nutrition = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fertile/20 rounded-full text-fertile text-sm font-medium mb-4">
            <Apple className="w-4 h-4" />
            <span>Nutrition Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Food & Nutrition for Your Cycle
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What you eat can significantly impact how you feel throughout your menstrual cycle. Learn which foods to embrace and which to avoid.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="before" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-secondary">
            <TabsTrigger value="before" className="py-3 data-[state=active]:bg-fertile data-[state=active]:text-accent-foreground">
              <Leaf className="w-4 h-4 mr-2" />
              Before
            </TabsTrigger>
            <TabsTrigger value="during" className="py-3 data-[state=active]:bg-period data-[state=active]:text-primary-foreground">
              <Droplet className="w-4 h-4 mr-2" />
              During
            </TabsTrigger>
            <TabsTrigger value="after" className="py-3 data-[state=active]:bg-safe data-[state=active]:text-primary-foreground">
              <Apple className="w-4 h-4 mr-2" />
              After
            </TabsTrigger>
          </TabsList>

          {Object.entries(foodCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <Card className="shadow-card border-border/50">
                <CardHeader className={`${category.color} rounded-t-lg`}>
                  <CardTitle className="font-heading text-xl text-primary-foreground flex items-center gap-3">
                    <category.icon className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                  <p className="text-primary-foreground/80 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Recommended Foods */}
                  <div className="mb-8">
                    <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                      <Salad className="w-5 h-5 text-fertile" />
                      Recommended Foods
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.foods.recommended.map((food, index) => (
                        <div key={index} className="p-4 bg-secondary rounded-xl">
                          <h4 className="font-heading font-bold text-foreground mb-1">{food.name}</h4>
                          <p className="text-sm text-primary mb-2">Examples: {food.examples}</p>
                          <p className="text-sm text-muted-foreground">{food.benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Foods to Limit */}
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-period" />
                      Foods to Limit
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.foods.avoid.map((food, index) => (
                        <div key={index} className="p-4 bg-period/5 border border-period/20 rounded-xl">
                          <h4 className="font-heading font-bold text-foreground mb-1 flex items-center gap-2">
                            {food.name === "Excessive Caffeine" || food.name === "Caffeine" ? (
                              <Coffee className="w-4 h-4 text-period" />
                            ) : food.name === "Sugary Foods" || food.name === "Empty Calories" ? (
                              <Cookie className="w-4 h-4 text-period" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-period" />
                            )}
                            {food.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{food.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Simple Meal Ideas */}
        <section className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Simple Meal Ideas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-fertile/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🍳</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Breakfast</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Oatmeal with bananas and groundnuts</li>
                  <li>• Eggs with spinach and whole wheat toast</li>
                  <li>• Millet porridge with milk and fruit</li>
                  <li>• Sweet potato with beans</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-period/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🍲</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Lunch</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Vegetable soup with fish</li>
                  <li>• Rice with sukuma wiki and beans</li>
                  <li>• Lentil stew with ugali</li>
                  <li>• Chicken with mixed vegetables</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-safe/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">Dinner & Snacks</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Light soup with bread</li>
                  <li>• Grilled fish with vegetables</li>
                  <li>• Fresh fruit with yogurt</li>
                  <li>• Roasted groundnuts or seeds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Hydration Reminder */}
        <section className="mt-12 max-w-3xl mx-auto">
          <Card className="shadow-card border-border/50 bg-gradient-sage overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                  <Fish className="w-8 h-8 text-fertile" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-accent-foreground text-lg mb-2">
                    Stay Hydrated!
                  </h3>
                  <p className="text-accent-foreground/80">
                    Water is essential throughout your cycle. Aim for 8-10 glasses daily. Herbal teas (chamomile, ginger, peppermint) can also help with cramps and bloating. Avoid excessive caffeine and alcohol, especially before and during your period.
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

export default Nutrition;
