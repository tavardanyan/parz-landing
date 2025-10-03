"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background relative overflow-hidden">
      {/* Animated Gradient Blurs - matching hero section */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] opacity-50" style={{ background: '#9B177E', animation: 'morphBlob 15s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] opacity-50" style={{ background: '#E91E8C', animation: 'morphBlob 18s ease-in-out infinite reverse' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[130px] opacity-30" style={{
        background: 'linear-gradient(135deg, #9B177E 0%, #E91E8C 50%, #ff6ec7 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 12s ease infinite'
      }}></div>

      <div className="relative z-10">
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-background/95 backdrop-blur-xl border border-border shadow-2xl",
              headerTitle: "text-foreground text-2xl font-bold",
              headerSubtitle: "text-muted-foreground",
              socialButtonsBlockButton: "border-border bg-secondary/50 hover:bg-secondary text-foreground",
              socialButtonsBlockButtonText: "text-foreground font-medium",
              formButtonPrimary: "bg-gradient-to-r from-[#9B177E] to-[#E91E8C] hover:opacity-90 text-white shadow-lg shadow-[#9B177E]/50",
              formFieldInput: "bg-secondary/50 border-border text-foreground",
              formFieldLabel: "text-foreground",
              footerActionLink: "text-primary hover:text-primary/80",
              identityPreviewEditButton: "text-primary hover:text-primary/80",
              formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
              formFieldAction: "text-primary hover:text-primary/80",
              dividerLine: "bg-border",
              dividerText: "text-muted-foreground",
              footerActionText: "text-muted-foreground"
            }
          }}
        />
      </div>
    </div>
  );
}
