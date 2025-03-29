
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Emerson", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Emerson_Electric_logo.svg" },
    { name: "MCI", logo: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { name: "George P. Johnson", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section py-10 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trusted by Event Leaders Worldwide</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto"></div>
        </div>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo, index) => (
            <motion.div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 h-12 flex items-center"
              variants={itemVariants}
            >
              <img 
                src={logo.logo} 
                alt={`${logo.name} logo`} 
                className="h-full object-contain max-w-[120px]" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
