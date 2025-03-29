
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, Star, StarHalf, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

type LeadType = {
  id: number;
  name: string;
  company: string;
  position: string;
  image: string;
  score: number; // 1-10
  tags: string[];
  interests: string[];
  lastInteraction: string;
  notes?: string;
};

const leads: LeadType[] = [
  {
    id: 1,
    name: "Alex Thompson",
    company: "InnovateTech Solutions",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    score: 9.2,
    tags: ["VIP", "Decision Maker", "Tech"],
    interests: ["AI Solutions", "Cloud Integration", "Digital Transformation"],
    lastInteraction: "Attended your AI presentation (2 hours ago)",
    notes: "Looking to implement AI solutions within the next quarter"
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    company: "Global Events Inc.",
    position: "Event Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    score: 8.7,
    tags: ["Potential Client", "Event Planner"],
    interests: ["Event Management Software", "Attendee Analytics"],
    lastInteraction: "Downloaded whitepaper (Yesterday)"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Chen Enterprises",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    score: 9.5,
    tags: ["VIP", "Decision Maker", "Returning Client"],
    interests: ["Enterprise Solutions", "Multi-event Management"],
    lastInteraction: "Scheduled meeting (Tomorrow, 2:00 PM)",
    notes: "Expanding event portfolio next year, looking for comprehensive solution"
  },
  {
    id: 4,
    name: "James Wilson",
    company: "Acme Corp",
    position: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    score: 7.3,
    tags: ["Influencer", "Marketing"],
    interests: ["Social Media Integration", "Attendee Engagement"],
    lastInteraction: "Visited booth (1 day ago)"
  },
  {
    id: 5,
    name: "Emily Parker",
    company: "Parker Communications",
    position: "Director of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    score: 8.1,
    tags: ["Decision Maker", "Communications"],
    interests: ["Operational Efficiency", "Staff Management"],
    lastInteraction: "Attended workshop (3 hours ago)"
  }
];

const LeadScoringDemo = () => {
  const [expandedLeads, setExpandedLeads] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLeads, setFilteredLeads] = useState(leads);

  const toggleExpand = (id: number) => {
    setExpandedLeads(prev => 
      prev.includes(id) 
        ? prev.filter(leadId => leadId !== id)
        : [...prev, id]
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === "") {
      setFilteredLeads(leads);
    } else {
      const filtered = leads.filter(lead => 
        lead.name.toLowerCase().includes(term) || 
        lead.company.toLowerCase().includes(term) ||
        lead.tags.some(tag => tag.toLowerCase().includes(term)) ||
        lead.interests.some(interest => interest.toLowerCase().includes(term))
      );
      setFilteredLeads(filtered);
    }
  };

  // Display full stars based on score
  const renderScoreStars = (score: number) => {
    const fullStars = Math.floor(score / 2);
    const hasHalfStar = score % 2 >= 1;
    
    return (
      <div className="flex items-center">
        <span className="text-lg font-semibold mr-2">{score.toFixed(1)}</span>
        <div className="flex">
          {Array(fullStars).fill(0).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 overflow-hidden">
      <CardHeader className="bg-brand-blue text-white p-6">
        <CardTitle className="flex items-center justify-between">
          <span>AI Lead Scoring Dashboard</span>
          <Badge className="bg-white text-brand-blue">DEMO</Badge>
        </CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-white opacity-70" />
          <Input
            placeholder="Search leads by name, company, or interests..."
            className="pl-10 bg-white bg-opacity-20 border-white border-opacity-20 text-white placeholder:text-white placeholder:opacity-70"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </CardHeader>
      <CardContent className="p-0 max-h-[500px] overflow-auto">
        <div className="divide-y divide-gray-100">
          <AnimatePresence>
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <motion.div 
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleExpand(lead.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 border-2 border-gray-200">
                        <AvatarImage src={lead.image} alt={lead.name} />
                        <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{lead.name}</h3>
                        <p className="text-sm text-gray-500">{lead.position} at {lead.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div 
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                          lead.score >= 9 ? 'bg-green-500' : 
                          lead.score >= 7 ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                      >
                        {lead.score.toFixed(1)}
                      </div>
                      {expandedLeads.includes(lead.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {expandedLeads.includes(lead.id) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pl-16 text-sm"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Lead Score</h4>
                          <div className="flex items-center">
                            {renderScoreStars(lead.score)}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {lead.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="bg-gray-100">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700 mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {lead.interests.map((interest, i) => (
                            <Badge key={i} className="bg-brand-purple bg-opacity-10 text-brand-purple">{interest}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700 mb-2">Last Interaction</h4>
                        <p className="text-gray-600">{lead.lastInteraction}</p>
                      </div>
                      
                      {lead.notes && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Notes</h4>
                          <p className="text-gray-600">{lead.notes}</p>
                        </div>
                      )}
                      
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" className="bg-brand-blue">Contact</Button>
                        <Button size="sm" variant="outline">Add to CRM</Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No leads match your search. Try different keywords.
              </div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadScoringDemo;
