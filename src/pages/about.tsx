const About = () => {
  return (
    <div className="scroll-fade mb-3 overflow-hidden text-white">
      <div className="mr-1 h-full overflow-y-scroll pb-5 pr-1">
        <h2 className="text-lg font-bold">About Me</h2>
        <p className="text-xs">
          {`Hi, my name is savan, and I'm a 16-year-old web developer and embedded
        programmer from a small village in Gujarat, India. I'm currently
        studying Information and Communication Technology Engineering at Marwadi
        University and have always been passionate about technology.`}
        </p>
        <h2 className="mt-3 text-lg font-bold">Passion and Dedication</h2>
        <p className="text-xs">{`I have been exploring web and app development, along with embedded programming, and expanding my skillset to create impactful solutions. I take pride in my ability to create practical applications that can make a real difference in people's lives.`}</p>
        <h2 className="mt-3 text-lg font-bold">Overcoming Challenges</h2>
        <p className="text-xs">{`As a student living in a small village in rural India, I have faced some challenges, but my passion for technology has kept me motivated. I am always eager to learn and explore new areas of technology.`}</p>
        <h2 className="mt-3 text-lg font-bold">Future Ambitions</h2>
        <p className="text-xs">{`My goal is to continue to learn and grow as a developer and programmer. I am excited about the potential of technology to transform society and want to be a part of that change. I hope to create innovative solutions that can make a positive impact on people's lives, while also pursuing a successful career in the tech industry.`}</p>
      </div>
    </div>
  )
}

export default About
