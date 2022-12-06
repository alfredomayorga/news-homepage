function HeroDescription() {
  return (
    <div
      data-cy="hero-description"
      className="my-4"
    >
      <p className="text-body text-gray mb-4">
        We dive into the next evolution of the web that claims to put
        the power of the platforms back into the hands of the people.
        But is it really fulfilling its promise?
      </p>
      <button
        data-cy="read-more-button"
        className="
          bg-red 
          uppercase 
          w-[158px] 
          h-[48px]
          text-white
          text-[14px]
          tracking-widest
        "
      >
        Read More
      </button>
    </div>
  )
}

export default HeroDescription
