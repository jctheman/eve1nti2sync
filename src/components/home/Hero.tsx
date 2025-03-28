
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24">
          <div className="flex flex-col justify-center space-y-8 animate-fade-up">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform Your <span className="gradient-text">Events</span> with AI-Powered Management
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
                Streamline planning, boost engagement, and deliver exceptional experiences with our comprehensive AI event management platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <p>Trusted by 500+ event organizers worldwide</p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-purple rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="bg-white p-1">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 h-[350px] flex items-center justify-center">
                    <div className="bg-gray-900 rounded-xl overflow-hidden w-full h-full p-4">
                      {/* AI Dashboard Display */}
                      <div className="h-8 flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-brand-purple mr-2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">Event Analytics</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                          <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                        </div>
                      </div>
                      
                      {/* Dashboard Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="text-xs text-gray-400">Attendees</div>
                          <div className="text-lg text-white font-bold">1,248</div>
                          <div className="text-xs text-green-400">+12.4%</div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="text-xs text-gray-400">Engagement</div>
                          <div className="text-lg text-white font-bold">87%</div>
                          <div className="text-xs text-green-400">+5.2%</div>
                        </div>
                      </div>
                      
                      {/* Graph */}
                      <div className="relative bg-gray-800 rounded-lg p-3 mb-4 h-24">
                        <div className="text-xs text-gray-400 mb-2">Session Popularity</div>
                        <div className="flex items-end justify-between h-12 px-2">
                          <div className="w-1 bg-brand-purple rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-1 bg-brand-purple rounded-t" style={{ height: '65%' }}></div>
                          <div className="w-1 bg-brand-purple rounded-t" style={{ height: '45%' }}></div>
                          <div className="w-1 bg-brand-blue rounded-t" style={{ height: '80%' }}></div>
                          <div className="w-1 bg-brand-blue rounded-t" style={{ height: '70%' }}></div>
                          <div className="w-1 bg-brand-blue rounded-t" style={{ height: '90%' }}></div>
                          <div className="w-1 bg-brand-purple rounded-t" style={{ height: '60%' }}></div>
                        </div>
                      </div>
                      
                      {/* AI Suggestions */}
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 rounded-full bg-brand-blue mr-2 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-white text-xs font-medium">AI Suggestions</span>
                        </div>
                        <div className="text-xs text-gray-300">Consider adding a networking session on Day 2 based on attendee interests.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
