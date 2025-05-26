/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Mail, Clock, ArrowRight, Loader2, Phone } from "lucide-react";
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
        createdAt: new Date(), // Optionally add a timestamp
      });
      toast.success("Success!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        transition: Bounce,
        theme: "dark",
      });
      console.log("Submission successful:", response.id); // Log the document ID
      form.reset(); // Reset the form after successful submission
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log(error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 lg:pt-[100px]">
        <div className="absolute inset-0">
          <img
            src="/contact.jpg"
            alt="services Hero"
            className="object-cover w-full lg:h-[500px] h-full mix-blend-overlay"
          />
        </div>
        <div className="container relative px-4 mx-auto mt-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#D4AF37]">
              Get in touch with our expert team for personalized investment
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-6 md:p-8 bg-[#2E8B57]/10 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 text-[#2E8B57]">
                    Send Us a Message
                  </h2>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter your first name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter your last name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Enter your email address"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message</Label>
                        <FormField
                          control={form.control}
                          name="content"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea placeholder="Message" {...field} />
                              </FormControl>
                              <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-[#b8942c] text-white group flex items-center justify-center"
                        disabled={loading} // Disable button when loading
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" /> // Spinner when loading
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Location */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img
                    src="/contact.jpg"
                    alt="Office Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#2E8B57]">
                    Visit Our Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#D4AF37] mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">08153745870</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#D4AF37]" />
                      <p className="text-gray-600">casaevelynltd@gmail.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#D4AF37] mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
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
