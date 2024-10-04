import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 lg:flex gap-10 justify-around sm:px-40 px-10 py-20">
        <div className="left">
          <h1 className="text-4xl text-[#38356F] mb-5">Director's Quote</h1>
          <img
            src={assets.raghav}
            className="w-[30rem] h-[50vh] object-cover rounded-md"
            alt=""
          />
          <h1 className="text-3xl  text-[#38356F] my-5">Dr. Raghava Prakash</h1>
          <p className="text-xl text-[#38356F]">
            (Director:- Parishkar Group of Colleges )
          </p>
        </div>
        <div className="right lg:w-1/2 mt-20">
          <p className="text-xl">
            Dr. Raghava Prakash is the Chairperson of Vidya Vihar Society which
            runs Parishkar Group Of Colleges. He is the Director of Parishkar
            College of Global Excellence (Autonomous), Parishkar International
            College, Parishkar Institue of Education and Parishkar Coaching
            Institute. He is a well-known name in the field of Hindi Grammar and
            Literature with Ph.D. in Hindi and Gold Medalist in M.A. He has
            mentored thousands of students for competition exams like: IAS, RAS,
            PSI, NET and teachers. Along with managing, teaching and coaching,
            he is also a prolific writer.
          </p>
          <p className="text-xl mt-3">
            He is keenly involved in lot of research from last 51 years in
            Teaching Pedagogy.He also has to his credit more than 25 books on
            literary criticism, hindi grammar, drama and interview techniques.
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-zinc-900 sm:px-40 px-10">
        <h1 className="text-5xl text-center font-[Times] text-[#38356F]">
          WHY CHOOSE PARISHKAR
        </h1>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar College of Global Excellence was awarded the status of
          Autonomous in June 2022 directly by University Grant Commission (UGC).
          This made us the First College in Rajasthan to receive such a status
          directly by UGC. Parishkar College of Global Excellence was also
          assessed ‘A’ Grade by NAAC (National Assessment & Accreditation
          Council— UGC, Govt. of India). We hold the highest score among 2440
          private colleges of Rajasthan. Parishkar College of Global Excellence
          (Autonomous) maintain high academic standards and produce quality
          research outputs. We collaborate with industry and renowned Indian and
          international academic institutions to develop innovative teaching and
          learning methods. The main advantage of the autonomous system is that
          it allows institute to be more responsive to the needs of their
          students and the industry. It also fosters a culture of innovation,
          where faculty and staff are empowered to experiment with new teaching
          and research methodologies, and to continuously improve their
          programs.
        </p>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar has earned a special place in the hearts of young career
          aspirants for generating maxmimum job placements in Govt. Jobs,
          Corporates Jobs, Industry & Trade and also being instrumental in
          various Start-Ups. This results in making parishkar the Best College
          in Jaipur,in all the academic fields
        </p>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar Group Of Colleges has its flagship brand in the form of
          Parishkar College of Global Excellence (PCGE), which is Hindi medium
          College in Jaipur, Rajasthan, India, known for its free preparations
          for IAS, RAS, NDA, IBPS, Rly, Police Sub-Inspector etc. for all the
          three years with daily free additional classes along with regular BCA,
          BSc., BA, B.Com., BBA, MA, MSc., M.Com., BA(Hons), BCom.(Hons),
          Bsc.(Hons), BA+BEd., BSc.+BEd. Courses. PCGE is ranked the best
          college for BA, best college for BSc, best college for B.Com. best
          college for BCA and best college for MA & best college for M.Com.
        </p>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar is the best college in Jaipur for degree course like BCA,
          BSc., BA, B.Com., BBA, MA, MSc., M.Com., BA(Hons), BCom.(Hons),
          Bsc.(Hons), BA+BEd., BSc.+BEd. Parishkar has always been keen on
          Research in academics. To serve the purpose of research, Parishkar has
          started Ph.D. Programme in various fields like History, Poltical
          Science, Geography, Economics, Hindi, English, Commerce, Chemistry,
          Botony, Zoology and Physics. Parishkar has also started an employable
          Programme like Certificate in Solar Energy and Diploma in Solar
          Energy. Parishkar has a renowned name in the field of Competitive
          Examinations like IAS, RAS, SSC, Bank etc.
        </p>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar is known for its quality education, pedagogical innovations,
          systematic educational process, value based instructions focused on
          enhancing each student's creativity, because of which parishkar has
          developed into the Best College in BCA, BSc., BA, B.Com., BBA, MA,
          MSc., M.Com., BA(Hons), BCom.(Hons), Bsc.(Hons), BA+BEd., BSc.+BEd.
        </p>
        <p className="text-xl mt-10 tracking-wider font-light">
          Parishkar is a fast growing group of co-education institutions,
          catering students from all the 50 districts of Rajasthan and other
          states like: Haryana, UP, MP, Gujarat, Delhi, Assam etc.
        </p>
        <p className="text-xl mt-10 tracking-wider font-light pb-10">
          Parishkar focuses on each student's life skills, research and
          analytical skills, soft skills and especially communication skills,
          grooming her/him in a well sought after thinker and a well appreciated
          global person.
        </p>
      </div>
    </>
  );
}

export default About