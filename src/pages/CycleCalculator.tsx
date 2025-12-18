import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, ChevronLeft, ChevronRight, Info, Droplets, Heart, Sparkles, Shield } from "lucide-react";
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval, getDay } from "date-fns";

const CycleCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState<string>("");
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodDuration, setPeriodDuration] = useState<number>(5);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showResults, setShowResults] = useState(false);

  const calculations = useMemo(() => {
    if (!lastPeriodDate) return null;

    const lastPeriod = new Date(lastPeriodDate);
    const nextPeriodStart = addDays(lastPeriod, cycleLength);
    const nextPeriodEnd = addDays(nextPeriodStart, periodDuration - 1);
    const ovulationDay = addDays(nextPeriodStart, -14);
    const fertileStart = addDays(ovulationDay, -5);
    const fertileEnd = addDays(ovulationDay, 1);

    // Calculate multiple future periods
    const futurePeriods = [];
    for (let i = 0; i < 6; i++) {
      const periodStart = addDays(lastPeriod, cycleLength * (i + 1));
      const periodEnd = addDays(periodStart, periodDuration - 1);
      futurePeriods.push({ start: periodStart, end: periodEnd });
    }

    return {
      nextPeriodStart,
      nextPeriodEnd,
      ovulationDay,
      fertileStart,
      fertileEnd,
      futurePeriods,
      lastPeriod,
    };
  }, [lastPeriodDate, cycleLength, periodDuration]);

  const handleCalculate = () => {
    if (lastPeriodDate) {
      setShowResults(true);
    }
  };

  const getDayStatus = (date: Date) => {
    if (!calculations) return null;

    // Check current period (around last period)
    const currentPeriodEnd = addDays(calculations.lastPeriod, periodDuration - 1);
    if (isWithinInterval(date, { start: calculations.lastPeriod, end: currentPeriodEnd })) {
      return "period";
    }

    // Check future periods
    for (const period of calculations.futurePeriods) {
      if (isWithinInterval(date, { start: period.start, end: period.end })) {
        return "period";
      }
    }

    // Check fertile window
    if (isWithinInterval(date, { start: calculations.fertileStart, end: calculations.fertileEnd })) {
      return "fertile";
    }

    // Check ovulation
    if (isSameDay(date, calculations.ovulationDay)) {
      return "ovulation";
    }

    return "safe";
  };

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    // Pad start of month
    const startPadding = getDay(monthStart);
    const paddedDays = [...Array(startPadding).fill(null), ...days];
    
    return paddedDays;
  }, [currentMonth]);

  const legend = [
    { color: "bg-period", label: "Period Days", icon: Droplets },
    { color: "bg-fertile", label: "Fertile Window", icon: Heart },
    { color: "bg-ovulation", label: "Ovulation Day", icon: Sparkles },
    { color: "bg-safe", label: "Safe Days", icon: Shield },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            <span>Period Calculator</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Track Your Menstrual Cycle
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your details to predict your next period, fertile window, and ovulation day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="lastPeriod" className="text-foreground font-medium">
                  First Day of Last Period
                </Label>
                <Input
                  type="date"
                  id="lastPeriod"
                  value={lastPeriodDate}
                  onChange={(e) => setLastPeriodDate(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cycleLength" className="text-foreground font-medium">
                  Average Cycle Length (days)
                </Label>
                <Input
                  type="number"
                  id="cycleLength"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(parseInt(e.target.value) || 28)}
                  min={21}
                  max={35}
                  className="h-12"
                />
                <p className="text-sm text-muted-foreground">
                  Typically 21-35 days. Default is 28 days.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="periodDuration" className="text-foreground font-medium">
                  Period Duration (days)
                </Label>
                <Input
                  type="number"
                  id="periodDuration"
                  value={periodDuration}
                  onChange={(e) => setPeriodDuration(parseInt(e.target.value) || 5)}
                  min={2}
                  max={10}
                  className="h-12"
                />
                <p className="text-sm text-muted-foreground">
                  Typically 3-7 days. Default is 5 days.
                </p>
              </div>

              <Button onClick={handleCalculate} className="w-full" variant="hero" size="lg">
                <Calendar className="w-5 h-5" />
                Calculate My Cycle
              </Button>

              {/* Legend */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Calendar Legend</p>
                <div className="grid grid-cols-2 gap-3">
                  {legend.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded ${item.color}`} />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calendar View */}
          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading text-xl">Calendar View</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="font-medium min-w-[140px] text-center">
                  {format(currentMonth, "MMMM yyyy")}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="aspect-square" />;
                  }

                  const status = showResults ? getDayStatus(day) : null;
                  const isToday = isSameDay(day, new Date());
                  const inCurrentMonth = isSameMonth(day, currentMonth);

                  return (
                    <div
                      key={day.toISOString()}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-sm relative
                        transition-all duration-200
                        ${!inCurrentMonth ? "opacity-30" : ""}
                        ${isToday ? "ring-2 ring-primary ring-offset-2" : ""}
                        ${status === "period" ? "bg-period text-primary-foreground font-medium" : ""}
                        ${status === "fertile" ? "bg-fertile text-accent-foreground font-medium" : ""}
                        ${status === "ovulation" ? "bg-ovulation text-primary-foreground font-medium" : ""}
                        ${status === "safe" ? "bg-safe/30 text-foreground" : ""}
                        ${!status && inCurrentMonth ? "hover:bg-secondary" : ""}
                      `}
                    >
                      {format(day, "d")}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {showResults && calculations && (
          <div className="mt-12 max-w-4xl mx-auto animate-slide-up">
            <Card className="shadow-card border-border/50 overflow-hidden">
              <CardHeader className="bg-gradient-warm">
                <CardTitle className="font-heading text-xl text-primary-foreground">
                  Your Cycle Predictions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-period/10 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-period flex items-center justify-center flex-shrink-0">
                        <Droplets className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">Next Period</h3>
                        <p className="text-lg font-medium text-period">
                          {format(calculations.nextPeriodStart, "MMMM d, yyyy")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Expected to end {format(calculations.nextPeriodEnd, "MMMM d")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-fertile/10 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-fertile flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">Fertile Window</h3>
                        <p className="text-lg font-medium text-fertile">
                          {format(calculations.fertileStart, "MMM d")} - {format(calculations.fertileEnd, "MMM d")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Higher chance of conception during this period
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-ovulation/10 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-ovulation flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">Ovulation Day</h3>
                        <p className="text-lg font-medium text-ovulation">
                          {format(calculations.ovulationDay, "MMMM d, yyyy")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Most fertile day of your cycle
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-safe/10 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-safe flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">Safe Days</h3>
                        <p className="text-sm text-muted-foreground">
                          Days outside your fertile window have lower chance of conception. However, no day is 100% "safe" - always consult a healthcare provider for contraception advice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-muted rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Important:</strong> This calculator provides estimates based on average cycle data. Actual cycles may vary. This tool is not a substitute for professional medical advice or a reliable method of contraception. Please consult a healthcare provider for personalized guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CycleCalculator;
