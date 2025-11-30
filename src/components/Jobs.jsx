import React from 'react';
import Button from './Button';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  const jobs = [
    {
      title: "Relationship Manager",
      location: "New York, USA",
      salary: "$80k - $100k",
      about: "As a Relationship Manager, you will be responsible for building and maintaining strong relationships with our high-net-worth clients.",
      reqs: [
        "Bachelor's degree in Finance or related field",
        "3+ years of experience in banking",
        "Strong communication skills"
      ]
    },
    {
      title: "Risk Analyst",
      location: "Remote / Hybrid",
      salary: "$75k - $95k",
      about: "Join our Risk Management team to analyze and mitigate potential financial risks for the bank and our clients.",
      reqs: [
        "Experience with data analysis tools",
        "Strong analytical and problem-solving skills",
        "Attention to detail"
      ]
    },
    {
      title: "IT Security Specialist",
      location: "London, UK",
      salary: "$90k - $120k",
      about: "Protect our digital infrastructure. You will implement security measures to safeguard sensitive data.",
      reqs: [
        "Certification in Cybersecurity (CISSP/CISM)",
        "Experience with network security",
        "Knowledge of banking regulations"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Job <span className="text-primary">Openings</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
            <div key={index} className="bg-darkLight p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-xs text-grey mb-6 uppercase tracking-wider">
                        <span className="bg-[#191919] px-3 py-1 rounded-full border border-white/5">{job.location}</span>
                        <span className="bg-[#191919] px-3 py-1 rounded-full border border-white/5">{job.salary}</span>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-primary">About This Job</h4>
                        <p className="text-grey text-sm leading-relaxed">{job.about}</p>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-semibold mb-2 text-primary">Requirements</h4>
                        <ul className="space-y-2">
                            {job.reqs.map((req, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-grey">
                                    <Briefcase size={14} className="text-primary"/> 
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Button variant="primary" className="w-full md:w-fit">Apply Now</Button>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;