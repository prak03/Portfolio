import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  name: string;
  designation: string;
  company: string;
  image: string;
};

// Feedback Card
const FeedbackCard = ({
  index,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Quote " */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      {/* Testimonial */}

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Name */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        {/* User Image */}
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
          </motion.div>
        </div>

        
      </div>
    </SectionWrapper>
  );
};
