import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  serviceInterest: z.string().min(1, { message: "Please select a service." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", data);
    // Show success message or redirect
    alert("Thank you for your inquiry. We will contact you shortly.");
    form.reset();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-xl px-8 py-8">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            Request a Consultation
          </CardTitle>
          <CardDescription className="text-white/90 text-lg mt-2">
            Fill out the form below and our experts will contact you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          {...field} 
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+41 56 427 25 15" 
                          {...field} 
                          className="h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Service Interest</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="banking">
                            Banking Services
                          </SelectItem>
                          <SelectItem value="insurance">
                            Insurance Services
                          </SelectItem>
                          <SelectItem value="both">
                            Both Banking & Insurance
                          </SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe what you're looking for..."
                        className="min-h-[150px] text-base resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-6 bg-gray-50">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-base font-medium">
                        I agree to the privacy policy and terms of service
                      </FormLabel>
                      <FormDescription className="text-gray-600">
                        Your data will be processed according to our privacy
                        policy.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="px-0 pt-4">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-7 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <CheckIcon className="mr-2 h-5 w-5" /> Submit Request
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationForm;
