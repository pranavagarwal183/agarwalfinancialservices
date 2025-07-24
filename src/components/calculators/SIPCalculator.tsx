import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, TrendingUp, PiggyBank } from 'lucide-react';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);
  const [result, setResult] = useState<any>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = timePeriod * 12;
    
    // SIP formula: M × [{(1 + i)^n - 1} / i] × (1 + i)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * months;
    const totalReturns = futureValue - totalInvestment;

    setResult({
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Input Fields */}
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="monthly-investment">Monthly Investment Amount</Label>
          <Input
            id="monthly-investment"
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            placeholder="Enter monthly investment"
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
          <Label htmlFor="time-period">Investment Period (Years)</Label>
          <Input
            id="time-period"
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            placeholder="Enter time period"
            className="focus-ring"
          />
        </div>

        <Button 
          onClick={calculateSIP} 
          className="btn-primary w-full focus-ring"
          size="lg"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Calculate SIP Returns
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">SIP Calculation Results</h3>
          
          <div className="grid gap-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Total Investment</span>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(result.totalInvestment)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-success/5 border-success/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <span className="text-sm font-medium">Total Returns</span>
                  </div>
                  <span className="text-lg font-bold text-success">
                    {formatCurrency(result.totalReturns)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gold/10 border-gold/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium">Future Value</span>
                  </div>
                  <span className="text-xl font-bold text-gold">
                    {formatCurrency(result.futureValue)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>Investment Summary:</strong>
            </p>
            <p>
              By investing {formatCurrency(monthlyInvestment)} monthly for {timePeriod} years 
              at an expected return of {expectedReturn}% per annum, your investment will grow to{' '}
              {formatCurrency(result.futureValue)}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}