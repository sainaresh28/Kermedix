import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    
    // Mock password reset
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="w-full max-w-md">
          <div className="healthcare-form text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Reset Link Sent
            </h2>
            <p className="text-muted-foreground mb-6">
              If an account with that email exists, we've sent you a password reset link.
            </p>
            <Button asChild className="w-full">
              <Link to="/login">
                Back to Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="healthcare-form">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {t('auth.forgotPassword')}
            </h2>
            <p className="text-muted-foreground mt-2">
              Enter your email address to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground">
                {t('auth.email')}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button type="submit" className="w-full">
                {t('auth.resetPassword')}
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">
                  Back to Login
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;