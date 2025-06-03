import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col max-w-lg">
          <h2>Get Interview-Ready with AI-powered practice & feedback</h2>
          <p className="text-lg my-4">
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="max-sm:w-full btn-primary">
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-6">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        {/* <p>You haven't taken any interviews yet</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-6">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>There are no interviews available</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;
