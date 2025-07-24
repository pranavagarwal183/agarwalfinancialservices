import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Target, TrendingUp, Clock } from 'lucide-react';

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(50000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [inflationRate, setInflationRate] = useState<number>(6);
  const [result, setResult] = useState<any>(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const retirementYears = 25; // Assuming 25 years post retirement
    
    // Calculate future monthly expenses adjusted for inflation
    const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + (inflationRate / 100), yearsToRetirement);
    
    // Calculate total corpus needed at retirement
    // Using present value of annuity formula for post-retirement expenses
    const realReturnRate = ((1 + expectedReturn / 100) / (1 + inflationRate / 100) - 1);
    const corpusNeeded = futureMonthlyExpenses * 12 * 
      ((1 - Math.pow(1 + realReturnRate, -retirementYears)) / realReturnRate);
    
    // Calculate monthly SIP needed to achieve this corpus
    const monthlyRate = expectedReturn / 100 / 12;
    const months = yearsToRetirement * 12;
    const monthlySIPNeeded = corpusNeeded / 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

    setResult({
      yearsToRetirement,
      futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
      corpusNeeded: Math.round(corpusNeeded),
      monthlySIPNeeded: Math.round(monthlySIPNeeded),
      totalInvestment: Math.round(monthlySIPNeeded * months)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatCrores = (amount: number) => {
    const crores = amount / 10000000;
    return `₹${crores.toFixed(2)} Cr`;
  };

  return (
    <div className="space-y-6">
      {/* Input Fields */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="current-age">Current Age</Label>
          <Input
            id="current-age"
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            placeholder="Enter current age"
            className="focus-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="retirement-age">Retirement Age</Label>
          <Input
            id="retirement-age"
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            placeholder="Enter retirement age"
            className="focus-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly-expenses">Current Monthly Expenses</Label>
          <Input
            id="monthly-expenses"
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            placeholder="Enter monthly expenses"
            className="focus-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expected-return">Expected Annual Return (%)</Label>
          <Input
            id="expected-return"
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            placeholder="Enter expected return"
            className="focus-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inflation-rate">Expected Inflation Rate (%)</Label>
          <Input
            id="inflation-rate"
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(Number(e.target.value))}
            placeholder="Enter inflation rate"
            className="focus-ring"
          />
        </div>

        <div className="flex items-end">
          <Button 
            onClick={calculateRetirement} 
            className="btn-primary w-full focus-ring"
            size="lg"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate
          </Button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-xl font-semibold mb-4">Retirement Planning Results</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">
                  {result.yearsToRetirement}
                </div>
                <div className="text-sm text-muted-foreground">Years to Retirement</div>
              </CardContent>
            </Card>

            <Card className="bg-warning/10 border-warning/30">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-warning mx-auto mb-2" />
                <div className="text-lg font-bold text-warning">
                  {formatCurrency(result.futureMonthlyExpenses)}
                </div>
                <div className="text-sm text-muted-foreground">Future Monthly Expenses</div>
              </CardContent>
            </Card>

            <Card className="bg-gold/10 border-gold/30">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-lg font-bold text-gold">
                  {formatCrores(result.corpusNeeded)}
                </div>
                <div className="text-sm text-muted-foreground">Corpus Needed</div>
              </CardContent>
            </Card>

            <Card className="bg-success/5 border-success/20">
              <CardContent className="p-4 text-center">
                <Calculator className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-lg font-bold text-success">
                  {formatCurrency(result.monthlySIPNeeded)}
                </div>
                <div className="text-sm text-muted-foreground">Monthly SIP Required</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4">Retirement Plan Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Years to retirement:</span>
                  <span className="font-semibold">{result.yearsToRetirement} years</span>
                </div>
                <div className="flex justify-between">
                  <span>Total investment needed:</span>
                  <span className="font-semibold">{formatCrores(result.totalInvestment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected retirement corpus:</span>
                  <span className="font-semibold">{formatCrores(result.corpusNeeded)}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-muted-foreground">
                    <strong>Recommendation:</strong> Start investing {formatCurrency(result.monthlySIPNeeded)} 
                    monthly in equity mutual funds to build a retirement corpus of{' '}
                    {formatCrores(result.corpusNeeded)} by age {retirementAge}.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}