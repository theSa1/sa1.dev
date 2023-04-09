const Contact = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <form className="mt-3 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-sm bg-white bg-opacity-10 px-3 py-0.5 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full rounded-sm bg-white bg-opacity-10 px-3 py-0.5 focus:outline-none"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full resize-none rounded-sm bg-white bg-opacity-10 px-3 py-0.5 focus:outline-none"
          rows={4}
        />
        <button
          className="w-max rounded-sm bg-white px-3 py-0.5 text-card"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
