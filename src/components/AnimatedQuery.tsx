import React, { useState, useEffect } from 'react';

const AnimatedQuery = () => {
  const queries = [
    "Show me restaurants in New York, NY registered this month",
    "Show me cafés in Los Angeles, CA registered this month",
    "Show me coffee shops in Chicago, IL registered this month",
    "Show me ice cream shops in Houston, TX registered this month",
    "Show me bakeries in Phoenix, AZ registered this month",
    "Show me juice bars in Philadelphia, PA registered this month",
    "Show me food trucks in San Antonio, TX registered this month",
    "Show me nail salons in San Diego, CA registered this month",
    "Show me hair salons in Dallas, TX registered this month",
    "Show me barbershops in San Jose, CA registered this month",
    "Show me clothing boutiques in Austin, TX registered this month",
    "Show me shoe stores in Jacksonville, FL registered this month",
    "Show me convenience stores in Columbus, OH registered this month",
    "Show me grocery stores in Indianapolis, IN registered this month",
    "Show me bookstores in Charlotte, NC registered this month",
    "Show me toy stores in Denver, CO registered this month",
    "Show me gift shops in Seattle, WA registered this month",
    "Show me vape shops in Nashville, TN registered this month",
    "Show me fitness studios in Boston, MA registered this month",
    "Show me gyms in Minneapolis, MN registered this month",
    "Show me yoga studios in Raleigh, NC registered this month",
    "Show me spas in Salt Lake City, UT registered this month",
    "Show me massage therapy centers in Kansas City, MO registered this month",
    "Show me daycare centers in Tampa, FL registered this month",
    "Show me preschools in Atlanta, GA registered this month",
    "Show me dance studios in Cincinnati, OH registered this month",
    "Show me martial arts schools in Milwaukee, WI registered this month",
    "Show me driving schools in St. Louis, MO registered this month",
    "Show me pet grooming businesses in Portland, OR registered this month",
    "Show me pet boarding facilities in Pittsburgh, PA registered this month"
  ];

  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentQuery = queries[currentQueryIndex];
    
    if (isTyping) {
      if (displayedText.length < currentQuery.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 30); // Deleting speed
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next query
        setCurrentQueryIndex((prev) => (prev + 1) % queries.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentQueryIndex, queries]);

  return (
    <div className="bg-text-black p-4 rounded-lg font-mono text-sm">
      <p className="text-gray-400 mb-2">Example Query:</p>
      <p className="text-emerald-400 min-h-[4rem] leading-6">
        "{displayedText}"
      </p>
    </div>
  );
};

export default AnimatedQuery;