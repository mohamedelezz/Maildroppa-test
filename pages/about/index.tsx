import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-2  pb-20  container mx-auto h-full mt-10  ">
      <section className="flex flex-col justify-center items-start gap-4">
        <h2 className="text-[#343d63] text-5xl  ">Our story</h2>
        <p className="leading-10 text-2xl text-gray-300">
          I bet your ideal founders story didnt include hours chained to your
          computer figuring out complicated email marketing tools. Mine
          certainly didnt. But reality and my dreams werent matching up. So as
          the saying goes, I solved my own frustration and built Maildroppa. An
          easy-to-use, reliable email sender that did exactly what I needed it
          to do: attract subscribers, send emails that actually get delivered,
          and grow engagement. A year later, with 14,000 engaged subscribers in
          the bag and a 99% inbox delivery rate I knew Maildroppa could help
          others build their audience and kick-start their startups.
        </p>
      </section>
    </div>
  );
};

export default About;
