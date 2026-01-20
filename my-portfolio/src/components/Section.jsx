import Skills from "./Skills"
const Section = ({ id, title, children, bg }) => {
  return (
    <section
      id={id}
      className={`
        relative
        ${bg ? bg : "bg-transparent"}
        py-10 sm:py-15
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-4xl font-bold text-center mb-10 underline text-indigo-100">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  )
}

export default Section
