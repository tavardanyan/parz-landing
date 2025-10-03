"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles, FileText, CreditCard, UtensilsCrossed, ShoppingBag, Hotel, Smartphone, Shield, Users, TrendingUp, Layers } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200">{t('nav.products')}</a>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200">{t('nav.features')}</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200">{t('nav.pricing')}</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 duration-200">{t('nav.about')}</a>
              <LanguageToggle />
              <ThemeToggle />
              {isSignedIn ? (
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9"
                    }
                  }}
                />
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform duration-200">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="gradient-purple hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#9B177E]/50">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
        {/* Animated Gradient Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] opacity-50" style={{ background: '#9B177E', animation: 'morphBlob 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] opacity-50" style={{ background: '#E91E8C', animation: 'morphBlob 18s ease-in-out infinite reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[130px] opacity-30" style={{
          background: 'linear-gradient(135deg, #9B177E 0%, #E91E8C 50%, #ff6ec7 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 12s ease infinite'
        }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full blur-[100px] opacity-40" style={{ background: '#C71585', animation: 'floatComplex 25s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full blur-[110px] opacity-35" style={{ background: '#9B177E', animation: 'floatComplex 20s ease-in-out infinite reverse' }}></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm">{t('hero.badge')}</span>
          </div>

          <h1 className="font-bold tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block">{t('hero.title')}</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#9B177E] to-[#E91E8C] bg-clip-text text-transparent block">{t('hero.titleGradient')}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button size="lg" className="text-lg px-8 gradient-purple hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#9B177E]/50 hover:shadow-[#9B177E]/70">
              {t('hero.startTrial')}
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-secondary hover:scale-105 transition-all duration-200">
              {t('hero.viewProducts')}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8 animate-fade-in delay-400">
            {t('hero.noCard')}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {t('products.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                name: t('products.invoicing.name'),
                description: t('products.invoicing.description'),
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: CreditCard,
                name: t('products.pos.name'),
                description: t('products.pos.description'),
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: UtensilsCrossed,
                name: t('products.rest.name'),
                description: t('products.rest.description'),
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: ShoppingBag,
                name: t('products.shop.name'),
                description: t('products.shop.description'),
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: Hotel,
                name: t('products.hotel.name'),
                description: t('products.hotel.description'),
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((product, index) => (
              <Card
                key={index}
                className={`bg-secondary/30 border-border hover:border-primary/50 transition-all hover:bg-secondary/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 duration-300 animate-fade-in-up delay-${index + 2}00`}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {t('products.invoicing.button')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {t('features.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: t('features.simple.title'),
                description: t('features.simple.description')
              },
              {
                icon: Layers,
                title: t('features.multibusiness.title'),
                description: t('features.multibusiness.description')
              },
              {
                icon: Shield,
                title: t('features.secure.title'),
                description: t('features.secure.description')
              },
              {
                icon: Smartphone,
                title: t('features.mobile.title'),
                description: t('features.mobile.description')
              },
              {
                icon: TrendingUp,
                title: t('features.reports.title'),
                description: t('features.reports.description')
              },
              {
                icon: Users,
                title: t('features.collaboration.title'),
                description: t('features.collaboration.description')
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-secondary/30 border-border hover:border-primary/50 transition-all hover:bg-secondary/50 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 duration-300 animate-fade-in-up delay-${index + 2}00`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full gradient-blur" style={{ background: '#9B177E20' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {t('pricing.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up delay-100">
              {t('pricing.subtitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic animate-fade-in-up delay-150">
              {t('pricing.note')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-secondary/30 border-border backdrop-blur-sm hover:border-border/80 transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up delay-200">
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{t('pricing.starter.name')}</CardTitle>
                  <CardDescription>{t('pricing.starter.description')}</CardDescription>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{t('pricing.starter.price')}</span>
                  <span className="text-muted-foreground text-lg">{t('pricing.starter.period')}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  t('pricing.starter.features.users'),
                  t('pricing.starter.features.locations'),
                  t('pricing.starter.features.support'),
                  t('pricing.starter.features.reports'),
                  t('pricing.starter.features.mobile')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6">
                <Button variant="outline" className="w-full border-border hover:bg-secondary">
                  {t('pricing.starter.button')}
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-purple border-primary/50 backdrop-blur-sm relative scale-105 shadow-2xl shadow-[#9B177E]/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 animate-scale-in delay-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-1.5 rounded-full text-sm font-semibold animate-pulse">
                {t('pricing.pro.popular')}
              </div>
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-white">{t('pricing.pro.name')}</CardTitle>
                  <CardDescription className="text-white/80">{t('pricing.pro.description')}</CardDescription>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">{t('pricing.pro.price')}</span>
                  <span className="text-white/80 text-lg">{t('pricing.pro.period')}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  t('pricing.pro.features.users'),
                  t('pricing.pro.features.locations'),
                  t('pricing.pro.features.support'),
                  t('pricing.pro.features.reports'),
                  t('pricing.pro.features.integrations'),
                  t('pricing.pro.features.customization')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full bg-white text-[#9B177E] hover:bg-white/90 font-semibold">
                  {t('pricing.pro.button')}
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-secondary/30 border-border backdrop-blur-sm hover:border-border/80 transition-all hover:scale-105 hover:-translate-y-2 duration-300 animate-fade-in-up delay-400">
              <CardHeader className="space-y-4">
                <div>
                  <CardTitle className="text-2xl mb-2">{t('pricing.enterprise.name')}</CardTitle>
                  <CardDescription>{t('pricing.enterprise.description')}</CardDescription>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{t('pricing.enterprise.price')}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  t('pricing.enterprise.features.users'),
                  t('pricing.enterprise.features.locations'),
                  t('pricing.enterprise.features.support'),
                  t('pricing.enterprise.features.deployment'),
                  t('pricing.enterprise.features.sla'),
                  t('pricing.enterprise.features.training')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6">
                <Button variant="outline" className="w-full border-border hover:bg-secondary">
                  {t('pricing.enterprise.button')}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full gradient-blur" style={{ background: '#9B177E' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full gradient-blur" style={{ background: '#E91E8C' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-200">
            <Button size="lg" className="text-lg px-8 gradient-purple shadow-lg shadow-[#9B177E]/50 hover:shadow-[#9B177E]/70 hover:scale-105 transition-all duration-200">
              {t('cta.startTrial')}
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-secondary hover:scale-105 transition-all duration-200">
              {t('cta.contactSales')}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4 animate-fade-in delay-300">
            {t('cta.footer')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground max-w-xs mb-4">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">{t('footer.products')}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.invoicing')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.pos')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.rest')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.shop')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.hotel')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">{t('footer.company')}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.about')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.blog')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.careers')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.contact')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">{t('footer.resources')}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.documentation')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.helpCenter')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.community')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.links.status')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
