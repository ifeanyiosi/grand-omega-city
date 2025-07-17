/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Mail, Clock, ArrowRight, Loader2, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/validations/contact";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);
    try {
      const response = await addDoc(collection(db, "omega-contact"), {
        ...values,
        createdAt: new Date(),
      });
      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        transition: Bounce,
        theme: "light",
      });
      console.log("Submission successful:", response.id);
      form.reset();
    } catch (error) {
      console.log(error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#E98442]" />,
      title: "Phone",
      details: ["+234 815 374 5870"],
      description: "Available Monday to Friday",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#E98442]" />,
      title: "Email",
      details: ["info@grandomegacity.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#E98442]" />,
      title: "Office Location",
      details: ["86 Nza Street", "Independence Layout, Enugu"],
      description: "Visit us for a consultation",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E98442]" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekends: By Appointment"],
      description: "We're here when you need us",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#1D6FB8] lg:pt-[120px]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Have questions about Grand Omega City? Our expert team in Enugu is
              here to help you find the perfect investment opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#E98442]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D6FB8] mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-800 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#1D6FB8] mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Ready to invest in your future? Fill out the form below
                      and our team at Grand Omega City will get back to you
                      within 24 hours with personalized investment solutions.
                    </p>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstName"
                            className="text-gray-700 font-medium"
                          >
                            First Name *
                          </Label>
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter your first name"
                                    className="border-gray-300 focus:border-[#1D6FB8] focus:ring-[#1D6FB8]/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastName"
                            className="text-gray-700 font-medium"
                          >
                            Last Name *
                          </Label>
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter your last name"
                                    className="border-gray-300 focus:border-[#1D6FB8] focus:ring-[#1D6FB8]/20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-gray-700 font-medium"
                        >
                          Email Address *
                        </Label>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="Enter your email address"
                                  className="border-gray-300 focus:border-[#1D6FB8] focus:ring-[#1D6FB8]/20"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 font-medium"
                        >
                          Message *
                        </Label>
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your investment goals or any questions you have..."
                                  {...field}
                                  rows={5}
                                  className="border-gray-300 focus:border-[#1D6FB8] focus:ring-[#1D6FB8]/20"
                                />
                              </FormControl>
                              <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#E98442] hover:bg-[#E98442]/90 text-white font-semibold py-3 h-auto group flex items-center justify-center transition-all duration-200"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Quick Contact */}
            <div className="space-y-8">
              <Card className="overflow-hidden shadow-lg border-0">
                <div className="h-full bg-gray-200 relative">
                  <img
                    src="/images/contact.jpg"
                    alt="Grand Omega City Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1D6FB8]/20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#1D6FB8]">
                    Visit Our Office
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Experience Grand Omega City firsthand. Visit us at 86 Nza
                    Street, Independence Layout, Enugu. Let us show you why
                    we're the premier choice for real estate investment.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#1D6FB8] text-[#1D6FB8] hover:bg-[#1D6FB8] hover:text-white"
                  >
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1D6FB8] text-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-6 text-blue-100 leading-relaxed">
                    For urgent inquiries or immediate support, don't hesitate to
                    call us directly.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+2348153745870"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 text-[#E98442]" />
                      <span className="font-medium">+234 815 374 5870</span>
                    </a>
                    <a
                      href="mailto:info@grandomegacity.com"
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5 text-[#E98442]" />
                      <span className="font-medium">
                        info@grandomegacity.com
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
