import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold leading-none">
        Hi, I am savan
        <br />
        <span className="text-2xl">
          <Typewriter
            words={[
              "Web Developer",
              "Full Stack Developer",
              "Embedded Developer",
              "ICT Student",
            ]}
            cursor
            loop
          />
        </span>
      </h1>
      <p className="mr-5 mt-3">
        {`I'm a student and open source developer who creates practical projects
        with a minimalist and simple approach. I'm passionate about making a
        difference and collaborating with others to innovate.`}
      </p>
    </div>
  )
}

export default Home
