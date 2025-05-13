import React from "react";
import YofaSlider from "./YofaSlider";
import "../../styles.css";

export default function Page() {
  return (
    <main className="space-y-14">
      <div className="mx-auto max-w-7xl px-3">
        <YofaSlider />
      </div>

      <div className="mx-auto max-w-7xl space-y-5 px-3">
        <div className="space-y-4">
          <h2 className="text-brown-600 text-3xl font-semibold">
            YOGA THERAPY FOR AUTISM
          </h2>
          <p className="text-base text-gray-700">
            Autism is a disorder of neural development characterised by impaired
            social interaction and verbal and non-verbal communication, and by
            restricted, repetitive or stereotyped behaviour. Symptoms gradually
            begin after the age of six months, become established by age two or
            three and tend to continue through adulthood. If detected early,
            there may be ways to help autistic individuals to face life in
            adulthood.
          </p>
          <blockquote className="text-gray-600 italic">
            “Yoga is the only Self Development System which works to shape up
            the individual itself.” Yoga therefore aids to improve and
            understand oneself through the journey ahead.
          </blockquote>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-4">
          <h3 className="text-brown-600 text-2xl font-semibold">
            YOGA THERAPY
          </h3>
          <p className="text-base text-gray-700">
            With autism, the action of the mind is often disintegrated with the
            action of the body. Yoga therapy for autism focuses on overall
            individual development of the child to improve strength, flexibility
            and breathing. A practice of asana and pranayama integrates the body
            and mind, enhancing connections. The practice helps the child feel
            calmer and become more comfortable with the body, reducing pain and
            anxiety. It aids better control of the behavior, learning new skills
            and enjoyment of social interactions.
          </p>
          <p className="text-base text-gray-700">
            Children tend to prefer movements and activities. Surya Namaskar
            (Sun Salutation) is dynamic and generates benefit. Inverted postures
            let the body rest and rejuvenate. Forward bending is soothing for
            the entire nervous system and calms the mind. Twisting and backward
            bending poses improve flexibility and vitality. Pranayama regulates
            the breath, improving breath thereby controlling emotions and state
            of mind.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-4">
          <h4 className="text-brown-600 text-xl font-semibold">
            Autism Treatment
          </h4>
          <p className="text-base text-gray-700">
            Autism cannot be prevented but there is a solution to cope with it
            and move ahead. If there are symptoms of autism in the child, seek
            professional help for treatment. Many have overcome autism with the
            right treatments.
          </p>
          <p className="text-base text-gray-700">
            Yoga therapy is a natural treatment which regulates anxiety and
            emotions. By taking yoga classes, practitioners share the experience
            and become part of a community, making new friends. As indicated,
            yoga is a self-development system. It is a lifelong journey,
            unifying the sense of perception with the sense of action.
          </p>
        </div>
      </div>
    </main>
  );
}
