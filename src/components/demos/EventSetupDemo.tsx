
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, Check, MessageCircle, BarChart3, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Badge from "./Badge";

const EventSetupDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25);
  
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      setProgress(prev => prev + 25);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setProgress(prev => prev - 25);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <CardTitle className="flex items-center">
          <Calendar className="mr-2" size={24} />
          AI Event Setup Assistant
        </CardTitle>
        {/* Progress bar */}
        <div className="w-full bg-white/20 h-2 rounded-full mt-4">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>Basic Info</span>
          <span>Schedule</span>
          <span>Features</span>
          <span>Summary</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Basic Event Information</h3>
            <div className="space-y-5">
              <div>
                <Label htmlFor="eventName">Event Name</Label>
                <Input 
                  id="eventName" 
                  defaultValue="TechConf Global 2023" 
                  className="mt-1" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="flex mt-1">
                    <Input 
                      id="startDate" 
                      defaultValue="Oct 15, 2023" 
                      className="rounded-r-none" 
                    />
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      <Calendar size={16} />
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <div className="flex mt-1">
                    <Input 
                      id="endDate" 
                      defaultValue="Oct 17, 2023" 
                      className="rounded-r-none" 
                    />
                    <Button variant="outline" className="rounded-l-none border-l-0">
                      <Calendar size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="venue">Venue</Label>
                <Input 
                  id="venue" 
                  defaultValue="San Francisco Convention Center" 
                  className="mt-1" 
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <textarea 
                  id="description" 
                  rows={3}
                  defaultValue="Join us for the premier tech conference of the year featuring industry leaders and innovative workshops."
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </motion.div>
        )}
        
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Schedule Configuration</h3>
            <div className="space-y-5">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                <p className="text-green-700 text-sm flex items-center">
                  <Check size={16} className="mr-2" />
                  AI has analyzed your event and suggested optimal session timings
                </p>
              </div>
              
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Day 1 - Opening Keynote</h4>
                    <p className="text-sm text-gray-500">Oct 15, 9:00 AM - 10:30 AM</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span className="text-sm">90m</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Day 1 - Panel Discussion</h4>
                    <p className="text-sm text-gray-500">Oct 15, 11:00 AM - 12:30 PM</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span className="text-sm">90m</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Day 1 - Workshops (Parallel Tracks)</h4>
                    <p className="text-sm text-gray-500">Oct 15, 2:00 PM - 5:00 PM</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span className="text-sm">180m</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full text-sm mt-2">
                + Add More Sessions
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">AI Features Configuration</h3>
            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageCircle className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Chatbot</h4>
                    <p className="text-sm text-gray-500">Train an AI assistant with your event info</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Lead Scoring</h4>
                    <p className="text-sm text-gray-500">Analyze and prioritize leads for exhibitors</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Content Generation</h4>
                    <p className="text-sm text-gray-500">Create session descriptions and emails</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Data Sources</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="website" defaultChecked />
                    <Label htmlFor="website" className="text-sm">Event Website</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="emails" defaultChecked />
                    <Label htmlFor="emails" className="text-sm">Past Email Templates</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="registration" defaultChecked />
                    <Label htmlFor="registration" className="text-sm">Registration Data</Label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Setup Summary</h3>
            <div className="border rounded-md p-5">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-lg">TechConf Global 2023</h4>
                <Badge className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Ready to Launch</Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Dates & Venue</h5>
                  <p>Oct 15-17, 2023 • San Francisco Convention Center</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Configured AI Features</h5>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MessageCircle size={12} /> Chatbot
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <BarChart3 size={12} /> Lead Scoring
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <FileText size={12} /> Content Generation
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Scheduled Sessions</h5>
                  <p>8 sessions configured across 3 days</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-6">
                <p className="text-green-700 text-sm flex items-center">
                  <Check size={16} className="mr-2" />
                  Your event is ready to launch with AI features fully configured. Expected attendee experience score: 92/100
                </p>
              </div>
            </div>
          </motion.div>
        )}
        
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-700"
            disabled={currentStep === 4}
          >
            {currentStep === 4 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventSetupDemo;
