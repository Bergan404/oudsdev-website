import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Globe, Server, Star, Users, Zap } from "lucide-react"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                            O
                        </div>
                        <span className="text-xl font-bold text-foreground">OUDS</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                            About
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </a>
                    </nav>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
                <div className="container relative px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent-foreground border-accent/20">
                            Professional Development Services
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                            Build Your Vision with <span className="text-primary">OUDS</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                            Custom applications and professional web services built from the ground up. Transform your ideas into
                            powerful, scalable solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Start Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                                View Our Work
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-muted/30">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive development solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-card-foreground">Custom Applications</CardTitle>
                                <CardDescription>
                                    Tailored software solutions built to your exact specifications and requirements
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Web Applications</li>
                                    <li>• Mobile Apps</li>
                                    <li>• Desktop Software</li>
                                    <li>• API Development</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-secondary" />
                                </div>
                                <CardTitle className="text-card-foreground">Professional Websites</CardTitle>
                                <CardDescription>
                                    Modern, responsive websites that represent your brand and drive results
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Custom Design</li>
                                    <li>• E-commerce Solutions</li>
                                    <li>• CMS Integration</li>
                                    <li>• SEO Optimization</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                                    <Server className="h-6 w-6 text-accent" />
                                </div>
                                <CardTitle className="text-card-foreground">Hosting & Support</CardTitle>
                                <CardDescription>
                                    Reliable hosting solutions with ongoing maintenance and technical support
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Cloud Hosting</li>
                                    <li>• Performance Monitoring</li>
                                    <li>• Security Updates</li>
                                    <li>• 24/7 Support</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose OUDS Section */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose OUDS?</h2>
                            <p className="text-lg text-muted-foreground">
                                We combine technical expertise with a commitment to excellence
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Zap className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Built from Scratch</h3>
                                        <p className="text-muted-foreground">
                                            Every project is custom-built to your specifications, ensuring optimal performance and unique
                                            functionality.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users className="h-4 w-4 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Personal Attention</h3>
                                        <p className="text-muted-foreground">
                                            Direct communication with experienced developers who understand your vision and business goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Star className="h-4 w-4 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Quality Focused</h3>
                                        <p className="text-muted-foreground">
                                            We prioritize clean code, security, and performance to deliver solutions that stand the test of
                                            time.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-muted-foreground mb-6">Custom Built Solutions</div>
                                    <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                                    <div className="text-muted-foreground mb-6">Support Available</div>
                                    <div className="text-2xl font-bold text-accent mb-2">∞</div>
                                    <div className="text-muted-foreground">Possibilities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Build Something Amazing?</h2>
                        <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
                            Let's discuss your project and turn your ideas into reality. Get a free consultation and project estimate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                            >
                                Get Free Quote
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                            >
                                Schedule Call
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-sidebar border-t border-sidebar-border">
                <div className="container px-4 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold">
                                    O
                                </div>
                                <span className="text-xl font-bold text-sidebar-foreground">OUDS</span>
                            </div>
                            <p className="text-sidebar-foreground/70 mb-4 max-w-md">
                                Oudshoorn Development - Building custom applications and professional web services that drive your
                                business forward.
                            </p>
                            <div className="text-sm text-sidebar-foreground/60">© 2024 OUDS. All rights reserved.</div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-sidebar-foreground mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                                <li>
                                    <a href="#" className="hover:text-sidebar-primary transition-colors">
                                        Custom Applications
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sidebar-primary transition-colors">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sidebar-primary transition-colors">
                                        Hosting Solutions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sidebar-primary transition-colors">
                                        Technical Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-sidebar-foreground mb-4">Contact</h3>
                            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
                                <li>hello@ouds.dev</li>
                                <li>+1 (555) 123-4567</li>
                                <li>Schedule a consultation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
